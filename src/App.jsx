// import './App.css'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/LocalNavbar';
// import SearchForm from './components/Forms/SearchBar';
// import AboutUs from './components/AboutUs';
// import Footer from './components/Footer';
// import MenuCardContainer from './components/CardFile/MenuCardContainer';
// import TopDealsContainer from './components/CardFile/TopDeals/TopDealsContainer';
// import PhonesTabletsWaitList from "./components/Waitlist/PhonesTabletsWaitList";
// import AudioAndMusic from "./components/Waitlist/AudioAndMusic";
// import EyeCareAndJewelry from "./components/Waitlist/EyeCareAndJewelry";
// import ComputerAccessories from "./components/Waitlist/ComputerAccessories";
// import PhoneAccessories from "./components/Waitlist/PhoneAccessories";
// import LaptopCard from './components/CardFile/LaptopCards/LaptopCard';
// import LaptopContainer from './components/CardFile/LaptopCards/LaptopContainer';
// import "./components/JsonFiles/LaptopCard.json";
// import LaptopDetails from "./components/CardFile/LaptopCards/LaptopDetails";

// function App() {
//   return (
//       <Router>
//         <Routes>
//           <Route path="/" element={<>
//             <Navbar />
//             <SearchForm />
//             <MenuCardContainer />
//             <TopDealsContainer />
//             <AboutUs />
//           <Footer />
//           </>}
//          /> 

//  <Route path="/waitfilter/laptops" element={<> <Navbar/> <SearchForm/><LaptopContainer /></>} />
//         <Route path="/waitfilter/phones&tablets" element={<PhonesTabletsWaitList />} />
//         <Route path="/waitfilter/audio&music" element={<AudioAndMusic />} />
//         <Route path="/waitfilter/eyecare&jewelry" element={<EyeCareAndJewelry />} />
//         <Route path="/waitfilter/computer-accessories" element={<ComputerAccessories />} />
//         <Route path="/waitfilter/phone-accessories" element={<PhoneAccessories />} />
//         <Route path="/:brand/LaptopDetail/:id" element={<LaptopDetails />} />
//         {/* <Route path="/:brand/:id" element={<LaptopDetails />} /> */}
//         </Routes>
//       </Router>
//   )
// }
// export default App;

// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/LocalNavbar';
import SearchForm from './components/Forms/SearchBar';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import MenuCardContainer from './components/CardFile/MenuCardContainer';
import TopDealsContainer from './components/CardFile/TopDeals/TopDealsContainer';
import PhonesTabletsWaitList from "./components/Waitlist/PhonesTabletsWaitList";
import AudioAndMusic from "./components/Waitlist/AudioAndMusic";
import EyeCareAndJewelry from "./components/Waitlist/EyeCareAndJewelry";
import ComputerAccessories from "./components/Waitlist/ComputerAccessories";
import PhoneAccessories from "./components/Waitlist/PhoneAccessories";
import LaptopCard from './components/CardFile/LaptopCards/LaptopCard';
import LaptopContainer from './components/CardFile/LaptopCards/LaptopContainer';
import LaptopDetails from "./components/CardFile/LaptopCards/LaptopDetails";
import LaptopDetailsPage from "./components/CardFile/LaptopCards/LaptopDetailsPage";
import { LaptopDetailsProvider } from './context/LaptopDetailsContext';
//import { useLaptopDetails } from './context/LaptopDetailsContext';

function App() {
  return (
    <Router>
      <LaptopDetailsProvider> {/* Wrap your App component with LaptopDetailsProvider */}
        <Routes>
          <Route path="/" element={<>
            <Navbar />
            <SearchForm />
            <MenuCardContainer />
            <TopDealsContainer />
            <AboutUs />
            <Footer />
          </>} />
          <Route path="/waitfilter/laptops" element={<><Navbar /><SearchForm /><LaptopContainer /></>} />
          <Route path="/waitfilter/phones&tablets" element={<PhonesTabletsWaitList />} />
          <Route path="/waitfilter/audio&music" element={<AudioAndMusic />} />
          <Route path="/waitfilter/eyecare&jewelry" element={<EyeCareAndJewelry />} />
          <Route path="/waitfilter/computer-accessories" element={<ComputerAccessories />} />
          <Route path="/waitfilter/phone-accessories" element={<PhoneAccessories />} />
          <Route path="/:brand/LaptopDetail/:id" element={<LaptopDetailsPage/>} /> {/* Changed to LaptopDetailsPage */}
        </Routes>
      </LaptopDetailsProvider>
    </Router>
  );
}

export default App;
