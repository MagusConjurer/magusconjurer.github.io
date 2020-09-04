import React from 'react';
import Card from 'react-bootstrap/Card';
import images from "../../assets/images";
import './style.css';


function ProjectCard(props) {
    return (
      <Card className='col-md-5 portfolio-card'>
        <div className='row portfolio-row'>
          <div className='col-md-2 portfolioCol'> 
            <Card.Img src={images[props.card.source]} className='portfolio-img' alt={props.card.alt} data-toggle='popover' data-img={props.card.source} />
          </div>
          <div className='col-md-10 portfolioCol'>
            <Card.Body className=' portfolioBody'>
              <Card.Title className='portfolio-title'>{props.card.name}</Card.Title>
              <Card.Link href={props.card.app} className='links' target=' '>App</Card.Link>
              <Card.Link href={props.card.repo} className='links' target=' '>GitHub</Card.Link>
              <Card.Text>{props.card.description}</Card.Text> 
              <Card.Text> Technology Used: {props.card.tech} </Card.Text>
            </Card.Body> 
          </div>
        </div>  
      </Card>
    )
}

export default ProjectCard;