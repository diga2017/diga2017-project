import React, { Component } from 'react';
import './App.css';
// Backend datagetter. Currently not functioning
import Data from './data/Data';
// Placeholder containers
import RegionLevelContainer from './components/RegionLevelContainer';
import RegionContainer from './components/RegionContainer';
import ScenarioCollectionsContainer from './components/ScenarioCollectionsContainer';
// Placeholder data (will be removed after backend requests are working)
import DataHolder from './data/DataHolder';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      regionLevels: [],
      regions: [],
      scenarioCollections: [],

      regionLevelID: 1,
      regionID: 24,
      scenarioID: 5
    };
  }

  componentDidMount() {
    Data.getRegionLevels().then(result => {
      this.setState({ regionLevels: result });
    });

    Data.getRegions(this.state.regionLevelID).then(result => {
      this.setState({ regions: result });
    });

    Data.getScenarioCollections(this.state.scenarioID, this.state.regionID).then(result => {
      this.setState({ scenarioCollections: result });
    });
  }

  render() {
    return (
      <div className="App">
        <p>REGION LEVELS</p>
        <div>
          {
            this.state.regionLevels.map(element => <RegionLevelContainer key={element.id}
              id={element.id}
              name={element.name}
              description={element.description}
              order={element.order} />)
          }
        </div>
        <p>REGIONS (ID: { this.state.regionLevelID })</p>
        <div>
          {
            this.state.regions.map(element => <RegionContainer key={element.id}
              id={element.id}
              name={element.name}
              shortName={element.shortName}
              order={element.order}
            />)
          }
        </div>
        <p>SCENARIOCOLLECTIONS (regionID: { this.state.regionID } / scenarioCollectionsID: { this.state.scenarioID })</p>
        <div>
          {
            this.state.scenarioCollections.map(element => <ScenarioCollectionsContainer key={element.id}
              id={element.id}
              name={element.name}
              description={element.description}
              order={element.order} />)
          }
        </div>
      </div >
    );
  }
}

export default App;
