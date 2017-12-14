import React, { Component } from 'react'
import Indicators from './DropDownIndicators'

class IndicatorCategoryHolder extends Component {

    selectIndicators(event) {
        this.props.selectIndicators(event.target.value);
    }

    render() {
        return (
            <div>
                <p> { this.props.name } </p>
                <Indicators
                  indicators={this.props.indicators}
                  selectIndicators={this.selectIndicators} />
            </div>
        )
    }
}

export default IndicatorCategoryHolder