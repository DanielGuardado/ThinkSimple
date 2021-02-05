import React from "react";

import { Header, Button, Divider } from "semantic-ui-react";

import "./CompletionView.css";
import { tripSurveyContent, submitionContent } from "../../helpers/content";
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
            onClick={() => setFormStatus(false)}
            content={submitionContent.button}
            style={{ width: "50%" }}
            color="green"
          />
        </>
      ) : (
        <>
          <SVGIcon name="high-risk" />
          <Header as="h1" content={tripSurveyContent.title} />
          <Divider />
          <p>{submitionContent.subtitleRisk}</p>
          <Button
            onClick={() => setFormStatus(false)}
            content={submitionContent.button}
            style={{ width: "50%" }}
            color="red"
          />
        </>
      )}
    </div>
  );
}
