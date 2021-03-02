// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Dictionary } from "lodash";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { IMetricResponse } from "@responsible-ai/core-ui";

export interface IMetrics {
  performance: IMetricResponse;
  outcomes: IMetricResponse;
  disparities: Dictionary<number>;
  // Optional, based on model type
  falsePositiveRates?: IMetricResponse;
  falseNegativeRates?: IMetricResponse;
  overpredictions?: IMetricResponse;
  underpredictions?: IMetricResponse;
  // different length, raw unbinned errors and predictions
  errors?: number[];
  predictions?: number[];
}
