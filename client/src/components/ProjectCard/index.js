import React from 'react';
import Card from 'react-bootstrap/Card';
import images from "../../assets/images";
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
          <Card.Text>{props.card.description}</Card.Text> 
          <Card.Text> Technology Used: {props.card.tech} </Card.Text>
          {props.card.app !== '' &&
            <Card.Link href={props.card.app} className='links' target=' '>App</Card.Link>
          }
          {props.card.repo !== ''&&
            <Card.Link href={props.card.repo} className='links' target=' '>GitHub</Card.Link>
          }
        </div>
      </div>
    </Card>
  )
}

export default ProjectCard;