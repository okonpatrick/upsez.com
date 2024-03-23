import './App.css'
import Navbar from './components/LocalNavbar';
import SearchForm from './components/Forms/SearchBar';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import MenuCardContainer from './components/CardFile/MenuCardContainer';
import TopDealsContainer from './components/CardFile/TopDeals/TopDealsContainer';

function App() {

  return (
    <>
      <Navbar/>
      <SearchForm/>
      <MenuCardContainer/>
      <TopDealsContainer/>
      <AboutUs/>
      <Footer/>
    </>
  )
}
export default App;