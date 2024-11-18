$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/runner/work/sample-bdd-project-in-katalon-latest-version/sample-bdd-project-in-katalon-latest-version/Include/features/Web/Authentication/Login.feature");
formatter.feature({
  "name": "Login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@WebLogin"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Test login with various credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User opens the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User types username \u003cusername\u003e into the Username field",
  "keyword": "When "
});
formatter.step({
  "name": "User types password \u003cpassword\u003e into the Password field",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks the Submit button",
  "keyword": "And "
});
formatter.step({
  "name": "User verifies the message \u003cexpected_message\u003e is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "expected_message"
      ]
    },
    {
      "cells": [
        "student",
        "Password123",
        "Logged In Successfully"
      ]
    },
    {
      "cells": [
        "incorrectUser",
        "Password123",
        "Your username is invalid!"
      ]
    },
    {
      "cells": [
        "student",
        "incorrectPassword",
        "Your password is invalid!"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test login with various credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@WebLogin"
    }
  ]
});
formatter.step({
  "name": "User opens the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Common.openLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User types username student into the Username field",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.enterUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User types password Password123 into the Password field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.clickSubmitButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies the message Logged In Successfully is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyMessageDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test login with various credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@WebLogin"
    }
  ]
});
formatter.step({
  "name": "User opens the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Common.openLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User types username incorrectUser into the Username field",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.enterUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User types password Password123 into the Password field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.clickSubmitButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies the message Your username is invalid! is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyMessageDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test login with various credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@WebLogin"
    }
  ]
});
formatter.step({
  "name": "User opens the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Common.openLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User types username student into the Username field",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.enterUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User types password incorrectPassword into the Password field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.clickSubmitButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies the message Your password is invalid! is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyMessageDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
});