import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

const Button = (props) => {
  const clickHandler = () => props.clickHandler(props.name);
  
  return (
    <button type={'button'} className={'button'} style={{ backgroundColor: props.color, width: (props.width === true ? '50%' : '') }} onClick={() => {clickHandler()}}>
      {props.name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;
