import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src="/assets/images/logo.png" alt="Hotel Catalinas" />
        </Link>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/rooms">Habitaciones</Link></li>
            <li><Link to="/services">Servicios</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
