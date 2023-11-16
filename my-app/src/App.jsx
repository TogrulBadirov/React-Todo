import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ImgSlider from './components/ImgSlider';
import ToggleNav from './components/ToggleNav';
import Modall from './components/Modal';
import Todo from './components/Todo';
import Weather from './components/Weather';
import Loading from './components/Loading';

function App() {
  return (
    <>
    {/* <Header/> */}
    {/* <ImgSlider/> */}
    {/* <ToggleNav/> */}
    {/* <Modall/> */}
    {/* <Todo/> */}

    <Navbar/>
    
    {/* <Weather/> */}

    <Loading/>
    </>
  );
}

export default App;
