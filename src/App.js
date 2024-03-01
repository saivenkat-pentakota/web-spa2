import './App.css';
import NavBar from '../src/components/NavBar';
import HomePage from './components/HomePage';
import AboutTravel from './components/AboutTravel';
import TravelPlaces from './components/TravelPlaces';
import ChooseUs from './components/ChooseUs';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePage/>
      <AboutTravel/>
      <TravelPlaces/>
      <ChooseUs/>
    </div>
  );
}

export default App;
