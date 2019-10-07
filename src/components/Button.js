import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

const Button = (props) => (
  <button type="button" className="button" style={{ backgroundColor: (props.color === 'f1ff92' ? '' : 'lightGray'), width: (props.width === true ? '50%' : '') }}>
    {props.name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;
