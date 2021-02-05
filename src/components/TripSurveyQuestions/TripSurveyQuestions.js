import React from "react";

import { QuestionItem } from "./index";
import { tripSurveyQuestions } from "../../helpers/content";

export default function TripSurveyQuestions({ setFormData, formData }) {
  return (
    <>
      {Object.keys(tripSurveyQuestions).map((question, idx) => (
        <QuestionItem
          radio={tripSurveyQuestions[question].radio}
          checkbox={tripSurveyQuestions[question].checkbox}
          formData={formData}
          setFormData={setFormData}
          question={tripSurveyQuestions[question]}
          key={idx}
        />
      ))}
    </>
  );
}
