import React, { Component } from "react";
import createClass from "create-react-class";
import PropTypes from "prop-types";
import Select from "react-select";
import "react-select/dist/react-select.css";
import localizedStrings from './LocalizedStrings';
import Data from '../data/Data'

class Scenarios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scenarios: []
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    Data.getScenarioCollections().then(result => {
      this.setState({ scenarios: result });
    });
  }

  handleOnClick(event) {
    this.props.selectScenarios(event.target.value);
  }
  /*
    toggleCheckbox(e) {
      this.setState({
        [e.target.name]: e.target.checked
      });
    }
  */
  render() {
    const { stayOpen, value } = this.state;
    const options = this.props.scenarios;
    return (
      <div className="section">

        <h3>{localizedStrings.titleScenarios}:</h3>
        <div className="form-group">
          <select className="form-control" onChange={this.handleOnClick}>
            {this.props.scenarios.map(element => (
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

export default Scenarios;

/* OLD BUT GOLD
<h3>{localizedStrings.titleScenarios}:</h3>
        <Select
          closeOnSelect={!stayOpen}
          multi
          onChange={this.handleSelectChange}
          options={options}
          placeholder={localizedStrings.titleChoosingScenarios}
          simpleValue
          value={value}
        />

        <div className="checkbox">
          <label className="checkbox">
            <input
              type="checkbox"
              className="checkbox-control"
              name="stayOpen"
              checked={stayOpen}
              onChange={this.toggleCheckbox}
            />
            <span className="checkbox-label">
              {localizedStrings.stayOpen}
            </span>
          </label>
        </div>
*/