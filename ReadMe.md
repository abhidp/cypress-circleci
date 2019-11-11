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
  
  > 4 CI machines are set to run tests in Parallel and save around 13 seconds of execution time compared to running all test serially in a single container.

  View the Builds for this repo @ https://circleci.com/gh/abhidp/workflows/cypress-circleci ( **You need to be logged in to your own CircleCI account using your GitHub credentials to view this** )

  View the Summary under `Test Summary` tab and Mochawesome Report under `Artifacts` tab of the Job run 

  ![Alt text](misc/testSummaryCi.png?raw=true "Test Summary ")

    ![Alt text](misc/cireport.png?raw=true "Report Artifacts")


* Cypress Dashboard

  Cypress Dashboard is integrated with GitHub and CircleCI to record and report every test when new code is pushed. 

  View the Dashboard @ https://dashboard.cypress.io/#/projects/kcuq6p/runs

  ( **You need to be logged in to your own Cypress Dashboard account using your GitHub or Google credentials to view this** )

  ![Alt text](misc/CypressDashboard.png?raw=true "Cypress Dashboard")



  Please [contact me](mailto:abhi358@gmail.com) in case of any queries