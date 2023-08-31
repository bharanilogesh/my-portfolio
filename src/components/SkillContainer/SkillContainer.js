import React from 'react';
import { Element } from 'react-scroll';
import skillImage from "../../assets/skill-image.jpg";
import LinearProgress from "@mui/material/LinearProgress";
import "./SkillContainer.css";

const Skillcontainer = () => {
  return (
    <Element className="skillContainer" id="skills">
      <div className='skillContainer__image'>
        <img src={skillImage} alt='' />
      </div>
      <div className='skillContainer__text'>
        <h2>SKILLSET</h2>
        <div className='skillContainer__skillset'>
            <h5>React</h5>
            <div className='skillContainer__slider skillContainer__slider1'>
              <LinearProgress variant = "determinate" value = {85} />
            </div>
        </div>
        <div className='skillContainer__skillset'>
            <h5>NodeJS</h5>
            <div className='skillContainer__slider skillContainer__slider2'>
              <LinearProgress variant = "determinate" value = {70 } />
            </div>
        </div>
        <div className='skillContainer__skillset'>
            <h5>JavaScripts</h5>
            <div className='skillContainer__slider skillContainer__slider3'>
              <LinearProgress variant = "determinate" value = {75} />
            </div>
        </div>
        <div className='skillContainer__skillset'>
            <h5>Tailwind CSS</h5>
            <div className='skillContainer__slider skillContainer__slider4'>
              <LinearProgress variant = "determinate" value = {65} />
            </div>
        </div>
        <div className='skillContainer__skillset'>
            <h5>HTML</h5>
            <div className='skillContainer__slider skillContainer__slider5'>
              <LinearProgress variant = "determinate" value = {90} />
            </div>
        </div>
        <div className='skillContainer__skillset'>
            <h5>CSS</h5>
            <div className='skillContainer__slider skillContainer__slider6'>
              <LinearProgress variant = "determinate" value = {85} />
            </div>
        </div>
      </div>
    </Element>
  )
}

export default Skillcontainer
