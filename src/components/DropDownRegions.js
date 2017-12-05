import React from "react";
import createClass from "create-react-class";
import PropTypes from "prop-types";
import Select from "react-select";
import "react-select/dist/react-select.css";

require("create-react-class");

const REGIONS = [
  { label: "Pohojois-Pohjanmaa", value: "p_pohj" },
  { label: "Keski-Pohjanmaa", value: "k_pohj" },
  { label: "Etelä-Pohjanmaa", value: "e_pohj" },
  { label: "Ahvenanmaa", value: "ahvn" },
  { label: "Uusimaa", value: "uusi" },
  { label: "Lounais-Suomi", value: "l_suom" }
];

var RegionsField = createClass({
  displayName: "Regions",
  propTypes: {
    label: PropTypes.string
  },
  getInitialState() {
    return {
      value: []
    };
  },
  handleSelectChange(value) {
    console.log("Valinnat: ", value);
    this.setState({ value });
  },

  render() {
    const { value } = this.state;
    const options = REGIONS;
    return (
      <div className="section">
        <div className="row">
          <div className="col-md-4">
          <h3>Alue: </h3>
            <Select
              onChange={this.handleSelectChange}
              options={options}
              placeholder="Valitse alue: "
              simpleValue
              value={value}
            />
          </div>
        </div>
      </div>
    );
  }
});
export default RegionsField;
