import React, { Component } from 'react';
const ReactHighcharts = require('react-highcharts');

class Graphs extends Component {
    render() {
        const { scenarios, timePeriods, indicatorCategories, values } = this.props;

        let chosenTimePeriod = timePeriods[1];
        let chosenIndicatorCategory = indicatorCategories[0];

        let chosenScenarios = [scenarios[0], scenarios[1], scenarios[2]];
        let chosenIndicators = [chosenIndicatorCategory.indicators[0], chosenIndicatorCategory.indicators[1], chosenIndicatorCategory.indicators[2]];

        let chosenValueSeries = [];
        let chosenScenarioNames = [];
        let chosenIndicatorNames = [];

        let series = [];

        // These loops go through the choices given by the user and pushes all the values for the current settings to an array
        // which is later looped through to create the displayable data series
        // NOTE: User must have chosen: scenarios, indicators and a time period
        chosenScenarios.forEach(scenario => {
            chosenScenarioNames.push(scenario.name);
            let chosenValues = [];
            chosenIndicators.forEach(indicator => {
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
                text: timePeriods[0].yearStart + '-' + timePeriods[0].yearEnd
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