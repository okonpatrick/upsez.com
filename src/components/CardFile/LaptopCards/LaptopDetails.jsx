// LaptopDetails.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLaptopDetails } from '../../../context/LaptopDetailsContext';

const LaptopDetails = ({ laptops }) => {
  const navigate = useNavigate();
  const { setSelectedLaptop } = useLaptopDetails();

  const handleLaptopClick = (laptop) => {
    setSelectedLaptop(laptop);
    navigate(`/${laptop.brand}/LaptopDetail/${laptop.id}`);
  };

  return (
    <div>
      {laptops.map((laptop) => (
        <div key={laptop.id} onClick={() => handleLaptopClick(laptop)}>
          <img src={laptop.imageSrc} alt={laptop.itemName} />
          <p>Brand: {laptop.brand}</p>
          <p>Item Name: {laptop.itemName}</p>
          <p>Price: ${laptop.price}</p>
          <p>Condition: {laptop.condition}</p>
          <p>Capacity: {laptop.capacity}</p>
          {/* Add more laptop details as needed */}
        </div>
      ))}
    </div>
  );
};

export default LaptopDetails;
