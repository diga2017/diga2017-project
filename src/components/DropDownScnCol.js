import React from "react";
import createClass from "create-react-class";
import PropTypes from "prop-types";
import Select from "react-select";
import "react-select/dist/react-select.css";

require("create-react-class");

const SCENSCOL = [
  { label: "Maakunnat", value: "maakunt" },
  { label: "Metsänhoitoalueet", value: "metsh" }
];

var ScenarioCol = createClass({
  displayName: "ScenarioCollection",
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
    const options = SCENSCOL;
    return (
      <div className="section">
        <div className="row">
          <h3>Skenaariokokoelma: </h3>
          <div className="col-md-4">
            <Select
              onChange={this.handleSelectChange}
              options={options}
              placeholder="Valitse skenaariokokoelma: "
              simpleValue
              value={value}
            />
          </div>
        </div>
      </div>
    );
  }
});
export default ScenarioCol;