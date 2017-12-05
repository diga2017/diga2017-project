import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import RegionCollectionsContainer from './RegionCollectionsContainer'
import LocalizedStrings from './LocalizedStrings'

class RegionContainer extends Component {

    render() {
        const { id, name, shortName, order, scenarioCollections } = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-md-3">{id}</div>
                    <div className="col-md-3">{name}</div>
                    <div className="col-md-3">{shortName}</div>
                    <div className="col-md-3">{order}</div>
                </div>
                <div className="row col-md-1">
                <p> {LocalizedStrings.titleScenarioCollection} </p>
                    {
                        scenarioCollections.map(element => <RegionCollectionsContainer key = { element.id }
                                                value = { element.id }
                                                label = { element.name }
                                                description = { element.description }
                        />)
                    }
                </div>
            </div>
        )
    }
}

export default RegionContainer