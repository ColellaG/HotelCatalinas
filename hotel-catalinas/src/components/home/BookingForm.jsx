import React, { useContext } from 'react';
import { BookingContext } from '../../context/BookingContext';
import '../../styles/components/booking-form.css';

const BookingForm = () => {
  const { bookingData, setBookingData } = useContext(BookingContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para procesar la reserva
    console.log('Booking data:', bookingData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <input
        type="date"
        name="checkIn"
        value={bookingData.checkIn}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="checkOut"
        value={bookingData.checkOut}
        onChange={handleChange}
        required
      />
      <select name="adults" value={bookingData.adults} onChange={handleChange}>
        <option value="1">1 Adulto</option>
        <option value="2">2 Adultos</option>
        <option value="3">3 Adultos</option>
        <option value="4">4 Adultos</option>
      </select>
      <select name="children" value={bookingData.children} onChange={handleChange}>
        <option value="0">0 Niños</option>
        <option value="1">1 Niño</option>
        <option value="2">2 Niños</option>
        <option value="3">3 Niños</option>
      </select>
      <button type="submit">Reservar</button>
    </form>
  );
};

export default BookingForm;

