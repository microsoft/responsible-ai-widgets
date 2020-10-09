// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ActionButton, Stack, Text } from "office-ui-fabric-react";
import React from "react";

import { localization } from "@responsible-ai/localization";

import { IntroTabStyles } from "./IntroTab.styles";

export interface IIntroTabProps {
  onNext: () => void;
}

export class IntroTab extends React.PureComponent<IIntroTabProps> {
  public render(): React.ReactNode {
    const styles = IntroTabStyles();
    return (
      <Stack style={{ height: "100%" }}>
        <div className={styles.firstSection}>
          <Text className={styles.firstSectionTitle} block>
            {localization.Intro.welcome}
          </Text>
          <Text className={styles.firstSectionSubtitle} block>
            {localization.Intro.fairnessDashboard}
          </Text>
          <Text variant={"large"} block>
            {localization.Intro.introBody}
          </Text>
        </div>
        <div className={styles.lowerSection}>
          <div className={styles.stepsContainer}>
            <Text variant={"large"} className={styles.boldStep}>
              {localization.Intro.explanatoryStep}
            </Text>
            <div className={styles.explanatoryStep}>
              <div>
                <Text variant={"large"} className={styles.numericLabel}>
                  01
                </Text>
                <Text variant={"large"}>{localization.Intro.features}</Text>
              </div>
              <Text className={styles.explanatoryText} block>
                {localization.Intro.featuresInfo}
              </Text>
            </div>
            <div className={styles.explanatoryStep}>
              <div>
                <Text variant={"large"} className={styles.numericLabel}>
                  02
                </Text>
                <Text variant={"large"}>{localization.Intro.performance}</Text>
              </div>
              <Text className={styles.explanatoryText} block>
                {localization.Intro.performanceInfo}
              </Text>
            </div>
          </div>
          <Stack horizontalAlign={"center"}>
            <ActionButton
              iconProps={{ iconName: "Forward" }}
              className={styles.getStarted}
              onClick={this.props.onNext}
            >
              {localization.Intro.getStarted}
            </ActionButton>
          </Stack>
        </div>
      </Stack>
    );
  }
}
