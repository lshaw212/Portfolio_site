import React from 'react';
import Fade from 'react-reveal/Fade';

const Heading = ({title, desc}) => (
  <div className="heading-container">
    <Fade top>
      <div className="heading-title">{title}</div>
    </Fade>
    <Fade bottom duration={500}>
      <div className="heading-desc">{desc}</div>
    </Fade>
  </div>
)

export default Heading;