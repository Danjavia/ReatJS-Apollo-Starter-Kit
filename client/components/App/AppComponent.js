/**
* External libraries
*/
import React, { PropTypes, Component } from 'react';
import 'normalize.css/normalize.css';

/**
* Internal components
*/


/**
 * Main application component.
 */
export default class App extends Component {

  /**
   * propTypes
   * @property {element} children children element to print.
   */
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
