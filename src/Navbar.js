import React from 'react';

const Navbar = ({scroll,drawerToggleClickHandler}) => (
  <div id="navbar">
    <button onClick={() => {document.querySelector('#homepage-container').scrollIntoView({ behavior: 'smooth' })}} id="navbar-logo">
      <div>L</div><div id="navbar-dot">·</div><div>S</div>
    </button>
    <div id="navbar-right">
      <button className="navbar-btn" onClick={() => {document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}}>Projects</button>
      <button className="navbar-btn" onClick={() => {document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' })}}>Skills</button>
      <button className="navbar-btn" onClick={() => {document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}}>About</button>
      <button className="navbar-btn" onClick={() => {document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}}>Contact</button>
    </div>
    <div id="navbar-toggle">
      <button onClick={drawerToggleClickHandler}>///</button>
    </div>
  </div>
)

export default Navbar;