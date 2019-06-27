import React from 'react';
import Fade from 'react-reveal/Fade';

const Skill = ({time,size,icon,name}) => (
  <Fade>
    <div className="skill-container">
      <i className={icon}></i>
      <div className="skill-name">{name}</div>
    </div>
  </Fade>
)

export default Skill;