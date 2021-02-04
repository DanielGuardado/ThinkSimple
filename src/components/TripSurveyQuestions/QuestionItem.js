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
import { Form, Radio, Header } from "semantic-ui-react";

export default class RadioExampleRadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    debugger;
    this.setState({ value: e.target.innerText });
  }

  render() {
    return (
      <>
        <Header as="h3" content={this.props.question.label}></Header>
        <Form>
          <Form.Field>
            <Radio
              label="Yes"
              name="radioGroup"
              value="Yes"
              checked={this.state.value === "Yes"}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label="No"
              name="radioGroup"
              value="No"
              checked={this.state.value === "No"}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form>
      </>
    );
  }
}
