import React from 'react';
import Fade from 'react-reveal/Fade';

const Project = ({name, desc, code, website}) => (
  <div className="project-container">
    <Fade left>
      <div className="project-image">
        <img src="https://i.imgur.com/4Jm5K2s.jpg" alt=""/>
      </div>
    </Fade>
    <Fade right>
      <div className="project-content">
        <div className="project-name">{name}</div>
        <div className="project-desc">{desc}</div>

        <div className="project-links">
          <a href={code}>code</a>
          <a href={website}>website</a>
        </div>
      </div>
    </Fade>
  </div>
)

export default Project;