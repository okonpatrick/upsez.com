

// export default function LaptopCard({laptop}) {
//   return (
//     <>
{/* <div key={laptop.id} className='border p-3 text-black border-white text-lg'>
    <img src={laptop.imageSrc} alt={laptop.itemName} width={400} />
    <p className='text-black font-bold text-center'>{laptop.itemName}</p>
  </div> */}


  {/* <div className='border p-3 text-black border-white text-lg'>
      <img src={laptop.imageSrc} alt={laptop.itemName} width={400} />
      <p className='text-black font-bold text-center'>{laptop.itemName}</p>
    </div>
    </>
    
  )
} */}

// LaptopCard.jsx
import React, { useState } from 'react';
import "../../JsonFiles/LaptopCard.json";

export default function LaptopCard({ laptop }) {
    const [isCart, setCart] = useState();
  return (
    <div className="border p-3 text-black border-gray-300 rounded-lg m-2 text-lg">
      <img src={laptop.imageSrc} alt={laptop.itemName} />
      <h3 className='text-black font-bold text-center p-2 text-lg'>{laptop.itemName}</h3>
      <div className=' lg:mr-10 md:flex text-black font-bold'>Price: ${laptop.price} <p className='lg:pl-40 font-bold text-orange-500'> {laptop.condition}</p>
</div>
      <p>Brand: {laptop.brand}</p>
      <p>Description: {laptop.description}</p>
      <p>Location: {laptop.location}</p>

      <div className='border p-2 mt-2 lg:mr-60 rounded-2xl text-white text-center font-bold bg-orange-500 sm:rounded-lg'><a href={isCart}>Add to Cart</a></div>
      {/* Add more details as needed */}
    </div>
  );
}

