import React from 'react';

const Project = ({name, image, desc, desc_extra, code, website}) => (
  <div className="project-container">
    <div className="project-image">
      <img src={image} alt="project" />
    </div>
    <div className="project-content">
      <div className="project-name">{name}</div>
      <div className="project-desc light-text">{desc}</div>
      <div className="project-desc light-text">{desc_extra}</div>
      <div className="project-links">
        <a className="navbar-btn" target="_blank" rel="noopener noreferrer" href={code}>Github</a>
        <a className="navbar-btn" target="_blank" rel="noopener noreferrer" href={website}>Demo</a>
      </div>
    </div>
  </div>
)

export default Project;