import axios from 'axios';
import Config from '../Config';

/* 
@return promise returns a new promise that has the region levels data
 */
function getRegionLevels() {
    return new Promise((resolve, reject) => {
        axios.get(Config.urlBase + '/regionLevels/')
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
/* 
@param  regionId    id used to find regions from current region level (1 or 2)
@return promise     returns a new promise that has the regions data for the current region level chosen
 */
function getRegions(regionLevelId) {
    return new Promise((resolve, reject) => {
        axios.get(Config.urlBase + '/regionLevels/' + regionLevelId + '/regions/')
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
/* 
@param  scenarioCollectionsId    id used to find different scenario collections in a chosen region
@param  regionId                 id used to identify the region for which scenarios should be shown
@return promise                 returns a new promise that has the scenario collections data for the chosen scenario in the chosen region
 */
function getScenarioCollections(scenarioCollectionsId, regionId) {
    return new Promise((resolve, reject) => {
        axios.get(Config.urlBase + '/scenarioCollection/' + scenarioCollectionsId + '/region/' + regionId)
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

export default { getRegionLevels, getRegions, getScenarioCollections };