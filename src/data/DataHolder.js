import ScenarioCollectionsData from './ScenarioCollectionsData';
// User chooses one of the two regionLevels which gives us an ID to use when getting regions
const regionLevels = [
  {
    "name": "Region",
    "description": "Regions of Finland as on 1.1.2017",
    "id": 1,
    "order": 1
  },
  {
    "name": "Forestry Centers",
    "description": "Forestry Centers of Finland as on 1.1.2015",
    "id": 2,
    "order": 2
  }
];

// These are the regions returned by requesting: 'http://melatupa.azurewebsites.net/regionLevels/1/regions'
// From these the user chooses a region which we will show the scenarioCollections for
// scenarioCollections ID is then used to get the scenarios in that region
const regions = [
  {
    "id": 24,
    "name": "Kainuu",
    "shortName": "Ka",
    "order": 5,
    "scenarioCollections": [
      {
        "id": 6,
        "name": "AMO18",
        "description": "AMO results basing on the  11th NFI (field measurements in 2009-2013) . Published  04.03.2018."
      },
      {
        "id": 5,
        "name": "NFI11 (2009-2013)",
        "description": "Results for Finnish regions basing on the  11th NFI (field measurements in 2009-2013) . Published  18.03.2017."
      }
    ]
  },
  {
    "id": 29,
    "name": "Lapland",
    "shortName": "La",
    "order": 10,
    "scenarioCollections": [
      {
        "id": 6,
        "name": "AMO18",
        "description": "AMO results basing on the  11th NFI (field measurements in 2009-2013) . Published  04.03.2018."
      },
      {
        "id": 5,
        "name": "NFI11 (2009-2013)",
        "description": "Results for Finnish regions basing on the  11th NFI (field measurements in 2009-2013) . Published  18.03.2017."
      }
    ]
  },
  {
    "id": 32,
    "name": "North Karelia",
    "shortName": "NK",
    "order": 13,
    "scenarioCollections": [
      {
        "id": 6,
        "name": "AMO18",
        "description": "AMO results basing on the  11th NFI (field measurements in 2009-2013) . Published  04.03.2018."
      }
    ]
  },
  {
    "id": 33,
    "name": "Northern Ostrobothnia",
    "shortName": "NO",
    "order": 14,
    "scenarioCollections": [
      {
        "id": 6,
        "name": "AMO18",
        "description": "AMO results basing on the  11th NFI (field measurements in 2009-2013) . Published  04.03.2018."
      }
    ]
  }
];

// These are SOME of the scenarioCollections returned from (notice the use of the IDs that we got from the regions array)
// 'http://melatupa.azurewebsites.net/scenarioCollection/6/region/33'
// From these the user chooses the last options like scenarios, timePeriods, indicatorCategories etc.
// SCENARIOCOLLECTIONS PLACEHOLDER DATA IS IN ANOTHER FOLDER BECAUSE THE DATASET IS HUGE

let scenarioCollections = [];

function getRegionLevels() {
  return new Promise((resolve, reject) => {
    resolve(regionLevels);
  });
}

function getRegions() {
  return new Promise((resolve, reject) => {
    resolve(regions);
  });
}

function getScenarioCollections() {

  scenarioCollections = ScenarioCollectionsData.getScenarioCollections();

  return new Promise((resolve, reject) => {
    resolve(scenarioCollections);
  });
}

export default { getRegionLevels, getRegions, getScenarioCollections };