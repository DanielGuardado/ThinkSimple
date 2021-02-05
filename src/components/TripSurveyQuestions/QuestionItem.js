import React, { Component } from "react";
import { Form, Radio, Header, Checkbox } from "semantic-ui-react";

import "./QuestionItem.css";
import { symptomList } from "../../helpers/content";
import TripSurveyListItem from "./TripSurveyListItem";

export default class RadioExampleRadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", checked: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.innerText });
  }

  handleCheckbox(symptom, symptomList) {
    if (this.state.checked === false) {
      let newState = Object.assign(this.props.formData.symptoms, {
        [symptom]: symptomList[symptom],
      });
      this.props.setFormData({
        ...this.props.formData,
        [this.props.question.fieldKey]: newState,
      });
      this.setState({ checked: true });
    } else {
      let newState = Object.assign({}, this.props.formData);
      delete newState.symptoms[symptom];
      this.props.setFormData(newState);
      this.setState({ checked: false });
    }
  }

  render() {
    return (
      <>
        <Header
          as="h3"
          className="required"
          content={this.props.question.label}
        />
        {this.props.radio ? (
          <Form>
            <Form.Field>
              <Radio
                onClick={() =>
                  this.props.setFormData({
                    ...this.props.formData,
                    [this.props.question.fieldKey]: true,
                  })
                }
                label="Yes"
                name="radioGroup"
                value="Yes"
                checked={this.state.value === "Yes"}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                onClick={() =>
                  this.props.setFormData({
                    ...this.props.formData,
                    [this.props.question.fieldKey]: false,
                  })
                }
                label="No"
                name="radioGroup"
                value="No"
                checked={this.state.value === "No"}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form>
        ) : null}
        {this.props.checkbox ? (
          <>
            <Form>
              <Form.Field>
                {Object.keys(symptomList).map((symptom, idx) => (
                  <TripSurveyListItem
                    symptomList={symptomList}
                    symptom={symptom}
                    key={idx}
                    setFormData={this.props.setFormData}
                    formData={this.props.formData}
                    question={this.props.question}
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
