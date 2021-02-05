import React, { useState } from "react";
import { Checkbox } from "semantic-ui-react";

export default function TripSurveyListItem({
  symptom,
  symptomList,
  setFormData,
  formData,
  question,
}) {
  const [checked, setchecked] = useState(false);

  const handleCheckbox = (symptom, symptomList) => {
    if (checked === false) {
      let newState = Object.assign(formData.symptoms, {
        [symptom]: symptomList[symptom],
      });
      setFormData({
        ...formData,
        [question.fieldKey]: newState,
      });
      setchecked(true);
    } else {
      let newState = Object.assign({}, formData);
      delete newState.symptoms[symptom];
      setFormData(newState);
      setchecked(false);
    }
  };

  return (
    <>
      <Checkbox
        label={symptomList[symptom].label}
        onChange={() => handleCheckbox(symptom, symptomList)}
      />
    </>
  );
}
