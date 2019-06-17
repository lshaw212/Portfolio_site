import React from 'react';
import Fade from 'react-reveal/Fade';

const Homepage = () => (
  <div id="homepage-background">
    <div id="homepage-container">
      <div id="homepage-first-line">
        <Fade delay={200}>
          <div id="homepage-space">Hi!</div>
        </Fade>
        <Fade delay={1000}>
          <div> I'm Lewis</div>
        </Fade>
      </div>
      <Fade delay={2000}>
        <div>A Junior Web Developer based in Scotland.</div>
      </Fade>
      
    </div>
  </div>
)

export default Homepage;