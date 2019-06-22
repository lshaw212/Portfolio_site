import React from 'react';
import Fade from 'react-reveal/Fade';

const Project = ({name, image, desc, desc_extra, code, website}) => (
  <div className="project-container">
    <Fade left>
      <div className="project-image">
        <img src="https://i.imgur.com/4Jm5K2s.jpg" alt=""/>
      </div>
    </Fade>
    <Fade right>
      <div className="project-content">
        <div className="project-name">{name}</div>
        <div className="project-desc light-text">{desc}</div>
        <div className="project-desc light-text">{desc_extra}</div>
        <div className="project-links">
          <a className="navbar-btn" href={code}>Github</a>
          <a className="navbar-btn" href={website}>Demo</a>
        </div>
      </div>
    </Fade>
  </div>
)

export default Project;