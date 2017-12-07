import "bootstrap/dist/css/bootstrap.min.css";
import Data from "../data/Data";
import React, { element } from "react";

class RegionLvlBtn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      regionLevels: []
    };
    this.onItemClick = this.onItemClick.bind(this);
  }

  componentDidMount() {
    Data.getRegionLevels().then(result => {
      this.setState({ regionLevels: result });
      console.log("regionLevels: " + this.state.regionLevels);
    });
  }

  onItemClick(event) {
    this.props.selectRegionLevel(event.target.value);
  }

  render() {
    return (
      <div className="section">
        <div className="row">
          <div className="col-md-4">
            <h3>Aluetaso:</h3>
            <div className="form-group">
              <select className="form-control" onChange={this.onItemClick}>
                {this.state.regionLevels.map(element => (
                  <option value={element.id} key={element.id}>
                    {element.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegionLvlBtn;
