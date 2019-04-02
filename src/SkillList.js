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
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
        </div>
        <div className="skill-row">
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
        </div>
      </div>
    )
  }
}

export default SkillList;