import React from 'react';

const Navbar = ({scroll,drawerToggleClickHandler}) => (
  <div id="navbar">
    <button onClick={() => {document.querySelector('#homepage-container').scrollIntoView({ behavior: 'smooth' })}} id="logo">
      LEWIS <strong id="navbar-dot">·</strong> SHAW
    </button>
    <div id="navbar-right">
      <button onClick={() => {document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}}>Projects</button>
      <button onClick={() => {document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' })}}>Skills</button>
      <button onClick={() => {document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}}>About</button>
      <button onClick={() => {document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}}>Contact</button>
    </div>
    <div id="navbar-toggle">
      <button onClick={drawerToggleClickHandler}>///</button>
    </div>
  </div>
)

export default Navbar;