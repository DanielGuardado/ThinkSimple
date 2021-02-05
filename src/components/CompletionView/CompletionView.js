import React from "react";
import { Header, Button } from "semantic-ui-react";

import { tripSurveyContent, submitionContent } from "../../helpers/content";
import SVGIcon from "../SvgIcon/SvgIcon";

export default function CompletionView() {
  return (
    <>
      <SVGIcon name="low-risk" />
      <Header as="h1" content={tripSurveyContent.title} />
      <Button content={submitionContent.button} style={{ width: "50%" }} />
    </>
  );
}
