import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

class SingleDropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
    this.props.selectOption(event.target.value);
  }

  render() {
    return (
      <div className="section">
        <h3>{this.props.title}:</h3>
        <div className="form-group">
          <select className="form-control" onChange={this.handleOnClick}>
            <option value="" disabled selected>{this.props.placeHolder}</option>
            {this.props.choices.map(element => (
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

export default SingleDropDown;