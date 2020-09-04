import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ProjectCard from '../components/ProjectCard';
import personalProjects from '../personalProjects.json';
import groupProjects from '../groupProjects.json';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {projectType: "personal"};
  }

  changeProjects = (id) => {
    this.setState(state => ({
      projectType: id
    }));
  }

  render() {
    return(
      <div className="content">
        <div id="portfolioBtns">
          <Button variant="dark" className="ml-auto mr-auto" onClick={() => this.changeProjects("personal")}>Personal Projects</Button>
          <Button variant="dark" className="ml-auto mr-auto" onClick={() => this.changeProjects("group")}>Group Projects</Button>
        </div>
        <div className="column">
          <div className="row">
          {this.state.projectType === "personal"
            ? personalProjects.map((card, index) => <ProjectCard key={index} card={card} />)
            : groupProjects.map((card, index) => <ProjectCard key={index} card={card} />)}
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;