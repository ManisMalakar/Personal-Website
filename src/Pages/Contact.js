import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Manish via email @ mani.malakar12@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>If you'd like to make an enquiry, please feel free to get in touch, and I will respond as soon as possible.
<br></br>If you prefer to contact me directly, send your Email to: <a href="mailto:mani.malakar12@gmail.com">mani.malakar12@gmail.com</a> </p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
