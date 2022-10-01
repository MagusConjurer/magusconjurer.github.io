import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from '../../components/ProjectCard';
import personalProjects from '../../personalProjects.json';
import groupProjects from '../../groupProjects.json';
import './style.css';

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
        <div className="portfolioBtns">
          <Button variant="dark" className="btn ml-auto" onClick={() => this.changeProjects("personal")}>Personal Projects</Button>
          <Button variant="dark" className="btn mr-auto" onClick={() => this.changeProjects("group")}>Group Projects</Button>
        </div>
        <Row xs={1} sm={2} md={3}>
          {this.state.projectType === "personal"
            ? ( personalProjects.map((card, index) =>  (
                <Col key={index} className="portfolioCol">
                  <ProjectCard card={card}/>
                </Col>)
              ))
            : ( groupProjects.map((card, index) =>  (
              <Col key={index} className="portfolioCol">
                <ProjectCard card={card}/>
              </Col>)
              ))
          }
        </Row>

      </div>
    )
  }
}

export default Projects;