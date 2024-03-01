import './App.css';
import NavBar from '../src/components/NavBar';
import HomePage from './components/HomePage';
import AboutTravel from './components/AboutTravel';
import TravelPlaces from './components/TravelPlaces';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePage/>
      <AboutTravel/>
      <TravelPlaces/>
    </div>
  );
}

export default App;
