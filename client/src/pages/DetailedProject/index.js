import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import personalProjects from '../../personalProjects.json';
import groupProjects from '../../groupProjects.json';
import DetailedProjectCard from '../../components/DetailedProjectCard';
import './style.css';

function GetProjectDetails() {
  const {proj} = useParams();

  var details = personalProjects.find(project => project.tag === proj);
  if(details === undefined) {
    details = groupProjects.find(project => project.tag === proj);
  } 

  if (details === undefined) {
    console.log("Project not found");
    return <div>Project not found.</div>;
  } else {
    return <DetailedProjectCard proj={details}/>;
  }
}

class DetailedProject extends Component {
  render() {
    return(
      <div className="content">
        <GetProjectDetails />
      </div>
    )
  }
}

export default DetailedProject;