// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  defaultModelAssessmentContext,
  ICausalAnalysisSingleData,
  ModelAssessmentContext
} from "@responsible-ai/core-ui";
import { localization } from "@responsible-ai/localization";
import { AccessibleChart, IPlotlyProperty } from "@responsible-ai/mlchartlib";
import _, { isEqual } from "lodash";
import { getTheme, Text, Link, Stack } from "office-ui-fabric-react";
import React from "react";

import { getCausalDisplayFeatureName } from "../../../getCausalDisplayFeatureName";

import { basePlotlyProperties } from "./basePlotlyProperties";
import { CausalAggregateStyles } from "./CausalAggregateStyles";

export interface ICausalAggregateChartProps {
  data: ICausalAnalysisSingleData[];
}

export class CausalAggregateChart extends React.PureComponent<
  ICausalAggregateChartProps
> {
  public static contextType = ModelAssessmentContext;
  public context: React.ContextType<
    typeof ModelAssessmentContext
  > = defaultModelAssessmentContext;

  public render(): React.ReactNode {
    const styles = CausalAggregateStyles();
    return (
      <Stack horizontal verticalFill className={styles.container}>
        <Stack.Item grow className={styles.leftPane}>
          <AccessibleChart
            plotlyProps={this.generateCausalAggregatePlotlyProps()}
            theme={getTheme()}
          />
        </Stack.Item>
        <Stack.Item grow className={styles.rightPane}>
          <Stack horizontal={false}>
            <Stack.Item className={styles.header}>
              {localization.CausalAnalysis.AggregateView.continuous}
              {localization.CausalAnalysis.AggregateView.continuousDescription}
            </Stack.Item>
            <Stack.Item className={styles.label}>
              <Text variant={"xLarge"} className={styles.header}>
                {localization.CausalAnalysis.AggregateView.binary}
              </Text>
              {localization.CausalAnalysis.AggregateView.binaryDescription}
            </Stack.Item>
            <Stack.Item className={styles.lasso}>
              {localization.CausalAnalysis.AggregateView.lasso}{" "}
              <Link
                href="https://econml.azurewebsites.net/spec/estimation/dml.html"
                target="_blank"
              >
                {localization.CausalAnalysis.AggregateView.here}
              </Link>
            </Stack.Item>
          </Stack>
        </Stack.Item>
      </Stack>
    );
  }

  public componentDidUpdate(prevProps: ICausalAggregateChartProps): void {
    if (!isEqual(prevProps.data, this.props.data)) {
      this.forceUpdate();
    }
  }
  private generateCausalAggregatePlotlyProps(): IPlotlyProperty {
    const plotlyProps = _.cloneDeep(basePlotlyProperties);
    plotlyProps.data = [
      {
        error_y: {
          array: this.props.data.map((d) => d.ci_upper - d.point),
          arrayminus: this.props.data.map((d) => d.point - d.ci_lower),
          type: "data",
          visible: true
        },
        mode: "markers",
        type: "scatter",
        x: this.props.data.map((d) => getCausalDisplayFeatureName(d)),
        y: this.props.data.map((d) => d.point)
      }
    ];
    return plotlyProps;
  }
}
