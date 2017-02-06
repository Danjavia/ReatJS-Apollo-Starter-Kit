import React, { PropTypes, Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

/**
 * Internal resources
 * */
import './HomePage.scss';

/**
 * HomePage class definition
 * */
export default class HomePage extends Component {

  /**
   * childContextTypes
   * @property {object} muiTheme MUI integration with component
   * */
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  /**
   * getChildContext
   * @return {object} muiTheme MUI theme integration
   * */
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  /**
   * render
   * @return {ReactElement} markup
   * */
  render() {
    return (
      <div className="home-page">
        <h1>React-Apollo-MUI</h1>
        <h2>Starter Kit</h2>
        <div>
          <RaisedButton
            label="View Repo"
            href="https://github.com/Danjavia/ReatJS-Apollo-Starter-Kit/"
            target="_blank"
            secondary={true}
            icon={<i className="fa fa-github"></i>}
          />
        </div>
      </div>
    );
  }
}


