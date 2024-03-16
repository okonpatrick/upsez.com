import './App.css'
import Navbar from './components/LocalNavbar';
import SearchForm from './components/Forms/SearchBar';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar/>
      <SearchForm/>
      <AboutUs/>
      <Footer/>
    </>
  )
}
export default App;