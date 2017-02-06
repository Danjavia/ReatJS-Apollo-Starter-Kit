require('babel-register');

const jsdom = require('jsdom').jsdom;

const exposedProperties = ['window', 'navigator', 'document'];

// let expect = require('chai').expect;

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

/* eslint-disable no-unused-vars */
const documentRef = document;
/* eslint-disable no-unused-vars */
