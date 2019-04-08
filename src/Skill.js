import React from 'react';
import Fade from 'react-reveal/Fade';

const Skill = ({time,size,icon}) => (
  <Fade>
    <i className={icon}></i>
  </Fade>
)

export default Skill;