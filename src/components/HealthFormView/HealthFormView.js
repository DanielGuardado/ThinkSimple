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
    closeContact: false,
    symptoms: {},
    certifySigns: true,
    abideHealthMeasures: true,
  });
  // const testing = {
  //   closeContact: false,
  //   symptoms: {
  //     none: {
  //       fieldKey: "none",
  //       label: "None of the above",
  //     },
  //   },
  //   certifySigns: true,
  //   abideHealthMeasures: true,
  // };

  // checkHighRisk(testing)
  return (
    <>
      {/* NOTE: Comment out DocumentationView before submission  */}
      {/* to potentially solve how to make sure all of the fields are inputted
      i could have validations on each checkbox and also make sure to send
      back some type of boolean indicating wether or not that box is checked
      and then enable the submit button only once each field has a true value
      for each option that is required. */}
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
