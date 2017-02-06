# Installation Guide for Khronos App Client.
For starting repo, follow these steps.

# Requirements
Install NVM [Show More](https://github.com/creationix/nvm/blob/master/README.markdown)
Install Node v6.3.0 via nvm

```js
nvm install v6.3.0
```

## Install Java JDK
[Download Java JDK Here.](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

# Install Webdriver Manager for E2E Tests

```js
npm install
./node_modules/protractor/bin/webdriver-manager update // Download the Selenium driver
```

## Basic commands

```js
npm start // Start the application in dev mode. Open in http://localhost:3000
npm run dev:hot // Start the application in dev mode hit hot reload implementation. Open in http://localhost:8080
npm run test // Run respective Unit tests from app
npm run deploy // Run the unit tests and e2e test, after it build the bundle. Show in http://localhost:8000
```

# Allow Tests (Not necessary for version ^2.6.1)

Open antd.js and search the following text

```js
/*
 * enquire.js v2.1.1 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
```

Paste the following code into the function inmediatly after of method declaration.

```js
if (typeof window !== 'undefined') {
  var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
    return {
      media: mediaQuery,
      matches: false,
      addListener: function addListener() {},
      removeListener: function removeListener() {}
    };
  };
  window.matchMedia = window.matchMedia || matchMediaPolyfill;
}
```

After, you should to see:

```js
(function (name, context, factory) {

    if (typeof window !== 'undefined') {
      var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
        return {
          media: mediaQuery,
          matches: false,
          addListener: function addListener() {},
          removeListener: function removeListener() {}
        };
      };
      window.matchMedia = window.matchMedia || matchMediaPolyfill;
    }

    var matchMedia = window.matchMedia;
	
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory(matchMedia);
    }

    // More code here
    ... 
}
```

## Enable Automated Documentation

For enabling automated documentation, please install esdoc via npm

```
npm install -g esdoc
```
It, enables the documentation generation running the stage or deploy commands.

For showing how to create a documentation for components or classes, please check the docs [Here.](https://esdoc.org/) 

## Running the Project

Finally, run the project again

```js
npm run dev:hot
``` 
