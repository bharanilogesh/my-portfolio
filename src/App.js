import React from 'react';
import Header from './components/header/Header';
import TopContainer from './components/TopContainer/TopContainer';
import SkillContainer from './components/SkillContainer/SkillContainer';
import Project from './components/Project/Project';
import "./App.css";
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div>
      <Header />
      <TopContainer />
      <SkillContainer />
      <Project />
      <ExperienceContainer />
      <Contact />
    </div>
  );
};

export default App;
