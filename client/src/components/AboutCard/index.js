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
              <Card.Text>I am a software developer with a passion for game development and over six years of work in customer support. 
                Games have been a major part of my life ever since I would beg my older brother to let me watch him playing games on his computer
                or when we would fight over which two siblings got to use the Super Nintendo. Some of the games that have fed my passion are
                Age of Mythology, Civilization: Call to Power, Mario Kart {'('} 64, Wii, 8{')'}, Minecraft, Super Mario Brothers, Unreal Tournament, 
                Warcraft III, Warframe, and the original Zoo Tycoon: Complete Collection.</Card.Text>
              <Card.Text>My goal is to join a like-minded team to create games that people enjoy. At every career fair offered by my junior high and high schools, I always
                made sure to attend the presentation by local game developers. Now I am studying Computer Science with an Entertainment Arts and Engineering (EAE) emphasis at the 
                University of Utah. As part of my degree, I have completed coursework in data structures, software practice, computer architecture, algorithms 
                and traditional/alternative game development. Between school, bootcamps, and online courses, I have spent seven years gaining experience with
                programming languages, frameworks, and libraries. These include C++, C#, Java, Python, UE 4 & 5, Unity, GameMaker, MongoDB, Express, React, Node, MySQL, and 
                Bootstrap. </Card.Text>
              <Card.Text>Working in customer service allowed me to adapt to new situations and learn new systems quickly. As a top performer, 
                I have trained over a dozen representatives on the systems and processes utilized to assist hundreds of users. I have also learned how important
                it is to consider the impact that development choices can have on the end user. </Card.Text>
                <Card.Text>I am always interested in new opportunities. If you feel that I could be a good addition to your team, feel free to reach out and connect with me on LinkedIn.</Card.Text>
            </Card.Body>
          </div>
        </div>
    </Card>
    )
  }
}

export default AboutCard;