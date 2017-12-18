import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Data from "./data/Data";
import Config from "./Config"
import localizedStrings from './components/LocalizedStrings'
// Dropdown components
import ScenarioColBtn from "./components/DropDownScnCol";
import Scenarios from "./components/DropDownScns";
import RegionLvlBtn from "./components/DropDownRgnSlct";
import RegionBtn from "./components/DropDownRegions";
import TimePeriod from "./components/DropDownTimePeriod";
import IndicatorCategories from "./components/IndicatorCategoriesHolder";

import Graphs from './components/Graphs'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      regionLevels: [], // includes: name, description, id and order
      regions: [], // includes: id, name, shortName, order and scenarioCollections: id, name, description
      scenarioCollections: [],
      chosenRegionCollections: [],
      indicatorCategories: [],
      chosenRegion: [],
      chosenScenarios: [],
      collectionIndicatorCategories: [],
      chosenIndicators: [],
      timePeriods: [],
      scenarios: [],
      update: "",

      selectedRegionLevelId: 0,
      selectedRegionId: 0,
      selectedScenarioCollectionId: 0,
      selectedTimePeriodId: 0,
      selectedIndicatorIds: 0,
      selectedScenarioIds: 0,
    };


    this.selectRegionLevel = this.selectRegionLevel.bind(this);
    this.selectRegion = this.selectRegion.bind(this);
    this.selectScenarioCollections = this.selectScenarioCollections.bind(this);
    this.selectScenarios = this.selectScenarios.bind(this);
    this.selectIndicators = this.selectIndicators.bind(this);
    this.selectTimePeriod = this.selectTimePeriod.bind(this);
    this.toggleLanguage = this.toggleLanguage.bind(this);
    this.getAllData = this.getAllData.bind(this);
  }

  componentDidMount() {
    this.getAllData();
  }

  toggleLanguage() {
    if (localizedStrings.getLanguage() === "fi") {
      localizedStrings.setLanguage("en");
    } else {
      localizedStrings.setLanguage("fi");
    }
    this.getAllData();
  }

  getAllData() {
    Data.setHeaderLanguage(localizedStrings.getLanguage());

    Data.getRegionLevels().then(result => {
      this.setState({ regionLevels: result });
    });

    Data.getRegions(this.state.selectedRegionLevelId).then(result => {
      this.setState({ regions: result });
    });

    Data.getScenarioCollections(this.state.selectedScenarioCollectionId, this.state.selectedRegionId).then(result => {
      this.setState({ scenarioCollections: result });
    });
  }

  selectRegionLevel(regionLevelId) {
    Data.getRegions(regionLevelId).then(result => {
      this.setState({
        regions: result,
        selectedRegionLevelId: regionLevelId,
        update: ""
      });
    });
    this.forceUpdate();
  }

  selectRegion(regionId) {
    this.setState({
      update: regionId,
      selectedRegionId: regionId,
      chosenRegion: this.state.regions.find(element => element.id == regionId),
      chosenRegionCollections: this.state.regions.find(element => element.id == regionId).scenarioCollections
    });
    this.forceUpdate();
  }

  selectScenarioCollections(scenarioCollectionId) {
    Data.getScenarioCollections(scenarioCollectionId, this.state.selectedRegionId).then(result => {
      this.setState({
        update: scenarioCollectionId,
        selectedScenarioCollectionId: scenarioCollectionId,
        scenarios: result[0].scenarios,
        timePeriods: result[0].timePeriods,
        scenarioCollections: result,
        collectionIndicatorCategories: result[0].indicatorCategories
      });
    });
    this.forceUpdate();
  }

  selectScenarios(scenarioId) {
    this.setState({
      update: scenarioId,
      selectedScenarioIds: scenarioId,
      chosenScenarios: this.state.scenarios.find(element => element.id == scenarioId)
    });
    this.forceUpdate();
  }

  selectTimePeriod(timePeriodId) {
    this.setState({
      update: timePeriodId,
      selectedTimePeriodId: timePeriodId,
      chosenTimePeriod: this.state.timePeriods.find(element => element.id == timePeriodId)
    });
    this.forceUpdate();
  }

  selectIndicators(indicatorId) {
    this.setState({
      update: indicatorId,
      selectedIndicatorIds: indicatorId,
    });
    this.state.collectionIndicatorCategories.forEach(indicatorCategory => {
      indicatorCategory.indicators.forEach(element => {
        if (element.id == indicatorId) {
          this.setState({ chosenIndicators: element });
        }
      });
    });
    this.forceUpdate();
  }

  render() {
    return (

      <div className="App">

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ padding: 2 }}>
          <div className="container">
            <a className="navbar-brand text-white">diga2017</a>
            <div className="form-inline my-2 my-lg-0">
              <button className="btn btn-sm btn-info" onClick={this.toggleLanguage}>{localizedStrings.languageOnSwitch}
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png" width="25" height="25" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/2000px-Flag_of_Finland.svg.png" width="25" height="25" alt="" />
              </button>
              <a type="button" className="btn btn-sm btn-info" href={Config.urlEmail + (this.state.language === "fi" ? Config.emailSubjectEn : Config.emailSubjectFi)}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7lcST3H5P7M7Q_SvGC7RG4XIhOt6IwTdWPZM1AU5ro6cvDO7d2A" width="25" height="25" alt="" />
              </a>
            </div>
          </div>
        </nav>

        
        
        <div className="container">
         
          <h1 className="title">{localizedStrings.titleApplication} </h1>
          
          <div className="row">
            <div className="col-md-3">
              <div className="grid ">
                <RegionLvlBtn
                  regionLevels={this.state.regionLevels}
                  selectRegionLevel={this.selectRegionLevel}
                />
                <RegionBtn
                  regions={this.state.regions}
                  selectRegion={this.selectRegion}
                />
                <ScenarioColBtn
                  scenarioCollections={this.state.chosenRegionCollections}
                  selectScenarioCollections={this.selectScenarioCollections}
                />
                <Scenarios
                  scenarios={this.state.scenarios}
                  selectScenarios={this.selectScenarios} />

                <TimePeriod
                  timePeriods={this.state.timePeriods}
                  selectTimePeriod={this.selectTimePeriod} />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div>
                {
                  this.state.scenarioCollections.map(element => <Graphs key={element.id}
                    scenarios={this.state.chosenScenarios}
                    timePeriods={this.state.chosenTimePeriod}
                    chosenIndicators={this.state.chosenIndicators}
                    values={element.values} />)
                }
              </div>
              <button type="button" className="btn btn-default  btn-lg" aria-label="Left Align">
                <span className="glyphicon glyphicon-align-left" aria-hidden="true"></span>
              </button>
              <button type="button" className="btn btn-default btn-lg">
                <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
              </button>
              <button type="button" className="btn btn-default btn-lg">
                <span className="glyphicon glyphicon-flash" aria-hidden="true"></span>
              </button>
              <button type="button" className="btn btn-default btn-lg">
                <span className="glyphicon glyphicon-sunglasses" aria-hidden="true"></span>
              </button>

            </div>

            <div className="col-4 col-md-3">
              <h3 className="title">{localizedStrings.titleChoosingIndicators}</h3>
              <br />
              {
                this.state.collectionIndicatorCategories.map(element => <IndicatorCategories key={element.id}
                  name={element.name}
                  indicators={element.indicators}
                  selectIndicators={this.selectIndicators} />)
              }
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
