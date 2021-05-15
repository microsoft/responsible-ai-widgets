// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AxisConfigDialog,
  ColumnCategories,
  JointDataset,
  Cohort,
  ChartTypes,
  IGenericChartProps,
  ISelectorConfig,
  MissingParametersPlaceholder,
  defaultModelAssessmentContext,
  ModelAssessmentContext,
  FabricStyles,
  rowErrorSize
} from "@responsible-ai/core-ui";
import { localization } from "@responsible-ai/localization";
import {
  AccessibleChart,
  IPlotlyProperty,
  PlotlyMode,
  IData
} from "@responsible-ai/mlchartlib";
import _ from "lodash";
import {
  getTheme,
  DefaultButton,
  ComboBox,
  Stack,
  IComboBoxOption,
  IComboBox,
  PrimaryButton
} from "office-ui-fabric-react";
import React from "react";

import { counterfactualChartStyles } from "./CounterfactualChartStyles";
import { CounterfactualConstants } from "./CounterfactualConstants";

export interface ICounterfactualChartProps {
  onDataClick?: (data: number | undefined) => void;
}

export interface ICounterfactualChartState {
  chartProps?: IGenericChartProps;
  xDialogOpen: boolean;
  yDialogOpen: boolean;
  selectedCohortIndex: number;
  selectedPointsIndexes: number[];
  pointIsActive: boolean[];
  customPointIsActive: boolean[];
  counterfactualClass?: string;
}

export class CounterfactualChart extends React.PureComponent<
  ICounterfactualChartProps,
  ICounterfactualChartState
> {
  public static contextType = ModelAssessmentContext;
  public context: React.ContextType<
    typeof ModelAssessmentContext
  > = defaultModelAssessmentContext;

  private readonly chartAndConfigsId = "CounterfactualChart";
  private stringifiedValues: { [key: string]: string } = {};
  private temporaryPoint: { [key: string]: any } | undefined;

  public constructor(props: ICounterfactualChartProps) {
    super(props);

    this.state = {
      counterfactualClass: "malignant",
      customPointIsActive: [],
      pointIsActive: [],
      selectedCohortIndex: 0,
      selectedPointsIndexes: [],
      xDialogOpen: false,
      yDialogOpen: false
    };
  }

  public componentDidMount(): void {
    this.setState({
      chartProps: this.generateDefaultChartAxes()
    });
  }

  public componentDidUpdate(
    _prevProps: ICounterfactualChartProps,
    prevState: ICounterfactualChartState
  ): void {
    if (!this.state) {
      return;
    }
    const selectionsAreEqual = _.isEqual(
      this.state.selectedPointsIndexes,
      prevState.selectedPointsIndexes
    );
    const activePointsAreEqual = _.isEqual(
      this.state.pointIsActive,
      prevState.pointIsActive
    );
    const customActivePointsAreEqual = _.isEqual(
      this.state.customPointIsActive,
      prevState.customPointIsActive
    );
    if (
      !selectionsAreEqual ||
      !activePointsAreEqual ||
      !customActivePointsAreEqual
    ) {
      this.forceUpdate();
    }
  }

  public render(): React.ReactNode {
    const classNames = counterfactualChartStyles();
    if (!this.context.jointDataset.hasDataset) {
      return (
        <MissingParametersPlaceholder>
          {localization.CausalAnalysis.IndividualView.dataRequired}
        </MissingParametersPlaceholder>
      );
    }
    if (this.state.chartProps === undefined) {
      return <div />;
    }
    const plotlyProps = this.generatePlotlyProps(
      this.context.jointDataset,
      this.state.chartProps,
      this.context.errorCohorts[this.state.selectedCohortIndex].cohort
    );
    const cohortLength = this.context.errorCohorts[
      this.state.selectedCohortIndex
    ].cohort.filteredData.length;
    const canRenderChart =
      cohortLength < rowErrorSize ||
      this.state.chartProps.chartType !== ChartTypes.Scatter;
    return (
      <div className={classNames.topArea} id={"CasualIndividualContainer"}>
        <div className={classNames.chartWithAxes} id={this.chartAndConfigsId}>
          {this.state.yDialogOpen && (
            <AxisConfigDialog
              jointDataset={this.context.jointDataset}
              orderedGroupTitles={[
                ColumnCategories.Index,
                ColumnCategories.Dataset,
                ColumnCategories.Outcome
              ]}
              selectedColumn={this.state.chartProps.yAxis}
              canBin={false}
              mustBin={false}
              canDither={this.state.chartProps.chartType === ChartTypes.Scatter}
              onAccept={this.onYSet}
              onCancel={this.setYOpen.bind(this, false)}
            />
          )}
          {this.state.xDialogOpen && (
            <AxisConfigDialog
              jointDataset={this.context.jointDataset}
              orderedGroupTitles={[
                ColumnCategories.Index,
                ColumnCategories.Dataset,
                ColumnCategories.Outcome
              ]}
              selectedColumn={this.state.chartProps.xAxis}
              canBin={
                this.state.chartProps.chartType === ChartTypes.Histogram ||
                this.state.chartProps.chartType === ChartTypes.Box
              }
              mustBin={
                this.state.chartProps.chartType === ChartTypes.Histogram ||
                this.state.chartProps.chartType === ChartTypes.Box
              }
              canDither={this.state.chartProps.chartType === ChartTypes.Scatter}
              onAccept={this.onXSet}
              onCancel={this.setXOpen.bind(this, false)}
            />
          )}
          <div className={classNames.chartWithVertical}>
            <div className={classNames.verticalAxis}>
              <div className={classNames.rotatedVerticalBox}>
                <DefaultButton
                  onClick={this.setYOpen.bind(this, true)}
                  text={
                    this.context.jointDataset.metaDict[
                      this.state.chartProps.yAxis.property
                    ].abbridgedLabel
                  }
                  title={
                    this.context.jointDataset.metaDict[
                      this.state.chartProps.yAxis.property
                    ].label
                  }
                />
              </div>
            </div>
            {!canRenderChart && (
              <MissingParametersPlaceholder>
                {localization.Interpret.ValidationErrors.datasizeError}
              </MissingParametersPlaceholder>
            )}
            {canRenderChart && (
              <AccessibleChart
                plotlyProps={plotlyProps}
                theme={getTheme()}
                onClickHandler={this.selectPointFromChart}
              />
            )}
          </div>
          <div className={classNames.horizontalAxisWithPadding}>
            <div className={classNames.paddingDiv} />
            <div className={classNames.horizontalAxis}>
              <DefaultButton
                onClick={this.setXOpen.bind(this, true)}
                text={
                  this.context.jointDataset.metaDict[
                    this.state.chartProps.xAxis.property
                  ].abbridgedLabel
                }
                title={
                  this.context.jointDataset.metaDict[
                    this.state.chartProps.xAxis.property
                  ].label
                }
              />
            </div>
          </div>
        </div>
        <Stack horizontal={false} gap={15} className={classNames.legendAndText}>
          <ComboBox
            label={localization.Counterfactuals.selectedDatapoint}
            onChange={this.selectPointFromDropdown}
            options={this.getDataOptions()}
            selectedKey={"" + this.state.selectedPointsIndexes[0]}
            ariaLabel={"datapoint picker"}
            useComboBoxAsMenuWidth
            styles={FabricStyles.smallDropdownStyle}
          />
          <ComboBox
            label={localization.Counterfactuals.desiredClass}
            onChange={this.selectClassFromDropdown}
            options={[
              {
                key: "a",
                text: "a"
              },
              {
                key: "b",
                text: "b"
              }
            ]}
            ariaLabel={"treatment picker"}
            useComboBoxAsMenuWidth
            styles={FabricStyles.smallDropdownStyle}
          />
          <div>
            <b>{`${localization.Counterfactuals.currentClass}: ${this.state.counterfactualClass}`}</b>
          </div>
          <div style={{ display: "flex", paddingBottom: "20px" }}>
            <PrimaryButton className={classNames.createBtn}>
              {localization.Counterfactuals.createCounterfactual}
            </PrimaryButton>
          </div>
        </Stack>
      </div>
    );
  }

  private setTemporaryPointToCopyOfDatasetPoint(index: number): void {
    this.temporaryPoint = this.context.jointDataset.getRow(index);
    this.temporaryPoint[
      CounterfactualConstants.namePath
    ] = localization.formatString(
      localization.Interpret.WhatIf.defaultCustomRootName,
      index
    );
    this.temporaryPoint[CounterfactualConstants.colorPath] =
      FabricStyles.fabricColorPalette[CounterfactualConstants.MAX_SELECTION];
    Object.keys(this.temporaryPoint).forEach((key) => {
      this.stringifiedValues[key] = this.temporaryPoint?.[key].toString();
    });
  }

  private onXSet = (value: ISelectorConfig): void => {
    if (!this.state.chartProps) {
      return;
    }
    const newProps = _.cloneDeep(this.state.chartProps);
    newProps.xAxis = value;
    this.setState({ chartProps: newProps, xDialogOpen: false });
  };

  private onYSet = (value: ISelectorConfig): void => {
    if (!this.state.chartProps) {
      return;
    }
    const newProps = _.cloneDeep(this.state.chartProps);
    newProps.yAxis = value;
    this.setState({ chartProps: newProps, yDialogOpen: false });
  };

  private readonly setXOpen = (val: boolean): void => {
    if (val && this.state.xDialogOpen === false) {
      this.setState({ xDialogOpen: true });
      return;
    }
    this.setState({ xDialogOpen: false });
  };

  private readonly setYOpen = (val: boolean): void => {
    if (val && this.state.yDialogOpen === false) {
      this.setState({ yDialogOpen: true });
      return;
    }
    this.setState({ yDialogOpen: false });
  };

  private selectPointFromChart = (data: any): void => {
    const trace = data.points[0];
    const index = trace.customdata[JointDataset.IndexLabel];
    this.setTemporaryPointToCopyOfDatasetPoint(index);
    this.toggleSelectionOfPoint(index);
  };

  private selectPointFromDropdown = (
    _event: React.FormEvent<IComboBox>,
    item?: IComboBoxOption
  ): void => {
    if (typeof item?.key === "string") {
      const index = Number.parseInt(item.key);
      this.setTemporaryPointToCopyOfDatasetPoint(index);
      this.toggleSelectionOfPoint(index);
    }
  };

  private selectClassFromDropdown = (
    _event: React.FormEvent<IComboBox>,
    item?: IComboBoxOption
  ): void => {
    if (typeof item?.key === "string") {
      this.setState({
        counterfactualClass: item.key
      });
    }
  };

  private toggleSelectionOfPoint(index?: number): void {
    if (index === undefined) {
      return;
    }
    const indexOf = this.state.selectedPointsIndexes.indexOf(index);
    let newSelections = [...this.state.selectedPointsIndexes];
    let pointIsActive = [...this.state.pointIsActive];
    if (indexOf === -1) {
      newSelections = [index];
      pointIsActive = [true];
    } else {
      newSelections.splice(indexOf, 1);
      pointIsActive.splice(indexOf, 1);
    }
    if (this.props.onDataClick) {
      this.props.onDataClick(
        newSelections.length === 1 ? newSelections[0] : undefined
      );
    }
    this.setState({
      pointIsActive,
      selectedPointsIndexes: newSelections
    });
  }

  private generatePlotlyProps(
    jointData: JointDataset,
    chartProps: IGenericChartProps,
    cohort: Cohort
  ): IPlotlyProperty {
    const plotlyProps = _.cloneDeep(
      CounterfactualConstants.basePlotlyProperties
    );
    plotlyProps.data[0].hoverinfo = "all";
    const indexes = cohort.unwrap(JointDataset.IndexLabel);
    plotlyProps.data[0].type = chartProps.chartType;
    plotlyProps.data[0].mode = PlotlyMode.Markers;
    plotlyProps.data[0].marker = {
      color: indexes.map((rowIndex) => {
        const selectionIndex = this.state.selectedPointsIndexes.indexOf(
          rowIndex
        );
        if (selectionIndex === -1) {
          return FabricStyles.fabricColorInactiveSeries;
        }
        return FabricStyles.fabricColorPalette[selectionIndex];
      }) as any,
      size: 8,
      symbol: indexes.map((i) =>
        this.state.selectedPointsIndexes.includes(i) ? "square" : "circle"
      ) as any
    };

    plotlyProps.data[1] = {
      marker: {
        size: 12,
        symbol: "star"
      },
      mode: PlotlyMode.Markers,
      type: "scatter"
    };

    plotlyProps.data[2] = {
      hoverinfo: "text",
      marker: {
        color: "rgba(0,0,0,0)",
        line: {
          color:
            FabricStyles.fabricColorPalette[
              CounterfactualConstants.MAX_SELECTION + 1
            ],
          width: 2
        },
        opacity: 0.5,
        size: 12,
        symbol: "star"
      },
      mode: PlotlyMode.Markers,
      text: "Editable What-If point",
      type: "scatter"
    };

    if (chartProps.xAxis) {
      if (jointData.metaDict[chartProps.xAxis.property].treatAsCategorical) {
        const xLabels =
          jointData.metaDict[chartProps.xAxis.property].sortedCategoricalValues;
        const xLabelIndexes = xLabels?.map((_, index) => index);
        _.set(plotlyProps, "layout.xaxis.ticktext", xLabels);
        _.set(plotlyProps, "layout.xaxis.tickvals", xLabelIndexes);
      }
    }
    if (chartProps.yAxis) {
      if (jointData.metaDict[chartProps.yAxis.property].treatAsCategorical) {
        const yLabels =
          jointData.metaDict[chartProps.yAxis.property].sortedCategoricalValues;
        const yLabelIndexes = yLabels?.map((_, index) => index);
        _.set(plotlyProps, "layout.yaxis.ticktext", yLabels);
        _.set(plotlyProps, "layout.yaxis.tickvals", yLabelIndexes);
      }
    }

    this.generateDataTrace(
      cohort.filteredData,
      chartProps,
      plotlyProps.data[0]
    );
    this.generateDataTrace([], chartProps, plotlyProps.data[1]);
    if (this.temporaryPoint) {
      this.generateDataTrace(
        [this.temporaryPoint],
        chartProps,
        plotlyProps.data[2]
      );
    }
    return plotlyProps;
  }

  private generateDataTrace(
    dictionary: Array<{ [key: string]: number }>,
    chartProps: IGenericChartProps,
    trace: IData
  ): void {
    const customdata = JointDataset.unwrap(
      dictionary,
      JointDataset.IndexLabel
    ).map((val) => {
      const dict = {};
      dict[JointDataset.IndexLabel] = val;
      return dict;
    });
    let hovertemplate = "";
    if (chartProps.xAxis) {
      const metaX = this.context.jointDataset.metaDict[
        chartProps.xAxis.property
      ];
      const rawX = JointDataset.unwrap(dictionary, chartProps.xAxis.property);
      hovertemplate += metaX.label + ": %{customdata.X}<br>";

      rawX.forEach((val, index) => {
        if (metaX.treatAsCategorical) {
          customdata[index]["X"] = metaX.sortedCategoricalValues?.[val];
        } else {
          customdata[index]["X"] = (val as number).toLocaleString(undefined, {
            maximumSignificantDigits: 5
          });
        }
      });
      if (chartProps.xAxis.options.dither) {
        const dither = JointDataset.unwrap(
          dictionary,
          JointDataset.DitherLabel
        );
        trace.x = dither.map((ditherVal, index) => {
          return rawX[index] + ditherVal;
        });
      } else {
        trace.x = rawX;
      }
    }
    if (chartProps.yAxis) {
      const metaY = this.context.jointDataset.metaDict[
        chartProps.yAxis.property
      ];
      const rawY = JointDataset.unwrap(dictionary, chartProps.yAxis.property);
      hovertemplate += metaY.label + ": %{customdata.Y}<br>";
      rawY.forEach((val, index) => {
        if (metaY.treatAsCategorical) {
          customdata[index]["Y"] = metaY.sortedCategoricalValues?.[val];
        } else {
          customdata[index]["Y"] = (val as number).toLocaleString(undefined, {
            maximumSignificantDigits: 5
          });
        }
      });
      if (chartProps.yAxis.options.dither) {
        const dither = JointDataset.unwrap(
          dictionary,
          JointDataset.DitherLabel2
        );
        trace.y = dither.map((ditherVal, index) => {
          return rawY[index] + ditherVal;
        });
      } else {
        trace.y = rawY;
      }
    }
    hovertemplate +=
      localization.Interpret.Charts.rowIndex + ": %{customdata.Index}<br>";
    hovertemplate += "<extra></extra>";
    trace.customdata = customdata as any;
    trace.hovertemplate = hovertemplate;
  }

  private generateDefaultChartAxes(): IGenericChartProps | undefined {
    const yKey = JointDataset.DataLabelRoot + "0";
    const yIsDithered = this.context.jointDataset.metaDict[yKey]
      .treatAsCategorical;
    const chartProps: IGenericChartProps = {
      chartType: ChartTypes.Scatter,
      xAxis: {
        options: {},
        property: this.context.jointDataset.hasPredictedProbabilities
          ? JointDataset.ProbabilityYRoot + "0"
          : JointDataset.IndexLabel
      },
      yAxis: {
        options: {
          bin: false,
          dither: yIsDithered
        },
        property: yKey
      }
    };
    return chartProps;
  }

  private getDataOptions(): IComboBoxOption[] {
    const indexes = this.context.errorCohorts[
      this.state.selectedCohortIndex
    ].cohort.unwrap(JointDataset.IndexLabel);
    indexes.sort((a, b) => Number.parseInt(a) - Number.parseInt(b));
    return indexes.map((index) => {
      return {
        key: "" + index,
        text: `Index ${index}`
      };
    });
  }
}