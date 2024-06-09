import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

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
<<<<<<< HEAD
      <div className='App__main-page-content'>
        <Routes>
          <Route index path="/" element={<Home />} />
=======
      
      <div className='App__main-page-content'>
        <Routes>
          <Route path="/" element={<Home />} />
>>>>>>> 4fb66d69a8b3b9d0fa81a0dc185eb9374b49bbf6
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
