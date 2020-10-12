import React from 'react';
import Card from 'react-bootstrap/Card';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Image from 'react-bootstrap/Image';
import images from "../../assets/images";
import './style.css';


function ProjectCard(props) {
  return (
    <Card bg="dark" className='col-md-11 portfolio-card'>
      <div className='row portfolio-row'>
        <div className='col-md-2 portfolioCol'>
          <OverlayTrigger 
            placement="right"  
            delay={{show: 200, hide:200}} 
            overlay={
              <Tooltip id="image-tooltip" {...props}>
                <Image className="popover-img" src={images[props.card.source]} rounded />
              </Tooltip>}
          >
            <Card.Img src={images[props.card.source]} className='portfolio-img' alt={props.card.alt} />
          </OverlayTrigger>
        </div>
        <div className='col-md-10 portfolioCol'>
          <Card.Body className=' portfolioBody'>
            <Card.Title className='portfolio-title'>{props.card.name}</Card.Title>
            <Card.Text>{props.card.description}</Card.Text> 
            <Card.Text> Technology Used: {props.card.tech} </Card.Text>
            {props.card.app != '' &&
              <Card.Link href={props.card.app} className='links' target=' '>App</Card.Link>
            }
            <Card.Link href={props.card.repo} className='links' target=' '>GitHub</Card.Link>
          </Card.Body> 
        </div>
      </div>  
    </Card>
  )
}

export default ProjectCard;