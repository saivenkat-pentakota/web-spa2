import './App.css';
import NavBar from '../src/components/NavBar';
import HomePage from './components/HomePage';
import AboutTravel from './components/AboutTravel';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePage/>
      <AboutTravel/>
    </div>
  );
}

export default App;
