import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ScenariosContainer from './ScenariosContainer';
import LocalizedStrings from './LocalizedStrings';

class ScenarioCollectionsContainer extends Component {
    render() {

        const { id, name, description, scenarios } = this.props;

        return (
            <div className="row">
                <div className="col-md-3">{id}</div>
                <div className="col-md-3">{name}</div>
                <div className="col-md-3">{description}</div>
                <div className="col-md-3">
                <p> {LocalizedStrings.titleScenarios} </p>
                    {
                        scenarios.map(element => <ScenariosContainer key={element.id}
                            id={element.id}
                            name={element.name}
                            description={element.description}
                            order={element.order} />)
                    }
                </div>
            </div>
        )
    }
}

export default ScenarioCollectionsContainer