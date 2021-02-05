import React, { useState } from "react";
import { Button } from "semantic-ui-react";

import TripSurvey from "../TripSurvey/TripSurvey";
import TravelerData from "../TravelerData/TravelerData";
import TripSurveyQuestions from "../TripSurveyQuestions/TripSurveyQuestions";
import { checkHighRisk } from "../../helpers/risk";

export default function HealthFormView() {
  const [tripSurveyStatus, setTripSurveyStatus] = useState(false);
  const [travelerDataStatus, setTravelerDataStatus] = useState(false);
  const [formData, setFormData] = useState({
    closeContact: null,
    symptoms: {},
    certifySigns: null,
    abideHealthMeasures: null,
  });

  return (
    <>
      <p>{checkHighRisk(formData).toString()}</p>
      <p>{tripSurveyStatus.toString()}</p>
      <p>{travelerDataStatus.toString()}</p>
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
        disabled={!tripSurveyStatus || !travelerDataStatus}
        content="submit"
        style={{ width: "100%" }}
      />
    </>
  );
}
