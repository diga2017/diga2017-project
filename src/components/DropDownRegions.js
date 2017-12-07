import "bootstrap/dist/css/bootstrap.min.css";
import Data from "../data/Data";
import React, { element } from "react";

class RegionBtn extends React.Component {
  constructor(props) {
    super(props);
    //this.props.regions

    this.state = {
      regions: []
    };
    this.selectHandler = this.selectHandler.bind(this);
  }

  componentDidMount() {
    Data.getRegions().then(result => {
      this.setState({ regions: result });
      console.log("regions: " + this.state.regions);
    });
  }

  selectHandler(event) {
    this.props.selectRegion(event.target.value);
  }

  render() {
    return (
      <div className="section">
        <div className="row">
          <div className="col-md-4">
            <h3>Alue:</h3>
            <div className="form-group">
              <select className="form-control" onChange={this.selectHandler}>
                {this.props.regions.map(element => (
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

export default RegionBtn;