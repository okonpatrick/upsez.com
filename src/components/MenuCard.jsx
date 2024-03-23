import React from 'react'
import "./JsonFiles/JsonCardData.json";

export default function MenuCard({ itemName, imageSrc}) {
  return (
    <div className='border p-3 text-black border-white text-lg'>
      <img src={imageSrc} alt={itemName} width={400} />
      <p className='text-black font-bold text-center'>{itemName}</p>
    </div>
  );
}