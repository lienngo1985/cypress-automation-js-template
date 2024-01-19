# Using Applitools with Cypress
## Overview
This document provides step-by-step instructions for integrating Applitools with Cypress for visual testing. Applitools is a visual testing and monitoring platform that helps automate visual validation of web applications.

## Prerequisites
 - [Cypress](https://www.cypress.io/)
 - [Node.js](https://nodejs.org/en)
 - [Applitools Account](https://applitools.com/)

## Installation
**1. Install Applitools Eyes Cypress SDK:**
```bash
   npm install @applitools/eyes-cypress
```
**2. Set Applitools API Key:**
 - Sign up for an Applitools account and obtain your API key.
 - Configure Applitools in your Cypress configuration.
 - Example Cypress configuration (cypress.config.js):
```
  require('@applitools/eyes-cypress')(module);
```
**3. Import applitools commands:**
Example of commands (cypress/support/e2e.js):
```
  import '@applitools/eyes-cypress/commands'
```
**4. Create Applitools Configuration File:**
 - Create an Applitools configuration file (e.g., applitools.config.js) to customize visual testing settings.
 - Set the API key as an environment variable in your project
 - Example applitools.config.js:
```
  module.exports = {
      testConcurrency: 5,
      apiKey: 'your-api-key',
      batchName: 'Cypress Learning',
      browser: [
          {width: 800, height: 600, name: 'chrome'},
          {width: 1600, height: 1200, name: 'firefox'},
          {width: 1024, height: 768, name: 'safari'},
          {deviceName: 'Pixel 2', screenOrientation: 'portrait'},
          {deviceName: 'Nexus 10', screenOrientation: 'landscape'},
      ]
  }
```

## Writing Visual Tests with Applitools
 - In your Cypress test scripts, use the Applitools commands to capture and compare visual snapshots.
 - Example Cypress test script 
```
  it('should display homepage', function () {
    cy.visit('/');
    cy.eyesOpen({
      appName: 'Your App Name',
      testName: 'Homepage Test',
    });
    cy.eyesCheckWindow('Homepage');
    cy.eyesClose();
  });
```

## Running Cypress Tests with Applitools
Run your Cypress tests as usual, and Applitools will capture and compare visual snapshots.
```
npx cypress run --browser chrome --spec cypress/e2e/2-advanced-examples/demo_appli_tools.cy.js --headed
```

## Viewing Results on Applitools Dashboard
After running the tests, view the visual test results on the Applitools dashboard, where you can analyze and manage visual differences.
https://eyes.applitools.com/app/test-results/00000251696627368355/?accountId=g_iQiqr3IEKNtI6lNwlhYQ__
![image](https://github.com/lienngo1985/cypress-automation-js-template/assets/68629906/ac37ff0e-905d-4eca-8ea0-f2ae2df80b10)

<img width="1559" alt="image" src="https://github.com/lienngo1985/cypress-automation-js-template/assets/68629906/57e24a73-c84c-477f-ac0b-cba32dbbc3f7">

