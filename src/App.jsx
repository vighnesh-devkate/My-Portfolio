import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Animate } from 'react-simple-animate';

import { FaDev, FaDatabase } from 'react-icons/fa';
import { DiApple, DiAndroid } from 'react-icons/di';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
             
      <div className='App__main-page-content'>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div className="App__main-page-content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)"
            }}
            end={{
              transform: "translateX(0px)"
            }}
          >
            <div className="App__main-page-content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <p className='App__main-page-content__servicesWrapper__innerContent__text' >
                Welcome To My Portfolio
                <br/>
                Explore Me,My Skills And My Work
              </p>
            </div>
          </Animate>
        </div>
      </div>
    </div>
  );
}

export default App;