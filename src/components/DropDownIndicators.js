import React, { Component } from "react";
import createClass from "create-react-class";
import PropTypes from "prop-types";
import Select from "react-select";
import "react-select/dist/react-select.css";
import localizedStrings from './LocalizedStrings';
import Data from '../data/Data'

class Indicators extends Component {
  constructor(props) {
    super(props);

    this.state = {
      indicators: []
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
    console.log("chosenIndicatorID: " + event.target.value);
    this.props.selectIndicators(event.target.value);
  }

  render() {
    const { stayOpen, value } = this.state;
    const options = this.props.scenarios;
    return (
      <div className="section">
        <div className="form-group">
          <select className="form-control" onChange={this.handleOnClick}>
          <option value="" disabled selected>{localizedStrings.dropDownHolderIndicator}</option>
            {this.props.indicators.map(element => (
              <option value={element.id} key={element.id}>
                {element.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
};

export default Indicators;