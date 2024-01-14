# Cypress E2E Tests
This repository contains end-to-end (E2E) tests for Sample UI Tests. The tests are written using [Cypress](https://cypress.io/), a powerful JavaScript end-to-end testing framework.

## Prerequisites
Node.js and npm installed on your machine. You can download them from https://nodejs.org/.
Git installed on your machine. You can download it from https://git-scm.com/.
## Getting Started
### 1. Clone the Repository
```
git clone https://github.com/lienngo1985/cypress-automation-js-template.git
cd cypress-automation-js-template
```
### 2. Install Dependencies
```
npm install
```
### 3. Configure Cypress
Run Cypress open to configure Cypress and set up your cypress.json file:

```
npx cypress open
```
Choose your testing type when prompted (e.g., "e2e").

### 4. Run Cypress Tests
To run Cypress tests in headless mode:

```
npx cypress run --headless
```
To open Cypress Test Runner for interactive test execution:

```
npx cypress open
```
## Customizing Cypress Configuration
You can customize the Cypress configuration in the cypress.json file. For more information on configuration options, refer to the [Cypress Configuration Documentation](https://docs.cypress.io/guides/references/configuration).

## Writing and Organizing Tests
Cypress tests are located in the cypress/e2e directory. You can organize your tests into subdirectories based on your project structure.

For information on writing tests, check the [Cypress Documentation]([https://docs.cypress.io/guides/overview/why-cypress](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test).

## Additional Information
[Cypress Documentation](https://docs.cypress.io/guides/overview/why-cypress)https://docs.cypress.io/guides/overview/why-cypress
[GitHub Actions Documentation](https://docs.cypress.io/guides/continuous-integration/github-actions)https://docs.cypress.io/guides/continuous-integration/github-actions
