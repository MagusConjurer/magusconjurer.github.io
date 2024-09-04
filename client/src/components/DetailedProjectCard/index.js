import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import images from "../../assets/images";
import './style.css';

function GetTech(proj) {
  let techList = proj.tech.split(",");
  
  return techList.map((tech, index) => <Badge key={index} bg='' className='skill-badge'>{tech}</Badge>);
}

function DetailedProjectCard(props){
  return (
    <Card key={props.proj.tag} className="details-card" bg="dark">
      <Card.Title className='details-title'>{props.proj.name}</Card.Title>
      <Row className="align-items-center">
        <Col sm="3">
          <Card.Img src={images[props.proj.source]} className="details-img" alt={props.proj.alt} />
        </Col>
        <Col sm="9"> 
          <Card.Text className='css-fix details-desc'>{props.proj.description}</Card.Text> 
          <GetTech tech={props.proj.tech}/>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Card.Text className="details-cont"> Contributions </Card.Text>
        </Col>
      </Row>
      
    </Card>
  )
}

export default DetailedProjectCard;