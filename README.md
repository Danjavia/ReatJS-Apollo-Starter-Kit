# Installation Guide for ReactJS-Apollo Simple Starter Kit.
For starting repo, follow these steps.

# Requirements
Install Node v6.3.0+

## Install Java JDK
[Download Java JDK Here.](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

# Install Webdriver Manager for E2E Tests

```js
npm install
./node_modules/protractor/bin/webdriver-manager update // Download the Selenium driver
```

# Set GraphQL Hub Endpoint

- Rename **./client/config/config.dev.json.example** removing the *example* extension.
- Set **GRAPHQL_ENDPOINT** const to your GraphQL Endpoint.

# Basic commands

```js
npm start // Start the application in dev mode. Open in http://localhost:3000
npm run dev:hot // Start the application in dev mode hit hot reload implementation. Open in http://localhost:8080
npm run test // Run respective Unit tests from app
npm run deploy // Run the unit tests and e2e test, after it build the bundle. Show in http://localhost:8000
```

# Enable Automated Documentation

For enabling automated documentation, please install esdoc via npm

```
npm install -g esdoc
```
It, enables the documentation generation running the stage or deploy commands.

For showing how to create a documentation for components or classes, please check the docs [Here.](https://esdoc.org/) 

# Running the Project

Finally, run the project again

```js
npm run dev:hot
``` 
