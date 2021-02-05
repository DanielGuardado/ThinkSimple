import React, { useState } from "react";
import { Button } from "semantic-ui-react";

import { checkHighRisk } from "../../helpers/risk";
import TripSurvey from "../TripSurvey/TripSurvey";
import TravelerData from "../TravelerData/TravelerData";
import TripSurveyQuestions from "../TripSurveyQuestions/TripSurveyQuestions";

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
      <TripSurvey
        setTripSurveyStatus={setTripSurveyStatus}
        tripSurveyStatus={tripSurveyStatus}
      />
      <TravelerData
        setTravelerDataStatus={setTravelerDataStatus}
        travelerDataStatus={travelerDataStatus}
      />
      <TripSurveyQuestions formData={formData} setFormData={setFormData} />
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
        color={"green"}
      />
    </>
  );
}
