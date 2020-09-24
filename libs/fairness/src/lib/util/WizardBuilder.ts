// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ModelMetadata,
  ICategoricalRange,
  RangeTypes
} from "@responsible-ai/mlchartlib";
import _ from "lodash";
import { initializeIcons } from "office-ui-fabric-react";

import {
  IFairnessProps,
  IFairnessBaseData,
  IRunTimeFairnessData,
  IPreComputedFairnessData,
  PredictionType,
  PredictionTypes,
  IPreComputedData
} from "../IFairnessProps";
import { localization } from "../Localization/localization";

import { IPerformanceOption, performanceOptions } from "./PerformanceMetrics";
import { BinnedResponseBuilder } from "./BinnedResponseBuilder";
import { IBinnedResponse } from "./IBinnedResponse";
import {
  IRunTimeFairnessContext,
  IFairnessContext,
  IFairnessModelMetadata
} from "./IFairnessContext";
import { IParityOption, parityOptions } from "./ParityMetrics";

export class WizardBuilder {
  private static iconsInitialized = false;
  public static initializeIcons(props: IFairnessProps): void {
    if (
      WizardBuilder.iconsInitialized === false &&
      props.shouldInitializeIcons !== false
    ) {
      initializeIcons(props.iconUrl);
      WizardBuilder.iconsInitialized = true;
    }
  }

  public static buildModelNames(props: IFairnessBaseData): string[] {
    return !!props.modelNames &&
      props.modelNames.length === props.predictedY.length
      ? props.modelNames
      : props.predictedY.map((_, modelIndex) => `Model ${modelIndex}`);
  }

  public static buildInitialFairnessContext(
    props: IRunTimeFairnessData
  ): IRunTimeFairnessContext {
    return {
      binVector: [],
      dataset: props.testData,
      groupNames: [],
      modelMetadata: this.buildModelMetadata(props),
      modelNames: this.buildModelNames(props),
      predictions: props.predictedY,
      trueY: props.trueY
    };
  }

  public static buildPrecomputedFairnessContext(
    props: IPreComputedFairnessData
  ): IFairnessContext {
    return {
      binVector: props.precomputedFeatureBins[0].binVector,
      dataset: undefined,
      groupNames: props.precomputedFeatureBins[0].binLabels,
      modelMetadata: this.buildPrecomputedModelMetadata(props),
      modelNames: this.buildModelNames(props),
      predictions: props.predictedY,
      trueY: props.trueY
    };
  }

  public static getClassLength(props: IFairnessBaseData): number {
    return _.uniq(props.trueY).length;
  }

  public static buildPrecomputedModelMetadata(
    props: IPreComputedFairnessData
  ): IFairnessModelMetadata {
    let featureNames = props.dataSummary?.featureNames;
    if (!featureNames) {
      featureNames = props.precomputedFeatureBins.map((binObject, index) => {
        return (
          binObject.featureBinName ||
          localization.formatString(localization.defaultFeatureNames, index)
        );
      });
    }
    const classNames =
      props.dataSummary?.classNames ||
      this.buildIndexedNames(
        this.getClassLength(props),
        localization.defaultClassNames
      );
    const featureRanges = props.precomputedFeatureBins.map((binMeta) => {
      return {
        rangeType: RangeTypes.Categorical,
        uniqueValues: binMeta.binLabels
      } as ICategoricalRange;
    });
    return {
      classNames,
      featureIsCategorical: props.precomputedFeatureBins.map(() => true),
      featureNames,
      featureNamesAbridged: featureNames,
      featureRanges,
      PredictionType: props.predictionType
    };
  }

  public static buildModelMetadata(
    props: IRunTimeFairnessData
  ): Required<IFairnessModelMetadata> {
    let featureNames = props.dataSummary?.featureNames;
    if (!featureNames) {
      let featureLength = 0;
      if (props.testData && props.testData[0] !== undefined) {
        featureLength = props.testData[0].length;
      }
      featureNames =
        featureLength === 1
          ? [localization.defaultSingleFeatureName]
          : this.buildIndexedNames(
              featureLength,
              localization.defaultFeatureNames
            );
    }
    const classNames =
      props.dataSummary?.classNames ||
      this.buildIndexedNames(
        this.getClassLength(props),
        localization.defaultClassNames
      );
    const featureIsCategorical = ModelMetadata.buildIsCategorical(
      featureNames.length,
      props.testData,
      props.dataSummary?.categoricalMap
    );
    const featureRanges = ModelMetadata.buildFeatureRanges(
      props.testData,
      featureIsCategorical,
      props.dataSummary?.categoricalMap
    );
    const predictionType = this.determinePredictionType(
      props.trueY,
      props.predictedY,
      props.predictionType
    );
    return {
      classNames,
      featureIsCategorical,
      featureNames,
      featureNamesAbridged: featureNames,
      featureRanges,
      PredictionType: predictionType
    };
  }

  public static buildIndexedNames(
    length: number,
    baseString: string
  ): string[] {
    return [...new Array(length).keys()].map((i) =>
      localization.formatString(baseString, i.toString())
    );
  }

  public static determinePredictionType(
    trueY: number[],
    predictedY: number[][],
    specifiedType?: PredictionType
  ): PredictionType {
    if (
      specifiedType === PredictionTypes.BinaryClassification ||
      specifiedType === PredictionTypes.Probability ||
      specifiedType === PredictionTypes.Regression
    ) {
      return specifiedType;
    }
    const predictedIsPossibleProba = predictedY.every((predictionVector) =>
      predictionVector.every((x) => x >= 0 && x <= 1)
    );
    const trueIsBinary = _.uniq(trueY).length < 3;
    if (!trueIsBinary) {
      return PredictionTypes.Regression;
    }
    if (_.uniq(_.flatten(predictedY)).length < 3) {
      return PredictionTypes.BinaryClassification;
    }
    if (predictedIsPossibleProba) {
      return PredictionTypes.Probability;
    }
    return PredictionTypes.Regression;
  }

  public static buildPerformanceListForPrecomputedMetrics(
    props: IPreComputedFairnessData
  ): IPerformanceOption[] {
    const customMetrics: IPerformanceOption[] = [];
    const providedMetrics: IPerformanceOption[] = [];
    Object.keys(props.precomputedMetrics[0][0]).forEach((key) => {
      const metric = performanceOptions[key];
      if (metric !== undefined) {
        if (metric.userVisible) {
          providedMetrics.push(metric);
        }
      } else {
        const customMetric = props.customMetrics?.find(
          (metric) => metric.id === key
        );

        customMetrics.push({
          description: customMetric?.description,
          isMinimization: true,
          isPercentage: true,
          key,
          title:
            customMetric?.name ||
            localization.formatString(
              localization.defaultCustomMetricName,
              customMetrics.length
            )
        });
      }
    });
    return customMetrics.concat(providedMetrics);
  }

  public static buildParityListForPrecomputedMetrics(
    props: IPreComputedData
  ): IParityOption[] {
    const customMetrics: IParityOption[] = [];
    const providedMetrics: IParityOption[] = [];
    Object.keys(props.precomputedMetrics[0][0]).forEach((key) => {
      const metric = parityOptions[key];
      if (metric !== undefined) {
        providedMetrics.push(metric);
      }
    });
    return customMetrics.concat(providedMetrics);
  }

  public static buildFeatureBins(
    fairnessContext: IRunTimeFairnessContext
  ): IBinnedResponse[] {
    return fairnessContext.modelMetadata.featureNames.map((_, index) => {
      return BinnedResponseBuilder.buildDefaultBin(
        fairnessContext.modelMetadata.featureRanges[index],
        index,
        fairnessContext.dataset
      );
    });
  }

  public static generateBinVectorForBin(
    value: IBinnedResponse,
    dataset: any[][] | undefined
  ): number[] {
    if (!dataset) {
      return [];
    }
    return dataset.map((row) => {
      const featureValue = row[value.featureIndex];
      if (value.rangeType === RangeTypes.Categorical) {
        // this handles categorical, as well as integers when user requests to treat as categorical
        return value.array.indexOf(featureValue);
      }
      return value.array.findIndex((upperLimit) => {
        return upperLimit >= featureValue;
      });
    });
  }
}
