import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard';
import personalProjects from '../personalProjects.json';
import groupProjects from '../groupProjects.json';

class Projects extends Component {
  render() {
    return(
      <div>
        {personalProjects.map((card, index) => <ProjectCard key={index} card={card} />)}
      </div>
    )
  }
}

export default Projects;