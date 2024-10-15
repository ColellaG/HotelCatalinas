import React from 'react';
import '../../styles/components/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Hotel Catalinas Tucumán</h3>
            <p>Av. Soldati 380, T4000 San Miguel de Tucumán, Tucumán, Argentina.</p>
          </div>
          <div className="footer-section">
            <h3>Contacto</h3>
            <p>Teléfono: +54 381 4220624</p>
            <p>Email: reservas@hotelcatalinastucuman.com.ar</p>
          </div>
          <div className="footer-section">
            <h3>Síguenos</h3>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Hotel Catalinas Tucumán. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
