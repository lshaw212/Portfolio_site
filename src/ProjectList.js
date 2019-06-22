import React from 'react';
import Project from './Project';
import Heading from './Heading';
import Fade from 'react-reveal/Fade';

const ProjectList =() => (
  <div id="project-list-container">
  <a className="anchor" id="projects"></a>
    <Heading
      title="Projects"
      hr="blue-hr"
      desc="All these projects were built by myself, to showcase my skills and my ability to showcase dedication and improvement."
    />
    <Project
      name="Blog@"
      image=""
      desc="Blog@ is a web application built to create and share blogs with multiple users. This project was built using React with Node.js and the Express.js framework for the backend. Blog@ uses a RESTful API to fetch data from our MongoDB and also utilizes Redux to manage application and user state."
      desc_extra="As my first full stack application, I feel I was able to showcase many different skills to bring together a functioning application."
      code="https://github.com/lshaw212/blogat"
      website="https://blogat-ls.herokuapp.com/"
    />
    <Project
      name="React Calc"
      image=""
      desc="This small project was created to showcase a calculator being built as a web app. Programmed with the React library, it utilizes reusable components while maintaining the use of the 4 basic operators and a numpad functionality. Designed around web and mobile, this calculator is styled to replicate an old casio calculator."
      code="https://github.com/lshaw212/react_calc"
      website="https://lshaw-react-calc.herokuapp.com/"
    />
    <Project
      name="Portfolio Site"
      image=""
      desc="My personal portfolio was built around the use of the React library, and is designed to be a fully functioning portfolio for both web and mobile. Showcasing my skills and projects to future employers while also serving as a hub for all my contact details and updates."
      desc_extra="Future plans to this portfolio would be to include a personal blog."
      code="https://github.com/lshaw212/Portfolio_site"
      website="https://www.google.com"
    />
  </div>
)

export default ProjectList;