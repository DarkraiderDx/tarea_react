import React, { useState } from 'react';
import './css/page2.css'; 

const Page2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Formulario enviado:', formData);
    
  };

  return (
    <div className="page2-container">
      <div className="contact-form">
        <h2>Contacta con nosotros</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Page2;
