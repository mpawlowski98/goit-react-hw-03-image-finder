import React from 'react';
import { Dna } from 'react-loader-spinner';
import css from './Loader.module.css';
import PropTypes from 'prop-types';

const Loader = () => {
  return (
    <>
      <div className={css.DNA_Loader}>
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
        <p>Loading...</p>
      </div>
    </>
  );
};

Loader.propTypes = {
  Loader: PropTypes.func,
};
export default Loader;
