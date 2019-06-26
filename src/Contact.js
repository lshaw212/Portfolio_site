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
        <div id="information-2-header">Get in contact!</div>
        <a href="https://www.linkedin.com/in/lshaw212/" target="_blank" className="contact-details"><span><FontAwesomeIcon icon={faLinkedinIn}/></span>Linkedin</a>
        <a href="https://github.com/lshaw212" target="_blank" className="contact-details"><span><FontAwesomeIcon icon={faGithub}/></span>Github</a>
        <a href="mailto:lshaw212@gmail.com" className="contact-details"><span><FontAwesomeIcon icon={faEnvelope}/></span>lshaw212@gmail.com</a>
        <a href="./images/Lewis_Shaw_CV.docx" download className="contact-details"><span><FontAwesomeIcon icon={faFileDownload}/></span>Download CV</a>
      </div>
    </div>
    <div id="contact-copyright">© 2019 | Property of <strong>Lewis Shaw</strong>, All Rights Reserved</div>
  </div>
)

export default Contact;