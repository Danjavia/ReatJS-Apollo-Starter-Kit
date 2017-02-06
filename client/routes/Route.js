/**
 * External libraries
 * */
import React from 'react';
import { IndexRoute, Route, Redirect } from 'react-router';

/**
 * Internal components
 **/
import AppComponent from '../components/App/AppComponent';
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

/**
 * Router class definition.
 */
export default (
  <Route path="/" component={AppComponent}>
    <IndexRoute component={HomePage} />
    {/*<Redirect from="/" to="/login" />*/}
    <Route path="*" component={NotFoundPage} />
  </Route>
);

