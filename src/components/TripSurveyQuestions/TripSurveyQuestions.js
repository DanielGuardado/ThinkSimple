import React from "react";

import { tripSurveyQuestions } from "../../helpers/content";
import QuestionItem from "./QuestionItem";

export default function TripSurveyQuestions() {
  let a = tripSurveyQuestions;

  return (
    <>
      <div className="margin-0 padding-0">
        {/* could loop through the keys */}
        <QuestionItem question={tripSurveyQuestions.closeContact} />
        <QuestionItem question={tripSurveyQuestions.symptoms} />
        <QuestionItem question={tripSurveyQuestions.certifySigns} />
        <QuestionItem question={tripSurveyQuestions.abideHealthMeasures} />
      </div>
    </>
  );
}
