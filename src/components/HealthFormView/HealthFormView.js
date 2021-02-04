import React from "react";
import { Button } from "semantic-ui-react";

import TripSurvey from "../TripSurvey/TripSurvey";
import TravelerData from "../TravelerData/TravelerData";
import TripSurveyQuestions from "../TripSurveyQuestions/TripSurveyQuestions";

export default function HealthFormView() {
  return (
    <>
      {/* NOTE: Comment out DocumentationView before submission  */}
      <TripSurvey />
      <TravelerData />
      <TripSurveyQuestions />
      <Button content="submit" style={{ width: "100%" }} />
    </>
  );
}
