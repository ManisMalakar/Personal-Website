import React from 'react';
import PropTypes from 'prop-types';

import Awards from './Awards/Awards';

const award = ({ data }) => (
  <div className="awards">
     <div className="link-to" id="awards" />
    <div className="title">
      <h3>Awards</h3>
    </div>
    {data.map((awa) => (
      <Awards
        data={awa}
        key={awa.name}
      />
    ))}
  </div>
);

award.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    awards: PropTypes.string,
    year: PropTypes.string,
  })),
};

award.defaultProps = {
  data: [],
};

export default award;
