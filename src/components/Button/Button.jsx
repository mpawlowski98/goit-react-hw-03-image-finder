import React from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';
const Button = ({ onClick }) => {
  return (
    <div className={css.buttonDisplay}>
      <button className={css.Button} onClick={onClick}>
        Load More
      </button>
    </div>
  );
};

Button.propTypes = {
  Button: PropTypes.func,
};
export default Button;
