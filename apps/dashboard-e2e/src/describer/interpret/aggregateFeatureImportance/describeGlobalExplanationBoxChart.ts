// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BoxChart } from "../../../util/BoxChart";
import { getMenu } from "../../../util/getMenu";
import { IInterpretData } from "../IInterpretData";

import { describeGlobalExplanationChart } from "./describeGlobalExplanationChart";

export function describeGlobalExplanationBoxChart(
  dataShape: IInterpretData
): void {
  describe("Box chart", () => {
    const props = {
      chart: (undefined as unknown) as BoxChart,
      dataShape
    };
    beforeEach(() => {
      getMenu("Aggregate Feature Importance", "#DashboardPivot")
        .click()
        .get("#GlobalExplanationSettingsButton")
        .click()
        .get(
          '#GlobalExplanationSettingsCallout #ChartTypeSelection label:contains("Box")'
        )
        .click({ force: true })
        .get("#GlobalExplanationSettingsButton")
        .click();
      props.chart = new BoxChart("#FeatureImportanceBar");
    });
    describeGlobalExplanationChart(props);
  });
}
