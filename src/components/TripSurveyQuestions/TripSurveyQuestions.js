import React from "react";

import { tripSurveyQuestions } from "../../helpers/content";
import QuestionItem from "./QuestionItem";

export default function TripSurveyQuestions({ setFormData, formData }) {
  return (
    <>
      <div className="margin-0 padding-0">
        {/* could loop through the keys */}
        <QuestionItem
          radio
          formData={formData}
          setFormData={setFormData}
          question={tripSurveyQuestions.closeContact}
        />
        <QuestionItem
          checkbox
          formData={formData}
          setFormData={setFormData}
          question={tripSurveyQuestions.symptoms}
        />
        <QuestionItem
          radio
          formData={formData}
          setFormData={setFormData}
          question={tripSurveyQuestions.certifySigns}
        />
        <QuestionItem
          radio
          formData={formData}
          setFormData={setFormData}
          question={tripSurveyQuestions.abideHealthMeasures}
        />
      </div>
    </>
  );
}
