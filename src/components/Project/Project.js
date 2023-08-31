import React from 'react';
import './Project.css';
import { Element } from 'react-scroll';
import projectData from '../ProjectContainer/ProjectContainer';

const Project = () => {
  return (
    <Element className='projectContainer' id='projects'>
      <div className='project-section'>
      <div className='project-title'>    
      <h1>Projects</h1>
      <p>
        Here are some projects which I've done to make work easier for people.
      </p>
      </div>
      <div className='projectContainer__projects'>
        {projectData.map((project, index) => {
          return (
            <div key={index} className='project-row'>
              <ProjectItem
                img={project.img}
                title={project.title}
                desc={project.desc}
                link={project.link}
              />
            </div>
          );
        })}
      </div>
      </div>
    </Element>
  );
};

const ProjectItem = ({ img, title, desc, link, index }) => {
  return (
    <div className='project-container'>
      <div className='project-item' key={index}>
        <img className='image' src={img} alt={title} />
        <h2>{title}</h2>
        <p>{desc}</p>
        <a href={link}>Learn more</a>
      </div>
    </div>
  );
};

export default Project;