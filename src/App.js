import React, { Component } from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'jquery/dist/jquery.min.js';
import "./App.css";
import Data from "./data/Data";
import Config from "./Config"
import localizedStrings from './components/LocalizedStrings'
// Dropdown components
import DropDown from "./components/SingleDropDown";
import Scenarios from "./components/DropDownScns";
import TimePeriod from "./components/DropDownTimePeriod";
import IndicatorCategories from "./components/IndicatorCategoriesHolder";

import Graphs from './components/Graphs'
import Tables from './components/Tables'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      regionLevels: [], // includes: name, description, id and order
      regions: [], // includes: id, name, shortName, order and scenarioCollections: id, name, description
      scenarioCollections: [],
      chosenRegionCollections: [],
      indicatorCategories: [],
      indicators: [],
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
      selectedIndicatorIds: [],
      selectedScenarioIds: [],
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

  iconClick(chart){

     if(chart == "Bar"){
      console.log("Bar");
      ReactDOM.render(
          <div>{
            this.state.scenarioCollections.map(element => <Graphs key={element.id}
                                                                  chosenRegion={this.state.chosenRegion.name}
                                                                  chosenScenarioCollection={this.state.scenarioCollections[0].name}
                                                                  scenarios={this.state.scenarios}
                                                                  selectedScenarioIds={this.state.selectedScenarioIds}
                                                                  timePeriods={this.state.chosenTimePeriod}
                                                                  indicators={this.state.indicators}
                                                                  selectedIndicatorIds={this.state.selectedIndicatorIds}
                                                                  values={element.values} />)
          }
          </div>,
          document.getElementById('chart')
      );
    }else if(chart == "Table"){
      console.log("Table");
      ReactDOM.render(
          <div>{
            this.state.scenarioCollections.map(element => <Tables key={element.id}
                                                                  chosenRegion={this.state.chosenRegion.name}
                                                                  chosenScenarioCollection={this.state.scenarioCollections[0].name}
                                                                  scenarios={this.state.scenarios}
                                                                  selectedScenarioIds={this.state.selectedScenarioIds}
                                                                  timePeriods={this.state.chosenTimePeriod}
                                                                  indicators={this.state.indicators}
                                                                  selectedIndicatorIds={this.state.selectedIndicatorIds}
                                                                  values={element.values} />)
          }
          </div>,
          document.getElementById('chart')
      );
    }
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

      result[0].indicatorCategories.forEach(indicatorCategory => {
        indicatorCategory.indicators.forEach(element => {
          console.log("indicators forloop: " + element)
          this.setState({ indicators: this.state.indicators.concat(element) });
        });
      });

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
    // console.log("selectScenario | scenarioId: " + scenarioId + " typeOf: " + typeof scenarioId)
    let scenarioIdArr = [];
    try {
      scenarioIdArr = scenarioId.split(',');
    } catch (err) {
      console.log(err);
    }
    this.setState({
      update: scenarioId,
      selectedScenarioIds: scenarioIdArr,
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
    // console.log("selectIndicators | indicatorId: " + indicatorId + " typeOf: " + typeof indicatorId)
    let indicatorIdArr = [];
    try {
      indicatorIdArr = indicatorId.split(',');
    } catch (err) {
      console.log(err);
    }
    this.setState({
      update: indicatorId,
      selectedIndicatorIds: indicatorIdArr,
    });
  }

  render() {
    return (   

      <div className="App">

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
          <div className="container">
            <a className="navbar-brand text-white">{localizedStrings.titleApplication}</a>
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
          <div className="row">
            <div className="col-md-2">
              <div className="grid">
                <DropDown
                  title={localizedStrings.titleRegionLevel}
                  placeHolder={localizedStrings.dropDownHolderRegionLevel}
                  choices={this.state.regionLevels}
                  selectOption={this.selectRegionLevel}
                />
                <DropDown
                  title={localizedStrings.titleRegion}
                  placeHolder={localizedStrings.dropDownHolderRegion}
                  choices={this.state.regions}
                  selectOption={this.selectRegion}
                />
                <DropDown
                  title={localizedStrings.titleScenarioCollection}
                  placeHolder={localizedStrings.dropDownHolderScenarioCollection}
                  choices={this.state.chosenRegionCollections}
                  selectOption={this.selectScenarioCollections}
                />
                <Scenarios
                  scenarios={this.state.scenarios}
                  selectScenarios={this.selectScenarios} />

                <TimePeriod
                  timePeriods={this.state.timePeriods}
                  selectTimePeriod={this.selectTimePeriod} />
              </div>
            </div>

            <div className="col-12 col-md-8">
              <div id="chart">
                {
                  this.state.scenarioCollections.map(element => <Graphs key={element.id}
                                                                        chosenRegion={this.state.chosenRegion.name}
                                                                        chosenScenarioCollection={this.state.scenarioCollections[0].name}
                                                                        scenarios={this.state.scenarios}
                                                                        selectedScenarioIds={this.state.selectedScenarioIds}
                                                                        timePeriods={this.state.chosenTimePeriod}
                                                                        indicators={this.state.indicators}
                                                                        selectedIndicatorIds={this.state.selectedIndicatorIds}
                                                                        values={element.values} />)
                }
              </div>

              <button onClick={this.iconClick.bind(this,"Bar")} type="button" className="btn btn-default btn-lg">
                <span className="glyphicon glyphicon-stats" aria-hidden="true"></span>
              </button>
              <button onClick={this.iconClick.bind(this,"Table")} type="button" className="btn btn-default btn-lg">
                <span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>
              </button>
            </div>

            <div className="col-4 col-md-2">
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
