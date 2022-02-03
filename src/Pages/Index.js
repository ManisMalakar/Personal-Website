import React from 'react';
import { Link } from 'react-router-dom';
import raw from 'raw.macro';
import ReactMarkdown from 'react-markdown';
import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/me.md');

const count = markdown.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;

const LinkRenderer = ({ ...children }) => <Link {...children} />;


const Index = () => (
  <Main
    description={"Manish Malakar Personal Website"}
  >

    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About me</Link></h2>
          <h4>
            Full Stack Developer Intern at Digital Mobile Agency
          </h4>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export default Index;
