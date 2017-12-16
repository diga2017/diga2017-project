import "bootstrap/dist/css/bootstrap.min.css";
import Data from "../data/Data";
import React, { Component } from "react";
import localizedStrings from './LocalizedStrings';

class RegionBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      regions: []
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    Data.getRegions().then(result => {
      this.setState({ regions: result });
    });
  }

  handleOnClick(event) {
    this.props.selectRegion(event.target.value);
  }

  render() {
    return (
      <div className="section">
            <h3>{localizedStrings.titleRegion}:</h3>
            <div className="form-group">
              <select className="form-control" onChange={this.handleOnClick}>
              <option value="" disabled selected>{localizedStrings.dropDownHolderRegion}</option>
                {this.props.regions.map(element => (
                  <option value={element.id} key={element.id}>
                    {element.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
    );
  }
}

export default RegionBtn;