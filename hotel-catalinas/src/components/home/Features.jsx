import React from 'react';
import '../../styles/components/features.css';

const Features = () => {
  const features = [
    { icon: '🏊‍♂️', title: 'Piscina', description: 'Disfrute de nuestra piscina al aire libre' },
    { icon: '🍽️', title: 'Restaurante', description: 'Deguste la mejor gastronomía local e internacional' },
    { icon: '💆‍♀️', title: 'Spa', description: 'Relájese en nuestro spa de clase mundial' },
    { icon: '🏋️‍♂️', title: 'Gimnasio', description: 'Manténgase en forma en nuestro gimnasio totalmente equipado' },
  ];

  return (
    <section className="features">
      <div className="container">
        <h2>Nuestras Características</h2>
        <div className="feature-list">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

