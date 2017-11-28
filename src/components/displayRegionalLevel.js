import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class displayRegionalLevel extends Component {
    render () {

        let content;
        
        content = (

            <div>
                <div className="col-md-4">
                    <input type="text" />
                </div>
                <div className="col-md-4">
                    <input type="text" />
                </div>
                <div className="col-md-4">
                    <input type="text" />
                </div>
            </div>);
        

        return (
            <div className="row">
                { content }                    
            </div>
        )
    }
}

export default displayRegionalLevel