import React from 'react';
import './css/page1.css';

const Page1 = ({ images }) => {
  return (
    <div className='page1-container'>
      <h2>Explora nuestra galería de imágenes</h2>
      <div className='image-gallery'>
        {images.map((image, index) => (
          <div className='image-card' key={index}>
            <img src={image.src} alt={image.title} />
            <div className='image-details'>
              <h3>{image.title}</h3>
              <p className='image-description'>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page1;
