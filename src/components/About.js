import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaCloud, FaTools } from 'react-icons/fa';
import './About.css';

const About = () => {
  const skillCategories = [
    { 
      name: 'Frontend Development', 
      icon: <FaCode />, 
      description: 'Building responsive and interactive user interfaces',
      technologies: ['React.js', 'Next.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS']
    },
    { 
      name: 'Backend Development', 
      icon: <FaDatabase />, 
      description: 'Creating robust server-side applications and APIs',
      technologies: ['Node.js', 'Python', 'Express.js', 'REST APIs', 'PostgreSQL', 'MySQL']
    },
    { 
      name: 'Cloud & DevOps', 
      icon: <FaCloud />, 
      description: 'Deploying and managing applications in the cloud',
      technologies: ['AWS', 'Docker']
    },
    { 
      name: 'Tools & Technologies', 
      icon: <FaTools />, 
      description: 'Development tools and version control systems',
      technologies: ['Git', 'GitHub', 'VS Code', 'Postman']
    }
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
              {skillCategories.map((category, index) => (
                <motion.div 
                  key={index}
                  className="skill-category"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="category-header">
                    <div className="category-icon">{category.icon}</div>
                    <div className="category-info">
                      <h4>{category.name}</h4>
                      <p>{category.description}</p>
                    </div>
                  </div>
                  <div className="technologies-list">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex}
                        className="tech-badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
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
                <span className="tech-tag">Frappe Framework</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">AWS</span>
                <span className="tech-tag">Git</span>
                <span className="tech-tag">ERPNext</span>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">Tailwind CSS</span>
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
