import React, { Component } from 'react';
import AboutCard from '../../components/AboutCard';
import './style.css';

class About extends Component {
  render() {
    return(
      <div className="content">
        <AboutCard />
      </div>
    )
  }
}

export default About;