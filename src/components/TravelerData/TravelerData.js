import React, { Component } from "react";
import { Checkbox, Image, Header, List, Divider } from "semantic-ui-react";

import { tripSurveyContent } from "../../helpers/content";
import { fetchTravelerData } from "../../helpers/data";

export default class TravelerData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let traveler = fetchTravelerData();
    this.setState(traveler);
  }

  travelerInfo() {
    if (Object.keys(this.state).length !== 0) {
      return (
        <>
          <Header sub>Name</Header>
          <p>
            {this.state.firstName} {this.state.middleName} {this.state.lastName}
          </p>
          <Header sub>Account ID</Header>
          <p>{this.state.accountID}</p>
          <Header sub>Trip ID</Header>
          <p>{this.state.tripID}</p>
        </>
      );
    }
  }

  render() {
    return (
      <>
        {this.travelerInfo()}
        <Checkbox
          onClick={() =>
            this.props.setTravelerDataStatus(!this.props.travelerDataStatus)
          }
          label={tripSurveyContent.verifyTravelerInformatiionLabel}
        />
      </>
    );
  }
}
