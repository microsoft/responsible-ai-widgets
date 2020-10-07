// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { getMenu } from "../../../util/getMenu";
import { ScatterChart } from "../../../util/ScatterChart";
import { IInterpretData } from "../IInterpretData";

export function describeSubLineChart(dataShape: IInterpretData): void {
  const props = {
    chart: (undefined as unknown) as ScatterChart,
    dataShape
  };
  describe("Sub line chart", () => {
    beforeEach(() => {
      getMenu(
        "Individual Feature Importance & What-If",
        "#DashboardPivot"
      ).click();
      props.chart = new ScatterChart("#IndividualFeatureImportanceChart");
      props.chart.clickNthPoint(0);

      cy.get('#subPlotChoice label:contains("ICE")').click();
    });
    it("should have more than one point", () => {
      cy.get("#subPlotContainer svg g[class^='plot'] .points .point")
        .its("length")
        .should("be.gte", 1);
    });
  });
}
