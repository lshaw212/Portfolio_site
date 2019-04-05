import React from 'react';

const Navbar = ({scroll,drawerToggleClickHandler}) => (
  <div id="navbar">
    <a onClick={() => {document.querySelector('#homepage-container').scrollIntoView({ behavior: 'smooth' })}} id="logo">
      LEWIS <strong id="navbar-dot">·</strong> SHAW
    </a>
    <div id="navbar-right">
      <a onClick={() => {document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}}>Projects</a>
      <a onClick={() => {document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' })}}>Skills</a>
      <a onClick={() => {document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}}>About</a>
      <a onClick={() => {document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}}>Contact</a>
    </div>
    <div id="navbar-toggle">
      <a onClick={drawerToggleClickHandler}>///</a>
    </div>
  </div>
)

export default Navbar;