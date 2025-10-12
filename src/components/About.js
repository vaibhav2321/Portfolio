import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaCloud, FaTools } from 'react-icons/fa';
import './About.css';

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: <FaCode />, level: 90 },
    { name: 'Backend Development', icon: <FaDatabase />, level: 85 },
    { name: 'Cloud & DevOps', icon: <FaCloud />, level: 80 },
    { name: 'Tools & Technologies', icon: <FaTools />, level: 88 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <h2 className="section-title">About Me</h2>
            <div className="experience-counter">
              <div className="counter-number">1.5+</div>
              <div className="counter-label">Years of Experience</div>
            </div>
            
            <div className="about-story">
              <h3>My Journey in Software Development</h3>
              <p>
                I'm a passionate Software Developer with expertise in full-stack web development. 
                Currently working at LDT Technology Pvt. Ltd., I specialize in creating scalable 
                web applications using modern technologies like React.js, Node.js, and cloud platforms.
              </p>
              <p>
                My journey began with a strong foundation in Computer Science, and I've continuously 
                evolved by working on diverse projects ranging from hotel management systems to 
                e-commerce platforms. I believe in writing clean, maintainable code and creating 
                user-centric solutions.
              </p>
              <p>
                When I'm not coding, you can find me solving competitive programming problems on 
                platforms like LeetCode and GeeksForGeeks, where I've solved 300+ problems to 
                sharpen my problem-solving skills.
              </p>
            </div>
          </motion.div>

          <motion.div className="about-skills" variants={itemVariants}>
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="skill-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="tech-stack">
              <h4>Technologies I Work With</h4>
              <div className="tech-tags">
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Java</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">AWS</span>
                <span className="tech-tag">Git</span>
                <span className="tech-tag">Express.js</span>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">Tailwind CSS</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
