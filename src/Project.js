import React from 'react';

const Project = ({name, desc}) => (
  <div className="project-container">
    <div className="project-image"></div>
    <div className="project-content">
      <div className="project-name">{name}</div>
      <div className="project-desc">{desc}</div>
    </div>
  </div>
)

export default Project;