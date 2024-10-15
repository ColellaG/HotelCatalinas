import React from 'react';
import Slider from '../components/home/Slider';
import BookingForm from '../components/home/BookingForm';
import About from '../components/home/About';
import Features from '../components/home/Features';
import NewsGallery from '../components/home/NewsGallery';

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <BookingForm />
      <About />
      <Features />
      <NewsGallery />
    </div>
  );
};

export default Home;

