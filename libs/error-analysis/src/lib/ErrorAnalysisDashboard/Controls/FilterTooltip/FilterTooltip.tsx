// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Metrics } from "@responsible-ai/core-ui";
import { localization } from "@responsible-ai/localization";
import { getTheme } from "office-ui-fabric-react";
import React from "react";

import { FilterProps } from "../../FilterProps";
import { MetricUtils, MetricLocalizationType } from "../../MetricUtils";

import { filterTooltipStyles } from "./FilterTooltip.styles";

export interface IFilterTooltipProps {
  filterProps: FilterProps;
}

export class FilterTooltip extends React.Component<IFilterTooltipProps> {
  public render(): React.ReactNode {
    const classNames = filterTooltipStyles();
    const theme = getTheme();
    const isErrorRate = this.props.filterProps.metricName === Metrics.ErrorRate;
    return (
      <>
        <g>
          {isErrorRate && (
            <g>
              <text className={classNames.numCorrect}>
                Correct (#): {this.props.filterProps.numCorrect}
              </text>
              <text className={classNames.numIncorrect}>
                Incorrect (#): {this.props.filterProps.numIncorrect}
              </text>
            </g>
          )}
          {!isErrorRate && (
            <g>
              <text className={classNames.numCorrect}>
                Count (#): {this.props.filterProps.totalCount.toFixed(0)}
              </text>
              <text className={classNames.numIncorrect}>
                Error sum: {this.props.filterProps.numIncorrect.toFixed(2)}
              </text>
            </g>
          )}
          <line
            x1="1"
            y1="30"
            x2="80"
            y2="30"
            style={{
              stroke: theme.palette.themeLighterAlt,
              strokeWidth: "1"
            }}
          />
        </g>
        <g>
          <g className={classNames.errorCoverageCell}>
            <rect className={classNames.metricBarBlack} />
            <g>
              <text className={classNames.smallHeader}>
                {localization.ErrorAnalysis.errorCoverage}
              </text>
              <text className={classNames.valueBlack}>
                {this.props.filterProps.errorCoverage.toFixed(2)}%
              </text>
            </g>
          </g>
          <g className={classNames.errorRateCell}>
            <rect className={classNames.metricBarRed} />
            <g>
              <text className={classNames.smallHeader}>
                {MetricUtils.getLocalizedMetric(
                  this.props.filterProps.metricName,
                  MetricLocalizationType.Short
                )}
              </text>
              <text className={classNames.valueBlack}>
                {this.props.filterProps.metricValue.toFixed(2)}
                {isErrorRate ? "%" : ""}
              </text>
            </g>
          </g>
        </g>
      </>
    );
  }
}
