import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaExternalLinkAlt, FaGithub, FaPlay } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Musify - Music Learning Platform',
      description: 'A comprehensive e-commerce platform for music learning with user authentication, course purchasing, and responsive UI built using Next.js and MongoDB.',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'MongoDB', 'Authentication', 'E-commerce'],
      category: 'Full-Stack',
      demoLink: '#',
      githubLink: '#',
      features: ['User Authentication', 'Course Management', 'Payment Integration', 'Responsive Design']
    },
    {
      id: 2,
      title: 'Grocery Shop - E-Commerce Platform',
      description: 'A full-stack e-commerce platform with secure login, shopping cart functionality, and responsive design. Built with React.js, Node.js, and MongoDB.',
      image: '/api/placeholder/400/300',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'E-commerce'],
      category: 'Full-Stack',
      demoLink: '#',
      githubLink: '#',
      features: ['Shopping Cart', 'User Authentication', 'Product Management', 'Order Processing']
    },
    {
      id: 3,
      title: 'Toys Sell - E-Commerce Frontend',
      description: 'A responsive e-commerce frontend application with dynamic product filtering, intuitive navigation, and modern UI design using React.js.',
      image: '/api/placeholder/400/300',
      technologies: ['React.js', 'CSS3', 'JavaScript', 'Responsive Design'],
      category: 'Frontend',
      demoLink: '#',
      githubLink: '#',
      features: ['Product Filtering', 'Dynamic Navigation', 'Responsive Layout', 'Modern UI/UX']
    },
    {
      id: 4,
      title: 'JUA - Hotel Management System',
      description: 'A comprehensive hotel management system with responsive UI, user permissions, and scalable architecture for efficient hotel operations.',
      image: '/api/placeholder/400/300',
      technologies: ['React.js', 'Node.js', 'Database', 'User Management'],
      category: 'Full-Stack',
      demoLink: '#',
      githubLink: '#',
      features: ['User Permissions', 'Room Management', 'Booking System', 'Admin Dashboard']
    },
    {
      id: 5,
      title: 'LDT Website Enhancement',
      description: 'Enhanced the LDT Technology website with Contact Us page, Hire Us page, and Product Section using React.js, Next.js, and Node.js.',
      image: '/api/placeholder/400/300',
      technologies: ['React.js', 'Next.js', 'Node.js', 'Form Handling'],
      category: 'Frontend',
      demoLink: '#',
      githubLink: '#',
      features: ['Contact Forms', 'Component Reusability', 'Performance Optimization', 'Form Validation']
    },
    {
      id: 6,
      title: 'Zaps Premium - Frontend Development',
      description: 'Developed the frontend using React.js and integrated it with a Frappe-based backend, handling server setup and maintenance.',
      image: '/api/placeholder/400/300',
      technologies: ['React.js', 'Frappe Framework', 'Backend Integration', 'Server Management'],
      category: 'Full-Stack',
      demoLink: '#',
      githubLink: '#',
      features: ['React Frontend', 'Frappe Backend', 'Server Setup', 'System Integration']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="projects" className="projects">
      <div className="container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Latest Works</h2>
          <p className="section-subtitle">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            UI/UX design, and modern web technologies.
          </p>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(255, 107, 53, 0.2)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <div className="placeholder-content">
                    <FaCode />
                    <span>{project.title}</span>
                  </div>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <motion.a 
                      href={project.demoLink}
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaPlay />
                    </motion.a>
                    <motion.a 
                      href={project.githubLink}
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a 
                      href={project.demoLink}
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  </div>
                </div>
                <div className="project-category">{project.category}</div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3>Interested in Working Together?</h3>
          <p>I'm always open to discussing new opportunities and interesting projects.</p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 107, 53, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
