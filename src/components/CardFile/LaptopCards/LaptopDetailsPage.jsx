// LaptopDetailsPage.jsx
import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
// import { useLaptopDetails } from '../../../context/LaptopDetailsContext';
import { useLaptopDetails } from '../../../context/LaptopDetailsContext';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const LaptopDetailsPage = () => {
  const { id, brand } = useParams(); // Get the parameters from the URL
  const { selectedLaptop, setSelectedLaptop } = useLaptopDetails();
  const [currentSlide, setCurrentSlide] = useState(0);

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
<>
<div className='flex'>
<div className='flex justify-center ml-10 mb-0'  style={{ width: '700px', height: '580px'}}>

<Carousel className="rounded-xl text-center mt-40 mb-3 " >
    <img
      src={selectedLaptop.imageSrc} 
      alt={selectedLaptop.itemName}      
    />
    <img
      src={selectedLaptop.imageSrc}
      alt={selectedLaptop.itemName}    
    
    />
    <img
      src={selectedLaptop.imageSrc}
      alt={selectedLaptop.itemName}
      
    />
  </Carousel>
</div>
    
    <div className=' lg:m-40 sm:m-5 align-center flex justify-center gap-0 sm:text-sm'>  
       <div className=' text-2xl'>
       <h2>Category: {selectedLaptop.category} Details</h2>


      {/* <img src={selectedLaptop.imageSrc} alt={selectedLaptop.itemName} className=''/> */}
      <p className=''>Brand: {selectedLaptop.brand}</p>
      <p>Item Name: {selectedLaptop.itemName}</p>
      <p>Price: ₦{selectedLaptop.price}</p>
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
   <button className='text-center border p-2 mt-2  rounded-2xl text-white font-bold bg-orange-500 sm:rounded-lg'>Add to Cart</button>
</div>
        </div>
        </div>
        </> 
  );
};

export default LaptopDetailsPage;