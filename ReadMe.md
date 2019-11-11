[![CircleCI](https://circleci.com/gh/abhidp/cypress-circleci/tree/master.svg?style=svg)](https://circleci.com/gh/abhidp/cypress-circleci/tree/master)

An E2E test automation framework in JavaScript developed using [Cypress](https://github.com/cypress-io/cypress)

Tests :

The following tests run against a publicly available web app :
https://cafetownsend-angular-rails.herokuapp.com/login

* Login
* Create Employee
* Edit Employee
* Delete Employee

### Instructions :

#### Pre-Reqs :

* Node v10+
* Google Chrome browser v70+
* NPM v6+

#### Get Started:
* One-liner clone and install : 
    ```
    git clone https://github.com/abhidp/cypress-circleci.git &&
    cd cypress-circleci
    ```

* Run Test Locally :
    ```
    npm test
    ```
  
* View Reports for Local Run :

    After a run completion, [Mochawesome](https://github.com/adamgruber/mochawesome) generates report under `cypress/results/report/mochawesome.html`



* CI/CD : 

  CI is setup using [CircleCI Orbs](https://docs.cypress.io/guides/guides/continuous-integration.html#CircleCI)

  Config for the CI is defined in `circle.yml`.
  It uses Cypress's predefined Orb which makes installing cypress, caching dependencies, parallel execution etc. with minimum effort and maximum efficiency.  

  View the Builds for this repo @ https://circleci.com/gh/abhidp/workflows/cypress-circleci ( **You need to be logged in to your own CircleCI account to view this** )




  



