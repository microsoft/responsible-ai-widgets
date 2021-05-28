// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  defaultModelAssessmentContext,
  ICausalAnalysisSingleData,
  ModelAssessmentContext,
  nameof
} from "@responsible-ai/core-ui";
import { localization } from "@responsible-ai/localization";
import { isEqual } from "lodash";
import {
  DetailsList,
  DetailsListLayoutMode,
  IColumn,
  SelectionMode
} from "office-ui-fabric-react";
import React from "react";

export interface ICausalAggregateTableProps {
  data: ICausalAnalysisSingleData[];
}

export class CausalAggregateTable extends React.PureComponent<
  ICausalAggregateTableProps
> {
  public static contextType = ModelAssessmentContext;
  public context: React.ContextType<
    typeof ModelAssessmentContext
  > = defaultModelAssessmentContext;

  public render(): React.ReactNode {
    const columns: IColumn[] = [
      {
        fieldName: nameof<ICausalAnalysisSingleData>("feature"),
        key: "name",
        maxWidth: 75,
        minWidth: 50,
        name: localization.ModelAssessment.CausalAnalysis.Table.name
      },
      {
        fieldName: nameof<ICausalAnalysisSingleData>("p_value"),
        key: "point",
        maxWidth: 75,
        minWidth: 50,
        name: localization.ModelAssessment.CausalAnalysis.Table.point
      },
      {
        fieldName: nameof<ICausalAnalysisSingleData>("stderr"),
        key: "stderr",
        maxWidth: 75,
        minWidth: 50,
        name: localization.ModelAssessment.CausalAnalysis.Table.stderr
      },
      {
        fieldName: nameof<ICausalAnalysisSingleData>("zstat"),
        key: "zstat",
        maxWidth: 75,
        minWidth: 50,
        name: localization.ModelAssessment.CausalAnalysis.Table.zstat
      },
      {
        fieldName: nameof<ICausalAnalysisSingleData>("p_value"),
        key: "pValue",
        maxWidth: 75,
        minWidth: 50,
        name: localization.ModelAssessment.CausalAnalysis.Table.pValue
      },
      {
        fieldName: nameof<ICausalAnalysisSingleData>("ci_lower"),
        key: "ciLower",
        maxWidth: 75,
        minWidth: 50,
        name: localization.ModelAssessment.CausalAnalysis.Table.ciLower
      },
      {
        fieldName: nameof<ICausalAnalysisSingleData>("ci_upper"),
        key: "ciUpper",
        maxWidth: 75,
        minWidth: 50,
        name: localization.ModelAssessment.CausalAnalysis.Table.ciUpper
      }
    ];
    const items = this.props.data;
    return (
      <DetailsList
        items={items}
        columns={columns}
        selectionMode={SelectionMode.none}
        setKey="set"
        layoutMode={DetailsListLayoutMode.justified}
      />
    );
  }

  public componentDidUpdate(prevProps: ICausalAggregateTableProps): void {
    if (!isEqual(prevProps.data, this.props.data)) {
      this.forceUpdate();
    }
  }
}
