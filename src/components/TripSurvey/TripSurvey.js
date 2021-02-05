import React from "react";

import { Checkbox, Header, Divider } from "semantic-ui-react";

import "./TripSurvey.css";
import { tripSurveyContent } from "../../helpers/content";

export default function tripSurvey({ setTripSurveyStatus, tripSurveyStatus }) {
  const { title, sub_title, info_parapgraphs, commitLabel } = tripSurveyContent;
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
