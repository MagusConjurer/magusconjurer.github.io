import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import ReactPlayer from 'react-player';
import images from "../../assets/images";
import './style.css';

function GetTeamSize(proj) {
  let teamSize = proj.team;
  if (teamSize > 1) {
    return <Card.Text>Team Size : {teamSize} </Card.Text>;
  } else {
    return null;
  }
}

function GetRole(proj) {
  if(proj.role !== "") {
    return <Card.Text>Role : {proj.role}</Card.Text>
  } else {
    return null;
  }
  
}

function GetTech(proj) {
  let techList = proj.tech.split(",");
  
  return techList.map((tech, index) => <Badge key={index} bg='' className='skill-badge'>{tech}</Badge>);
}

function GetLinks(proj) {
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
  return proj.contributions.map((cont, index) => {
    if (cont.includes("----")) {
      return <Card.Text key={index}>{cont}</Card.Text>
    } else {
      return <li key={index} className='details-cont'><Card.Text>{cont}</Card.Text></li>;
    }
    
  })
}

function GetGameplayVid(proj) {
  if(proj.video !== "") {
    return <Row >
            <Col>
              <Card.Text className="details-cont-header">Gameplay Video</Card.Text>
              <div align="center">
                <div className="details-player">
                  <ReactPlayer width="100%" height="100%" url={proj.video} controls={true} />
                </div>
              </div>
            </Col>
          </Row>
  } else {
    return null;
  }
}

export function GetBasicDetails(props) {
  return <div>
    <GetTeamSize team={props.props.team}/>
    <GetRole role={props.props.role}/>
    <Card.Text>Development Time : {props.props.time}</Card.Text>
    <Card.Text>{props.props.description}</Card.Text> 
    <GetTech tech={props.props.tech}/>
    <br/>
    <br/>
    <GetLinks links={props.props}/>
  </div>
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
          <GetBasicDetails props={props.proj}/>
        </Col>
      </Row>
      <hr />
      <GetGameplayVid video={props.proj.video}/>
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