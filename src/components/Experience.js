import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Developer',
      company: 'LDT Technology Pvt. Ltd.',
      location: 'India',
      period: 'Jul 2024 - Present',
      type: 'Full-time',
      description: 'Leading development of innovative software solutions and managing complex projects.',
      achievements: [
        'Developed JUA Hotel Management System with responsive UI and user permissions',
        'Enhanced LDT Technology website with Contact Us, Hire Us pages using React.js and Next.js',
        'Configured ERP systems using Frappe Framework for TP-Link, streamlining operations',
        'Optimized performance with lazy loading and form validation across multiple projects'
      ],
      technologies: ['React.js', 'Next.js', 'Node.js', 'Frappe Framework', 'ERP Systems']
    },
    {
      id: 2,
      title: 'Software Developer Intern',
      company: 'LDT Technology Pvt. Ltd.',
      location: 'India',
      period: 'Jan 2024 - Jun 2024',
      type: 'Internship',
      description: 'Gained hands-on experience in full-stack development and system integration.',
      achievements: [
        'Developed Zaps Premium frontend using React.js with Frappe-based backend integration',
        'Configured ERP, CRM, Accounting, Buying, Selling & LMS modules using Frappe Framework',
        'Automated business processes and improved inter-departmental coordination',
        'Handled server setup and maintenance for production environments'
      ],
      technologies: ['React.js', 'Frappe Framework', 'ERP', 'CRM', 'Server Management']
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Chandigarh Group of Colleges, Jhanjeri, Mohali',
      period: '2020 - 2024',
      cgpa: '7.34/10.00',
      description: 'Focused on software development, algorithms, and system design.'
    },
    {
      id: 2,
      degree: 'Non-Medical (Intermediate) - CBSE',
      institution: 'DAV Senior Secondary School',
      period: '2019-2020',
      cgpa: null,
      description: 'Completed higher secondary education with focus on science and mathematics.'
    },
    {
      id: 3,
      degree: 'Matriculation - CBSE',
      institution: 'DAV Senior Secondary School, India',
      period: '2017 - 2018',
      cgpa: null,
      description: 'Completed Class X (Matriculation) under CBSE curriculum.'
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div 
          className="experience-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My professional journey and educational background that shaped my expertise 
            in software development and technology.
          </p>
        </motion.div>

        <div className="experience-content">
          <motion.div 
            className="work-experience"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="subsection-title">
              <FaBriefcase />
              Work Experience
            </h3>
            
            <div className="timeline">
              {experiences.map((exp) => (
                <motion.div 
                  key={exp.id}
                  className="timeline-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="experience-header-info">
                      <h4 className="job-title">{exp.title}</h4>
                      <div className="company-info">
                        <span className="company-name">{exp.company}</span>
                        <span className="job-type">{exp.type}</span>
                      </div>
                      <div className="job-details">
                        <span className="job-period">
                          <FaCalendarAlt />
                          {exp.period}
                        </span>
                        <span className="job-location">
                          <FaMapMarkerAlt />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    
                    <p className="job-description">{exp.description}</p>
                    
                    <div className="achievements">
                      <h5>Key Achievements:</h5>
                      <ul>
                        {exp.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="technologies-used">
                      <h5>Technologies:</h5>
                      <div className="tech-tags">
                        {exp.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="education"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="subsection-title">
              <FaCalendarAlt />
              Education
            </h3>
            
            <div className="education-timeline">
              {education.map((edu) => (
                <motion.div 
                  key={edu.id}
                  className="education-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="education-content">
                    <h4 className="degree-title">{edu.degree}</h4>
                    <p className="institution-name">{edu.institution}</p>
                    <div className="education-details">
                      <span className="education-period">{edu.period}</span>
                      {edu.cgpa && <span className="cgpa">CGPA: {edu.cgpa}</span>}
                    </div>
                    <p className="education-description">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="experience-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3>Ready to Work Together?</h3>
          <p>Let's discuss how my experience can contribute to your next project.</p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 107, 53, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
