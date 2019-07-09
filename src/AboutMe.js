import React from 'react';
import Heading from './Heading';

const AboutMe = () => (
  <div id="about-container">
    <div className="anchor" id="about"/>
    <Heading
      title="About me"
      hr="blue-hr"
    />
    <div id="about-content">
      <div id="about-text" className="light-text">
        <div>
        My name is Lewis Shaw, I’m a junior web developer from Aberdeen, Scotland. After receiving my 2:1 honours degree in Computer Games Programming at the University of Abertay Dundee, I decided to change my focus towards web development.
        </div>
        <br/>
        <div>
          I have undertaken online bootcamps as to strengthen my knowledge in the industry, assisting with building a strong portfolio. 
        </div>
        <br/>
        <div>
          Throughout my studies I have gained a great deal of experience through various projects and see myself as a valued asset to any team. I am open to new and exciting ventures to put my skills and knowledge to use.
        </div>
      </div>
      
      <div id="about-picture"></div>
    </div>
  </div>
)

export default AboutMe;