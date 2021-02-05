// import React from "react";
// import { Checkbox, Image, Header, List, Divider, Radio } from "semantic-ui-react";

// export default function QuestionItem({ question }) {
//   debugger;
//   return (
//     <>
//       <Header as="h3" content={question.label}></Header>

//     </>
//   );
// }
import React, { Component } from "react";
import { Form, Radio, Header, Checkbox } from "semantic-ui-react";

import { symptomList } from "../../helpers/content";

export default class RadioExampleRadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.innerText });
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
                  <Checkbox key={idx} label={symptomList[symptom].label} />
                ))}
              </Form.Field>
            </Form>
          </>
        ) : null}
      </>
    );
  }
}
