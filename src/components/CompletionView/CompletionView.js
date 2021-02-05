import React from "react";
import { Header, Button } from "semantic-ui-react";

import { tripSurveyContent, submitionContent } from "../../helpers/content";
import SVGIcon from "../SvgIcon/SvgIcon";

export default function CompletionView({ risk, setFormStatus }) {
  return (
    <>
      {!risk ? (
        <>
          <SVGIcon name="low-risk" />
          <Header as="h1" content={tripSurveyContent.title} />
          <p>{submitionContent.subtitleNoRisk}</p>
          <Button
            onClick={() => setFormStatus(false)}
            content={submitionContent.button}
            style={{ width: "50%" }}
          />
        </>
      ) : (
        <>
          <SVGIcon name="high-risk" />
          <Header as="h1" content={tripSurveyContent.title} />
          <p>{submitionContent.subtitleRisk}</p>
          <Button
            onClick={() => setFormStatus(false)}
            content={submitionContent.button}
            style={{ width: "50%" }}
          />
        </>
      )}
    </>
  );
}
