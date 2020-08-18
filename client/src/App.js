import React from 'react';
import MainNav from './components/MainNav';
import MainFooter from './components/MainFooter';
import About from './pages/About';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {

  library.add(
    faGithub, faLinkedin, faPhone,faEnvelope
  );

  return (
    <div className="container">
      <MainNav />
      <Router>
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/*" component={About} />
        </Switch>
      </Router>
      <MainFooter />
    </div>
  );
}

export default App;
