import React from 'react';
import './Logo.css';

const Logo = ({ size = 'medium', className = '' }) => {
  const sizeClasses = {
    small: 'logo-small',
    medium: 'logo-medium',
    large: 'logo-large'
  };

  return (
    <div className={`logo ${sizeClasses[size]} ${className}`}>
      <img 
        src="/images/logo.png" 
        alt="Vaibhav Verma Logo" 
        className="logo-image"
      />
    </div>
  );
};

export default Logo;
