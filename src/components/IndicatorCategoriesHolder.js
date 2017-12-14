import React, { Component } from 'react'
import Indicators from './DropDownIndicators'

class IndicatorCategoryHolder extends Component {
    render() {
        return (
            <div>
                <h3> { this.props.name }:</h3>
                <Indicators
                  indicators={this.props.indicators}
                  selectIndicators={this.props.selectIndicators} />
            </div>
        )
    }
}

export default IndicatorCategoryHolder