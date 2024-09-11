import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import images from "../../assets/images";
import { GetBasicDetails } from '../DetailedProjectCard';
import './style.css';

function GetDetailsButton(props) {
  return <div align="center">
            <Button className="details-button" href={window.location.href + "/" + props.props.tag}>More Details</Button>
         </div>
}

function ProjectCard(props) {
  return (
    <Card key={props.card.tag} bg="dark" className='portfolio-card'>
      <div className="card-flip">
        <div className="card-front card-block">
          <Card.Img src={images[props.card.source]} className='portfolio-img' alt={props.card.alt} />
        </div>
        <div className="card-back card-block">
          <GetBasicDetails props={props.card}/>
          <GetDetailsButton props={props.card}/>
        </div>
      </div>
    </Card>
  )
}

export default ProjectCard;