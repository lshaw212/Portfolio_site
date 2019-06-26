import React from 'react';

const SideDrawer = ({show,drawerToggleClickHandler}) => {
  let drawerClasses = 'side-drawer';
  if (show)
    drawerClasses = 'side-drawer open';
  return (
    <nav className={drawerClasses}>
      <ul onClick={drawerToggleClickHandler}>
        <li>
          <button className="navbar-btn" onClick={() => {document.querySelector('#homepage-container').scrollIntoView({ behavior: 'smooth' })}}>Home</button>
        </li>
        <li>
          <button className="navbar-btn" onClick={() => {document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}}>About</button>
        </li>
        <li>
          <button className="navbar-btn" onClick={() => {document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' })}}>Skills</button>
        </li>
        <li>
          <button className="navbar-btn" onClick={() => {document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}}>Projects</button>
        </li>
        <li>
          <button className="navbar-btn" onClick={() => {document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;