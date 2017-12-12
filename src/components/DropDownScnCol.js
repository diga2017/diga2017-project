import "bootstrap/dist/css/bootstrap.min.css";
import Data from "../data/Data";
import React, { element } from "react";
import localizedStrings from './LocalizedStrings';

class scenarioColBtn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scenarioCollections: []
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    Data.getScenarioCollections(
      this.state.scenarioId,
      this.state.regionId
    ).then(result => {
      this.setState({ scenarioCollections: result });
    });
  }

  handleOnClick(event) {
    this.props.selectScenarioCollections(event.target.value);
  }

  render() {
    return (
      <div className="section">
        
         
            <h3>{localizedStrings.titleScenarioCollection}:</h3>
            <div className="form-group">
              <select className="form-control" onChange={this.handleOnClick}>
                {this.props.scenarioCollections.map(element => (
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

export default scenarioColBtn;