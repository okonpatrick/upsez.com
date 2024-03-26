// LaptopDetailsContext.js
import React, { createContext, useContext, useState } from 'react';

const LaptopDetailsContext = createContext();

export const LaptopDetailsProvider = ({ children }) => {
  const [selectedLaptop, setSelectedLaptop] = useState(null);

  return (
    <LaptopDetailsContext.Provider value={{ selectedLaptop, setSelectedLaptop }}>
      {children}
    </LaptopDetailsContext.Provider>
  );
};

export const useLaptopDetails = () => useContext(LaptopDetailsContext);
