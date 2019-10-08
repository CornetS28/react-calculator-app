import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

const Display = props => (
    <div className="display">
      {props.result}
    </div>
  );

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};
export default Display;
