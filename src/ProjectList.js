import React from 'react';
import Project from './Project';
import Heading from './Heading';
import blogImage1 from './images/Blog@.jpg';
import calcImage1 from './images/ReactCalc.jpg';
import blogImage2 from './images/Blog@2.jpg'
import calcImage2 from './images/ReactCalc2.jpg';
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
      image={blogImage1}
      // image2={blogImage2}
      desc="Blog@ is a web application built to create and share blogs with multiple users. This project was built using React with Node.js and the Express.js framework for the backend. Blog@ uses a RESTful API to fetch data from  MongoDB and also utilizes Redux to manage application and user state."
      desc_extra="As my first full stack application, I feel I was able to showcase many different skills to bring together a functioning application."
      code="https://github.com/lshaw212/blogat"
      website="https://blogat-ls.herokuapp.com/"
    />
    <hr className="blue-hr"/>
    <Project
      name="React Calculator"
      image={calcImage1}
      desc="This small project was created to showcase a calculator being built as a web app. Programmed with the React library, it utilizes reusable components while maintaining the use of the 4 basic operators and a numpad functionality. Designed around web and mobile, this calculator is styled to replicate an old casio calculator."
      code="https://github.com/lshaw212/react_calc"
      website="https://lshaw-react-calc.herokuapp.com/"
    />
    <hr className="blue-hr"/>
    <Project
      name="Portfolio Site"
      image="https://i.imgur.com/4Jm5K2s.jpg"
      desc="My personal portfolio was built around the use of the React library, and is designed to be a fully functioning portfolio for both web and mobile. Showcasing my skills and projects to future employers while also serving as a hub for all my contact details and updates."
      desc_extra="Future plans to this portfolio would be to include a personal blog."
      code="https://github.com/lshaw212/Portfolio_site"
      website="https://www.google.com"
    />
  </div>
)

export default ProjectList;