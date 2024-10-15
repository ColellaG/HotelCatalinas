import React from 'react';
import '../../styles/components/news-gallery.css';

const NewsGallery = () => {
  const news = [
    { title: 'Nuevo menú en nuestro restaurante', image: '/assets/images/restaurant.jpg', date: '2023-05-15' },
    { title: 'Renovación de nuestro spa', image: '/assets/images/spa.jpg', date: '2023-05-10' },
    { title: 'Oferta especial de verano', image: '/assets/images/pool.jpg', date: '2023-05-05' },
  ];

  return (
    <section className="news-gallery">
      <div className="container">
        <h2>Últimas Noticias</h2>
        <div className="news-list">
          {news.map((item, index) => (
            <div key={index} className="news-item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGallery;

