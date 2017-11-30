import React, { Component } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'jquery/dist/jquery.min.js';
import './App.css';




class App extends Component{

    render() {

        return (
         <div className="container">
             <h1 className="title">Metsämittari </h1>
            <div className="row">


                <div className="col-4 col-md-2">
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


                <div className="col-12 col-md-8">.col-6 .col-md-4</div>


                <div className="col-4 col-md-2">
                    <h3 className="title">Indikaattoreiden valinta</h3>
                    <div className="list-group">
                        <button type="button" className="list-group-item list-group-item-action active">
                            Cras justo odio
                        </button>
                        <button type="button" className="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
                        <button type="button" className="list-group-item list-group-item-action">Morbi leo risus</button>
                        <button type="button" className="list-group-item list-group-item-action">Porta ac consectetur ac</button>
                        <button type="button" className="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>
                    </div>
                </div>
            </div>
         </div>
        );
    }
}



export default App;
