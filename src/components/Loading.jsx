import React from 'react';
import { string } from 'prop-types';
import Loader from 'react-loader-spinner'
/**
 * - Component to show when a request is fetching
 * - shows loading animation and a message
 * - if message is not passed, only the animation will be shown
 */
const Loading = props =>
  (
    <div className="loading-container">
      { props.text ? <p>{props.text}</p> : null }
      <Loader type="Puff"
         color="#669DDC"
         height="100"	
         width="100" />
    </div>
  );
  
export default Loading;

Loading.displayName = 'Loading';

Loading.propTypes = {
  /**
   * text to show above loading animation
   */
  text: string
};

Loading.defaultProps = {
  text: null
};
