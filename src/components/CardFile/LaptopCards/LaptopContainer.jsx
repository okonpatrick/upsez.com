
// import React, { useState, useEffect } from 'react';
// import LaptopData from "../../JsonFiles/LaptopCard.json";
// import LaptopCard from './LaptopCard';
// import { useNavigate } from 'react-router-dom';

// export default function LaptopContainer() {

//     const [laptops, setLaptops] = useState([]);
//     //const [items, setItems] = useState([]);
//   const navigate = useNavigate(); // Get the navigate function from useNavigate()

// useEffect(() => {
//     // Fetch data from JSON file
//     setLaptops(LaptopData);
//   }, []); // Removed items from the dependency array since we only need to fetch data once

//   function routeToLaptopDetailComponent(id) {
//     // Assuming `category` is defined elsewhere in your component
//     const item = laptops.find(category => category.items.some(item => item.id === id));
//     if (item) {
//       navigate(`/${item.category.toLowerCase()}/LaptopDetail/${id}`); // Include brand name and item id in the URL
//     }
//   }

//   return (
//       <div className="flex lg:m-2 grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:m-20 sm:text-sm">
//       {laptops.map((category) => (
//         <div key={category.category}>
//           <h2>{category.category}</h2>
//           <div className="">
//           <a href={`/${category.brand}/LaptopDetail`} onClick={() => routeToLaptopDetailComponent(category.items.id)} id={category.items.id}>

//           {category.items.map((item) => (
//               <LaptopCard key={item.id} laptop={item} />
//             ))}
//          </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }




import React, { useState, useEffect } from 'react';
import LaptopData from "../../JsonFiles/LaptopCard.json";
import LaptopCard from './LaptopCard';
import { useNavigate } from 'react-router-dom';

export default function LaptopContainer() {
    const [laptops, setLaptops] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setLaptops(LaptopData);
    }, []);

    function routeToLaptopDetailComponent(brand, id) {
        navigate(`/${brand}/LaptopDetail`);
    }

    return (
        <div className="flex lg:m-2 grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:m-20 sm:text-sm">
            {laptops.map((category) => (
                <div key={category.category}>
                    <h2 className='text-center'>{category.category}</h2>
                    <div className="">
                        {category.items.map((item) => (
                            <a key={item.id} href={`/${item.brand}/LaptopDetail`} onClick={() => routeToLaptopDetailComponent(item.brand, item.id)} id={item.id}>
                                <LaptopCard laptop={item} />
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
