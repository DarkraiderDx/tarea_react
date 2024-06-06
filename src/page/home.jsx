import React from 'react';
import './css/home.css';

const Home = ({ banner, images, tag }) => {
  return (
    <div className='centro'>
      <div>
        <div><img src={banner.src} alt={banner.alt} /></div>
      </div>
      <div className="art-gallery">
        <h2>Bienvenido a nuestra tienda de obras de arte</h2>
        <p>Explora nuestra colección única de obras de arte.</p>
      </div>
      <div className='imagenes'>
        {images.map((image, index) => (
          <div className='fondo_img' key={index}>
            <h3>{image.title}</h3>
            <img src={image.src} alt={image.title} />
            <p className='desc'>{image.description}</p>
          </div>
        ))}
      </div>
      <div className='tag'>
        <div><img src={tag.src} alt="Tag" /></div>
        <div className="texto">
          <p>{tag.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
