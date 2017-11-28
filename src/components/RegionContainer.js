import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class RegionContainer extends Component {

    render() {
        const { id, name, shortName, order } = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-md-3">{id}</div>
                    <div className="col-md-3">{name}</div>
                    <div className="col-md-3">{shortName}</div>
                    <div className="col-md-3">{order}</div>
                </div>
            </div>
        )
    }
}

export default RegionContainer