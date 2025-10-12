import React from 'react';
import './ImagePlaceholder.css';

const ImagePlaceholder = ({ 
  src = '/images/logo.png', 
  alt = 'Image', 
  className = '', 
  size = 'medium',
  fallbackText = 'Image' 
}) => {
  const [imageError, setImageError] = React.useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const sizeClasses = {
    small: 'placeholder-small',
    medium: 'placeholder-medium',
    large: 'placeholder-large'
  };

  if (imageError) {
    return (
      <div className={`image-placeholder ${sizeClasses[size]} ${className}`}>
        <div className="placeholder-content">
          <span>{fallbackText}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`image-placeholder ${sizeClasses[size]} ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="placeholder-image"
        onError={handleImageError}
      />
    </div>
  );
};

export default ImagePlaceholder;
