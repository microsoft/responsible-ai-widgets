// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  IStyle,
  mergeStyleSets,
  IProcessedStyleSet,
  mergeStyles
} from "office-ui-fabric-react";

export interface ITreeViewRendererStyles {
  clickedNodeDashed: IStyle;
  mainFrame: IStyle;
  svgOuterFrame: IStyle;
  innerFrame: IStyle;
  node: IStyle;
  nodeText: IStyle;
  nopointer: IStyle;
  linkLabel: IStyle;
  detailLines: IStyle;
  detailPercLabel: IStyle;
  details: IStyle;
  innerOpacityToggle: IStyle;
  opacityToggleRect: IStyle;
  opacityToggleCircle: IStyle;
  nonOpacityToggleCircle: IStyle;
  detailPerc: IStyle;
  linksTransitionGroup: IStyle;
  nodesTransitionGroup: IStyle;
  linkLabelsTransitionGroup: IStyle;
}

export const treeViewRendererStyles: () => IProcessedStyleSet<
  ITreeViewRendererStyles
> = () => {
  const detailStyle = {
    fill: "#777",
    font: "normal 12px Arial",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontWeight: "bold",
    pointerEvents: "none",
    textAnchor: "middle"
  };
  return mergeStyleSets<ITreeViewRendererStyles>({
    clickedNodeDashed: {
      fill: "none",
      stroke: "#0078D4",
      strokeDasharray: "3, 3",
      strokeWidth: 2
    },
    detailLines: mergeStyles([
      detailStyle,
      {
        textAnchor: "start",
        transform: "translate(0px, 10px)"
      }
    ]),
    detailPerc: mergeStyles([
      detailStyle,
      {
        transform: "translate(0px, 45px)"
      }
    ]),
    detailPercLabel: mergeStyles([
      detailStyle,
      {
        fontSize: "0.65em",
        transform: "translate(0px, 55px)"
      }
    ]),
    details: {
      transform: "translate(0px, 5px)"
    },
    innerFrame: {
      height: "55%",
      margin: "0",
      padding: "0",
      width: "100%"
    },
    innerOpacityToggle: {
      transform: "translate(10px, 10px)"
    },
    linkLabel: {
      fill: "#777",
      font: "normal 12px Arial",
      fontFamily: "Arial, Helvetica, sans-serif",
      pointerEvents: "none",
      textAnchor: "middle"
    },
    linkLabelsTransitionGroup: {
      transform: "translate(0px, 90px)"
    },
    linksTransitionGroup: {
      transform: "translate(0px, 90px)"
    },
    mainFrame: {
      height: "820px",
      margin: "0",
      padding: "0",
      width: "100%"
    },
    node: {
      ":hover": {
        strokeWidth: "3px"
      },
      cursor: "pointer",
      opacity: "1",
      stroke: "#089acc",
      strokeWidth: "0px"
    },
    nodesTransitionGroup: {
      transform: "translate(0px, 90px)"
    },
    nodeText: {
      fill: "#555",
      fontSize: "9px",
      pointerEvents: "none",
      transform: "translate(0px, 0px)"
    },
    nonOpacityToggleCircle: {
      transform: "translate(100px, 50px)"
    },
    nopointer: {
      pointerEvents: "none"
    },
    opacityToggleCircle: {
      transform: "translate(30px, 50px)"
    },
    opacityToggleRect: {
      transform: "translate(-5px, -5px)"
    },
    svgOuterFrame: {
      margin: "0",
      padding: "0",
      width: "100%"
    }
  });
};
