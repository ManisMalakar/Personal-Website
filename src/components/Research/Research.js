import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.topic}</a></h3>
        <p className="daterange"> {data.daterange}</p>
      </header>
      <a href={data.link} className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.topic} />
      </a>
      </article>
      <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
   
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    topic: PropTypes.string.isRequired,
    advisor: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    points: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
