import React, { Component } from 'react';
import Navbar from './Navbar';
import SideDrawer from './SideDrawer';
import ProjectList from './ProjectList';
import SkillList from './SkillList';
import AboutMe from './AboutMe';
import Backdrop from './Backdrop';
import Contact from './Contact';
import Homepage from './Homepage';
import smoothscroll from 'smoothscroll-polyfill';

class App extends Component {
  state = {
    sideDrawerOpen: false
  }
  componentDidMount(){
    window.addEventListener('scroll', this.scrollFunction);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.scrollFunction);
  }

  scrollFunction(){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      // document.getElementById("navbar").style.backgroundColor = "rgba(62, 127, 186, 0.7)";
      document.getElementById("navbar").style.backgroundColor = "rgba(240, 240, 240, 0.85)";
      document.getElementById("navbar").style.boxShadow = "0 0 10px black";
      document.getElementById("navbar").style.padding = "10px 10px";
      // document.getElementById("logo").style.fontSize = "25px";
    } else {
      document.getElementById("navbar").style.backgroundColor = "transparent";
      document.getElementById("navbar").style.boxShadow = "none";
      document.getElementById("navbar").style.padding = "30px 10px";
      // document.getElementById("logo").style.fontSize = "35px";
    }
  }
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen)
      backdrop = <Backdrop click={this.backdropClickHandler} />;

    smoothscroll.polyfill();
    
    return (
      <div className="App">
        <Navbar drawerToggleClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen} drawerToggleClickHandler={this.drawerToggleClickHandler}/>
        {backdrop}
        <Homepage/>
        <AboutMe/>
        <SkillList/>
        <ProjectList/>
        <Contact/>
      </div>
    );
  }
}

export default App;
