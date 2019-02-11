import React, { Component } from 'react';
import Project from './Project';

class ProjectList extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id="project-list-container">
        <Project name="Project 1"/>
        <Project name="Project 2"/>
        <Project name="Project 3"/>
      </div>
    );
  }
}

export default ProjectList;