import React, { Component } from 'react'

class IndicatorCategories extends Component {

    constructor(props)
    {
        super(props)

        this.state = {
            indicatorCategories: [],
            options: [],
            indicatorsSet: false,
            selectedIndicatorIDs: []
        }

        this.indicatorChanged = this.indicatorChanged.bind(this)
    }

    indicatorchanged()
    {

        let newIndicatorIDs = new.target.options;

        new value = this.state.selectedIndicatorIDs;
        
        for (var i = 0, l = newIndicatorIDs.length; i < l; i++) {
                value.push(newIndicatorIDs[i].value);
        } 

        this.setState({ selectedIndicatorIDs: value });

        this.props.indicatorChanged(value)
    }

    componentDidUpdate()
    {
        this.setState({ indicatorCategories: this.props.indicatorCategories}, function()
        {
            this.setState({
                options: this.state.indicatorCategories.map(element =>{
                    
                            
                })
            })
        } 
              
    }


    render () {
        return (
            <div>
                
            </div>
        )
    }
}

export default IndicatorCategories