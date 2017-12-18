
import React from "react";
import createClass from "create-react-class";
import PropTypes from "prop-types";
import Select from "react-select";
import "react-select/dist/react-select.css";
import localizedStrings from './LocalizedStrings'

require("create-react-class");

var Indicators = createClass({
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
    this.props.selectIndicators(value);
    this.forceUpdate();
  },

  render() {
    const { stayOpen, value } = this.state;
    const options = []

    this.props.indicators.forEach(indicator => {
      let option = {
        label: indicator.name,
        value: indicator.id
      }
      // console.log("Option: " + JSON.stringify(option));
      options.push(option);
    });;

    return (
      <div className="section">
        <div className="row">
          <div className="col-md-12">
            <Select
              closeOnSelect={!stayOpen}
              multi
              onChange={this.handleSelectChange}
              options={options}
              placeholder={localizedStrings.dropDownHolderIndicator}
              simpleValue
              value={value}
            />
          </div>
        </div>
      </div>
    );
  }
});
export default Indicators;