import React from 'react';

const Skill = ({icon,name}) => (
  <div className="skill-container">
    <i className={icon}></i>
    <div className="skill-name">{name}</div>
  </div>
)

export default Skill;