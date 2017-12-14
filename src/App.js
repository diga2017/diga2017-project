import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";
// Backend datagetter. Currently not functioning
import Data from "./data/Data";
import Config from "./Config"
// Placeholder containers
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
      chosenIndicator: [],
      timePeriods: [],
      scenarios: [],
      update: "",

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
      // console.log("regionLevels: " + this.state.regionLevels);
    });
  }

  selectRegionLevel(regionLevelId) {
    Data.getRegions(regionLevelId).then(result => {
      this.setState({ regions: result });
    });
    this.setState({ update: "" });
  }

  selectRegion(regionId) {
    this.setState({
      update: regionId,
      selectedRegionId: regionId,
      chosenRegion: this.state.regions.find(element => element.id == regionId),
      chosenRegionCollections: this.state.regions.find(element => element.id == regionId).scenarioCollections
    });
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
  }

  selectScenarios(scenarioId) {
    this.setState({
      update: scenarioId,
      selectedScenarioIds: scenarioId,
      chosenScenarios: this.state.scenarios.find(element => element.id == scenarioId)
    });
  }

  selectTimePeriod(timePeriodId) {
    this.setState({
      update: timePeriodId,
      selectedTimePeriodId: timePeriodId,
      chosenTimePeriod: this.state.timePeriods.find(element => element.id == timePeriodId)
    });
  }

  selectIndicators(indicatorId) {
    this.setState({
      update: indicatorId,
      selectedIndicatorIds: indicatorId,
      chosenIndicator: this.state.collectionIndicatorCategories.indicators.find(element => element.id == indicatorId)
    });
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
                    indicatorCategories={element.indicatorCategories}
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
                  selectIndicators={element.selectIndicators} />)
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


/*
<div className="list-group">
                <h4 className="title">Puuntuotanto*</h4>
                <button type="button" className="list-group-item list-group-item-action">Kantohinta-arvo</button>
                <button type="button" className="list-group-item list-group-item-action">Nettotulojen nykyarvo</button>
                <button type="button" className="list-group-item list-group-item-action">Hakkuukertymä</button>
                <button type="button" className="list-group-item list-group-item-action">Tilavuus</button>
              </div>
              <br />
              <div className="list-group">
                <h4 className="title">Keruutuotteet</h4>
                <button type="button" className="list-group-item list-group-item-action">Mustikkasato</button>
                <button type="button" className="list-group-item list-group-item-action">Puolukkasato</button>
              </div>
              <br />
              <div className="list-group">
                <h4 className="title">Monimuotoisuus*</h4>
                <button type="button" className="list-group-item list-group-item-action">Lahopuun</button>
                <button type="button" className="list-group-item list-group-item-action">Putkilokasvien lkm</button>
                <button type="button" className="list-group-item list-group-item-action">Mustikan peittävyys</button>
                <button type="button" className="list-group-item list-group-item-action">Jäkälien peittävyys</button>
                <button type="button" className="list-group-item list-group-item-action">Käävät</button>
              </div>
              <br />
              <div className="list-group">
                <h4 className="title">Hiili</h4>
                <button type="button" className="list-group-item list-group-item-action">Hiilen määrä</button>
              </div>
              <br />
              <div className="list-group">
                <h4 className="title">Muut</h4>
                <button type="button" className="list-group-item list-group-item-action">Biomassa</button>
              </div>
            </div>

*/
