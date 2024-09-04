import React from 'react';
import MainNav from './components/MainNav';
import MainFooter from './components/MainFooter';
import About from './pages/About';
import Projects from './pages/Projects';
import DetailedProject from './pages/DetailedProject';
import { BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  library.add(
    faGithub, faLinkedin, faEnvelope
  );

  return (
    <div>
      <MainNav />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path={"/projects"} element={<Projects />} />
            <Route path={"/projects/:proj"} element={<DetailedProject />} />      
            <Route path={"/*"} element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
      <MainFooter />
    </div>
  );
}

export default App;
