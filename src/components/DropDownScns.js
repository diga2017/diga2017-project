
import React from "react";
import createClass from "create-react-class";
import PropTypes from "prop-types";
import Select from "react-select";
import "react-select/dist/react-select.css";
import localizedStrings from './LocalizedStrings'

require("create-react-class");

var Scenarios = createClass({
  displayName: "Scenarios",
  propTypes: {
    label: PropTypes.string
  },
  getInitialState() {
    return {
      stayOpen: false,
      value: []
    };
  },
  handleSelectChange(value) {
    // console.log("Valinnat: ", value);
    this.setState({ value });
    this.props.selectScenarios(value);
    this.forceUpdate();
  },
  toggleCheckbox(e) {
    this.setState({
      [e.target.name]: e.target.checked
    });
  },

  render() {
    const { stayOpen, value } = this.state;
    const options = []

    this.props.scenarios.forEach(scenario => {
      let option = {
        label: scenario.name,
        value: scenario.id
      }
      // console.log("Option: " + JSON.stringify(option));
      options.push(option);
    });;

    return (
      <div className="section">
        <div className="row">
          <div className="col-md-4">
          <h3>{localizedStrings.titleChoosingScenarios}: </h3>
            <Select
              closeOnSelect={!stayOpen}
              multi
              onChange={this.handleSelectChange}
              options={options}
              placeholder="Valitse Skenaario(t): "
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
          </div>
        </div>
      </div>
    );
  }
});
export default Scenarios;