import bannerImage from '../image/baner.jpeg';
import image1 from '../image/imagen1.jpeg';
import image2 from '../image/imagen2.jpeg';
import image3 from '../image/imagen3.jpeg';
import image4 from '../image/imagen4.jpeg';
import image5 from '../image/imagen5.jpeg';

const data = {
  banner: {
    src: bannerImage,
    alt: 'Banner'
  },
  images: [
    {
      title: 'La Monalisa',
      src: image1,
      description: 'Insertar Descripcion de "La Monalisa"'
    },
    {
      title: 'La Joven de la Perla',
      src: image2,
      description: 'Insertar Descripcion de "La Joven de la Perla"'
    },
    {
      title: 'El Grito',
      src: image3,
      description: 'Insertar Descripcion de "El Grito"'
    },
    {
      title: 'Teraza de Cafe por la Noche',
      src: image4,
      description: 'Insertar Descripcion de "Teraza de Cafe por la Noche"'
    }
  ],
  tag: {
    src: image5,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem veniam numquam amet, esse impedit excepturi maiores distinctio laudantium debitis iusto porro possimus aut et repellendus quae vero. Nam, soluta labore.'
  }
};

export default data;
