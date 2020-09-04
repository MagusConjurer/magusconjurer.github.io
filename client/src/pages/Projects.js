import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard';
import personalProjects from '../personalProjects.json';
import groupProjects from '../groupProjects.json';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {projectType: "personal"};
  }

  render() {
    return(
      <div className="row content">
        {this.state.projectType === "personal"
          ? personalProjects.map((card, index) => <ProjectCard key={index} card={card} />)
          : groupProjects.map((card, index) => <ProjectCard key={index} card={card} />)}
      </div>
    )
  }
}

export default Projects;