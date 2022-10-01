import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Photo from '../../assets/images/cameron-photo.jpg';
import './style.css';

class AboutCard extends Component{
  render() {
    return(
      <Card className="border-dark">
        <div className="row no-gutters">
          <div className="col-md-4">
            <Card.Img src={Photo} className="card-img photo" alt="Photo of me" />
          </div>
          <div className="col-md-8">
            <Card.Body>
              <Card.Title>About Me</Card.Title>
              <hr/>
              <Card.Text>I am a Junior Software Developer with over four years in customer support and a passion for game development. 
                Currently I am studying Computer Science with an Entertainment Arts and Engineering (EAE) emphasis at the 
                University of Utah. My current goal is to join a like-minded team to create software people enjoy.</Card.Text>
              <Card.Text>I previously completed a Full Stack Development certificate through a bootcamp offered by the university. 
                With each career opportunity I have adapted to new situations and learned new systems quickly. As a top performer, 
                I have trained over a dozen representatives on the systems and processes utilized to assist hundreds of users.</Card.Text>
              <Card.Text>My six years of experience with programming languages, frameworks, and libraries include C++, Java, C#, 
                Python, UE4, Unity, MongoDB, Express, React, Node, MySQL, and Bootstrap. As part of my degree, I have completed 
                coursework in data structures, software practice, computer architecture and traditional game development. By May 2023, 
                I am planning to complete coursework in algorithms, scientific computing and alternative game development.</Card.Text>
            </Card.Body>
          </div>
        </div>
    </Card>
    )
  }
}

export default AboutCard;