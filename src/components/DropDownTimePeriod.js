import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import localizedStrings from './LocalizedStrings';

class TimePeriod extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timePeriods: []
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
    this.props.selectTimePeriod(event.target.value);
  }

  render() {
    return (
      <div className="section">
            <h3>{localizedStrings.titleTimePeriod}:</h3>
            <div className="form-group">
              <select className="form-control" onChange={this.handleOnClick}>
              <option value="" disabled selected>{localizedStrings.dropDownHolderTimePeriod}</option>
                {this.props.timePeriods.map(element => (
                  <option value={element.id} key={element.id}>
                    {element.yearStart + "-" + element.yearEnd}
                  </option>
                ))}
              </select>
            </div>
          </div>
    );
  }
}

export default TimePeriod;