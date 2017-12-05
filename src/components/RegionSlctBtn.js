import "bootstrap/dist/css/bootstrap.min.css";
import Data from "../data/Data";
import React, { PropTypes } from "react";
import SelectItem from "react-select-item";
//import { element } from "./C:/Users/Omistaja/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/prop-types";

class RegionLvlBtn extends React.Component {
  static defaultProps = {
    placeholder: "Valitse aluetaso:"
  };

  /**
   * Component constructor
   * The component is depended from Bootstrap 3.x (styles only)
   * @param props
   */
  constructor(props) {
    super(props);
    this.handleMultiChange = this.handleMultiChange.bind(this);
  }

  handleMultiChange(event) {
    this.props.regionLevels(event.target.value);
  }

  render() {
    const {regionLevels} =  this.state;  
    return (
      <div className={this.props.wrapperClassName}>
        <div className="form-group">
          <label>{this.props.label}</label>
          <SelectItem
            label={this.props.label}
            onChange={this.handleMultiChange}
            value={this.state.regionLevels}
            closeText={false}
            className="form-control"
            multiple={true}
          >
            {this.state.regionLevels.map(element => (
              <option value={element.name} key={element.id}>
                {element.name}
              </option>
            ))}
          </SelectItem>
        </div>
      </div>
    );
  }
}

export default RegionLvlBtn;
