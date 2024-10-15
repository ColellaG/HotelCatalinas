import React, { createContext, useState } from 'react';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,
  });

  return (
    <BookingContext.Provider value={{ bookingData, setBookingData }}>
      {children}
    </BookingContext.Provider>
  );
};

