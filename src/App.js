import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Config from './Config';
import localizedStrings from './components/LocalizedStrings'
// Backend datagetter. Currently not functioning
import Data from './data/Data';
// Placeholder containers
import RegionLevelContainer from './components/RegionLevelContainer';
import RegionContainer from './components/RegionContainer';
import ScenarioCollectionsContainer from './components/ScenarioCollectionsContainer';
import NavBar from './components/NavBar';
// Placeholder data (will be removed after backend requests are working)
import DataHolder from './data/DataHolder';

import Graphs from './components/Graphs'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      regionLevels: [],         // includes: name, description, id and order
      regions: [],              // includes: id, name, shortName, order and scenarioCollections: id, name, description
      scenarioCollections: [],

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
    if (localizedStrings.getLanguage() == "fi") {
      localizedStrings.setLanguage("en");
    } else {
      localizedStrings.setLanguage("fi");
    }
    this.getAllData();
  }

  getAllData() {
    Data.setUserLanguage(localizedStrings.getLanguage());

    Data.getRegionLevels().then(result => {
      this.setState({ regionLevels: result });
      // console.log("regionLevels: " + this.state.regionLevels);
    });

    Data.getRegions(this.state.regionLevelId).then(result => {
      this.setState({ regions: result });
      // console.log("regions: " + this.state.regions);
    });

    Data.getScenarioCollections(this.state.scenarioId, this.state.regionId).then(result => {
      this.setState({ scenarioCollections: result });
      // console.log("scenarioCollections: " + this.state.scenarioCollections);
    });
  }

  render() {
    return (

      <div className="App">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ padding: 2 }}>
              <div className="container">
                  <a className="navbar-brand text-white" href="#" >diga2017</a>
                  
                  <div className="form-inline my-2 my-lg-0">
    
                  <button className="Toggle_langage" onClick = {this.toggleLanguage}>{ localizedStrings.languageOnSwitch } 
                  
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png" width="30" height="30" alt="" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/2000px-Flag_of_Finland.svg.png" width="30" height="30" alt="" /></button>
                  
                  </div>
                  
              </div>
          </nav>



           <div className="container">
             <h1 className="title">Metsämittari </h1>
            <div className="row">


                <div className="col-4 col-md-3">
                    <div className="dropdown">
                        <h3 className="title">Skenaarioiden valinta</h3>
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown button
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item">Action</a>
                            <a className="dropdown-item">Another action</a>
                            <a className="dropdown-item">Something else here</a>
                        </div>
                    </div>
                </div>


                <div className="col-12 col-md-6">

                    <div>
                        {
                            this.state.scenarioCollections.map(element => <Graphs key={element.id}
                                                                                  scenarios={element.scenarios}
                                                                                  timePeriods={element.timePeriods}
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
                    <h3 className="title">Indikaattoreiden valinta</h3>
                    <br/>
                    <div className="list-group">
                        <h4 className="title">Puuntuotanto*</h4>
                        <button type="button" className="list-group-item list-group-item-action">Kantohinta-arvo</button>
                        <button type="button" className="list-group-item list-group-item-action">Nettotulojen nykyarvo</button>
                        <button type="button" className="list-group-item list-group-item-action">Hakkuukertymä</button>
                        <button type="button" className="list-group-item list-group-item-action">Tilavuus</button>
                    </div>
                    <br/>
                    <div className="list-group">
                        <h4 className="title">Keruutuotteet</h4>
                        <button type="button" className="list-group-item list-group-item-action">Mustikkasato</button>
                        <button type="button" className="list-group-item list-group-item-action">Puolukkasato</button>
                    </div>
                    <br/>
                    <div className="list-group">
                        <h4 className="title">Monimuotoisuus*</h4>
                        <button type="button" className="list-group-item list-group-item-action">Lahopuun</button>
                        <button type="button" className="list-group-item list-group-item-action">Putkilokasvien lkm</button>
                        <button type="button" className="list-group-item list-group-item-action">Mustikan peittävyys</button>
                        <button type="button" className="list-group-item list-group-item-action">Jäkälien peittävyys</button>
                        <button type="button" className="list-group-item list-group-item-action">Käävät</button>
                    </div>
                    <br/>
                    <div className="list-group">
                        <h4 className="title">Hiili</h4>
                        <button type="button" className="list-group-item list-group-item-action">Hiilen määrä</button>
                    </div>
                    <br/>
                    <div className="list-group">
                        <h4 className="title">Muut</h4>
                        <button type="button" className="list-group-item list-group-item-action">Biomassa</button>
                    </div>
                </div>
            </div>
             <div className="footer">

             </div>
         </div>
        
        <a type="button" className="btn btn-primary" href={Config.urlEmail + (this.state.language === "fi" ? Config.emailSubjectEn : Config.emailSubjectFi)}>Send feedback</a>
        <p> { localizedStrings.titleRegionLevel } </p>
        <div>
          {
            this.state.regionLevels.map(element => <RegionLevelContainer key={element.id}
              id={element.id}
              name={element.name}
              description={element.description}
              order={element.order} />)
          }
        </div>
        <p>{ localizedStrings.titleRegion } (ID: {this.state.regionLevelId})</p>
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
        <p>{ localizedStrings.titleScenarioCollection } (regionID: {this.state.regionId} / scenarioCollectionsID: {this.state.scenarioId})</p>
        <div>
          {
            this.state.scenarioCollections.map(element => <ScenarioCollectionsContainer key={element.id}
              id={element.id}
              name={element.name}
              description={element.description}
              scenarios={element.scenarios} />)
          }
        </div>
        <div>
          {
            this.state.scenarioCollections.map(element => <Graphs key={element.id}
              scenarios={element.scenarios}
              timePeriods={element.timePeriods}
              indicatorCategories={element.indicatorCategories}
              values={element.values} />)
          }
        </div>
      </div >

      

    );
  }
}


export default App;
