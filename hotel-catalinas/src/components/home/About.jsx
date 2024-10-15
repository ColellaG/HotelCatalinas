import React from 'react';
import '../../styles/components/about.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2>Sobre Hotel Catalinas Tucumán</h2>
        <p>
          Ubicado en el corazón de San Miguel de Tucumán, Hotel Catalinas ofrece una experiencia única de confort y elegancia. 
          Con nuestras modernas instalaciones y servicio excepcional, garantizamos una estancia inolvidable para todos nuestros huéspedes.
        </p>
        <a href="/about" className="btn">Conoce más sobre nosotros</a>
      </div>
    </section>
  );
};

export default About;

