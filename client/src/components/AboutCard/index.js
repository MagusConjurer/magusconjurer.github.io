import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Photo from '../../assets/images/cameron-photo.jpg';
import './style.css';

class AboutCard extends Component{
  render() {
    return(
      <Card class="border-dark">
        <div class="row no-gutters">
          <div class="col-md-4">
            <Card.Img src={Photo} class="card-img photo" alt="Photo of me" />
          </div>
          <div class="col-md-8">
            <Card.Body>
              <Card.Title>About Me</Card.Title>
              <hr/>
              <Card.Text>Junior Software Developer with an extensive background in customer support. </Card.Text>
              <Card.Text>Currently studying Computer Science with an Entertainment Arts and Engineering (EAE) emphasis at the University of Utah. 
                Previously completed a Full Stack Development (MERN) certificate from the University of Utah. 
                Able to adapt to new situations and learn new systems quickly. 
                Enjoy working hard on a project and seeing the results when it’s completed. 
                My career has taught me how and where to look for an answer. 
                Skilled in programming languages and libraries including C++, Java, C#, Python, MongoDB, Express.js, React.js, Node.js, and Bootstrap.</Card.Text>
              <Card.Text>Passionate about game development and the worlds it creates. 
                Looking to join a like-minded team to create software people enjoy.</Card.Text>
            </Card.Body>
          </div>
        </div>
    </Card>
    )
  }
}

export default AboutCard;