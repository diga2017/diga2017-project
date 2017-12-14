import LocalizedStrings from 'react-localization';

let localizedStrings = new LocalizedStrings({
  en: {
    language: "English",
    languageOnSwitch: "Suomi",
    titleApplication: "Forest Indicator",
    titleChoosingScenarios: "Choose scenarios",
    titleRegionLevel: "Region level",
    titleRegion: "Region",
    titleScenarioCollection: "Scenario collection",
    titleScenarios: "Scenarios",
    titleTimePeriod: "Time period",
    titleChoosingIndicators: "Choose indicators",

    IndicatorCatagory1: "Timber production",
    IndicatorCatagory2: "Collection products",
    IndicatorCatagory3: "Diversity",
    IndicatorCatagory4: "Carbon",
    IndicatorCatagory5: "Other",
    sendFeedback: "Feedback",
    stayOpen: "Stay open after scenario choices",
  },
  fi: {
    language: "Suomi",
    languageOnSwitch: "English",
    titleApplication: "Metsämittari",
    titleChoosingScenarios: "Skenaarioiden valinta",
    titleRegionLevel: "Aluetaso",
    titleRegion: "Alue",
    titleScenarioCollection: "Skenaariokokoelma",
    titleScenarios: "Skenaariot",
    titleTimePeriod: "Ajankohta",
    titleChoosingIndicators: "Indikaattoreiden valinta",
    sendFeedback: "Palaute",
    stayOpen: "Pysy avoinna kun skenaario valittu"
  }
});

export default localizedStrings;