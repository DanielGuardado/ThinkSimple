import React from "react";

import { Button, Divider, Header } from "semantic-ui-react";

import "./CompletionView.css";
import buttons from "../../components/config/buttons";
import colors from "../../components/config/colors";
import { submitionContent, tripSurveyContent } from "../../helpers/content";
import { SVGIcon } from "../SvgIcon";

export default function CompletionView({ risk, setFormStatus }) {
  return (
    <div className={!risk ? "container no-risk" : "container risk"}>
      {!risk ? (
        <>
          <SVGIcon name="low-risk" />
          <Header as="h1" content={tripSurveyContent.title} />
          <Divider />
          <p>{submitionContent.subtitleNoRisk}</p>
          <Button
            color={colors.noRiskButton}
            content={submitionContent.button}
            onClick={() => setFormStatus(false)}
            style={{ width: buttons.completionButton }}
          />
        </>
      ) : (
        <>
          <SVGIcon name="high-risk" />
          <Header as="h1" content={tripSurveyContent.title} />
          <Divider />
          <p>{submitionContent.subtitleRisk}</p>
          <Button
            color={colors.riskButton}
            content={submitionContent.button}
            onClick={() => setFormStatus(false)}
            style={{ width: buttons.completionButton }}
          />
        </>
      )}
    </div>
  );
}
