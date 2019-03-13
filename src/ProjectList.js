import React, { Component } from 'react';
import Project from './Project';
import Fade from 'react-reveal/Fade';

class ProjectList extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id="project-list-container">
        <div>Projects...</div>
        <Fade left>
          <Project name="Project 1"/>
        </Fade>
        <Fade right>
          <Project name="Project 2"/>
        </Fade>
        <Fade left>
          <Project name="Project 3"/>
        </Fade>
        <Fade right>
          <Project name="Project 4"/>
        </Fade>
        <Fade left>
          <Project name="Project 5"/>
        </Fade>
        <Fade right>
          <Project name="Project 6"/>
        </Fade>
      </div>
    );
  }
}

export default ProjectList;