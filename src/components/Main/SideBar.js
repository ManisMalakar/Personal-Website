import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // Set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="Image of me" />
      </Link>
      <header>
        <h2>Manish Malakar</h2>
        <p><a href="mailto:mani.malakar12@gmail.com">mani.malakar12@gmail.com</a></p>
        <ContactIcons />
      </header>
    </section>

    {/* <section className="blurb">

      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section> */}

    <section id="footer">
      <p className="copyright">&copy; Manish Malakar <Link to="/">manismalakar.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
