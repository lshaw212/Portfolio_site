import React from 'react';
import Project from './Project';
import Heading from './Heading';
import Fade from 'react-reveal/Fade';

const ProjectList =() => (
  <div id="project-list-container">
  <a className="anchor" id="projects"></a>
    <Heading
      title="Projects"
      desc="This is a test"
    />
    {/* duration={500} */}
    <Fade left >
      <Project
        name="Blog"
        desc="Blog@ is a website to create and share blogs with multiple 
              users in a simple and easy way. This project was fully built 
              with React on the frontend and Node.js with the Express.js 
              framework on the backend, while also utilizing MongoDB for 
              storing data. With a RESTful API I was able to showcase many 
              of my skills in creating a full stack application."
        code="https://www.github.com"
        website="www.google.com"
      />
    </Fade>
    <Fade right>
      <Project
        name="React Calc"
        desc="This small calculator project was built with React, providing 
              the 4 basic operators, numpad functionality, tweaked for mobile 
              and styled to replicate an old casio calculator."
        code="https://www.github.com"
        website="https://www.google.com"
      />
    </Fade>
    <Fade left>
      <Project
        name="Portfolio Site"
        desc="To add..."
        code="https://www.github.com"
        website="https://www.google.com"
      />
    </Fade>
  </div>
)

export default ProjectList;