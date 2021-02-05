import React from "react";

import { Checkbox, Divider, Header } from "semantic-ui-react";

import "./TripSurvey.css";
import { tripSurveyContent } from "../../helpers/content";

export default function tripSurvey({ setTripSurveyStatus, tripSurveyStatus }) {
  const { commitLabel, info_parapgraphs, sub_title, title } = tripSurveyContent;
  return (
    <>
      <Header className="header-margin" as="h1" content={title} />
      <Header className="header-margin" as="h1" content={sub_title} />
      <Divider />
      <p>{info_parapgraphs[0]}</p>
      <Divider />
      <p>{info_parapgraphs[1]}</p>
      <Checkbox
        label={commitLabel}
        onClick={() => setTripSurveyStatus(!tripSurveyStatus)}
      />
      <Divider />
    </>
  );
}
