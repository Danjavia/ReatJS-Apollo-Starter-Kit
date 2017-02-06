/**
 * External resources
 * */
require('offline-plugin/runtime').install();
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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

const GRAPHQL_ENDPOINT = process.env.CONFIG.GRAPHQL_ENDPOINT;

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: GRAPHQL_ENDPOINT }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <MuiThemeProvider>
      <Router history={appHistory} routes={Route} />
    </MuiThemeProvider>
  </ApolloProvider>,
  rootNode
);
