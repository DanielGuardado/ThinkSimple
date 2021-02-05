import React from "react";

import { QuestionItem } from "./index";
import { tripSurveyQuestions } from "../../helpers/content";

export default function TripSurveyQuestions({ setFormData, formData }) {
  return (
    <>
      {Object.keys(tripSurveyQuestions).map((question, idx) => (
        <QuestionItem
          {...{ formData, setFormData }}
          checkbox={tripSurveyQuestions[question].checkbox}
          key={idx}
          question={tripSurveyQuestions[question]}
          radio={tripSurveyQuestions[question].radio}
        />
      ))}
    </>
  );
}
