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
          <Card.Text className='css-fix'>{props.card.description}</Card.Text> 
          <Card.Text> Technology Used: {props.card.tech} </Card.Text>
          {props.card.itch !== '' &&
            <Card.Link href={props.card.itch} className='links' target=' '>Itch.io</Card.Link>
          }
          {props.card.steam !== '' &&
            <Card.Link href={props.card.steam} className='links' target=' '>Steam</Card.Link>
          }
          {props.card.github !== ''&&
            <Card.Link href={props.card.github} className='links' target=' '>GitHub</Card.Link>
          }
        </div>
      </div>
    </Card>
  )
}

export default ProjectCard;