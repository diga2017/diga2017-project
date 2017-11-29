import React from "react";
import createClass from "create-react-class";
import PropTypes from "prop-types";
import Select from "react-select";
import "react-select/dist/react-select.css";

require("create-react-class");

const REGIONLVL = [
  { label: "Maakunnat", value: "maakunt" },
  { label: "Metsänhoitoalueet", value: "metsh" }
];

var RegionsLvl = createClass({
  displayName: "RegionsLvl",
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
    const options = REGIONLVL;
    return (
      <div className="section">
        <div className="row">
          <h3>Alue: </h3>
          <div className="col-md-4">
            <Select
              onChange={this.handleSelectChange}
              options={options}
              placeholder="Valitse aluetaso: "
              simpleValue
              value={value}
            />
          </div>
        </div>
      </div>
    );
  }
});
export default RegionsLvl;