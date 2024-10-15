import React from 'react';
import '../../styles/components/slider.css';

const Slider = () => {
  return (
    <div className="slider">
      <div className="slide">
        <img src="/assets/images/hotel-exterior.jpg" alt="Hotel Exterior" />
        <div className="slide-content">
          <h2>Bienvenidos a Hotel Catalinas Tucumán</h2>
          <p>Disfrute de una estancia inolvidable en el corazón de Tucumán</p>
        </div>
      </div>
      {/* Agrega más slides según sea necesario */}
    </div>
  );
};

export default Slider;

