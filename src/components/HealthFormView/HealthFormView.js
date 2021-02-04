import React from "react";
import { Button } from "semantic-ui-react";

import TripSurvey from "../TripSurvey/TripSurvey";
import TravelerData from "../TravelerData/TravelerData";
import TripSurveyQuestions from "../TripSurveyQuestions/TripSurveyQuestions";

export default function HealthFormView() {
  return (
    <>
      {/* NOTE: Comment out DocumentationView before submission  */}
      {/* to potentially solve how to make sure all of the fields are inputted
      i could have validations on each checkbox and also make sure to send
      back some type of boolean indicating wether or not that box is checked
      and then enable the submit button only once each field has a true value
      for each option that is required. */}
      <TripSurvey />
      <TravelerData />
      <TripSurveyQuestions />
      <Button content="submit" style={{ width: "100%" }} />
    </>
  );
}
