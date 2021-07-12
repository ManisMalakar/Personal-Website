import React from 'react';
import PropTypes from 'prop-types';

const Awards = ({ data }) => (
  <article className="awards-container">
     <header>
      <h4 className="awards-name">{data.name}:</h4>
      <p className="awards-year">{data.year}</p>
      </header>
     
  </article>
);

Awards.propTypes = {
  data: PropTypes.shape({
   name: PropTypes.string.isRequired,
   year:PropTypes.string.isRequired,
  }).isRequired
};


export default Awards;
