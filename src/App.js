import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
// Backend datagetter. Currently not functioning
import Data from './data/Data';
// Placeholder containers
import RegionLevelContainer from './components/RegionLevelContainer';
import RegionContainer from './components/RegionContainer';
import ScenarioCollectionsContainer from './components/ScenarioCollectionsContainer';
import NavBar from './components/NavBar';
import BackGround from './components/BackGround';
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

      <div>
        <NavBar />
        <BackGround />
      </div>
    );
  }
}

export default App;
