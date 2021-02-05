import React from "react";

import { QuestionItem } from "./index";
import { tripSurveyQuestions } from "../../helpers/content";

export default function TripSurveyQuestions({ setFormData, formData }) {
  return (
    <>
      {/* could loop through the keys */}
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
      {/* <QuestionItem
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
      /> */}
    </>
  );
}
