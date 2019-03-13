import React, { Component } from 'react';
import Skill from './Skill';

class SkillList extends Component {


  render(){
    return(
      <div id="skill-list">
        <Skill time="100"/>
        <Skill time="200"/>
        <Skill time="300"/>
        <Skill time="400"/>
        <Skill time="500"/>
        <Skill time="600"/>
        <Skill time="700"/>
        <Skill time="800"/>
        <Skill time="900"/>
        <Skill time="1000"/>
        <Skill time="1100"/>
        <Skill time="1200"/>
        <Skill time="1300"/>
      </div>
    )
  }
}

export default SkillList;