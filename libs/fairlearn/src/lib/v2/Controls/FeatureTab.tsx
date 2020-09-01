import { INumericRange, RangeTypes } from "@responsible-ai/mlchartlib";
import {
  ActionButton,
  Icon,
  List,
  Modal,
  Stack,
  StackItem,
  Text,
  IProcessedStyleSet
} from "office-ui-fabric-react";

import React from "react";
import { IBinnedResponse } from "../../util/IBinnedResponse";
import { IWizardTabProps } from "../IWizardTabProps";
import { localization } from "../../Localization/localization";
import { BinDialog } from "./BinDialog";
import { DataSpecificationBlade } from "./DataSpecificationBlade";
import { WizardFooter } from "./WizardFooter";
import { FeatureTabStyles, IFeatureTabStyles } from "./FeatureTab.styles";

export interface IFeatureTabProps extends IWizardTabProps {
  featureBins: IBinnedResponse[];
  selectedFeatureIndex: number;
  selectedFeatureChange: (value: number) => void;
  saveBin: (bin: IBinnedResponse) => void;
}

interface IState {
  expandedBins: number[];
  editingFeatureIndex: number | undefined;
}

export class FeatureTab extends React.PureComponent<IFeatureTabProps, IState> {
  public constructor(props: IFeatureTabProps) {
    super(props);
    this.state = {
      expandedBins: [],
      editingFeatureIndex: undefined
    };
  }

  public render(): React.ReactNode {
    const styles = FeatureTabStyles();
    return (
      <Stack
        horizontal
        horizontalAlign="space-between"
        className={styles.frame}
      >
        <Modal
          isOpen={this.state.editingFeatureIndex !== undefined}
          isBlocking={false}
          onDismiss={this.hideModal}
        >
          {this.state.editingFeatureIndex !== undefined && (
            <BinDialog
              range={
                this.props.dashboardContext.modelMetadata.featureRanges[
                  this.state.editingFeatureIndex
                ] as INumericRange
              }
              bins={this.props.featureBins[this.state.editingFeatureIndex]}
              dataset={this.props.dashboardContext.dataset}
              index={this.state.editingFeatureIndex}
              onSave={this.onBinSave}
              onCancel={this.hideModal}
            />
          )}
        </Modal>
        <Stack className={styles.main}>
          <Text variant={"mediumPlus"} className={styles.header} block>
            {localization.Feature.header}
          </Text>
          <Text className={styles.textBody} block>
            {localization.Feature.body}
          </Text>
          <div className={styles.tableHeader}>
            <Text block>{localization.Intro.features}</Text>
            <Text className={styles.subgroupHeader} block>
              {localization.Feature.subgroups}
            </Text>
          </div>
          <StackItem grow={2} className={styles.itemsList}>
            <List
              items={this.props.featureBins}
              onRenderCell={this._onRenderCell.bind(this, styles)}
            />
          </StackItem>
          <WizardFooter onNext={this.props.onNext} />
        </Stack>
        <DataSpecificationBlade
          numberRows={this.props.dashboardContext.trueY.length}
          featureNames={this.props.dashboardContext.modelMetadata.featureNames}
        />
      </Stack>
    );
  }

  private readonly hideModal = (): void => {
    this.setState({ editingFeatureIndex: undefined });
  };

  private readonly onBinSave = (bin: IBinnedResponse): void => {
    this.setState({ editingFeatureIndex: undefined });
    this.props.saveBin(bin);
  };

  private readonly editBins = (index: number): void => {
    this.setState({ editingFeatureIndex: index });
  };

  private readonly _onRenderCell = (
    styles: IProcessedStyleSet<IFeatureTabStyles>,
    item?: IBinnedResponse | undefined,
    index?: number | undefined
  ): JSX.Element => {
    if (item === undefined || index === undefined) {
      return <div />;
    }
    return (
      <div
        key={index}
        className={styles.itemCell}
        onClick={this.props.selectedFeatureChange.bind(this, index)}
        data-is-focusable={true}
      >
        <div className={styles.iconWrapper}>
          <Icon
            iconName={
              this.props.selectedFeatureIndex === index
                ? "RadioBtnOn"
                : "RadioBtnOff"
            }
            className={styles.iconClass}
          />
        </div>
        <div className={styles.featureDescriptionSection}>
          <Text className={styles.itemTitle} block>
            {this.props.dashboardContext.modelMetadata.featureNames[index]}
          </Text>
          {item.rangeType === RangeTypes.categorical && (
            <Text variant={"mediumPlus"} className={styles.valueCount} block>
              {localization.formatString(
                localization.Feature.summaryCategoricalCount,
                item.array.length
              )}
            </Text>
          )}
          {item.rangeType !== RangeTypes.categorical && (
            <Text variant={"mediumPlus"} className={styles.valueCount} block>
              {localization.formatString(
                localization.Feature.summaryNumericCount,
                (this.props.dashboardContext.modelMetadata.featureRanges[
                  index
                ] as INumericRange).min,
                (this.props.dashboardContext.modelMetadata.featureRanges[
                  index
                ] as INumericRange).max,
                item.labelArray.length
              )}
            </Text>
          )}
          {!this.props.dashboardContext.modelMetadata.featureIsCategorical[
            index
          ] && (
            <ActionButton
              className={styles.expandButton}
              iconProps={{ iconName: "Edit" }}
              onClick={this.editBins.bind(this, index)}
            >
              {localization.Feature.editBinning}
            </ActionButton>
          )}
        </div>
        <div className={styles.binSection}>
          {!this.state.expandedBins.includes(index) && !!item.labelArray && (
            <div>
              {item.labelArray.slice(0, 7).map((category, index) => (
                <Text key={index} className={styles.category} block>
                  {category}
                </Text>
              ))}
              {item.labelArray.length > 7 && (
                <ActionButton
                  className={styles.expandButton}
                  iconProps={{ iconName: "ChevronDownMed" }}
                  onClick={this.updateExpandedList.bind(this, index)}
                >
                  {localization.Feature.showCategories}
                </ActionButton>
              )}
            </div>
          )}
          {this.state.expandedBins.includes(index) && !!item.labelArray && (
            <div>
              {item.labelArray.map((category, index) => (
                <div key={index} className={styles.category}>
                  {category}
                </div>
              ))}
              {
                <ActionButton
                  className={styles.expandButton}
                  iconProps={{ iconName: "ChevronUpMed" }}
                  onClick={this.updateExpandedList.bind(this, undefined)}
                >
                  {localization.Feature.hideCategories}
                </ActionButton>
              }
            </div>
          )}
        </div>
      </div>
    );
  };

  private readonly updateExpandedList = (value?: number): void => {
    if (value !== undefined) {
      this.setState({ expandedBins: [value] });
    }
  };
}
