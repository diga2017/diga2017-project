import React, { Component } from 'react';
const ReactHighcharts = require('react-highcharts');

class Graphs extends Component {
    constructor(props) {
        super(props);
    
        global.Highcharts = require('highcharts');
        require('highcharts/modules/exporting')(global.Highcharts);
        global.HighchartsMore = require('highcharts-more');
        };


    render() {
        const { chosenRegion, chosenScenarioCollection, scenarios, selectedScenarioIds, timePeriods, indicators, selectedIndicatorIds, values } = this.props;


        let chosenTimePeriod = timePeriods;

        let chosenScenarios = [];
        let chosenIndicators = [];

        let chosenValueSeries = [];
        let chosenScenarioNames = [];
        let chosenIndicatorNames = [];

        let series = [];

        if (typeof chosenTimePeriod == "undefined"){
            chosenTimePeriod = {
                id: 0,
                yearStart: 0,
                yearEnd: 0
              };
        }

        // console.log("selectedScenarioIds: " + JSON.stringify(selectedScenarioIds));
        selectedScenarioIds.forEach(scenarioId => {
            chosenScenarios.push(scenarios.find(element => element.id == scenarioId))
        });

        // console.log("selectedIndicatorIds: " + JSON.stringify(selectedIndicatorIds));
        // console.log("indicators: " + JSON.stringify(indicators));
        selectedIndicatorIds.forEach(indicatorId => {
            chosenIndicators.push(indicators.find(element => element.id == indicatorId))
        });

        // console.log("chosenIndicators: " + JSON.stringify(chosenIndicators));
        if (typeof chosenIndicators == "undefined" || chosenIndicators[0] == null || chosenIndicators == null) {
            chosenIndicators = [{
                  id: 0,
                  name: "No indicators chosen",
                  description: "No indicators chosen",
                  absVar: 0,
                  order: 0
                }
            ]
        }

        if (typeof chosenScenarios == "undefined" || chosenScenarios[0] == null || chosenScenarios == null) {
            chosenScenarios = [{
                  id: 0,
                  name: "No scenario chosen",
                  description: "No scenario chosen",
                  order: 1
                }
            ]
        }

        // These loops go through the choices given by the user and pushes all the values for the current settings to an array
        // which is later looped through to create the displayable data series
        // NOTE: User must have chosen: scenarios, indicators and a time period
        chosenScenarios.forEach(scenario => {
            chosenScenarioNames.push(scenario.name);
            let chosenValues = [];
            chosenIndicators.forEach(indicator => {
                if (typeof indicator == 'undefined') {
                    return;
                }
                chosenIndicatorNames.push(indicator.name);
                values.forEach(value => {
                    if (value.scenarioId === scenario.id) {
                        if (value.indicatorId === indicator.id) {
                            if (value.timePeriodId === chosenTimePeriod.id) {
                                chosenValues.push(value.value);
                            }
                        }
                    }
                });
            });
            chosenValueSeries.push(chosenValues);
        });

        // This loops through the users scenario choices and creates series objects to be shown with the data pairing of the scenario/indicator combinations
        let i = 0;
        chosenScenarioNames.forEach(scenarioName => {
            // console.log(scenarioName + " : " + i);
            let seriesObj = {
                name: "",
                data: 0,
            };
            seriesObj.name = scenarioName;
            seriesObj.data = chosenValueSeries[i]

            series.push(seriesObj);
            i++;
        });

        // console.log("chosenValueSeries" + JSON.stringify(chosenValueSeries));

        const config = {
            chart: {
                type: 'column'
            },
            title: {
                text: chosenRegion + ", " + chosenScenarioCollection + ", " + chosenTimePeriod.yearStart + '-' + chosenTimePeriod.yearEnd
            },
            xAxis: {
                categories: chosenIndicatorNames,
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Value'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: series
        };

        return (
            <div>
                <ReactHighcharts config={config} />
            </div>
        )
    }
}

export default Graphs