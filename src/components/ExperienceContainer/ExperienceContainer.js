import React from 'react';
import { Element } from "react-scroll";
import Experience from '../ExperienceBox/Experience';
import "./ExperienceContainer.css";

const ExperienceContainer = () => {
  return (
    <Element className='experienceContainer' id='exp'>
      <h1>Experience</h1>
      <div className='info'>
        <Experience number="20+" title="Projects" />
      </div>
      <p className='desc'>Completed Full Stack Web Development Course in Skill Safari. </p>
    </Element>
  )
}

export default ExperienceContainer
