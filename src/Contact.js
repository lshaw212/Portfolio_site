import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileDownload } from '@fortawesome/free-solid-svg-icons';

const Contact = () => (
  <div id="contact-container">
    <a className="anchor" id="contact"></a>
    <div id="contact-header-container">
      <div id="contact-header">Contact me</div>
      <hr className="white-hr" />
    </div>
    <div id="information-container">
      <div id="information-1">
        <div>Thanks for checking out my portfolio.</div>
        <div>I'm currently looking for a Junior/Graduate position in Scotland. Please don't hesitate to get in contact with me, I'd love a chat! </div>
      </div>
      <div id="information-2">
        <div>Get in touch!</div>
        <div className="linkedin-details"><span><FontAwesomeIcon icon={faLinkedinIn} /></span>Linkedin</div>
        <div className="linkedin-details"><span><FontAwesomeIcon icon={faGithub} color="#2c2b2b"/></span>Github</div>
        <div className="linkedin-details"><span><FontAwesomeIcon icon={faEnvelope} color="#2c2b2b"/></span>Email</div>
        <div className="linkedin-details"><span><FontAwesomeIcon icon={faFileDownload} color="#2c2b2b"/></span>Download CV</div>
      </div>
    </div>
    <div id="contact-copyright">© 2019 | Property of <strong>Lewis Shaw</strong>, All Rights Reserved</div>
  </div>
)

export default Contact;