import React, { Component } from 'react';
import Project from './Project';
import Heading from './Heading';
import Fade from 'react-reveal/Fade';

class ProjectList extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id="project-list-container">
        <Heading
          title="Projects"
          desc="This is a test"
        />
        <Fade left duration={500}>
          <Project
            name="Blog@"
            desc="Blog@ is a website to create and share blogs with multiple 
                  users in a simple and easy way. This project was fully built 
                  with React on the frontend and Node.js with the Express.js 
                  framework on the backend, while also utilizing MongoDB for 
                  storing data. With a RESTful API I was able to showcase many 
                  of my skills in creating a full stack application."
          />
        </Fade>
        <Fade right>
          <Project
            name="React Calc"
            desc="This small calculator project was built with React, providing 
                  the 4 basic operators, numpad functionality, tweaked for mobile 
                  and styled to replicate an old casio calculator."
          />
        </Fade>
        <Fade left>
          <Project
            name="Portfolio Site"
            desc="To add..."
          />
        </Fade>
      </div>
    );
  }
}

export default ProjectList;