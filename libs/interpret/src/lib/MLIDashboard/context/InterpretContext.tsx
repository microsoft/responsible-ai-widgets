// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  Cohort,
  IGlobalFeatureImportance,
  JointDataset
} from "@responsible-ai/core-ui";
import React from "react";

import { ITelemetryMessage } from "../Interfaces/ITelemetryMessage";

export interface IInterpretContext {
  cohorts: Cohort[];
  globalImportance?: IGlobalFeatureImportance;
  jointDataset: JointDataset;
  telemetryHook: (message: ITelemetryMessage) => void;
  requestPredictions:
    | ((request: any[], abortSignal: AbortSignal) => Promise<any[]>)
    | undefined;
  requestLocalFeatureExplanations:
    | ((
        request: any[],
        abortSignal: AbortSignal,
        explanationAlgorithm?: string
      ) => Promise<any[]>)
    | undefined;
}

const interpretContext = React.createContext<IInterpretContext>({
  cohorts: [],
  globalImportance: undefined,
  jointDataset: {} as JointDataset,
  requestLocalFeatureExplanations: undefined,
  requestPredictions: undefined,
  telemetryHook: () => undefined
});
export { interpretContext as InterpretContext };
