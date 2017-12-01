import React, { Component } from 'react'

class RegionCollectionsContainer extends Component {
    render() {
        const { value, label, description } = this.props;
        return (
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-3"></div>
                <div className="col-md-2">{value}</div>
                <div className="col-md-2">{label}</div>
            </div>
        )
    }
}

export default RegionCollectionsContainer