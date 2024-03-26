//LaptopContainer.jsx
import React from 'react';
import laptopData from "../../JsonFiles/LaptopCard.json";
import LaptopDetails from './LaptopDetails';

export default function LaptopContainer() {
  return (
    <div className="flex lg:m-2 grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:m-20 sm:text-sm">
           <LaptopDetails laptops={laptopData} />
     </div>
  );
}