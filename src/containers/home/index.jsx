import React from "react";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebook, FaInstagram, FaFileDownload } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './style.scss';
import myImage from './vighnesh.jpeg';
import { Animate } from "react-simple-animate";

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
                <a href="/resume.pdf" download="Vighnesh_Devkate_Resume.pdf">
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
            </motion.div>
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
          <p>&copy; 2024 Vighnesh. Made by Vighnesh.</p>
        </div>
        </Animate>
        </section>
    );
}

export default Home;
