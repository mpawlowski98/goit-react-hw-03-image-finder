import React from 'react';
import css from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <div className={css.buttonDisplay}>
      <button className={css.Button} onClick={onClick}>
        Load More
      </button>
    </div>
  );
};

export default Button;
