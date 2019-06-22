import React from 'react';

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
        <div> <div className="testicon" /> Linkedin</div>
        <div>Github</div>
        <div>Email</div>
        <div>CV Download</div>
      </div>
    </div>
    <div id="contact-copyright">© 2019 | Property of <strong>Lewis Shaw</strong>, All Rights Reserved</div>
  </div>
)

export default Contact;