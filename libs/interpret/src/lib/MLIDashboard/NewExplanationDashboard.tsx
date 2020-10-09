// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { localization } from "@responsible-ai/localization";
import { ModelMetadata } from "@responsible-ai/mlchartlib";
import { initializeIcons } from "@uifabric/icons";
import _ from "lodash";
import memoize from "memoize-one";
import {
  IPivotItemProps,
  PivotItem,
  Pivot,
  PivotLinkSize,
  loadTheme,
  MessageBar,
  MessageBarType,
  Text,
  Stack
} from "office-ui-fabric-react";
import React from "react";

import { Cohort } from "./Cohort";
import { CohortBar } from "./Controls/Cohort/CohortBar";
import { DatasetExplorerTab } from "./Controls/DatasetExplorerTab/DatasetExplorerTab";
import {
  GlobalExplanationTab,
  IGlobalBarSettings
} from "./Controls/GlobalExplanationTab/GlobalExplanationTab";
import { ModelPerformanceTab } from "./Controls/ModelPerformanceTab/ModelPerformanceTab";
import { WhatIfTab } from "./Controls/WhatIfTab/WhatIfTab";
import { IExplanationModelMetadata, ModelTypes } from "./IExplanationContext";
import { IGenericChartProps } from "./IGenericChartProps";
import {
  IExplanationDashboardProps,
  IMultiClassLocalFeatureImportance,
  ISingleClassLocalFeatureImportance
} from "./Interfaces/IExplanationDashboardProps";
import { TelemetryLevels } from "./Interfaces/ITelemetryMessage";
import { WeightVectors, WeightVectorOption } from "./IWeightedDropdownContext";
import { JointDataset } from "./JointDataset";
import { explanationDashboardStyles } from "./NewExplanationDashboard.styles";
import { defaultTheme } from "./Themes";
import { ValidateProperties } from "./ValidateProperties";

export interface INewExplanationDashboardState {
  cohorts: Cohort[];
  activeGlobalTab: GlobalTabKeys;
  jointDataset: JointDataset;
  modelMetadata: IExplanationModelMetadata;
  modelChartConfig?: IGenericChartProps;
  dataChartConfig?: IGenericChartProps;
  whatIfChartConfig?: IGenericChartProps;
  globalBarConfig?: IGlobalBarSettings;
  dependenceProps?: IGenericChartProps;
  globalImportanceIntercept: number[];
  globalImportance: number[][];
  isGlobalImportanceDerivedFromLocal: boolean;
  sortVector?: number[];
  validationWarnings: string[];
  showingDataSizeWarning: boolean;
  selectedWeightVector: WeightVectorOption;
  requestPredictions?: (
    request: any[],
    abortSignal: AbortSignal
  ) => Promise<any[]>;
}

// features x classes
interface IGlobalExplanationProps {
  globalImportanceIntercept: number[];
  globalImportance: number[][];
  isGlobalImportanceDerivedFromLocal: boolean;
}

export interface ISelectorConfig {
  property: string;
  index?: number;
  options: {
    dither?: boolean;
    // this is only used in the ambiguous case of numeric values on color axis for scatter chart, when binned or unbinned are valid
    bin?: boolean;
  };
}

enum GlobalTabKeys {
  ModelPerformance = "modelPerformance",
  DataExploration = "dataExploration",
  ExplanationTab = "explanationTab",
  WhatIfTab = "whatIfTab"
}

export class NewExplanationDashboard extends React.PureComponent<
  IExplanationDashboardProps,
  INewExplanationDashboardState
> {
  private static iconsInitialized = false;
  private static ROW_WARNING_SIZE = 6000;

  private static getClassLength: (
    props: IExplanationDashboardProps
  ) => number = memoize((props: IExplanationDashboardProps): number => {
    if (
      props.precomputedExplanations &&
      props.precomputedExplanations.localFeatureImportance &&
      props.precomputedExplanations.localFeatureImportance.scores
    ) {
      const localImportances =
        props.precomputedExplanations.localFeatureImportance.scores;
      if (
        (localImportances as number[][][]).every((dim1) => {
          return dim1.every((dim2) => Array.isArray(dim2));
        })
      ) {
        return localImportances.length;
      }
      // 2d is regression (could be a non-scikit convention binary, but that is not supported)
      return 1;
    }
    if (
      props.precomputedExplanations &&
      props.precomputedExplanations.globalFeatureImportance &&
      props.precomputedExplanations.globalFeatureImportance.scores
    ) {
      // determine if passed in vaules is 1D or 2D
      if (
        (props.precomputedExplanations.globalFeatureImportance
          .scores as number[][]).every((dim1) => Array.isArray(dim1))
      ) {
        return (props.precomputedExplanations.globalFeatureImportance
          .scores as number[][])[0].length;
      }
    }
    if (
      props.probabilityY &&
      Array.isArray(props.probabilityY) &&
      Array.isArray(props.probabilityY[0]) &&
      props.probabilityY[0].length > 0
    ) {
      return props.probabilityY[0].length;
    }
    // default to regression case
    return 1;
  });

  private pivotItems: IPivotItemProps[] = [];
  private weightVectorOptions: WeightVectorOption[] = [];
  private weightVectorLabels = {};
  public constructor(props: IExplanationDashboardProps) {
    super(props);
    NewExplanationDashboard.initializeIcons(props);
    loadTheme(props.theme || defaultTheme);
    if (this.props.locale) {
      localization.setLanguage(this.props.locale);
    }
    this.state = NewExplanationDashboard.buildInitialExplanationContext(
      _.cloneDeep(props)
    );
    this.validatePredictMethod();

    this.weightVectorLabels = {
      [WeightVectors.AbsAvg]: localization.Interpret.absoluteAverage
    };
    if (this.state.modelMetadata.modelType === ModelTypes.Multiclass) {
      this.weightVectorOptions.push(WeightVectors.AbsAvg);
    }
    this.state.modelMetadata.classNames.forEach((name, index) => {
      this.weightVectorLabels[index] = localization.formatString(
        localization.Interpret.WhatIfTab.classLabel,
        name
      );
      this.weightVectorOptions.push(index);
    });

    this.pivotItems.push({
      headerText: localization.Interpret.modelPerformance,
      itemKey: GlobalTabKeys.ModelPerformance
    });
    this.pivotItems.push({
      headerText: localization.Interpret.datasetExplorer,
      itemKey: GlobalTabKeys.DataExploration
    });
    this.pivotItems.push({
      headerText: localization.Interpret.aggregateFeatureImportance,
      itemKey: GlobalTabKeys.ExplanationTab
    });
    this.pivotItems.push({
      headerText: this.props.requestPredictions
        ? localization.Interpret.individualAndWhatIf
        : localization.Interpret.individualImportance,
      itemKey: GlobalTabKeys.WhatIfTab
    });
  }

  public static buildInitialExplanationContext(
    props: IExplanationDashboardProps
  ): INewExplanationDashboardState {
    const modelMetadata = NewExplanationDashboard.buildModelMetadata(props);
    const validationCheck = new ValidateProperties(props, modelMetadata);

    let localExplanations:
      | IMultiClassLocalFeatureImportance
      | ISingleClassLocalFeatureImportance
      | undefined;
    if (
      props &&
      props.precomputedExplanations &&
      props.precomputedExplanations.localFeatureImportance &&
      props.precomputedExplanations.localFeatureImportance.scores
    ) {
      localExplanations = props.precomputedExplanations.localFeatureImportance;
    }
    const jointDataset = new JointDataset({
      dataset: props.testData,
      localExplanations,
      metadata: modelMetadata,
      predictedProbabilities: props.probabilityY,
      predictedY: props.predictedY,
      trueY: props.trueY
    });
    const globalProps = NewExplanationDashboard.buildGlobalProperties(props);
    // consider taking filters in as param arg for programatic users
    const cohorts = [
      new Cohort(localization.Cohort.defaultLabel, jointDataset, [])
    ];
    if (
      validationCheck.errorStrings.length !== 0 &&
      props.telemetryHook !== undefined
    ) {
      props.telemetryHook({
        context: validationCheck.errorStrings.length,
        level: TelemetryLevels.Error,
        message: "Invalid inputs"
      });
    }
    return {
      activeGlobalTab: GlobalTabKeys.ModelPerformance,
      cohorts,
      dataChartConfig: undefined,
      dependenceProps: undefined,
      globalBarConfig: undefined,
      globalImportance: globalProps.globalImportance,
      globalImportanceIntercept: globalProps.globalImportanceIntercept,
      isGlobalImportanceDerivedFromLocal:
        globalProps.isGlobalImportanceDerivedFromLocal,
      jointDataset,
      modelChartConfig: undefined,
      modelMetadata,
      selectedWeightVector:
        modelMetadata.modelType === ModelTypes.Multiclass
          ? WeightVectors.AbsAvg
          : 0,
      showingDataSizeWarning:
        jointDataset.datasetRowCount > NewExplanationDashboard.ROW_WARNING_SIZE,
      sortVector: undefined,
      validationWarnings: validationCheck.errorStrings,
      whatIfChartConfig: undefined
    };
  }
  private static initializeIcons(props: IExplanationDashboardProps): void {
    if (
      NewExplanationDashboard.iconsInitialized === false &&
      props.shouldInitializeIcons !== false
    ) {
      initializeIcons(props.iconUrl);
      NewExplanationDashboard.iconsInitialized = true;
    }
  }

  private static buildModelMetadata(
    props: IExplanationDashboardProps
  ): IExplanationModelMetadata {
    const modelType = NewExplanationDashboard.getModelType(props);
    let featureNames = props.dataSummary.featureNames;
    let featureNamesAbridged: string[];
    const maxLength = 18;
    if (featureNames !== undefined) {
      if (!featureNames.every((name) => typeof name === "string")) {
        featureNames = featureNames.map((x) => x.toString());
      }
      featureNamesAbridged = featureNames.map((name) => {
        return name.length <= maxLength
          ? name
          : `${name.slice(0, maxLength)}...`;
      });
    } else {
      let featureLength = 0;
      if (props.testData && props.testData[0] !== undefined) {
        featureLength = props.testData[0].length;
      } else if (
        props.precomputedExplanations &&
        props.precomputedExplanations.globalFeatureImportance
      ) {
        featureLength =
          props.precomputedExplanations.globalFeatureImportance.scores.length;
      } else if (
        props.precomputedExplanations &&
        props.precomputedExplanations.localFeatureImportance
      ) {
        const localImportances =
          props.precomputedExplanations.localFeatureImportance.scores;
        if (
          (localImportances as number[][][]).every((dim1) => {
            return dim1.every((dim2) => Array.isArray(dim2));
          })
        ) {
          featureLength = (props.precomputedExplanations.localFeatureImportance
            .scores[0][0] as number[]).length;
        } else {
          featureLength = (props.precomputedExplanations.localFeatureImportance
            .scores[0] as number[]).length;
        }
      } else if (
        props.precomputedExplanations &&
        props.precomputedExplanations.ebmGlobalExplanation
      ) {
        featureLength =
          props.precomputedExplanations.ebmGlobalExplanation.feature_list
            .length;
      }
      featureNames = NewExplanationDashboard.buildIndexedNames(
        featureLength,
        localization.Interpret.defaultFeatureNames
      );
      featureNamesAbridged = featureNames;
    }
    let classNames = props.dataSummary.classNames;
    const classLength = NewExplanationDashboard.getClassLength(props);
    if (!classNames || classNames.length !== classLength) {
      classNames = NewExplanationDashboard.buildIndexedNames(
        classLength,
        localization.Interpret.defaultClassNames
      );
    }
    const featureIsCategorical = ModelMetadata.buildIsCategorical(
      featureNames.length,
      props.testData,
      props.dataSummary.categoricalMap
    );
    const featureRanges = ModelMetadata.buildFeatureRanges(
      props.testData,
      featureIsCategorical,
      props.dataSummary.categoricalMap
    );
    return {
      classNames,
      featureIsCategorical,
      featureNames,
      featureNamesAbridged,
      featureRanges,
      modelType
    };
  }

  private static buildIndexedNames(
    length: number,
    baseString: string
  ): string[] {
    return [...new Array(length).keys()].map((i) =>
      localization.formatString(baseString, i.toString())
    );
  }

  private static getModelType(props: IExplanationDashboardProps): ModelTypes {
    // If python gave us a hint, use it
    if (props.modelInformation.method === "regressor") {
      return ModelTypes.Regression;
    }
    switch (NewExplanationDashboard.getClassLength(props)) {
      case 1:
        return ModelTypes.Regression;
      case 2:
        return ModelTypes.Binary;
      default:
        return ModelTypes.Multiclass;
    }
  }

  private static buildGlobalProperties(
    props: IExplanationDashboardProps
  ): IGlobalExplanationProps {
    const result: IGlobalExplanationProps = {} as IGlobalExplanationProps;
    if (
      props.precomputedExplanations &&
      props.precomputedExplanations.globalFeatureImportance &&
      props.precomputedExplanations.globalFeatureImportance.scores
    ) {
      result.isGlobalImportanceDerivedFromLocal = false;
      if (
        (props.precomputedExplanations.globalFeatureImportance
          .scores as number[][]).every((dim1) => Array.isArray(dim1))
      ) {
        result.globalImportance = props.precomputedExplanations
          .globalFeatureImportance.scores as number[][];
        result.globalImportanceIntercept = props.precomputedExplanations
          .globalFeatureImportance.intercept as number[];
      } else {
        result.globalImportance = (props.precomputedExplanations
          .globalFeatureImportance.scores as number[]).map((value) => [value]);
        result.globalImportanceIntercept = [
          props.precomputedExplanations.globalFeatureImportance
            .intercept as number
        ];
      }
    }
    return result;
  }

  public componentDidUpdate(prev: IExplanationDashboardProps): void {
    if (prev.theme !== this.props.theme) {
      loadTheme(this.props.theme || defaultTheme);
    }
    if (this.props.locale && prev.locale !== this.props.locale) {
      localization.setLanguage(this.props.locale);
    }
  }

  public render(): React.ReactNode {
    const cohortIDs = this.state.cohorts.map((cohort) =>
      cohort.getCohortID().toString()
    );
    const classNames = explanationDashboardStyles();
    return (
      <div className={classNames.page} style={{ maxHeight: "1000px" }}>
        {this.state.showingDataSizeWarning && (
          <MessageBar
            onDismiss={this.clearSizeWarning}
            dismissButtonAriaLabel="Close"
            messageBarType={MessageBarType.warning}
          >
            <Text>{localization.ValidationErrors.datasizeWarning}</Text>
          </MessageBar>
        )}
        {this.state.validationWarnings.length !== 0 && (
          <MessageBar
            id="ErrorMessage"
            onDismiss={this.clearWarning}
            dismissButtonAriaLabel="Close"
            messageBarType={MessageBarType.warning}
          >
            <Text>{localization.ValidationErrors.errorHeader}</Text>
            {this.state.validationWarnings.map((message) => {
              return <Text block>{message}</Text>;
            })}
          </MessageBar>
        )}
        <Stack horizontal={true}>
          <Stack.Item>
            <CohortBar
              cohorts={this.state.cohorts}
              onCohortsChange={this.onCohortsChange}
              jointDataset={this.state.jointDataset}
              modelMetadata={this.state.modelMetadata}
            />
          </Stack.Item>
          <Stack.Item>
            <div>
              <Pivot
                selectedKey={this.state.activeGlobalTab}
                onLinkClick={this.handleGlobalTabClick}
                linkSize={PivotLinkSize.normal}
                headersOnly={true}
                id="DashboardPivot"
              >
                {this.pivotItems.map((props) => (
                  <PivotItem key={props.itemKey} {...props} />
                ))}
              </Pivot>
              {this.state.activeGlobalTab ===
                GlobalTabKeys.ModelPerformance && (
                <ModelPerformanceTab
                  jointDataset={this.state.jointDataset}
                  metadata={this.state.modelMetadata}
                  chartProps={this.state.modelChartConfig}
                  onChange={this.onModelConfigChanged}
                  cohorts={this.state.cohorts}
                />
              )}
              {this.state.activeGlobalTab === GlobalTabKeys.DataExploration && (
                <DatasetExplorerTab
                  jointDataset={this.state.jointDataset}
                  metadata={this.state.modelMetadata}
                  chartProps={this.state.dataChartConfig}
                  onChange={this.onConfigChanged}
                  cohorts={this.state.cohorts}
                />
              )}
              {this.state.activeGlobalTab === GlobalTabKeys.ExplanationTab && (
                <GlobalExplanationTab
                  globalBarSettings={this.state.globalBarConfig}
                  sortVector={this.state.sortVector}
                  dependenceProps={this.state.dependenceProps}
                  jointDataset={this.state.jointDataset}
                  metadata={this.state.modelMetadata}
                  globalImportance={this.state.globalImportance}
                  isGlobalDerivedFromLocal={
                    this.state.isGlobalImportanceDerivedFromLocal
                  }
                  onChange={this.setGlobalBarSettings}
                  onDependenceChange={this.onDependenceChange}
                  cohorts={this.state.cohorts}
                  cohortIDs={cohortIDs}
                  selectedWeightVector={this.state.selectedWeightVector}
                  weightOptions={this.weightVectorOptions}
                  weightLabels={this.weightVectorLabels}
                  onWeightChange={this.onWeightVectorChange}
                  explanationMethod={this.props.explanationMethod}
                />
              )}
              {this.state.activeGlobalTab === GlobalTabKeys.WhatIfTab && (
                <WhatIfTab
                  jointDataset={this.state.jointDataset}
                  metadata={this.state.modelMetadata}
                  cohorts={this.state.cohorts}
                  onChange={this.onWhatIfConfigChanged}
                  chartProps={this.state.whatIfChartConfig}
                  invokeModel={this.state.requestPredictions}
                  selectedWeightVector={this.state.selectedWeightVector}
                  weightOptions={this.weightVectorOptions}
                  weightLabels={this.weightVectorLabels}
                  onWeightChange={this.onWeightVectorChange}
                />
              )}
            </div>
          </Stack.Item>
        </Stack>{" "}
      </div>
    );
  }

  private async validatePredictMethod(): Promise<void> {
    if (
      this.props.requestPredictions &&
      this.props.testData !== undefined &&
      this.props.testData.length > 0
    ) {
      try {
        const abortController = new AbortController();
        const prediction = await this.props.requestPredictions(
          [this.props.testData[0]],
          abortController.signal
        );
        if (prediction !== undefined) {
          this.setState({ requestPredictions: this.props.requestPredictions });
        }
      } catch {
        return;
      }
    }
  }

  private onConfigChanged = (newConfig: IGenericChartProps): void => {
    this.setState({ dataChartConfig: newConfig });
  };

  private onModelConfigChanged = (newConfig: IGenericChartProps): void => {
    this.setState({ modelChartConfig: newConfig });
  };

  private onWhatIfConfigChanged = (newConfig: IGenericChartProps): void => {
    this.setState({ whatIfChartConfig: newConfig });
  };

  private onDependenceChange = (newConfig: IGenericChartProps): void => {
    this.setState({ dependenceProps: newConfig });
  };

  private handleGlobalTabClick = (item?: PivotItem): void => {
    if (item?.props.itemKey) {
      this.setState({ activeGlobalTab: item.props.itemKey as GlobalTabKeys });
    }
  };

  private setGlobalBarSettings = (settings: IGlobalBarSettings): void => {
    this.setState({ globalBarConfig: settings });
  };

  private onCohortsChange = (cohorts: Cohort[]): void => {
    this.setState({ cohorts });
  };

  private onWeightVectorChange = (weightOption: WeightVectorOption): void => {
    this.state.jointDataset.buildLocalFlattenMatrix(weightOption);
    this.state.cohorts.forEach((cohort) => cohort.clearCachedImportances());
    this.setState({ selectedWeightVector: weightOption });
  };

  private clearWarning = (): void => {
    this.setState({ validationWarnings: [] });
  };

  private clearSizeWarning = (): void => {
    this.setState({ showingDataSizeWarning: false });
  };
}
