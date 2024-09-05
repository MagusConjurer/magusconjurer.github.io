import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import images from "../../assets/images";
import './style.css';

export function GetTeamSize(proj) {
  let teamSize = proj.team;
  if (teamSize > 1) {
    return <Card.Text>Team Size: {teamSize} </Card.Text>;
  } else {
    return null;
  }
}

export function GetTech(proj) {
  let techList = proj.tech.split(",");
  
  return techList.map((tech, index) => <Badge key={index} bg='' className='skill-badge'>{tech}</Badge>);
}

export function GetLinks(proj) {
  return <div>
    {proj.links.itch !== '' &&
      <Card.Link href={proj.links.itch} className='links' target=' '>Itch.io</Card.Link>
    }
    {proj.links.steam !== '' &&
      <Card.Link href={proj.links.steam} className='links' target=' '>Steam</Card.Link>
    }
    {proj.links.github !== ''&&
      <Card.Link href={proj.links.github} className='links' target=' '>GitHub</Card.Link>
    }
  </div>
}

function GetContributions(proj) {
  return proj.contributions.map((cont, index) => <li key={index} className='details-cont'><Card.Text>{cont}</Card.Text></li>);
}

export default function DetailedProjectCard(props){
  return (
    <Card key={props.proj.tag} className="details-card" bg="dark">
      <Card.Title className='details-title'>{props.proj.name}</Card.Title>
      <Row className="align-items-center details-desc">
        <Col sm="3">
          <Card.Img src={images[props.proj.source]} className="details-img" alt={props.proj.alt} />
        </Col>
        <Col sm="9"> 
          <GetTeamSize team={props.proj.team}/>
          <Card.Text>Development Time: {props.proj.time}</Card.Text>
          <Card.Text>{props.proj.description}</Card.Text> 
          <GetTech tech={props.proj.tech}/>
          <br/>
          <br/>
          <GetLinks links={props.proj}/>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Card.Text className="details-cont-header"> Contributions </Card.Text>
          <ul>
            <GetContributions contributions={props.proj.contributions}/>
          </ul>
        </Col>
      </Row>
      
    </Card>
  )
}