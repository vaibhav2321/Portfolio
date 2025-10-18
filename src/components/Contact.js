import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaPaperPlane,
  FaUser,
  FaTag
} from 'react-icons/fa';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // You'll need to set up EmailJS service
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'vaibhavverma2321@gmail.com',
      link: 'mailto:vaibhavverma2321@gmail.com'
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+91-8360695417',
      link: 'tel:+918360695417'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'India',
      link: null
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/vaibhav-verma-41b626248',
      link: 'https://www.linkedin.com/in/vaibhav-verma-41b626248/'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'github.com/vaibhav2321',
      link: 'https://github.com/vaibhav2321'
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
    <section id="contact" className="contact">
      <div className="container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Let's discuss your next project or just say hello. I'm always open to 
            new opportunities and interesting conversations.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-wrapper">
                  <FaUser className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <FaEnvelope className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <FaTag className="input-icon" />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <motion.button 
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 107, 53, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <div className="loading-spinner"></div>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div 
                  className="submit-status success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div 
                  className="submit-status error"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Something went wrong. Please try again or contact me directly.
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div 
            className="contact-info"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3>Get In Touch</h3>
            <p>
              I'm always interested in hearing about new opportunities and projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="contact-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <span className="contact-label">{info.label}</span>
                    {info.link ? (
                      <a href={info.link} className="contact-value" target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-value">{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                <motion.a 
                  href="https://www.linkedin.com/in/vaibhav-verma-41b626248/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a 
                  href="https://github.com/vaibhav2321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
