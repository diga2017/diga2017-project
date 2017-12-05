const scenarioCollections = [
  {
    "id": 6,
    "name": "AMO18",
    "description": "AMO results basing on the  11th NFI (field measurements in 2009-2013) . Published  04.03.2018.",
    "scenarios": [
      {
        "id": 10,
        "description": "Maximum economic removal",
        "name": "MER",
        "order": 1
      },
      {
        "id": 11,
        "description": "Climate and energy policy",
        "name": "CEP",
        "order": 2
      },
      {
        "id": 12,
        "description": "Blueberry yield",
        "name": "BbY",
        "order": 3
      },
      {
        "id": 13,
        "description": "Lingonberry yield",
        "name": "LbY",
        "order": 4
      },
      {
        "id": 14,
        "description": "Deadwood",
        "name": "DeW",
        "order": 5
      },
      {
        "id": 15,
        "description": "Carbon sink",
        "name": "CaS",
        "order": 6
      }
    ],
    "timePeriods": [
      {
        "id": 20,
        "yearStart": 2018,
        "yearEnd": 2022
      },
      {
        "id": 21,
        "yearStart": 2023,
        "yearEnd": 2027
      },
      {
        "id": 22,
        "yearStart": 2028,
        "yearEnd": 2032
      },
      {
        "id": 23,
        "yearStart": 2033,
        "yearEnd": 2033
      }
    ],
    "indicatorCategories": [
      {
        "id": 1,
        "name": "Wood production",
        "isMandatory": 1,
        "order": 1,
        "indicators": [
          {
            "id": 120,
            "name": "Stumpage price value of growing stock",
            "description": "Very long description of Stumpage price value of growing stock in english",
            "absVar": 11,
            "order": 1
          },
          {
            "id": 122,
            "name": "Net present value",
            "description": "Very long description of Net present value in english",
            "absVar": 121,
            "order": 2
          },
          {
            "id": 123,
            "name": "Saw log removal",
            "description": "Very long description of Saw log removal in english",
            "absVar": 17,
            "order": 3
          },
          {
            "id": 124,
            "name": "Saw log removal",
            "description": "Very long description of Saw log removal in english",
            "absVar": 94,
            "order": 4
          },
          {
            "id": 125,
            "name": "Stem volume",
            "description": "Very long description of Stem volume in english",
            "absVar": 2,
            "order": 5
          }
        ]
      },
      {
        "id": 2,
        "name": "Biodiversity",
        "isMandatory": 1,
        "order": 2,
        "indicators": [
          {
            "id": 127,
            "name": "Dead wood",
            "description": "Very long description of Dead wood in english",
            "absVar": 126,
            "order": 6
          },
          {
            "id": 129,
            "name": "Putkilokasvit in english",
            "description": "Very long description of Putkilokasvit in english in english",
            "absVar": 128,
            "order": 7
          },
          {
            "id": 131,
            "name": "Blueberry coverage",
            "description": "Very long description of Blueberry coverage in english",
            "absVar": 130,
            "order": 8
          }
        ]
      },
      {
        "id": 3,
        "name": "Natural products",
        "isMandatory": 0,
        "order": 3,
        "indicators": [
          {
            "id": 133,
            "name": "Blueberry yield",
            "description": "Very long description of Blueberry yield in english",
            "absVar": 132,
            "order": 9
          },
          {
            "id": 134,
            "name": "Lingonberry yield",
            "description": "Very long description of Lingonberry yield in english",
            "absVar": 135,
            "order": 10
          }
        ]
      },
      {
        "id": 4,
        "name": "Carbon",
        "isMandatory": 0,
        "order": 4,
        "indicators": [
          {
            "id": 137,
            "name": "Carbon",
            "description": "Very long description of Carbon in english",
            "absVar": 136,
            "order": 11
          }
        ]
      },
      {
        "id": 5,
        "name": "Others",
        "isMandatory": 0,
        "order": 5,
        "indicators": [
          {
            "id": 139,
            "name": "Biomass, natural removal",
            "description": "Very long description of Biomass, natural removal in english",
            "absVar": 138,
            "order": 12
          },
          {
            "id": 141,
            "name": "Biomass, cutting removal",
            "description": "Very long description of Biomass, cutting removal in english",
            "absVar": 140,
            "order": 13
          }
        ]
      }
    ],
    "values": [
      {
        "scenarioId": 10,
        "indicatorId": 137,
        "timePeriodId": 20,
        "value": 0.33
      },
      {
        "scenarioId": 10,
        "indicatorId": 120,
        "timePeriodId": 20,
        "value": 0.86
      },
      {
        "scenarioId": 10,
        "indicatorId": 131,
        "timePeriodId": 20,
        "value": 0.06
      },
      {
        "scenarioId": 10,
        "indicatorId": 129,
        "timePeriodId": 20,
        "value": 0.3
      },
      {
        "scenarioId": 10,
        "indicatorId": 127,
        "timePeriodId": 20,
        "value": 0.31
      },
      {
        "scenarioId": 10,
        "indicatorId": 125,
        "timePeriodId": 20,
        "value": 0.42
      },
      {
        "scenarioId": 10,
        "indicatorId": 124,
        "timePeriodId": 20,
        "value": 0.53
      },
      {
        "scenarioId": 10,
        "indicatorId": 123,
        "timePeriodId": 20,
        "value": 0.45
      },
      {
        "scenarioId": 10,
        "indicatorId": 122,
        "timePeriodId": 20,
        "value": 0.1
      },
      {
        "scenarioId": 10,
        "indicatorId": 122,
        "timePeriodId": 21,
        "value": 0.05
      },
      {
        "scenarioId": 10,
        "indicatorId": 137,
        "timePeriodId": 21,
        "value": 0.11
      },
      {
        "scenarioId": 10,
        "indicatorId": 120,
        "timePeriodId": 21,
        "value": 0.38
      },
      {
        "scenarioId": 10,
        "indicatorId": 131,
        "timePeriodId": 21,
        "value": 0.9
      },
      {
        "scenarioId": 10,
        "indicatorId": 129,
        "timePeriodId": 21,
        "value": 0.97
      },
      {
        "scenarioId": 10,
        "indicatorId": 127,
        "timePeriodId": 21,
        "value": 0.78
      },
      {
        "scenarioId": 10,
        "indicatorId": 125,
        "timePeriodId": 21,
        "value": 0.8
      },
      {
        "scenarioId": 10,
        "indicatorId": 124,
        "timePeriodId": 21,
        "value": 0.86
      },
      {
        "scenarioId": 10,
        "indicatorId": 123,
        "timePeriodId": 21,
        "value": 0.2
      },
      {
        "scenarioId": 10,
        "indicatorId": 123,
        "timePeriodId": 22,
        "value": 0.8
      },
      {
        "scenarioId": 10,
        "indicatorId": 122,
        "timePeriodId": 22,
        "value": 0.95
      },
      {
        "scenarioId": 10,
        "indicatorId": 137,
        "timePeriodId": 22,
        "value": 0.71
      },
      {
        "scenarioId": 10,
        "indicatorId": 120,
        "timePeriodId": 22,
        "value": 0.85
      },
      {
        "scenarioId": 10,
        "indicatorId": 131,
        "timePeriodId": 22,
        "value": 0.21
      },
      {
        "scenarioId": 10,
        "indicatorId": 129,
        "timePeriodId": 22,
        "value": 0.05
      },
      {
        "scenarioId": 10,
        "indicatorId": 127,
        "timePeriodId": 22,
        "value": 0.82
      },
      {
        "scenarioId": 10,
        "indicatorId": 125,
        "timePeriodId": 22,
        "value": 0.9
      },
      {
        "scenarioId": 10,
        "indicatorId": 124,
        "timePeriodId": 22,
        "value": 0.12
      },
      {
        "scenarioId": 10,
        "indicatorId": 124,
        "timePeriodId": 23,
        "value": 0.41
      },
      {
        "scenarioId": 10,
        "indicatorId": 123,
        "timePeriodId": 23,
        "value": 0.43
      },
      {
        "scenarioId": 10,
        "indicatorId": 122,
        "timePeriodId": 23,
        "value": 0.23
      },
      {
        "scenarioId": 10,
        "indicatorId": 137,
        "timePeriodId": 23,
        "value": 0.99
      },
      {
        "scenarioId": 10,
        "indicatorId": 120,
        "timePeriodId": 23,
        "value": 0.84
      },
      {
        "scenarioId": 10,
        "indicatorId": 131,
        "timePeriodId": 23,
        "value": 0.6
      },
      {
        "scenarioId": 10,
        "indicatorId": 129,
        "timePeriodId": 23,
        "value": 0.64
      },
      {
        "scenarioId": 10,
        "indicatorId": 127,
        "timePeriodId": 23,
        "value": 0.39
      },
      {
        "scenarioId": 10,
        "indicatorId": 125,
        "timePeriodId": 23,
        "value": 0.07
      },
      {
        "scenarioId": 11,
        "indicatorId": 125,
        "timePeriodId": 20,
        "value": 0.94
      },
      {
        "scenarioId": 11,
        "indicatorId": 124,
        "timePeriodId": 20,
        "value": 0.59
      },
      {
        "scenarioId": 11,
        "indicatorId": 123,
        "timePeriodId": 20,
        "value": 0.9
      },
      {
        "scenarioId": 11,
        "indicatorId": 122,
        "timePeriodId": 20,
        "value": 0.11
      },
      {
        "scenarioId": 11,
        "indicatorId": 137,
        "timePeriodId": 20,
        "value": 0.72
      },
      {
        "scenarioId": 11,
        "indicatorId": 120,
        "timePeriodId": 20,
        "value": 0
      },
      {
        "scenarioId": 11,
        "indicatorId": 131,
        "timePeriodId": 20,
        "value": 0.16
      },
      {
        "scenarioId": 11,
        "indicatorId": 129,
        "timePeriodId": 20,
        "value": 0.09
      },
      {
        "scenarioId": 11,
        "indicatorId": 127,
        "timePeriodId": 20,
        "value": 0.8
      },
      {
        "scenarioId": 11,
        "indicatorId": 127,
        "timePeriodId": 21,
        "value": 0.38
      },
      {
        "scenarioId": 11,
        "indicatorId": 125,
        "timePeriodId": 21,
        "value": 0.65
      },
      {
        "scenarioId": 11,
        "indicatorId": 124,
        "timePeriodId": 21,
        "value": 0.46
      },
      {
        "scenarioId": 11,
        "indicatorId": 123,
        "timePeriodId": 21,
        "value": 0.72
      },
      {
        "scenarioId": 11,
        "indicatorId": 122,
        "timePeriodId": 21,
        "value": 0.14
      },
      {
        "scenarioId": 11,
        "indicatorId": 137,
        "timePeriodId": 21,
        "value": 0.26
      },
      {
        "scenarioId": 11,
        "indicatorId": 120,
        "timePeriodId": 21,
        "value": 0.12
      },
      {
        "scenarioId": 11,
        "indicatorId": 131,
        "timePeriodId": 21,
        "value": 0.24
      },
      {
        "scenarioId": 11,
        "indicatorId": 129,
        "timePeriodId": 21,
        "value": 0.56
      },
      {
        "scenarioId": 11,
        "indicatorId": 129,
        "timePeriodId": 22,
        "value": 0.93
      },
      {
        "scenarioId": 11,
        "indicatorId": 127,
        "timePeriodId": 22,
        "value": 0.93
      },
      {
        "scenarioId": 11,
        "indicatorId": 125,
        "timePeriodId": 22,
        "value": 0.02
      },
      {
        "scenarioId": 11,
        "indicatorId": 124,
        "timePeriodId": 22,
        "value": 0.22
      },
      {
        "scenarioId": 11,
        "indicatorId": 123,
        "timePeriodId": 22,
        "value": 0.96
      },
      {
        "scenarioId": 11,
        "indicatorId": 122,
        "timePeriodId": 22,
        "value": 0.95
      },
      {
        "scenarioId": 11,
        "indicatorId": 137,
        "timePeriodId": 22,
        "value": 0.49
      },
      {
        "scenarioId": 11,
        "indicatorId": 120,
        "timePeriodId": 22,
        "value": 0.52
      },
      {
        "scenarioId": 11,
        "indicatorId": 131,
        "timePeriodId": 22,
        "value": 0.27
      },
      {
        "scenarioId": 11,
        "indicatorId": 131,
        "timePeriodId": 23,
        "value": 0.38
      },
      {
        "scenarioId": 11,
        "indicatorId": 129,
        "timePeriodId": 23,
        "value": 0.51
      },
      {
        "scenarioId": 11,
        "indicatorId": 127,
        "timePeriodId": 23,
        "value": 0.93
      },
      {
        "scenarioId": 11,
        "indicatorId": 125,
        "timePeriodId": 23,
        "value": 0.13
      },
      {
        "scenarioId": 11,
        "indicatorId": 124,
        "timePeriodId": 23,
        "value": 0.41
      },
      {
        "scenarioId": 11,
        "indicatorId": 123,
        "timePeriodId": 23,
        "value": 0.05
      },
      {
        "scenarioId": 11,
        "indicatorId": 122,
        "timePeriodId": 23,
        "value": 0.11
      },
      {
        "scenarioId": 11,
        "indicatorId": 137,
        "timePeriodId": 23,
        "value": 0.05
      },
      {
        "scenarioId": 11,
        "indicatorId": 120,
        "timePeriodId": 23,
        "value": 0.56
      },
      {
        "scenarioId": 12,
        "indicatorId": 137,
        "timePeriodId": 20,
        "value": 0.95
      },
      {
        "scenarioId": 12,
        "indicatorId": 120,
        "timePeriodId": 20,
        "value": 0.98
      },
      {
        "scenarioId": 12,
        "indicatorId": 131,
        "timePeriodId": 20,
        "value": 0.62
      },
      {
        "scenarioId": 12,
        "indicatorId": 129,
        "timePeriodId": 20,
        "value": 0.4
      },
      {
        "scenarioId": 12,
        "indicatorId": 127,
        "timePeriodId": 20,
        "value": 0.75
      },
      {
        "scenarioId": 12,
        "indicatorId": 125,
        "timePeriodId": 20,
        "value": 0.24
      },
      {
        "scenarioId": 12,
        "indicatorId": 124,
        "timePeriodId": 20,
        "value": 0.04
      },
      {
        "scenarioId": 12,
        "indicatorId": 123,
        "timePeriodId": 20,
        "value": 0.07
      },
      {
        "scenarioId": 12,
        "indicatorId": 122,
        "timePeriodId": 20,
        "value": 0.5
      },
      {
        "scenarioId": 12,
        "indicatorId": 122,
        "timePeriodId": 21,
        "value": 0.53
      },
      {
        "scenarioId": 12,
        "indicatorId": 137,
        "timePeriodId": 21,
        "value": 0.65
      },
      {
        "scenarioId": 12,
        "indicatorId": 120,
        "timePeriodId": 21,
        "value": 0.62
      },
      {
        "scenarioId": 12,
        "indicatorId": 131,
        "timePeriodId": 21,
        "value": 0.92
      },
      {
        "scenarioId": 12,
        "indicatorId": 129,
        "timePeriodId": 21,
        "value": 0.48
      },
      {
        "scenarioId": 12,
        "indicatorId": 127,
        "timePeriodId": 21,
        "value": 0.15
      },
      {
        "scenarioId": 12,
        "indicatorId": 125,
        "timePeriodId": 21,
        "value": 0.43
      },
      {
        "scenarioId": 12,
        "indicatorId": 124,
        "timePeriodId": 21,
        "value": 0.94
      },
      {
        "scenarioId": 12,
        "indicatorId": 123,
        "timePeriodId": 21,
        "value": 0.73
      },
      {
        "scenarioId": 12,
        "indicatorId": 123,
        "timePeriodId": 22,
        "value": 0.94
      },
      {
        "scenarioId": 12,
        "indicatorId": 122,
        "timePeriodId": 22,
        "value": 0.02
      },
      {
        "scenarioId": 12,
        "indicatorId": 137,
        "timePeriodId": 22,
        "value": 0.21
      },
      {
        "scenarioId": 12,
        "indicatorId": 120,
        "timePeriodId": 22,
        "value": 0.64
      },
      {
        "scenarioId": 12,
        "indicatorId": 131,
        "timePeriodId": 22,
        "value": 0.07
      },
      {
        "scenarioId": 12,
        "indicatorId": 129,
        "timePeriodId": 22,
        "value": 0.25
      },
      {
        "scenarioId": 12,
        "indicatorId": 127,
        "timePeriodId": 22,
        "value": 0.4
      },
      {
        "scenarioId": 12,
        "indicatorId": 125,
        "timePeriodId": 22,
        "value": 0.79
      },
      {
        "scenarioId": 12,
        "indicatorId": 124,
        "timePeriodId": 22,
        "value": 0.1
      },
      {
        "scenarioId": 12,
        "indicatorId": 124,
        "timePeriodId": 23,
        "value": 0.4
      },
      {
        "scenarioId": 12,
        "indicatorId": 123,
        "timePeriodId": 23,
        "value": 0.53
      },
      {
        "scenarioId": 12,
        "indicatorId": 122,
        "timePeriodId": 23,
        "value": 0.73
      },
      {
        "scenarioId": 12,
        "indicatorId": 137,
        "timePeriodId": 23,
        "value": 0.19
      },
      {
        "scenarioId": 12,
        "indicatorId": 120,
        "timePeriodId": 23,
        "value": 0.05
      },
      {
        "scenarioId": 12,
        "indicatorId": 131,
        "timePeriodId": 23,
        "value": 0.18
      },
      {
        "scenarioId": 12,
        "indicatorId": 129,
        "timePeriodId": 23,
        "value": 0.37
      },
      {
        "scenarioId": 12,
        "indicatorId": 127,
        "timePeriodId": 23,
        "value": 0.97
      },
      {
        "scenarioId": 12,
        "indicatorId": 125,
        "timePeriodId": 23,
        "value": 0.29
      },
      {
        "scenarioId": 13,
        "indicatorId": 125,
        "timePeriodId": 20,
        "value": 0.33
      },
      {
        "scenarioId": 13,
        "indicatorId": 124,
        "timePeriodId": 20,
        "value": 0.53
      },
      {
        "scenarioId": 13,
        "indicatorId": 123,
        "timePeriodId": 20,
        "value": 0.9
      },
      {
        "scenarioId": 13,
        "indicatorId": 122,
        "timePeriodId": 20,
        "value": 0.06
      },
      {
        "scenarioId": 13,
        "indicatorId": 137,
        "timePeriodId": 20,
        "value": 0.56
      },
      {
        "scenarioId": 13,
        "indicatorId": 120,
        "timePeriodId": 20,
        "value": 0.63
      },
      {
        "scenarioId": 13,
        "indicatorId": 131,
        "timePeriodId": 20,
        "value": 0.71
      },
      {
        "scenarioId": 13,
        "indicatorId": 129,
        "timePeriodId": 20,
        "value": 0.63
      },
      {
        "scenarioId": 13,
        "indicatorId": 127,
        "timePeriodId": 20,
        "value": 0.43
      },
      {
        "scenarioId": 13,
        "indicatorId": 127,
        "timePeriodId": 21,
        "value": 0.53
      },
      {
        "scenarioId": 13,
        "indicatorId": 125,
        "timePeriodId": 21,
        "value": 0.86
      },
      {
        "scenarioId": 13,
        "indicatorId": 124,
        "timePeriodId": 21,
        "value": 0.68
      },
      {
        "scenarioId": 13,
        "indicatorId": 123,
        "timePeriodId": 21,
        "value": 0.96
      },
      {
        "scenarioId": 13,
        "indicatorId": 122,
        "timePeriodId": 21,
        "value": 0.85
      },
      {
        "scenarioId": 13,
        "indicatorId": 137,
        "timePeriodId": 21,
        "value": 0.01
      },
      {
        "scenarioId": 13,
        "indicatorId": 120,
        "timePeriodId": 21,
        "value": 0.05
      },
      {
        "scenarioId": 13,
        "indicatorId": 131,
        "timePeriodId": 21,
        "value": 0.24
      },
      {
        "scenarioId": 13,
        "indicatorId": 129,
        "timePeriodId": 21,
        "value": 0.27
      },
      {
        "scenarioId": 13,
        "indicatorId": 129,
        "timePeriodId": 22,
        "value": 0.21
      },
      {
        "scenarioId": 13,
        "indicatorId": 127,
        "timePeriodId": 22,
        "value": 0.81
      },
      {
        "scenarioId": 13,
        "indicatorId": 125,
        "timePeriodId": 22,
        "value": 0.12
      },
      {
        "scenarioId": 13,
        "indicatorId": 124,
        "timePeriodId": 22,
        "value": 0.65
      },
      {
        "scenarioId": 13,
        "indicatorId": 123,
        "timePeriodId": 22,
        "value": 0.18
      },
      {
        "scenarioId": 13,
        "indicatorId": 122,
        "timePeriodId": 22,
        "value": 0.8
      },
      {
        "scenarioId": 13,
        "indicatorId": 137,
        "timePeriodId": 22,
        "value": 0.77
      },
      {
        "scenarioId": 13,
        "indicatorId": 120,
        "timePeriodId": 22,
        "value": 0.4
      },
      {
        "scenarioId": 13,
        "indicatorId": 131,
        "timePeriodId": 22,
        "value": 0.28
      },
      {
        "scenarioId": 13,
        "indicatorId": 131,
        "timePeriodId": 23,
        "value": 0.3
      },
      {
        "scenarioId": 13,
        "indicatorId": 129,
        "timePeriodId": 23,
        "value": 0.72
      },
      {
        "scenarioId": 13,
        "indicatorId": 127,
        "timePeriodId": 23,
        "value": 0.98
      },
      {
        "scenarioId": 13,
        "indicatorId": 125,
        "timePeriodId": 23,
        "value": 0.46
      },
      {
        "scenarioId": 13,
        "indicatorId": 124,
        "timePeriodId": 23,
        "value": 0.02
      },
      {
        "scenarioId": 13,
        "indicatorId": 123,
        "timePeriodId": 23,
        "value": 0.83
      },
      {
        "scenarioId": 13,
        "indicatorId": 122,
        "timePeriodId": 23,
        "value": 0.5
      },
      {
        "scenarioId": 13,
        "indicatorId": 137,
        "timePeriodId": 23,
        "value": 0.18
      },
      {
        "scenarioId": 13,
        "indicatorId": 120,
        "timePeriodId": 23,
        "value": 0.06
      },
      {
        "scenarioId": 14,
        "indicatorId": 137,
        "timePeriodId": 20,
        "value": 0.33
      },
      {
        "scenarioId": 14,
        "indicatorId": 120,
        "timePeriodId": 20,
        "value": 0.07
      },
      {
        "scenarioId": 14,
        "indicatorId": 131,
        "timePeriodId": 20,
        "value": 0.44
      },
      {
        "scenarioId": 14,
        "indicatorId": 129,
        "timePeriodId": 20,
        "value": 0.12
      },
      {
        "scenarioId": 14,
        "indicatorId": 127,
        "timePeriodId": 20,
        "value": 0.92
      },
      {
        "scenarioId": 14,
        "indicatorId": 125,
        "timePeriodId": 20,
        "value": 0.95
      },
      {
        "scenarioId": 14,
        "indicatorId": 124,
        "timePeriodId": 20,
        "value": 0.35
      },
      {
        "scenarioId": 14,
        "indicatorId": 123,
        "timePeriodId": 20,
        "value": 0.29
      },
      {
        "scenarioId": 14,
        "indicatorId": 122,
        "timePeriodId": 20,
        "value": 0.45
      },
      {
        "scenarioId": 14,
        "indicatorId": 122,
        "timePeriodId": 21,
        "value": 0.03
      },
      {
        "scenarioId": 14,
        "indicatorId": 137,
        "timePeriodId": 21,
        "value": 0.96
      },
      {
        "scenarioId": 14,
        "indicatorId": 120,
        "timePeriodId": 21,
        "value": 0.89
      },
      {
        "scenarioId": 14,
        "indicatorId": 131,
        "timePeriodId": 21,
        "value": 0.91
      },
      {
        "scenarioId": 14,
        "indicatorId": 129,
        "timePeriodId": 21,
        "value": 0.09
      },
      {
        "scenarioId": 14,
        "indicatorId": 127,
        "timePeriodId": 21,
        "value": 0.58
      },
      {
        "scenarioId": 14,
        "indicatorId": 125,
        "timePeriodId": 21,
        "value": 0.34
      },
      {
        "scenarioId": 14,
        "indicatorId": 124,
        "timePeriodId": 21,
        "value": 0.75
      },
      {
        "scenarioId": 14,
        "indicatorId": 123,
        "timePeriodId": 21,
        "value": 0.16
      },
      {
        "scenarioId": 14,
        "indicatorId": 123,
        "timePeriodId": 22,
        "value": 0.55
      },
      {
        "scenarioId": 14,
        "indicatorId": 122,
        "timePeriodId": 22,
        "value": 0.61
      },
      {
        "scenarioId": 14,
        "indicatorId": 137,
        "timePeriodId": 22,
        "value": 0.08
      },
      {
        "scenarioId": 14,
        "indicatorId": 120,
        "timePeriodId": 22,
        "value": 0.12
      },
      {
        "scenarioId": 14,
        "indicatorId": 131,
        "timePeriodId": 22,
        "value": 0.52
      },
      {
        "scenarioId": 14,
        "indicatorId": 129,
        "timePeriodId": 22,
        "value": 0.61
      },
      {
        "scenarioId": 14,
        "indicatorId": 127,
        "timePeriodId": 22,
        "value": 0.29
      },
      {
        "scenarioId": 14,
        "indicatorId": 125,
        "timePeriodId": 22,
        "value": 0.94
      },
      {
        "scenarioId": 14,
        "indicatorId": 124,
        "timePeriodId": 22,
        "value": 0.65
      },
      {
        "scenarioId": 14,
        "indicatorId": 124,
        "timePeriodId": 23,
        "value": 0.51
      },
      {
        "scenarioId": 14,
        "indicatorId": 123,
        "timePeriodId": 23,
        "value": 0.5
      },
      {
        "scenarioId": 14,
        "indicatorId": 122,
        "timePeriodId": 23,
        "value": 0
      },
      {
        "scenarioId": 14,
        "indicatorId": 137,
        "timePeriodId": 23,
        "value": 0.88
      },
      {
        "scenarioId": 14,
        "indicatorId": 120,
        "timePeriodId": 23,
        "value": 0.38
      },
      {
        "scenarioId": 14,
        "indicatorId": 131,
        "timePeriodId": 23,
        "value": 0.32
      },
      {
        "scenarioId": 14,
        "indicatorId": 129,
        "timePeriodId": 23,
        "value": 0.49
      },
      {
        "scenarioId": 14,
        "indicatorId": 127,
        "timePeriodId": 23,
        "value": 0.22
      },
      {
        "scenarioId": 14,
        "indicatorId": 125,
        "timePeriodId": 23,
        "value": 0.95
      },
      {
        "scenarioId": 15,
        "indicatorId": 125,
        "timePeriodId": 20,
        "value": 0.24
      },
      {
        "scenarioId": 15,
        "indicatorId": 124,
        "timePeriodId": 20,
        "value": 0.43
      },
      {
        "scenarioId": 15,
        "indicatorId": 123,
        "timePeriodId": 20,
        "value": 0.29
      },
      {
        "scenarioId": 15,
        "indicatorId": 122,
        "timePeriodId": 20,
        "value": 0.93
      },
      {
        "scenarioId": 15,
        "indicatorId": 137,
        "timePeriodId": 20,
        "value": 0.89
      },
      {
        "scenarioId": 15,
        "indicatorId": 120,
        "timePeriodId": 20,
        "value": 0.69
      },
      {
        "scenarioId": 15,
        "indicatorId": 131,
        "timePeriodId": 20,
        "value": 0.64
      },
      {
        "scenarioId": 15,
        "indicatorId": 129,
        "timePeriodId": 20,
        "value": 0.92
      },
      {
        "scenarioId": 15,
        "indicatorId": 127,
        "timePeriodId": 20,
        "value": 0.16
      },
      {
        "scenarioId": 15,
        "indicatorId": 127,
        "timePeriodId": 21,
        "value": 0.8
      },
      {
        "scenarioId": 15,
        "indicatorId": 125,
        "timePeriodId": 21,
        "value": 0.21
      },
      {
        "scenarioId": 15,
        "indicatorId": 124,
        "timePeriodId": 21,
        "value": 0.6
      },
      {
        "scenarioId": 15,
        "indicatorId": 123,
        "timePeriodId": 21,
        "value": 0.5
      },
      {
        "scenarioId": 15,
        "indicatorId": 122,
        "timePeriodId": 21,
        "value": 0.82
      },
      {
        "scenarioId": 15,
        "indicatorId": 137,
        "timePeriodId": 21,
        "value": 0.76
      },
      {
        "scenarioId": 15,
        "indicatorId": 120,
        "timePeriodId": 21,
        "value": 0.49
      },
      {
        "scenarioId": 15,
        "indicatorId": 131,
        "timePeriodId": 21,
        "value": 0.83
      },
      {
        "scenarioId": 15,
        "indicatorId": 129,
        "timePeriodId": 21,
        "value": 0.13
      },
      {
        "scenarioId": 15,
        "indicatorId": 129,
        "timePeriodId": 22,
        "value": 0.58
      },
      {
        "scenarioId": 15,
        "indicatorId": 127,
        "timePeriodId": 22,
        "value": 0.53
      },
      {
        "scenarioId": 15,
        "indicatorId": 125,
        "timePeriodId": 22,
        "value": 0.97
      },
      {
        "scenarioId": 15,
        "indicatorId": 124,
        "timePeriodId": 22,
        "value": 0.78
      },
      {
        "scenarioId": 15,
        "indicatorId": 123,
        "timePeriodId": 22,
        "value": 0.1
      },
      {
        "scenarioId": 15,
        "indicatorId": 122,
        "timePeriodId": 22,
        "value": 0.76
      },
      {
        "scenarioId": 15,
        "indicatorId": 137,
        "timePeriodId": 22,
        "value": 0.16
      },
      {
        "scenarioId": 15,
        "indicatorId": 120,
        "timePeriodId": 22,
        "value": 0.85
      },
      {
        "scenarioId": 15,
        "indicatorId": 131,
        "timePeriodId": 22,
        "value": 0.2
      },
      {
        "scenarioId": 15,
        "indicatorId": 131,
        "timePeriodId": 23,
        "value": 0.52
      },
      {
        "scenarioId": 15,
        "indicatorId": 129,
        "timePeriodId": 23,
        "value": 0.16
      },
      {
        "scenarioId": 15,
        "indicatorId": 127,
        "timePeriodId": 23,
        "value": 0.8
      },
      {
        "scenarioId": 15,
        "indicatorId": 125,
        "timePeriodId": 23,
        "value": 0.92
      },
      {
        "scenarioId": 15,
        "indicatorId": 124,
        "timePeriodId": 23,
        "value": 0.78
      },
      {
        "scenarioId": 15,
        "indicatorId": 123,
        "timePeriodId": 23,
        "value": 0.67
      },
      {
        "scenarioId": 15,
        "indicatorId": 122,
        "timePeriodId": 23,
        "value": 0.24
      },
      {
        "scenarioId": 15,
        "indicatorId": 137,
        "timePeriodId": 23,
        "value": 0.46
      },
      {
        "scenarioId": 15,
        "indicatorId": 120,
        "timePeriodId": 23,
        "value": 0.16
      }
    ]
  }
];

function getScenarioCollections() {
  return new Promise((resolve, reject) => {
    resolve(scenarioCollections);
  });
}

export default { getScenarioCollections };