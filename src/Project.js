import React from 'react';
import Fade from 'react-reveal/Fade';

const Project = ({name, image, image2, desc, desc_extra, code, website}) => (
  <div className="project-container">
    <Fade left>
      
        {image2 ?(
          <div className="project-image">
            <img src={image} className="img1" alt="project image" />
            <img src={image2} className="img2" alt="project second image" />
          </div>
        ) : (
          <div className="project-image">
            <img src={image} alt="project image" />
          </div>
        )}
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