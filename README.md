
# E2E Run with Mochawesome HTML Reporters

This GitHub Actions workflow is designed to run end-to-end tests using Cypress and generate a Mochawesome HTML report. It includes steps to run the tests, extract relevant information, and create an HTML report for easy analysis.

## Workflow Overview

1. **Build Cypress Matrix**: 
   - Check out the code.
   - Run a script to generate a matrix of Cypress specs.

2. **E2E Run**:
   - Run end-to-end tests using Cypress.
   - Remove cache reports and screenshots.
   - Extract test filename.
   - Upload test results and screenshots as artifacts.

3. **Generate HTML Report**:
   - Download test results and screenshots artifacts.
   - Copy JSON files and failed snapshots to the `htmlreport` directory.
   - Merge test results into one JSON file.
   - Generate an HTML report using Mochawesome.

4. **Save HTML Report**:
   - Upload the generated HTML report as an artifact.

## How to Use

1. **Run Workflow**:
   - Trigger the workflow manually or on a schedule.
   - Specify the test you want to run.

2. **Review Artifacts**:
   - After the workflow completes, go to the Actions tab.
   - Download artifacts to review test results and the HTML report.

## Dependencies

- [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html): Make sure Cypress is installed in your project.

- [Mochawesome](https://github.com/adamgruber/mochawesome): Configure Mochawesome as your test reporter.

## Cypress Configuration

 - Ensure your Cypress configuration includes the Mochawesome reporter.

`cypress.config.js`
  ```
  {
    "reporter": "mochawesome",
    "reporterOptions": {
      "reportDir": "cypress/results/mochawesome-report"
    }
  }
```

`reporter.config.json`
```
{
    "reporterEnabled": "mochawesome, mocha-junit-reporter",

    "reporterOptions": {
        "overwrite": false,
        "reportFilename": "CyHTMLReport_[status]-[datetime]-[name]",
        "reportDir": "cypress/results",
        "reportPageTitle": "HTML Report",
        "timestamp": "longDate",
        "html": false,
        "json": true
    },

    "mochaJunitReporterReporterOptions": {
        "mochaFile": "cypress/results/cypress-report-[hash].xml",
        "toConsole": true
    }
}
```

 - Include the following code in your cypress/support/e2e.js file to show images for failure tests in the report:
```
Cypress.on("test:after:run", (test, runnable) => {  
    if (test.state === "failed") {    
        const screenshot = `assets/snapshots/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;    
        addContext({ test }, screenshot);  
    }
});
```

## Workflow Customization
 - The workflow is configured to run end-to-end tests for a specific test case.
 - Modify the matrix in e2e-run to include different browsers or configurations if needed.
Customize paths and filenames in the script as per your project structure.

## Artifacts
 - cypress/results: Contains XML files and other artifacts from Cypress runs.
 - cypress/screenshots: Screenshots captured during the test run.
 - HTMLREPORT-<runningEnv>_<testingScope>_<currenTest>: The generated HTML report.
