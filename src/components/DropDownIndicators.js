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
    this.props.selectIndicators(event.target.value);
  }
  
  render() {
    const { stayOpen, value } = this.state;
    const options = this.props.scenarios;
    return (
      <div className="section">

        <h3>{this.props.indicators.name}:</h3>
        <div className="form-group">
          <select className="form-control" onChange={this.handleOnClick}>
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