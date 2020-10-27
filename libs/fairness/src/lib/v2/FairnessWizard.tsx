// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { localization } from "@responsible-ai/localization";
import { RangeTypes } from "@responsible-ai/mlchartlib";
import _ from "lodash";
import {
  Pivot,
  PivotItem,
  Stack,
  StackItem,
  loadTheme
} from "office-ui-fabric-react";
import React from "react";

import { FeatureTab } from "../components/FeatureTab";
import { IFairnessProps, PredictionTypes } from "../IFairnessProps";
import { IBinnedResponse } from "../util/IBinnedResponse";
import {
  IFairnessContext,
  IRunTimeFairnessContext
} from "../util/IFairnessContext";
import { MetricsCache } from "../util/MetricsCache";
import { IParityOption, parityOptions } from "../util/ParityMetrics";
import {
  performanceOptions,
  IPerformanceOption
} from "../util/PerformanceMetrics";
import { WizardBuilder } from "../util/WizardBuilder";

import { IntroTab } from "./Controls/IntroTab";
import { ModelComparisonChart } from "./Controls/ModelComparisonChart";
import { ParityTab } from "./Controls/ParityTab";
import { PerformanceTab } from "./Controls/PerformanceTab";
import { FairnessWizardStyles } from "./FairnessWizard.styles";
import { defaultTheme } from "./Themes";
import { WizardReport } from "./WizardReport";

export interface IPerformancePickerPropsV2 {
  performanceOptions: IPerformanceOption[];
  selectedPerformanceKey: string;
  onPerformanceChange: (newKey: string) => void;
}

export interface IParityPickerPropsV2 {
  parityOptions: IParityOption[];
  selectedParityKey: string;
  onParityChange: (newKey: string) => void;
}

export interface IFeatureBinPickerPropsV2 {
  featureBins: IBinnedResponse[];
  selectedBinIndex: number;
  onBinChange: (index: number) => void;
}

export interface IWizardStateV2 {
  showIntro: boolean;
  activeTabKey: string;
  selectedModelId?: number;
  dashboardContext: IFairnessContext;
  performanceMetrics: IPerformanceOption[];
  parityMetrics: IParityOption[];
  selectedPerformanceKey: string;
  selectedParityKey: string;
  featureBins: IBinnedResponse[];
  selectedBinIndex: number;
  metricCache: MetricsCache;
}

const introTabKey = "introTab";
const featureBinTabKey = "featureBinTab";
const performanceTabKey = "performanceTab";
const disparityTabKey = "disparityTab";
const reportTabKey = "reportTab";

const flights = {
  skipDisparity: false
};

export class FairnessWizardV2 extends React.PureComponent<
  IFairnessProps,
  IWizardStateV2
> {
  public constructor(props: IFairnessProps) {
    super(props);
    WizardBuilder.initializeIcons(props);
    if (this.props.locale) {
      localization.setLanguage(this.props.locale);
    }
    let performanceMetrics: IPerformanceOption[];
    let parityMetrics: IParityOption[];
    loadTheme(props.theme || defaultTheme);
    // handle the case of precomputed metrics separately. As it becomes more defined, can integrate with existing code path.
    if (this.props.precomputedMetrics && this.props.precomputedFeatureBins) {
      // we must assume that the same performance metrics are provided across models and bins
      performanceMetrics = WizardBuilder.buildPerformanceListForPrecomputedMetrics(
        this.props
      );
      parityMetrics = WizardBuilder.buildParityListForPrecomputedMetrics(
        this.props
      );
      const readonlyFeatureBins = this.props.precomputedFeatureBins.map(
        (initialBin, index) => {
          return {
            array: initialBin.binLabels,
            featureIndex: index,
            hasError: false,
            labelArray: initialBin.binLabels,
            rangeType: RangeTypes.Categorical
          };
        }
      );
      this.state = {
        activeTabKey: featureBinTabKey,
        dashboardContext: WizardBuilder.buildPrecomputedFairnessContext(
          this.props
        ),
        featureBins: readonlyFeatureBins,
        metricCache: new MetricsCache(
          0,
          0,
          undefined,
          props.precomputedMetrics
        ),
        parityMetrics,
        performanceMetrics,
        selectedBinIndex: 0,
        selectedModelId: this.props.predictedY.length === 1 ? 0 : undefined,
        selectedParityKey: parityMetrics[0].key,
        selectedPerformanceKey: performanceMetrics[0].key,
        showIntro: true
      };
      return;
    }
    const fairnessContext = WizardBuilder.buildInitialFairnessContext(
      this.props
    );

    const featureBins = WizardBuilder.buildFeatureBins(fairnessContext);
    if (featureBins.length > 0) {
      fairnessContext.binVector = WizardBuilder.generateBinVectorForBin(
        featureBins[0],
        fairnessContext.dataset
      );
      fairnessContext.groupNames = featureBins[0].labelArray;
    }

    performanceMetrics = this.getPerformanceMetrics(fairnessContext);
    performanceMetrics = performanceMetrics.filter((metric) => !!metric);

    parityMetrics = this.getParityMetrics(fairnessContext);
    parityMetrics = parityMetrics.filter((metric) => !!metric);

    this.state = {
      activeTabKey: introTabKey,
      dashboardContext: fairnessContext,
      featureBins,
      metricCache: new MetricsCache(
        featureBins.length,
        this.props.predictedY.length,
        this.props.requestMetrics
      ),
      parityMetrics,
      performanceMetrics,
      selectedBinIndex: 0,
      selectedModelId: this.props.predictedY.length === 1 ? 0 : undefined,
      selectedParityKey: parityMetrics[0].key,
      selectedPerformanceKey: performanceMetrics[0].key,
      showIntro: true
    };
  }

  public componentDidUpdate(prev: IFairnessProps): void {
    if (prev.theme !== this.props.theme) {
      loadTheme(this.props.theme || defaultTheme);
    }
    if (this.props.locale && prev.locale !== this.props.locale) {
      localization.setLanguage(this.props.locale);
    }
  }

  public render(): React.ReactNode {
    const styles = FairnessWizardStyles();
    const performancePickerProps = {
      onPerformanceChange: this.setPerformanceKey,
      performanceOptions: this.state.performanceMetrics,
      selectedPerformanceKey: this.state.selectedPerformanceKey
    };
    const parityPickerProps = {
      onParityChange: this.setParityKey,
      parityOptions: this.state.parityMetrics,
      selectedParityKey: this.state.selectedParityKey
    };
    const featureBinPickerProps = {
      featureBins: this.state.featureBins,
      onBinChange: this.setBinIndex,
      selectedBinIndex: this.state.selectedBinIndex
    };
    if (this.state.featureBins.length === 0) {
      return (
        <Stack className={styles.frame}>
          <Stack
            horizontal
            horizontalAlign="space-between"
            verticalAlign="center"
            className={styles.thinHeader}
          ></Stack>
        </Stack>
      );
    }
    return (
      <Stack className={styles.frame}>
        <Stack
          horizontal
          horizontalAlign="space-between"
          verticalAlign="center"
          className={styles.thinHeader}
        ></Stack>
        {this.state.activeTabKey === introTabKey && (
          <StackItem grow={2} className={styles.body}>
            <IntroTab onNext={this.setTab.bind(this, featureBinTabKey)} />
          </StackItem>
        )}
        {(this.state.activeTabKey === featureBinTabKey ||
          this.state.activeTabKey === performanceTabKey ||
          this.state.activeTabKey === disparityTabKey) && (
          <Stack.Item grow={2} className={styles.body}>
            <Pivot
              className={styles.pivot}
              styles={{
                itemContainer: {
                  height: "100%"
                }
              }}
              selectedKey={this.state.activeTabKey}
              onLinkClick={this.handleTabClick}
            >
              <PivotItem
                headerText={localization.Fairness.sensitiveFeatures}
                itemKey={featureBinTabKey}
                style={{ height: "100%", paddingLeft: "8px" }}
              >
                <FeatureTab
                  dashboardContext={this.state.dashboardContext}
                  selectedFeatureChange={this.setBinIndex}
                  selectedFeatureIndex={this.state.selectedBinIndex}
                  featureBins={this.state.featureBins.filter((x) => !!x)}
                  onNext={this.setTab.bind(this, performanceTabKey)}
                  saveBin={this.saveBin}
                />
              </PivotItem>
              <PivotItem
                headerText={localization.Fairness.performanceMetric}
                itemKey={performanceTabKey}
                style={{ height: "100%", paddingLeft: "8px" }}
              >
                <PerformanceTab
                  dashboardContext={this.state.dashboardContext}
                  performancePickerProps={performancePickerProps}
                  onNext={this.setTab.bind(
                    this,
                    flights.skipDisparity ? reportTabKey : disparityTabKey
                  )}
                  onPrevious={this.setTab.bind(this, featureBinTabKey)}
                />
              </PivotItem>
              {flights.skipDisparity === false && (
                <PivotItem
                  headerText={localization.Fairness.disparityMetric}
                  itemKey={disparityTabKey}
                  style={{ height: "100%", paddingLeft: "8px" }}
                >
                  <ParityTab
                    dashboardContext={this.state.dashboardContext}
                    parityPickerProps={parityPickerProps}
                    onNext={this.setTab.bind(this, reportTabKey)}
                    onPrevious={this.setTab.bind(this, performanceTabKey)}
                  />
                </PivotItem>
              )}
            </Pivot>
          </Stack.Item>
        )}
        {this.state.activeTabKey === reportTabKey &&
          this.state.selectedModelId !== undefined && (
            <WizardReport
              showIntro={this.state.showIntro}
              dashboardContext={this.state.dashboardContext}
              metricsCache={this.state.metricCache}
              modelCount={this.props.predictedY.length}
              performancePickerProps={performancePickerProps}
              onChartClick={this.onSelectModel}
              parityPickerProps={parityPickerProps}
              featureBinPickerProps={featureBinPickerProps}
              selectedModelIndex={this.state.selectedModelId}
              onHideIntro={this.hideIntro.bind(this)}
              onEditConfigs={this.setTab.bind(this, featureBinTabKey)}
            />
          )}
        {this.state.activeTabKey === reportTabKey &&
          this.state.selectedModelId === undefined && (
            <ModelComparisonChart
              showIntro={this.state.showIntro}
              dashboardContext={this.state.dashboardContext}
              metricsCache={this.state.metricCache}
              onChartClick={this.onSelectModel}
              modelCount={this.props.predictedY.length}
              performancePickerProps={performancePickerProps}
              parityPickerProps={parityPickerProps}
              featureBinPickerProps={featureBinPickerProps}
              onHideIntro={this.hideIntro.bind(this)}
              onEditConfigs={this.setTab.bind(this, featureBinTabKey)}
            />
          )}
      </Stack>
    );
  }

  private getPerformanceMetrics(
    fairnessContext: IRunTimeFairnessContext
  ): IPerformanceOption[] {
    if (
      fairnessContext.modelMetadata.PredictionType ===
      PredictionTypes.BinaryClassification
    ) {
      return this.props.supportedBinaryClassificationPerformanceKeys.map(
        (key) => performanceOptions[key]
      );
    }
    if (
      fairnessContext.modelMetadata.PredictionType ===
      PredictionTypes.Regression
    ) {
      return this.props.supportedRegressionPerformanceKeys.map(
        (key) => performanceOptions[key]
      );
    }
    return this.props.supportedProbabilityPerformanceKeys.map(
      (key) => performanceOptions[key]
    );
  }

  private getParityMetrics(
    fairnessContext: IRunTimeFairnessContext
  ): IParityOption[] {
    return Object.values(parityOptions).filter((parityOption) => {
      return parityOption.supportedTasks.has(
        fairnessContext.modelMetadata.PredictionType
      );
    });
  }

  private readonly hideIntro = (): void => {
    this.setState({ showIntro: false });
  };

  private readonly setTab = (key: string): void => {
    this.setState({ activeTabKey: key });
  };

  private readonly onSelectModel = (data: any): void => {
    if (!data) {
      this.setState({ selectedModelId: undefined });
      return;
    }
    if (data.points && data.points[0]) {
      this.setState({ selectedModelId: data.points[0].customdata });
    }
  };

  private readonly setPerformanceKey = (key: string): void => {
    const value: Partial<IWizardStateV2> = { selectedPerformanceKey: key };
    if (flights.skipDisparity) {
      value.selectedParityKey = key;
    }
    this.setState(value as IWizardStateV2);
  };

  private readonly setParityKey = (key: string): void => {
    this.setState({ selectedParityKey: key });
  };

  private readonly setBinIndex = (index: number): void => {
    if (this.props.precomputedMetrics) {
      const newContext = _.cloneDeep(this.state.dashboardContext);

      newContext.binVector = this.props.precomputedFeatureBins[index].binVector;
      newContext.groupNames = this.props.precomputedFeatureBins[
        index
      ].binLabels;

      this.setState({ dashboardContext: newContext, selectedBinIndex: index });
    } else {
      this.binningSet(this.state.featureBins[index]);
    }
  };

  private readonly handleTabClick = (item?: PivotItem): void => {
    if (item?.props?.itemKey) {
      this.setState({ activeTabKey: item.props.itemKey });
    }
  };

  private readonly binningSet = (value: IBinnedResponse): void => {
    if (!value || value.hasError || value.array.length === 0) {
      return;
    }
    const newContext = _.cloneDeep(this.state.dashboardContext);

    newContext.binVector = WizardBuilder.generateBinVectorForBin(
      value,
      this.state.dashboardContext.dataset
    );
    newContext.groupNames = value.labelArray;

    this.setState({
      dashboardContext: newContext,
      selectedBinIndex: value.featureIndex
    });
  };

  private readonly saveBin = (bin: IBinnedResponse): void => {
    const newBin = [...this.state.featureBins];
    newBin[bin.featureIndex] = bin;
    this.setState({ featureBins: newBin });
    this.state.metricCache.clearCache(bin.featureIndex);
    this.binningSet(bin);
  };
}
