import React, { Component } from 'react';
import Navbar from './Navbar';
import ProjectList from './ProjectList';
import SkillList from './SkillList';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Homepage from './Homepage';

class App extends Component {

  componentDidMount(){
    window.addEventListener('scroll', this.scrollFunction);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.scrollFunction);
  }

  scrollFunction(){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.backgroundColor = "grey";
      document.getElementById("navbar").style.padding = "20px 10px";
      // document.getElementById("logo").style.fontSize = "25px";
    } else {
      document.getElementById("navbar").style.backgroundColor = "transparent";
      document.getElementById("navbar").style.padding = "60px 10px";
      // document.getElementById("logo").style.fontSize = "35px";
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
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
