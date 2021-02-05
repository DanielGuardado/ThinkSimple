import React, { useState } from "react";

import { Button } from "semantic-ui-react";

import colors from "../../components/config/colors";
import { checkHighRisk } from "../../helpers/risk";
import { TravelerData } from "../TravelerData/";
import { TripSurvey } from "../TripSurvey/";
import { TripSurveyQuestions } from "../TripSurveyQuestions/";

export default function HealthFormView({ setFormStatus, setRisk }) {
  const [tripSurveyStatus, setTripSurveyStatus] = useState(false);
  const [travelerDataStatus, setTravelerDataStatus] = useState(false);
  const [formData, setFormData] = useState({
    closeContact: null,
    symptoms: {},
    certifySigns: null,
    abideHealthMeasures: null,
  });

  const handleSubmit = () => {
    setFormStatus(true), setRisk(checkHighRisk(formData));
  };

  return (
    <>
      <TripSurvey {...{ setTripSurveyStatus, tripSurveyStatus }} />
      <TravelerData {...{ setTravelerDataStatus, travelerDataStatus }} />
      <TripSurveyQuestions {...{ formData, setFormData }} />
      <Button
        disabled={
          !tripSurveyStatus ||
          !travelerDataStatus ||
          formData.closeContact === null ||
          formData.certifySigns === null ||
          formData.abideHealthMeasures === null ||
          Object.keys(formData.symptoms).length === 0
        }
        content="submit"
        style={{ width: "100%" }}
        onClick={handleSubmit}
        color={colors.submitButton}
      />
    </>
  );
}
