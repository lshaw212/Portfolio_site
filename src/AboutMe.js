import React from 'react';
import Heading from './Heading';

const AboutMe = () => (
  <div id="about-container">
    <a className="anchor" id="about"></a>
    <Heading
      title="About me"
      hr="blue-hr"
    />
    <div id="about-content">
      <div id="about-text" className="light-text">
        I am a Computer Games Programming graduate with a 2:1 honours degree from 
        the University of Abertay Dundee. Due to the oversaturated job market I 
        have been unable to source a position relating to my degree therefore have 
        actively changed my focus towards Web Development. Upon leaving R2S I have 
        undertaken online bootcamps as to strengthening my knowledge in the industry, 
        assisting with building my portfolio. Throughout my studies I have gained a 
        great deal of experience through various projects and see myself as a valued 
        asset to any team. I am open to new and exciting ventures to put my skills 
        and knowledge to use.
      </div>
      <div id="about-picture"></div>
    </div>
  </div>
)

export default AboutMe;