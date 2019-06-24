import React, { Component } from 'react';
import Skill from './Skill';
import Heading from './Heading';

class SkillList extends Component {


  render(){
    return(
      <div id="skill-list">
        <a className="anchor" id="skills"/>
        <Heading
          title="Skills"
          hr="white-hr"
          desc="A list of the technologies I've picked up during my... "
        />
        <div className="skill-row">
          <Skill icon="html-icon skill-size" name="HTML5"/>
          <Skill icon="css3-icon skill-size" name="CSS3"/>
          <Skill icon="javascript-icon skill-size" name="JavaScript"/>
          <Skill icon="react-icon skill-size" name="ReactJS"/>  
          <Skill icon="express-icon skill-size" name="ExpressJS"/>
          <Skill icon="node-icon skill-size" name="NodeJS"/>
          <Skill icon="git-icon skill-size" name="git"/>
          <Skill icon="github-icon skill-size" name="GitHub"/>
          <Skill icon="mongodb-icon skill-size" name="MongoDB"/>
          <Skill icon="bootstrap-icon skill-size" name="Bootstrap"/>
          <Skill icon="postgresSQL-icon skill-size" name="PostgreSQL" />
        </div>
      </div>
    )
  }
}

export default SkillList;