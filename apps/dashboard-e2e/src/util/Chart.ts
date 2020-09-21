// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export interface IChartElement {
  readonly left: number;
  readonly right: number;
  readonly top: number;
  readonly bottom: number;
}

export abstract class Chart<TElement extends IChartElement> {
  public constructor(protected container: string) {
    return;
  }
  public abstract get Elements(): TElement[];
  public get VisibleElements(): TElement[] {
    const svgWidth = this.getSvgWidth();
    if (!svgWidth) {
      throw new Error("Failed to determine svg width");
    }
    return this.Elements.filter((b) => b && b.right < svgWidth);
  }
  private getSvgWidth(): number | undefined {
    return cy.$$(`${this.container} svg`).width();
  }
}
