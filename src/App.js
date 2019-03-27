import React, { Component } from 'react';
import ProjectList from './ProjectList';
import SkillList from './SkillList';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Homepage from './Homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage/>
        <ProjectList/>
        <SkillList/>
        <AboutMe/>
        <Contact/>
      </div>
    );
  }
}

export default App;
