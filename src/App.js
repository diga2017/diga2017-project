import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Config from './Config';
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
      language: "fi",
      regionLevels: [],         // includes: name, description, id and order
      regions: [],              // includes: id, name, shortName, order and scenarioCollections: id, name, description
      scenarioCollections: [],
      chosenRegionCollections: [],

      regionLevelId: 1,
      regionId: 33,
      scenarioId: 6
    };

    this.toggleLanguage = this.toggleLanguage.bind(this);
    this.getAllData = this.getAllData.bind(this);
  }

  componentDidMount() {
    this.getAllData();
  }

  toggleLanguage() {
    if (this.state.language === "fi") {
      this.setState({ language: "en" });
    } else {
      this.setState({ language: "fi" });
    }
    this.getAllData();
  }
  
  getAllData() {
    Data.setUserLanguage(this.state.language);

    Data.getRegionLevels().then(result => {
      this.setState({ regionLevels: result });
      console.log("regionLevels: " + this.state.regionLevels);
    });

    Data.getRegions(this.state.regionLevelId).then(result => {
      this.setState({ regions: result });
      console.log("regions: " + this.state.regions);
    });

    Data.getScenarioCollections(this.state.scenarioId, this.state.regionId).then(result => {
      this.setState({ scenarioCollections: result });
      console.log("scenarioCollections: " + this.state.scenarioCollections);
    });
  }

  render() {
    return (
      <div className="App">
      <button type="button" className="btn btn-primary" onClick={ this.toggleLanguage }>{this.state.language}</button>
      <a type="button" className="btn btn-primary" href={ Config.urlEmail + (this.state.language === "fi" ? Config.emailSubjectEn : Config.emailSubjectFi) }>Send feedback</a>
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
        <p>REGIONS (ID: {this.state.regionLevelId})</p>
        <div>
          {
            this.state.regions.map(element => <RegionContainer key={element.id}
              id={element.id}
              name={element.name}
              shortName={element.shortName}
              order={element.order}
              scenarioCollections={element.scenarioCollections}
            />)
          }
        </div>
        <p>SCENARIOCOLLECTIONS (regionID: {this.state.regionId} / scenarioCollectionsID: {this.state.scenarioId})</p>
        <div>
          {
            this.state.scenarioCollections.map(element => <ScenarioCollectionsContainer key={element.id}
              id={element.id}
              name={element.name}
              description={element.description}
              scenarios={element.scenarios} />)
          }
        </div>
      </div >
    );
  }
}

export default App;
