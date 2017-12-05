import React, { Component } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'jquery/dist/jquery.min.js';
import './App.css';
import localizedStrings from './components/LocalizedStrings'
// Backend datagetter. Currently not functioning
import Data from './data/Data';
import Graphs from './components/Graphs';
// Placeholder containers
import RegionLevelContainer from './components/RegionLevelContainer';
import RegionContainer from './components/RegionContainer';
import ScenarioCollectionsContainer from './components/ScenarioCollectionsContainer';



class App extends Component{

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
        );
    }
}



export default App;
