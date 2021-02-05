import React, { Component } from "react";

import { Checkbox, Divider, Header } from "semantic-ui-react";

import { fetchTravelerData } from "../../helpers/data";
import { tripSurveyContent } from "../../helpers/content";

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
    const { accountID, firstName, lastName, middleName, tripID } = this.state;
    if (Object.keys(this.state).length !== 0) {
      return (
        <>
          <Header sub>Name</Header>
          <p>
            {firstName} {middleName} {lastName}
          </p>
          <Header sub>Account ID</Header>
          <p>{accountID}</p>
          <Header sub>Trip ID</Header>
          <p>{tripID}</p>
        </>
      );
    }
  }

  render() {
    const { setTravelerDataStatus, travelerDataStatus } = this.props;
    const { verifyTravelerInformatiionLabel } = tripSurveyContent;
    return (
      <>
        {this.travelerInfo()}
        <Checkbox
          onClick={() => setTravelerDataStatus(!travelerDataStatus)}
          label={verifyTravelerInformatiionLabel}
        />
        <Divider />
      </>
    );
  }
}
