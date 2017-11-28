import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class RegionLevelContainer extends Component {
    render () {

        const { id, name, description, order } = this.props;

        return (
            <div className="row">
                <div className="col-md-3">{ id }</div>
                <div className="col-md-3">{ name }</div>
                <div className="col-md-3">{ description }</div>
                <div className="col-md-3">{ order }</div>
            </div>
        )
    }
}

export default RegionLevelContainer