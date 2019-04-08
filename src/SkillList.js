import React, { Component } from 'react';
import Skill from './Skill';
import Heading from './Heading';

class SkillList extends Component {


  render(){
    return(
      <div id="skill-list">
      <a className="anchor" id="skills"></a>
        <Heading
          title="Skills"
          desc="Skills List"
        />
        <div className="skill-row">
          {/* <img src="./html5.svg" alt=""/> */}
          <Skill icon="devicon-html5-plain-wordmark colored skill-size"/>
          <Skill icon="devicon-css3-plain-wordmark colored skill-size"/>
          <Skill icon="devicon-javascript-plain colored skill-size"/>
          <Skill icon="devicon-react-original-wordmark colored skill-size"/>  
          <Skill icon="devicon-express-original-wordmark colored skill-size"/>
          <Skill icon="devicon-nodejs-plain colored skill-size"/>
          <Skill icon="devicon-git-plain-wordmark colored skill-size"/>
          <Skill icon="devicon-github-plain-wordmark colored skill-size"/>
          <Skill icon="devicon-mongodb-plain-wordmark colored skill-size"/>
          <Skill icon="devicon-bootstrap-plain-wordmark colored skill-size"/>
        </div>
      </div>
    )
  }
}

export default SkillList;