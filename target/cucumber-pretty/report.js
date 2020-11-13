$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/BMIcalculator.feature");
formatter.feature({
  "line": 1,
  "name": "BMICalculator feature",
  "description": "Verify the BMI value",
  "id": "bmicalculator-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "find the BMI value with age height and weight",
  "description": "",
  "id": "bmicalculator-feature;find-the-bmi-value-with-age-height-and-weight",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user is on the BMI calculator home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The user enters age height and weight \"\u003cage\u003e\",\"\u003cheight\u003e\",\"\u003cweight\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user clicks bmicalculate button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "should show BMI value",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "bmicalculator-feature;find-the-bmi-value-with-age-height-and-weight;",
  "rows": [
    {
      "cells": [
        "age",
        "height",
        "weight"
      ],
      "line": 12,
      "id": "bmicalculator-feature;find-the-bmi-value-with-age-height-and-weight;;1"
    },
    {
      "cells": [
        "10",
        "127",
        "40"
      ],
      "line": 13,
      "id": "bmicalculator-feature;find-the-bmi-value-with-age-height-and-weight;;2"
    },
    {
      "cells": [
        "30",
        "156",
        "70"
      ],
      "line": 14,
      "id": "bmicalculator-feature;find-the-bmi-value-with-age-height-and-weight;;3"
    },
    {
      "cells": [
        "25",
        "152",
        "55"
      ],
      "line": 15,
      "id": "bmicalculator-feature;find-the-bmi-value-with-age-height-and-weight;;4"
    },
    {
      "cells": [
        "20",
        "160",
        "45"
      ],
      "line": 16,
      "id": "bmicalculator-feature;find-the-bmi-value-with-age-height-and-weight;;5"
    },
    {
      "cells": [
        "35",
        "160",
        "70"
      ],
      "line": 17,
      "id": "bmicalculator-feature;find-the-bmi-value-with-age-height-and-weight;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "find the BMI value with age height and weight",
  "description": "",
  "id": "bmicalculator-feature;find-the-bmi-value-with-age-height-and-weight;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user is on the BMI calculator home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The user enters age height and weight \"10\",\"127\",\"40\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user clicks bmicalculate button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "should show BMI value",
  "keyword": "Then "
});
formatter.match({
  "location": "BMIStepDefinition.the_user_is_on_the_BMI_calculator_home_page()"
});
formatter.result({
  "duration": 14833662300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 39
    },
    {
      "val": "127",
      "offset": 44
    },
    {
      "val": "40",
      "offset": 50
    }
  ],
  "location": "BMIStepDefinition.the_user_enters_age_height_and_weight(String,String,String)"
});
formatter.result({
  "duration": 789316900,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDefinition.the_user_clicks_bmicalculate_button()"
});
formatter.result({
  "duration": 1024465200,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDefinition.should_show_BMI_value()"
});
formatter.result({
  "duration": 1981588400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "find the BMI value with age height and weight",
  "description": "",
  "id": "bmicalculator-feature;find-the-bmi-value-with-age-height-and-weight;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user is on the BMI calculator home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The user enters age height and weight \"30\",\"156\",\"70\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user clicks bmicalculate button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "should show BMI value",
  "keyword": "Then "
});
formatter.match({
  "location": "BMIStepDefinition.the_user_is_on_the_BMI_calculator_home_page()"
});
formatter.result({
  "duration": 11453931200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 39
    },
    {
      "val": "156",
      "offset": 44
    },
    {
      "val": "70",
      "offset": 50
    }
  ],
  "location": "BMIStepDefinition.the_user_enters_age_height_and_weight(String,String,String)"
});
formatter.result({
  "duration": 581095600,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDefinition.the_user_clicks_bmicalculate_button()"
});
formatter.result({
  "duration": 1217248000,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDefinition.should_show_BMI_value()"
});
formatter.result({
  "duration": 1816340400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "find the BMI value with age height and weight",
  "description": "",
  "id": "bmicalculator-feature;find-the-bmi-value-with-age-height-and-weight;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user is on the BMI calculator home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The user enters age height and weight \"25\",\"152\",\"55\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user clicks bmicalculate button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "should show BMI value",
  "keyword": "Then "
});
formatter.match({
  "location": "BMIStepDefinition.the_user_is_on_the_BMI_calculator_home_page()"
});
formatter.result({
  "duration": 10675882800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 39
    },
    {
      "val": "152",
      "offset": 44
    },
    {
      "val": "55",
      "offset": 50
    }
  ],
  "location": "BMIStepDefinition.the_user_enters_age_height_and_weight(String,String,String)"
});
formatter.result({
  "duration": 623353800,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDefinition.the_user_clicks_bmicalculate_button()"
});
formatter.result({
  "duration": 1276169300,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDefinition.should_show_BMI_value()"
});
formatter.result({
  "duration": 1788190900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "find the BMI value with age height and weight",
  "description": "",
  "id": "bmicalculator-feature;find-the-bmi-value-with-age-height-and-weight;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user is on the BMI calculator home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The user enters age height and weight \"20\",\"160\",\"45\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user clicks bmicalculate button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "should show BMI value",
  "keyword": "Then "
});
formatter.match({
  "location": "BMIStepDefinition.the_user_is_on_the_BMI_calculator_home_page()"
});
formatter.result({
  "duration": 10523227200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 39
    },
    {
      "val": "160",
      "offset": 44
    },
    {
      "val": "45",
      "offset": 50
    }
  ],
  "location": "BMIStepDefinition.the_user_enters_age_height_and_weight(String,String,String)"
});
formatter.result({
  "duration": 561148300,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDefinition.the_user_clicks_bmicalculate_button()"
});
formatter.result({
  "duration": 1133406100,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDefinition.should_show_BMI_value()"
});
formatter.result({
  "duration": 1984142800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "find the BMI value with age height and weight",
  "description": "",
  "id": "bmicalculator-feature;find-the-bmi-value-with-age-height-and-weight;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user is on the BMI calculator home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The user enters age height and weight \"35\",\"160\",\"70\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user clicks bmicalculate button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "should show BMI value",
  "keyword": "Then "
});
formatter.match({
  "location": "BMIStepDefinition.the_user_is_on_the_BMI_calculator_home_page()"
});
formatter.result({
  "duration": 12126445400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 39
    },
    {
      "val": "160",
      "offset": 44
    },
    {
      "val": "70",
      "offset": 50
    }
  ],
  "location": "BMIStepDefinition.the_user_enters_age_height_and_weight(String,String,String)"
});
formatter.result({
  "duration": 630072900,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDefinition.the_user_clicks_bmicalculate_button()"
});
formatter.result({
  "duration": 1136783700,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDefinition.should_show_BMI_value()"
});
formatter.result({
  "duration": 1778231900,
  "status": "passed"
});
});