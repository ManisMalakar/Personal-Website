import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Awards from '../components/Resume/Awards';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degree';
import positions from '../data/resume/positions.js';
import { skills, categories } from '../data/resume/skills';
import awards from '../data/resume/awards';

const sections = [
  'Education',
  'Experience',
  'Skills',
  'Awards',
  'Courses',
  'References',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Manish Malakar, aspiring software developer?"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <Skills skills={skills} categories={categories} />
      <Awards data={awards}/>
      <Courses data={courses} />
      <References />

    </article>
  </Main>
);

export default Resume;
