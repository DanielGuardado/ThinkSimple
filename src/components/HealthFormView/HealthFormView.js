import React, { useState } from "react";

import { Button } from "semantic-ui-react";

import "./HealthFormView.css";
import colors from "../../components/config/colors";
import { checkHighRisk } from "../../helpers/risk";
import { TravelerData } from "../TravelerData/";
import { TripSurvey } from "../TripSurvey/";
import { TripSurveyQuestions } from "../TripSurveyQuestions/";

export default function HealthFormView({ setFormStatus, setRisk }) {
  const [formData, setFormData] = useState({
    abideHealthMeasures: null,
    certifySigns: null,
    closeContact: null,
    symptoms: {},
  });
  const [travelerDataStatus, setTravelerDataStatus] = useState(false);
  const [tripSurveyStatus, setTripSurveyStatus] = useState(false);
  const disabled =
    formData.closeContact === null ||
    formData.certifySigns === null ||
    formData.abideHealthMeasures === null ||
    Object.keys(formData.symptoms).length === 0 ||
    !tripSurveyStatus ||
    !travelerDataStatus;

  const handleSubmit = () => {
    setFormStatus(true), setRisk(checkHighRisk(formData));
  };

  return (
    <>
      <TripSurvey {...{ setTripSurveyStatus, tripSurveyStatus }} />
      <TravelerData {...{ setTravelerDataStatus, travelerDataStatus }} />
      <TripSurveyQuestions {...{ formData, setFormData }} />
      <Button
        color={colors.submitButton}
        content="submit"
        disabled={disabled}
        onClick={handleSubmit}
        style={{ width: "100%" }}
      />
      {disabled ? (
        <p className="submition-text">
          Please fill out all the fields to continue
        </p>
      ) : null}
    </>
  );
}
