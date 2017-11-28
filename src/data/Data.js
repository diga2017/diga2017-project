import axios from 'axios';

const urlRegionLevels = 'http://melatupa.azurewebsites.net/regionLevels'

function getRegionLevels() {
    return new Promise((resolve, reject) => {
        axios.get(urlRegionLevels)
            .then(results => {
                console.log(results);
                const regionLevels = results.data.map(element => {
                    return element;
                });
                resolve(regionLevels);
            })
            .catch(error => {
                console.log(error);
                reject();
            })
    });
}

function getRegions(regionId) {
    return new Promise((resolve, reject) => {
        axios.get('http://melatupa.azurewebsites.net/regionLevels/' + regionId + '/regions')
            .then(results => {
                console.log(results);
                const regions = results.data.map(element => {
                    return element;
                });
                resolve(regions);
            })
            .catch(error => {
                console.log(error);
                reject();
            })
    });
}

function getScenarioCollections(scenarioCollectionsId, regionId) {
    return new Promise((resolve, reject) => {
        axios.get('http://melatupa.azurewebsites.net/scenarioCollection/' + scenarioCollectionsId + '/region/' + regionId)
            .then(results => {
                console.log(results);
                const scenarioCollections = results.data.map(element => {
                    return element;
                });
                resolve(scenarioCollections);
            })
            .catch(error => {
                console.log(error);
                reject();
            })
    });
}

export default { getRegionLevels };