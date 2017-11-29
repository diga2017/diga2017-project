import React, { Component } from 'react'

class RegionCollectionsContainer extends Component {
    render() {
        const { value, label, description } = this.props;
        return (
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-3"></div>
                <div className="col-md-1">{value}</div>
                <div className="col-md-1">{label}</div>
            </div>
        )
    }
}

export default RegionCollectionsContainer