import React from "react";
import { Checkbox, Image, Header, List, Divider } from "semantic-ui-react";

import { tripSurveyContent } from "../../helpers/content";
import "./TripSurvey.css";

export default function tripSurvey({ setTripSurveyStatus, tripSurveyStatus }) {
  return (
    <>
      <Header
        className="header-margin"
        as="h1"
        content={tripSurveyContent.title}
      />
      <Header
        className="header-margin"
        as="h1"
        content={tripSurveyContent.sub_title}
      />
      <Divider />
      {/* come back and map this */}
      <p>{tripSurveyContent.info_parapgraphs[0]}</p>
      <Divider />
      <p>{tripSurveyContent.info_parapgraphs[1]}</p>
      <Checkbox
        onClick={() => setTripSurveyStatus(!tripSurveyStatus)}
        label={tripSurveyContent.commitLabel}
      />
      <Divider />
    </>
  );
}
