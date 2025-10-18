import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaMobile, 
  FaDatabase, 
  FaCloud, 
  FaPaintBrush, 
  FaCogs,
  FaRocket,
  FaShieldAlt
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Creating responsive and interactive web applications using modern frameworks like React.js, Next.js, and Node.js.',
      features: ['Frontend Development', 'Backend APIs', 'Full-Stack Solutions', 'Responsive Design']
    },
    {
      icon: <FaMobile />,
      title: 'Mobile-First Design',
      description: 'Designing and developing mobile-optimized applications with seamless user experience across all devices.',
      features: ['Responsive Design', 'Mobile Optimization', 'Cross-Platform', 'Performance Focused']
    },
    {
      icon: <FaDatabase />,
      title: 'Database Management',
      description: 'Designing and implementing efficient database solutions using SQL, MongoDB, and cloud databases.',
      features: ['Database Design', 'Query Optimization', 'Data Modeling', 'Cloud Databases']
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Solutions',
      description: 'Deploying and managing applications on cloud platforms like AWS with scalable and secure infrastructure.',
      features: ['AWS Services', 'Cloud Deployment']
    },
    // {
    //   icon: <FaPaintBrush />,
    //   title: 'UI/UX Design',
    //   description: 'Creating intuitive and visually appealing user interfaces that enhance user experience and engagement.',
    //   features: ['User Interface Design', 'User Experience', 'Prototyping', 'Design Systems']
    // },
    {
      icon: <FaCogs />,
      title: 'ERP Integration',
      description: 'Configuring and customizing ERP systems using frameworks like Frappe to streamline business operations.',
      features: ['ERP Configuration', 'Business Process Automation', 'System Integration', 'Workflow Optimization']
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
    <section id="services" className="services">
      <div className="container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">What I Do</h2>
          <p className="section-subtitle">
            I provide comprehensive software development services to help businesses 
            achieve their digital transformation goals.
          </p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(255, 107, 53, 0.2)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <div className="service-overlay">
                <div className="overlay-content">
                  <h4>{service.title}</h4>
                  <p>Ready to discuss your project requirements?</p>
                  <motion.button 
                    className="overlay-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="services-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="cta-content">
            <h3>Ready to Start Your Project?</h3>
            <p>Let's discuss how I can help bring your ideas to life with cutting-edge technology solutions.</p>
            <motion.button 
              className="cta-button"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 107, 53, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket />
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
