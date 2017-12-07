import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";
// Backend datagetter. Currently not functioning
import Data from "./data/Data";
// Placeholder containers
import RegionLevelContainer from "./components/RegionLevelContainer";
import RegionContainer from "./components/RegionContainer";
import ScenarioCollectionsContainer from "./components/ScenarioCollectionsContainer";
// Placeholder data (will be removed after backend requests are working)
import DataHolder from "./data/DataHolder";
// Dropdown components
import ScenarioCol from "./components/DropDownScnCol";
import Scenarios from "./components/DropDownScns";
import RegionLvlBtn from "./components/DropDownRgnSlct";
import RegionBtn from "./components/DropDownRegions";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      regionLevels: [], // includes: name, description, id and order
      regions: [], // includes: id, name, shortName, order and scenarioCollections: id, name, description
      scenarioCollections: [],
      chosenRegionCollections: [],
      update: "",

      regionLevelId: 1,
      regionId: 33,
      scenarioId: 6
    };

    this.selectRegionLevel = this.selectRegionLevel.bind(this);
    this.selectRegion = this.selectRegion.bind(this);
  }

  componentDidMount() {
    Data.getRegionLevels().then(result => {
      this.setState({ regionLevels: result });
      console.log("regionLevels: " + this.state.regionLevels);
    });

    Data.getRegions(this.state.regionLevelId).then(result => {
      this.setState({ regions: result });
      console.log("regions: " + this.state.regions);
    });

    Data.getScenarioCollections(
      this.state.scenarioId,
      this.state.regionId
    ).then(result => {
      this.setState({ scenarioCollections: result });
      console.log("scenarioCollections: " + this.state.scenarioCollections);
    });
  }

  selectRegionLevel(regionId) {
    Data.getRegions(regionId).then(result => {
      this.setState({ regions: result });
    });
    this.setState({ update: "" });
  }

  selectRegion(regionId) {
    this.setState({ update: regionId });
  }

  render() {
    return (
      <div class="container-fluid">
        <div className="App">
          <p>REGION LEVELS</p>
          <div>
            {this.state.regionLevels.map(element => (
              <RegionLevelContainer
                key={element.id}
                id={element.id}
                name={element.name}
                description={element.description}
                order={element.order}
              />
            ))}
          </div>
          <p>REGIONS (ID: {this.state.regionLevelId})</p>
          <div>
            {this.state.regions.map(element => (
              <RegionContainer
                key={element.id}
                id={element.id}
                name={element.name}
                shortName={element.shortName}
                order={element.order}
                scenarioCollections={element.scenarioCollections}
              />
            ))}
          </div>
          <p>
            SCENARIOCOLLECTIONS (regionID: {this.state.regionId} /
            scenarioCollectionsID: {this.state.scenarioId})
          </p>
          <div>
            {this.state.scenarioCollections.map(element => (
              <ScenarioCollectionsContainer
                key={element.id}
                id={element.id}
                name={element.name}
                description={element.description}
                scenarios={element.scenarios}
              />
            ))}
          </div>
          <div className="grid">
            <RegionLvlBtn
              regionLevels={this.state.regionLevels}
              selectRegionLevel={this.selectRegionLevel}
            />
            <RegionBtn
              regions={this.state.regions}
              selectRegion={this.selectRegion}
            />
            <ScenarioCol />
            <Scenarios />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
