import React from 'react';

const Heading = ({title, desc, hr}) => (
  <div className="heading-container">
    <div className="heading-title">{title}</div>
    <hr className={hr}/>
    <div className="heading-desc">{desc}</div>
  </div>
)

export default Heading;