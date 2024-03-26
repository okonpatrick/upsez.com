// LaptopDetailsPage.jsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useLaptopDetails } from '../../../context/LaptopDetailsContext';
import { useLaptopDetails } from '../../../context/LaptopDetailsContext';

const LaptopDetailsPage = () => {
  const { id, brand } = useParams(); // Get the parameters from the URL
  const { selectedLaptop, setSelectedLaptop } = useLaptopDetails();

  // useEffect to fetch or set selected laptop details based on id and brand
  useEffect(() => {
    // You can fetch the laptop details based on id and brand here
    // For simplicity, let's assume you've already stored the details in the context
    // You may need to replace this with actual data fetching logic
    // setSelectedLaptop based on id and brand if not already set
  }, [id, brand, setSelectedLaptop]);

  if (!selectedLaptop) {
    return <div>Loading...</div>; // Render loading state if details are being fetched
  }

  return (
    <div>
       <h2>Laptop Details</h2>
      <img src={selectedLaptop.imageSrc} alt={selectedLaptop.itemName} />
      <p>Brand: {selectedLaptop.brand}</p>
      <p>Item Name: {selectedLaptop.itemName}</p>
      <p>Price: ${selectedLaptop.price}</p>
      <p>Condition: {selectedLaptop.condition}</p>
      <p>Capacity: {selectedLaptop.capacity}</p>
      <p>Graphics Card: {selectedLaptop['graphics-card']}</p>
      <p>Operating System: {selectedLaptop['operating-system']}</p>
      <p>Touchscreen: {selectedLaptop.touchscreen ? 'Yes' : 'No'}</p>
      <p>Model: {selectedLaptop.model}</p>
      <p>RAM: {selectedLaptop.ram}</p>
      <p>Processor: {selectedLaptop.processor}</p>
      <p>Display Size: {selectedLaptop['display-size']}</p>
      <p>Storage Type: {selectedLaptop['storage-type']}</p>
      <p>Colour: {selectedLaptop.colour}</p>
      <p>Frame Material: {selectedLaptop['frame-material']}</p>
      <p>Location: {selectedLaptop.location}</p>
      <p>Availability: {selectedLaptop.availability ? 'Available' : 'Not Available'}</p>
      <p>Pay on Delivery: {selectedLaptop['pay-on-delivery'] ? 'Yes' : 'No'}</p>
      <p>Fingerprint: {selectedLaptop.fingerprint ? 'Yes' : 'No'}</p>
      <p>Seller ID: {selectedLaptop['seller-id']}</p>
      <p>Seller Phone No: {selectedLaptop['seller-phone-no']}</p>
      <p>Battery Life: {selectedLaptop['battery-life']}</p>
      {/* Add more laptop details as needed */}
    </div>
  );
};

export default LaptopDetailsPage;
