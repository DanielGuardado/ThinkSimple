import React, { Component } from "react";

import { Form, Radio, Header } from "semantic-ui-react";

import "./QuestionItem.css";
import { symptomList } from "../../helpers/content";
import TripSurveyListItem from "./TripSurveyListItem";

export default class RadioExampleRadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", checked: false };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.innerText });
  }

  render() {
    const { label, fieldKey, required } = this.props.question;
    const { formData, setFormData, checkbox, question, radio } = this.props;
    const { value } = this.state;
    return (
      <>
        <Header
          as="h3"
          className={required ? "required" : ""}
          content={label}
        />
        {radio ? (
          <Form>
            <Form.Field>
              <Radio
                onClick={() =>
                  setFormData({
                    ...formData,
                    [fieldKey]: true,
                  })
                }
                label="Yes"
                name="radioGroup"
                value="Yes"
                checked={value === "Yes"}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                onClick={() =>
                  setFormData({
                    ...formData,
                    [fieldKey]: false,
                  })
                }
                label="No"
                name="radioGroup"
                value="No"
                checked={value === "No"}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form>
        ) : null}
        {checkbox ? (
          <>
            <Form>
              <Form.Field>
                {Object.keys(symptomList).map((symptom, idx) => (
                  <TripSurveyListItem
                    formData={formData}
                    key={idx}
                    question={question}
                    setFormData={setFormData}
                    symptom={symptom}
                    symptomList={symptomList}
                  />
                ))}
              </Form.Field>
            </Form>
          </>
        ) : null}
      </>
    );
  }
}
