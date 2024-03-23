import React, { useState, useEffect } from 'react';
import menuData from '../JsonFiles/JsonCardData.json';
import MenuCard from "../MenuCard";

export default function MenuCardContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file
    setItems(menuData);
  }, [items]);

  return (
    // grid grid-cols-4 gap-0 m-20
    // grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 m-20
    <div className="lg:m-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-0 sm:m-20 sm:text-sm">
      {items.map((item, index) => (
        <MenuCard key={index} itemName={item.itemName} imageSrc={item.imageSrc} condition={item.condition}/>
      ))}
    </div>
  );
}
