import LocalizedStrings from 'react-localization';

let localizedStrings = new LocalizedStrings({
  en: {
    language: "English",
    languageOnSwitch: "Suomi",
    titleChoosingScenarios: "Choose scenarios",
    titleRegionLevel: "Region level",
    titleRegion: "Region",
    titleScenarioCollection: "Scenario collection",
    titleScenarios: "Scenarios",
    titleTimePeriod: "Time period",
    titleChoosingIndicators: "Choose indicators",
  },
  fi: {
    language: "Suomi",
    languageOnSwitch: "English",
    titleChoosingScenarios: "Skenaarioiden valinta",
    titleRegionLevel: "Aluetaso",
    titleRegion: "Alue",
    titleScenarioCollection: "Skenaariokokoelma",
    titleScenarios: "Skenaariot",
    titleTimePeriod: "Ajankohta",
    titleChoosingIndicators: "Indikaattorien valinta",
  }
});

export default localizedStrings;