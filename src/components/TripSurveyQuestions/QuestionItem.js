import React, { Component } from "react";

import { Form, Header, Radio } from "semantic-ui-react";

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
    const { fieldKey, label, required } = this.props.question;
    const { checkbox, formData, question, radio, setFormData } = this.props;
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
                checked={value === "Yes"}
                label="Yes"
                name="radioGroup"
                onChange={this.handleChange}
                onClick={() =>
                  setFormData({
                    ...formData,
                    [fieldKey]: true,
                  })
                }
                value="Yes"
              />
            </Form.Field>
            <Form.Field>
              <Radio
                checked={value === "No"}
                label="No"
                name="radioGroup"
                onChange={this.handleChange}
                onClick={() =>
                  setFormData({
                    ...formData,
                    [fieldKey]: false,
                  })
                }
                value="No"
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
                    key={idx}
                    {...{
                      formData,
                      question,
                      setFormData,
                      symptom,
                      symptomList,
                    }}
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
