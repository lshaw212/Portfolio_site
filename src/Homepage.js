import React from 'react';
import Fade from 'react-reveal/Fade';

const Homepage = () => (
  <div id="homepage-background">
    <div id="homepage-container">
      <div id="homepage-first-line">
        <Fade delay={200}>
          <div className="homepage-text homepage-space">Hi!</div>
        </Fade>
        <Fade delay={1500}>
          <div className="homepage-text"> I'm Lewis</div>
        </Fade>
      </div>
      <Fade delay={3000}>
        <div className="homepage-text">A Junior Web Developer based in Scotland.</div>
      </Fade>
      <div id="homepage-icon-group">
        <Fade delay={4000}>
          <a href="https://www.linkedin.com/in/lshaw212/" target="_blank" className="homepage-icon-spacing">
            <div className="homepage-icon" id="linkedin-homepage-icon"/>
          </a>
        </Fade>
        <Fade delay={4500}>
          <a href="https://github.com/lshaw212" target="_blank" className="homepage-icon-spacing">
            <div className="homepage-icon" id="github-homepage-icon"/>
          </a>  
        </Fade>
      </div>
      {/* <div id="homepage-scroll">
        <div id="scroll-indicator" onClick={() => {document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}}/>
      </div> */}
    </div>
    
  </div>
)

export default Homepage;