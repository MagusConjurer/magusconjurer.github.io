import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Photo from '../../assets/images/cameron-photo.jpg';
import Cat1 from '../../assets/images/kitty1(2024).png';
import Cat2 from '../../assets/images/kitty2(2024).png';
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
              <Card.Text>
                I am a software developer with a passion for game development and over six years of work in customer support. 
                Games have been a major part of my life ever since I would watch my older brother playing games on his computer
                or when we would fight over which two siblings got to use the Super Nintendo. Some of the games that have fed my passion are
                Age of Mythology, Assassin's Creed Odyssey/Valhalla, Civilization: Call to Power, Disney Dreamlight Valley, Disney Speedstorm, Hellblade: Senua's Sacrifice, Hollow Knight, 
                Mario Kart {'('}64, Wii, 8{')'}, Minecraft, Runescape, Stardew Valley, Super Mario All-Stars, Unreal Tournament, Warcraft III, Warframe, 
                and the original Zoo Tycoon: Complete Collection.
              </Card.Text>
              <Card.Text>
                My goal is to join a team that creates a great product in a diverse and healthy working environment. At every career fair offered by my junior high and high school I attended
                the presentations by local developers. In 2020 I completed a 24 week Full Stack Development bootcamp through the University of Utah. 
                I completed my senior capstone project and graduated in May 2024 with a bachelor's degree in Computer Science with an Entertainment Arts and Engineering (EAE) emphasis at the University of Utah. 
              </Card.Text>
              <Card.Text>
                Working in customer service allowed me to adapt to new situations and learn new systems quickly. As a top performer, 
                I have trained over a dozen representatives on the systems and processes utilized to assist hundreds of users. I also learned how important
                it is to consider the impact that development choices can have on the end user. 
              </Card.Text>
              <Card.Text>
                I am always interested in new opportunities. If you feel that I could be a good addition to your team, feel free to reach out and connect with me on LinkedIn.
              </Card.Text>
              <hr/>
              <Card.Text>
                I am also the proud father of two rescue cats. They inspire and harass me daily.
                <Card.Img src={Cat1} className="card-img cat" alt="Torby (tortise shell / tabby) cat" />
                <Card.Img src={Cat2} className="card-img cat" alt="Black cat" />
              </Card.Text>
              <hr/>
              <Card.Text> 
                Coursework <br/>
                <Badge bg='' className='skill-badge'>Algorithms</Badge>
                <Badge bg='' className='skill-badge'>Artificial Intelligence</Badge>
                <Badge bg='' className='skill-badge'>Computer Architecture</Badge>
                <Badge bg='' className='skill-badge'>Computer Graphics</Badge>
                <Badge bg='' className='skill-badge'>Computer Systems</Badge>
                <Badge bg='' className='skill-badge'>Data Structures</Badge>
                <Badge bg='' className='skill-badge'>Database Systems</Badge>
                <Badge bg='' className='skill-badge'>Game Development {'('}traditional{')'}</Badge>
                <Badge bg='' className='skill-badge'>Game Development {'('}alternative/serious{')'}</Badge>
                <Badge bg='' className='skill-badge'>Machine Learning</Badge>
                <Badge bg='' className='skill-badge'>Software Practices</Badge>
                <br/> Coding <br/>
                <Badge bg='' className='skill-badge'>C++</Badge>
                <Badge bg='' className='skill-badge'>C#</Badge>
                <Badge bg='' className='skill-badge'>HTML</Badge>
                <Badge bg='' className='skill-badge'>Java</Badge>
                <Badge bg='' className='skill-badge'>Javascript</Badge>
                <Badge bg='' className='skill-badge'>Python</Badge>
                <Badge bg='' className='skill-badge'>React</Badge>
                <br/> Software <br/>
                <Badge bg='' className='skill-badge'>GIT</Badge>
                <Badge bg='' className='skill-badge'>Perforce Helix Core</Badge>
                <Badge bg='' className='skill-badge'>Trello</Badge>
                <Badge bg='' className='skill-badge'>Unreal Engine 4/5</Badge>
                <Badge bg='' className='skill-badge'>Unity</Badge>
                <Badge bg='' className='skill-badge'>Visual Studio</Badge>
              </Card.Text>
            </Card.Body>
          </div>
        </div>
    </Card>
    )
  }
}

export default AboutCard;