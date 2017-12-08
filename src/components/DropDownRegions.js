import "bootstrap/dist/css/bootstrap.min.css";
import Data from "../data/Data";
import React, { element } from "react";

class RegionBtn extends React.Component {
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
            <h3>Alue:</h3>
            <div className="form-group">
              <select className="form-control" onChange={this.handleOnClick}>
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