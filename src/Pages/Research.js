import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Research from '../components/Research/Research';
import data from '../data/research';

const Resea = () => (
  <Main
    title="Research Topics"
    description="Learn about Manish's research topics."
  >
    <article className="post" id="research">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/research">Research</Link></h2>
          <p>A series of research topics :</p>
        </div>
      </header>
      {data.map((research) => (
        <Research
          data={research}
          key={research.topic}
        />
      ))}
    </article>
  </Main>
);

export default Resea;
