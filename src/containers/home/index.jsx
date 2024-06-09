import React from "react";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebook, FaInstagram, FaFileDownload, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './style.scss';
import myImage from './vighnesh.jpeg';
import { Animate } from "react-simple-animate";
import About from '../about';
import Career from '../resume';
import Skills from '../skills';
import Portfolio from '../portfolio';
import Contact from '../contact';

const Home = () => {
    const navigate = useNavigate();

    const handleNavigateToContactMePage = () => {
        navigate('/contact');
    }

    return (
        <section id="home" className='home'>
            <motion.div 
                className="home__background"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            />
            <motion.div 
                className="home__image-wrapper"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
            >
                <img src={myImage} alt="Vighnesh" />
            </motion.div>
            <motion.div 
                className="home__text-wrapper"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
            >
                <h1>
                    Hello, I'm Vighnesh Devkate
                    <br/>
                    Web Developer
                </h1>
            </motion.div>
            <motion.div 
                className="home__contact-me"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1.5 }}
            >
                <button onClick={handleNavigateToContactMePage}>Hire me</button>
                <a href="/My-Portfolio/resume.pdf" download="Vighnesh_Devkate_Resume.pdf">
                    <button>
                        <FaFileDownload /> Download Resume
                    </button>
                </a>
            </motion.div>
            <motion.div 
                className="home__social-media"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1.5 }}
            >
                <a href="https://www.linkedin.com/in/vighnesh-devkate-b2119822a/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://m.facebook.com/vighnesh.deokate/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://www.instagram.com/_vighnesh_711/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://leetcode.com/u/Vighnesh16/" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode />
                </a>
                <a href="https://github.com/vighnesh-devkate" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </motion.div>
            <About />
            <Career />
            <Skills />
            <Portfolio />
            <Contact />
            <Animate
                play
                duration={1}
                delay={0}
                start={{
                    transform: "translateX(-200px)",
                }}
                end={{
                    transform: "translateX(0px)",
                }}
            >
                <div className="contact__content__footer">
<<<<<<< HEAD
                    <p>Copyright &copy; 2024 Vighnesh Devkate All Rights Reserved.</p>
=======
                    <p>&copy; 2024 Vighnesh. Made by Vighnesh.</p>
>>>>>>> 4fb66d69a8b3b9d0fa81a0dc185eb9374b49bbf6
                </div>
            </Animate>
        </section>
    );
}

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> 4fb66d69a8b3b9d0fa81a0dc185eb9374b49bbf6
