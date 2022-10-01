import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css'

class MainFooter extends Component {
  render() {
    return (
      <footer className="bg-dark">
          <span>
            <a href="https://github.com/MagusConjurer" className="contact" target=" "><FontAwesomeIcon icon={["fab", "github"]} size="2x" color="rebeccapurple" /></a>
            <a href="https://www.linkedin.com/in/cameron-davis-futuregamedeveloper/" className="contact" target=" "><FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" color="#2867B2" /></a>
            <a href="mailto:cameronisadavis@gmail.com" className="contact" target=" "><FontAwesomeIcon icon={["fas", "envelope"]} size="2x" color="lightgray" /></a>
          </span>
      </footer>
    )
  }
}

export default MainFooter;