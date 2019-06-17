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
          <Skill icon="devicon-html5-plain colored skill-size" name="HTML5"/>
          <Skill icon="devicon-css3-plain colored skill-size" name="CSS3"/>
          <Skill icon="devicon-javascript-plain colored skill-size" name="JavaScript"/>
          <Skill icon="devicon-react-original colored skill-size " name="ReactJS"/>  
          <Skill icon="devicon-express-original colored skill-size" name="ExpressJS"/>
          <Skill icon="devicon-nodejs-plain colored skill-size" name="NodeJS"/>
          <Skill icon="devicon-git-plain colored skill-size" name="git"/>
          <Skill icon="devicon-github-plain colored skill-size" name="GitHub"/>
          <Skill icon="devicon-mongodb-plain colored skill-size" name="MongoDB"/>
          <Skill icon="devicon-bootstrap-plain colored skill-size" name="Bootstrap"/>
          <Skill icon="devicon-postgresql-plain colored skill-size" name="PostgreSQL" />
        </div>
      </div>
    )
  }
}

export default SkillList;