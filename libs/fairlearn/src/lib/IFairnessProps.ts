import { Never } from "@responsible-ai/core-ui";
export interface IDatasetSummary {
  featureNames?: string[];
  classNames?: string[];
  categoricalMap?: { [key: number]: string[] };
}

export enum PredictionTypes {
  binaryClassification = "binaryClassification",
  regression = "regression",
  probability = "probability"
}

export type PredictionType =
  | PredictionTypes.binaryClassification
  | PredictionTypes.probability
  | PredictionTypes.regression;

export interface IMetricResponse {
  global: number;
  bins: number[];
}

export interface IMetricRequest {
  metricKey: string;
  binVector: number[];
  modelIndex: number;
}

export interface IFeatureBinMeta {
  binVector: number[];
  binLabels: string[];
  // this could also be held in a 'features name' array separate with the same length.
  featureBinName: string;
}

export interface ICustomMetric {
  name?: string;
  description?: string;
  id: string;
}

export interface IFairnessBaseData {
  dataSummary?: IDatasetSummary;
  // One array per each model;
  predictedY: number[][];
  modelNames?: string[];
  trueY: number[];
  testData?: any[][];
}
export interface IPreComputedData {
  precomputedMetrics: Array<Array<{ [key: string]: IMetricResponse }>>;
  precomputedFeatureBins: IFeatureBinMeta[];
  predictionType: PredictionTypes;
  customMetrics?: ICustomMetric[];
}
export type IRunTimeData = Never<IPreComputedData> & {
  testData: any[][];
};
export type IPreComputedFairnessData = IFairnessBaseData & IPreComputedData;
export type IRunTimeFairnessData = IFairnessBaseData & IRunTimeData;

export type IFairnessData = IPreComputedFairnessData | IRunTimeFairnessData;

export type IFairnessProps = IFairnessData & {
  startingTabIndex?: number;
  theme?: any;
  locale?: string;
  stringParams?: any;
  supportedBinaryClassificationAccuracyKeys: string[];
  supportedRegressionAccuracyKeys: string[];
  supportedProbabilityAccuracyKeys: string[];
  shouldInitializeIcons?: boolean;
  iconUrl?: string;
  // The request hook
  requestMetrics?: (
    request: IMetricRequest,
    abortSignal?: AbortSignal
  ) => Promise<IMetricResponse>;
};
