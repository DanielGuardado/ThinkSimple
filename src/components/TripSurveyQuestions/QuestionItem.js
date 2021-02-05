import React, { Component } from "react";
import { Form, Radio, Header, Checkbox } from "semantic-ui-react";

import { symptomList } from "../../helpers/content";

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
        // this.props.setFormData({
        //   ...this.props.formData,
        //   [this.props.question.fieldKey]: {
        //     [symptom]: symptomList[symptom],
        //   },
      });
      this.setState({ checked: true });
    } else {
      let newState = Object.assign({}, this.props.formData);
      delete newState.symptoms[symptom];
      this.props.setFormData(newState);
      this.setState({ checked: false });
    }
    // debugger;
    // const newState = this.props.formData.symptoms.filter(
    //   (item) => item.key !== key
    // );
    // this.props.setFormData(newState);
  }

  // handleFieldKey() {
  //   let fieldKey = this.props.question.fieldKey
  //   this.props.setFormData({
  //     ...this.props.formData,
  //     [fieldKey]: true,
  //   });
  // }

  render() {
    return (
      <>
        <Header as="h3" content={this.props.question.label}></Header>
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
                  <Checkbox
                    // onClick={() =>
                    //   this.props.setFormData({
                    //     ...this.props.formData,
                    //     [this.props.question.fieldKey]: {
                    //       [symptom]: symptomList[symptom],
                    //     },
                    //   })
                    // }
                    onChange={() => this.handleCheckbox(symptom, symptomList)}
                    // onChange={this.handleRemove}
                    // onChange={() =>
                    //   this.props.setFormData({
                    //     ...this.props.formData,
                    //     [this.props.question.fieldKey]: {
                    //       [symptom]: symptomList[symptom],
                    //     },
                    //   })
                    // }
                    key={idx}
                    label={symptomList[symptom].label}
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
