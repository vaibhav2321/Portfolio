import React from 'react';
import './ImagePlaceholder.css';
import defaultProjectImage from '../assets/default_project_image.png';

const ImagePlaceholder = ({ 
  src = defaultProjectImage, 
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
        <img 
          src={defaultProjectImage} 
          alt={alt} 
          className="placeholder-image"
        />
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
