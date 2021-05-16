// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ErrorCohort, ICasualAnalysisData } from "@responsible-ai/core-ui";
import { ITheme } from "office-ui-fabric-react";
import React from "react";

import { IDataset } from "../Interfaces/IDataset";
import { IErrorAnalysisConfig } from "../Interfaces/IErrorAnalysisConfig";
import { IExplanationModelMetadata } from "../Interfaces/IExplanationContext";
import { IModelExplanationData } from "../Interfaces/IModelExplanationData";
import { ITelemetryMessage } from "../util/ITelemetryMessage";
import { JointDataset } from "../util/JointDataset";

export interface IModelAssessmentContext {
  casualAnalysisData?: ICasualAnalysisData;
  dataset: IDataset;
  modelExplanationData?: IModelExplanationData;
  errorAnalysisConfig?: IErrorAnalysisConfig;
  theme?: ITheme;
  // Everything below this comment should eventually be removed.
  // Instead, dataset and modelExplanationData should suffice.
  errorCohorts: ErrorCohort[];
  readonly baseErrorCohort: ErrorCohort;
  readonly selectedErrorCohort: ErrorCohort;
  jointDataset: JointDataset;
  modelMetadata: IExplanationModelMetadata;
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
  updateErrorCohorts(
    cohorts: ErrorCohort[],
    selectedCohort: ErrorCohort,
    baseCohort?: ErrorCohort
  ): void;
}

export const defaultModelAssessmentContext: IModelAssessmentContext = {
  baseErrorCohort: {} as ErrorCohort,
  casualAnalysisData: undefined,
  dataset: {} as IDataset,
  errorCohorts: [],
  jointDataset: {} as JointDataset,
  modelExplanationData: undefined,
  modelMetadata: {} as IExplanationModelMetadata,
  requestLocalFeatureExplanations: undefined,
  requestPredictions: undefined,
  selectedErrorCohort: {} as ErrorCohort,
  telemetryHook: () => undefined,
  theme: {} as ITheme,
  updateErrorCohorts: () => undefined
};
const modelAssessmentContext = React.createContext<IModelAssessmentContext>(
  defaultModelAssessmentContext
);
export { modelAssessmentContext as ModelAssessmentContext };
