//import logo from './logo.svg';
import './App.css';
import './components/hola';
//import Hola from './components/hola';
import PointPark from './components/hola';
import Welcome from './components/welcome';
import Azeez from './components/azeez';




function App() {
  return (
    <div className="App">
      <PointPark/>
      <Welcome/>
      <Azeez name = "Omar" superhero="Programming"/>
    </div>
  );
}

export default App;
