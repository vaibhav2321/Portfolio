import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import profilePhoto from '../assets/profile_photo.png';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="geometric-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Vaibhav Verma
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Software Developer & Full-Stack Engineer
            </motion.p>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Passionate about creating innovative web solutions and building scalable applications 
              with modern technologies like React, Node.js, and cloud platforms.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.button 
                className="btn btn-primary"
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 107, 53, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope />
                Hire Me
              </motion.button>
              
              <motion.button 
                className="btn btn-secondary"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                Download CV
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="image-container">
              <div className="profile-image">
                <div className="image-placeholder">
                  <img 
                    src={profilePhoto} 
                    alt="Vaibhav Verma" 
                    className="profile-photo"
                  />
                </div>
              </div>
              <div className="floating-elements">
                <div className="floating-element element-1">React</div>
                <div className="floating-element element-2">Node.js</div>
                <div className="floating-element element-3">JavaScript</div>
                <div className="floating-element element-4">Python</div>
                <div className="floating-element element-5">Frappe Framework</div>
                <div className="floating-element element-6">MySQL</div>
                <div className="floating-element element-7">AWS</div>
                <div className="floating-element element-8">Git</div>
                {/* <div className="floating-element element-9">Express.js</div> */}
                <div className="floating-element element-10">Next.js</div>
                <div className="floating-element element-11">Tailwind CSS</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
