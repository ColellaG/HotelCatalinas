import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { BookingProvider } from './context/BookingContext';

function App() {
  return (
    <BookingProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </BookingProvider>
  );
}

export default App;
