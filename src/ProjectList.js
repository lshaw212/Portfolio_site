import React from 'react';
import Project from './Project';
import Heading from './Heading';
import Fade from 'react-reveal/Fade';

const ProjectList =() => (
  <div id="project-list-container">
  <a className="anchor" id="projects"></a>
    <Heading
      title="Projects"
      desc="All these projects were built by myself, to showcase my skills and my ability to showcase dedication and improvement."
    />
    <Project
      name="Blog@"
      desc="Blog@ is a website to create and share blogs with multiple 
            users in a simple and easy way. This project was fully built 
            with React on the frontend and Node.js with the Express.js 
            framework on the backend, while also utilizing MongoDB for 
            storing data. With a RESTful API I was able to showcase many 
            of my skills in creating a full stack application."
      code="https://github.com/lshaw212/blogat"
      website="https://blogat-ls.herokuapp.com/"
    />
    <Project
      name="React Calc"
      desc="This small calculator project was built with React, providing 
            the 4 basic operators, numpad functionality, tweaked for mobile 
            and styled to replicate an old casio calculator."
      code="https://github.com/lshaw212/react_calc"
      website="https://lshaw-react-calc.herokuapp.com/"
    />
    <Project
      name="Portfolio Site"
      desc="To add..."
      code="https://github.com/lshaw212/Portfolio_site"
      website="https://www.google.com"
    />
  </div>
)

export default ProjectList;