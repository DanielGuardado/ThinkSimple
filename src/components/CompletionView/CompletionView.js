import React from "react";
import { Header, Button } from "semantic-ui-react";

import { tripSurveyContent, submitionContent } from "../../helpers/content";
import SVGIcon from "../SvgIcon/SvgIcon";

export default function CompletionView() {
  return (
    <>
      {/* NOTE: Comment out DocumentationView before submission  */}
      {/* <SVGIcon name="low-risk" />
      <SVGIcon name="high-risk" /> */}
      <SVGIcon name="low-risk" />
      <Header as="h1" content={tripSurveyContent.title} />
      <Button content={submitionContent.button} style={{ width: "50%" }} />
    </>
  );
}
