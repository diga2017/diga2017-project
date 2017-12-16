import React, { Component } from 'react';
const ReactHighcharts = require('react-highcharts');
const ReactHighchartsexporting = require('highcharts-exporting')

class Graphs extends Component {
    constructor(props) {
        super(props);
    
        global.Highcharts = require('highcharts');
        require('highcharts/modules/exporting')(global.Highcharts);
        global.HighchartsMore = require('highcharts-more');
        };


    render() {
        const { scenarios, timePeriods, chosenIndicators, values } = this.props;


        let chosenTimePeriod = timePeriods;
//        let chosenIndicatorCategory = indicatorCategories[0];

        let chosenScenarios = [scenarios]
        let chosenIndicatorsArr = [chosenIndicators];

        let chosenValueSeries = [];
        let chosenScenarioNames = [];
        let chosenIndicatorNames = [];

        let series = [];

        if (typeof chosenTimePeriod == "undefined"){
            chosenTimePeriod = {
                id: 20,
                yearStart: 0,
                yearEnd: 0
              };
        }

        console.log("indicators: " + JSON.stringify(chosenIndicators));
        if (typeof chosenIndicatorsArr[0] == "undefined" || chosenIndicatorsArr[0] == [] || chosenIndicatorsArr[0] == null || chosenIndicatorsArr[0] == [null]) {
            chosenIndicatorsArr = [{
                  id: 120,
                  name: "null",
                  description: "null",
                  absVar: 11,
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
            chosenIndicatorsArr.forEach(indicator => {
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

        console.log(JSON.stringify(chosenValueSeries));

        const config = {
            chart: {
                type: 'column'
            },
            title: {
                text: chosenTimePeriod.yearStart + '-' + chosenTimePeriod.yearEnd
            },
            subtitle: {
                text: 'Source: http://melatupa.azurewebsites.net/'
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