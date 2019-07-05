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
      document.getElementById("navbar").style.backgroundColor = "rgba(32, 72, 109, 0.85)";
      document.getElementById("navbar").style.boxShadow = "0 0 10px black";
      document.getElementById("navbar").style.padding = "10px 10px";
      document.getElementById("navbar-logo").style.color = "white";
      document.querySelectorAll(".navbar-btn")[0].style.color = "white";
      document.querySelectorAll(".navbar-btn")[1].style.color = "white";
      document.querySelectorAll(".navbar-btn")[2].style.color = "white";
      document.querySelectorAll(".navbar-btn")[3].style.color = "white";
      document.querySelectorAll(".navbar-heading")[0].style.color = "#a4cae6";
      document.querySelectorAll(".navbar-heading")[1].style.color = "#a4cae6";
      document.querySelectorAll(".line")[0].style.backgroundColor = "white";
      document.querySelectorAll(".line")[1].style.backgroundColor = "white";
      document.querySelectorAll(".line")[2].style.backgroundColor = "white";
      document.getElementById("scroll-indicator").style.opacity = "0";
    } else {
      document.getElementById("navbar").style.backgroundColor = "transparent";
      document.getElementById("navbar").style.boxShadow = "none";
      document.getElementById("navbar").style.padding = "30px 10px";
      document.getElementById("navbar-logo").style.color = "#2c2b2b";
      document.querySelectorAll(".navbar-btn")[0].style.color = "#2c2b2b";
      document.querySelectorAll(".navbar-btn")[1].style.color = "#2c2b2b";
      document.querySelectorAll(".navbar-btn")[2].style.color = "#2c2b2b";
      document.querySelectorAll(".navbar-btn")[3].style.color = "#2c2b2b";
      document.querySelectorAll(".navbar-heading")[0].style.color = "#3e7fba";
      document.querySelectorAll(".navbar-heading")[1].style.color = "#3e7fba";
      document.querySelectorAll(".line")[0].style.backgroundColor = "#2c2b2b";
      document.querySelectorAll(".line")[1].style.backgroundColor = "#2c2b2b";
      document.querySelectorAll(".line")[2].style.backgroundColor = "#2c2b2b";
      document.getElementById("scroll-indicator").style.opacity = "0.75";
    }
  }
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
    let el = document.querySelector('.hamburger');
    el.classList.toggle('is-active');
  }
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
    let el = document.querySelector('.hamburger');
    el.classList.toggle('is-active');
  }

  resizeBG = () => {
    // let bg = document.documentElement

    // console.log(bg);

  }


  render() {
    let backdrop;

    this.resizeBG();

    if (this.state.sideDrawerOpen)
      backdrop = <Backdrop click={this.backdropClickHandler} />;

    smoothscroll.polyfill();
    
    return (
      <div className="App">
        <Navbar drawerToggleClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen} drawerToggleClickHandler={this.drawerToggleClickHandler}/>
        {backdrop}
        <Homepage/>
        {/* <object data="./images/testsvg.svg" id="test-divider" /> */}
        {/* <div id="test-divider" /> */}
        {/* <section id="testy-svgy">
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1410 163.47"><defs></defs><title>Untitled-3</title><path class="cls-1" d="M-.5,268.5s241-182,510-85,735,155,900-5v140H-.5Z" transform="translate(0.5 -155.03)"/></svg>
        </section> */}
        <AboutMe/>
        <SkillList/>
        <ProjectList/>
        <Contact/>
      </div>
    );
  }
}

export default App;
