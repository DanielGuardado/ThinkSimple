import React from "react";
import { Checkbox, Image, Header, List, Divider } from "semantic-ui-react";

import { tripSurveyContent } from "../../helpers/content";
import "./TripSurvey.css";

export default function tripSurvey() {
  return (
    <>
      <div className="margin-0 padding-0">
        <Header as="h1" content={tripSurveyContent.title} />
        <Header as="h1" content={tripSurveyContent.sub_title} />
        {/* come back and map this */}
        <p>{tripSurveyContent.info_parapgraphs[0]}</p>
        <p>{tripSurveyContent.info_parapgraphs[1]}</p>
        <Checkbox label={tripSurveyContent.commitLabel} />
      </div>
    </>
  );
}
