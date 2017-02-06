/**
 * External resources
 * */
require('offline-plugin/runtime').install();
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createHashHistory } from 'history';
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

/**
 * Internal resources
 * */
import Route from './routes/Route';
import './assets/scss/style.scss';

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);

const GRAPHQL_ENDPOINT = process.env.CONFIG ? process.env.CONFIG.GRAPHQL_ENDPOINT || 'http://192.168.101.14:8000/api/khronos/' : 'http://192.168.101.14:8000/api/khronos/';

// let token = localStorage.getItem('jwt_token');

// Relay.injectNetworkLayer(
//   new Relay.DefaultNetworkLayer(GRAPHQL_ENDPOINT, {
//     fetchTimeout: 30000,   // Timeout after 30s.
//     retryDelays: [5000],   // Only retry once after a 5s delay.
//     // headers: {
//     //   Authorization: token ? 'JWT ' + token : ''
//     // }
//   })
// );

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: GRAPHQL_ENDPOINT }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={appHistory} routes={Route} />
  </ApolloProvider>,
  rootNode
);
