import React from 'react';

const Project = ({name, desc, code, website}) => (
  <div className="project-container">
    <div className="project-image"></div>
    <div className="project-content">
      <div className="project-name">{name}</div>
      <div className="project-desc">{desc}</div>
      <a href={code}>code</a>
      <a href={website}>website</a>
    </div>
  </div>
)

export default Project;