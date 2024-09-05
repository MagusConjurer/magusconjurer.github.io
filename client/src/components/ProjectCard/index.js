import React from 'react';
import Card from 'react-bootstrap/Card';
import images from "../../assets/images";
import { GetTeamSize, GetTech, GetLinks } from '../DetailedProjectCard';
import './style.css';

function ProjectCard(props) {
  return (
    <Card key={props.card.tag} bg="dark" className='portfolio-card'>
      <div className="card-flip">
        <div className="card-front card-block">
          <Card.Img src={images[props.card.source]} className='portfolio-img' alt={props.card.alt} />
        </div>
        <div className="card-back card-block">
          <Card.Title className='portfolio-title'>{props.card.name}</Card.Title>
          <GetTeamSize team={props.card.team}/>
          <Card.Text>{props.card.description}</Card.Text> 
          <GetTech tech={props.card.tech}/>
          <br/>
          <br/>
          <GetLinks links={props.card}/>
        </div>
      </div>
    </Card>
  )
}

export default ProjectCard;