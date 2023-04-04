import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from '../../components/ProjectCard';
import personalProjects from '../../personalProjects.json';
import groupProjects from '../../groupProjects.json';
import './style.css';

function GetProjectData(type)
{
  var personalCards = ( personalProjects.map((card, index) => (
    <Col key={index} className="portfolioCol">
      <ProjectCard card={card}/>
    </Col>)
    ));
  var groupCards = ( groupProjects.map((card, index) => (
    <Col key={index} className="portfolioCol">
      <ProjectCard card={card}/>
    </Col>)
    ));

  if(type === "personal") {
    return (<Row xs={1} sm={2} md={3}>
      { personalCards }
      </Row>)
  }
  else if (type === "group") {
    return (<Row xs={1} sm={2} md={3}>
      { groupCards }
      </Row>)
  }
  else{
    return (<Row xs={1} sm={2} md={3}>
      { groupCards }
      { personalCards }
    </Row>)
  }
}

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {projectType: "all"};
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
          <Button variant="dark" className="btn ml-auto" onClick={() => this.changeProjects("all")}>All</Button>
          <Button variant="dark" className="btn ml-auto" onClick={() => this.changeProjects("personal")}>Personal Projects</Button>
          <Button variant="dark" className="btn mr-auto" onClick={() => this.changeProjects("group")}>Group Projects</Button>
        </div>
        
        {GetProjectData(this.state.projectType)}

      </div>
    )
  }
}

export default Projects;