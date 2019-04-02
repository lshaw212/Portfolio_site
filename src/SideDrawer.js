import React from 'react';

const SideDrawer = ({show,drawerToggleClickHandler}) => {
  let drawerClasses = 'side-drawer';
  if (show)
    drawerClasses = 'side-drawer open';
  return (
    <nav className={drawerClasses}>
      <ul onClick={drawerToggleClickHandler}>
        <li>
          <a onClick={() => {document.querySelector('#homepage-container').scrollIntoView({ behavior: 'smooth' })}}>Home</a>
        </li>
        <li>
          <a onClick={() => {document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}}>Projects</a>
        </li>
        <li>
          <a onClick={() => {document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' })}}>Skills</a>
        </li>
        <li>
          <a onClick={() => {document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}}>About</a>
        </li>
        <li>
          <a onClick={() => {document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;