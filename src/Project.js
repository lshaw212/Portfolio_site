import React from 'react';
import Fade from 'react-reveal/Fade';

const Project = ({name, image, image2, desc, desc_extra, code, website}) => (
  <div className="project-container">
    <div className="project-image">
      <img src={image} alt="project image" />
    </div>
    <div className="project-content">
      <div className="project-name">{name}</div>
      <div className="project-desc light-text">{desc}</div>
      <div className="project-desc light-text">{desc_extra}</div>
      <div className="project-links">
        <a className="navbar-btn" target="_blank" href={code}>Github</a>
        <a className="navbar-btn" target="_blank" href={website}>Demo</a>
      </div>
    </div>
  </div>
)

export default Project;