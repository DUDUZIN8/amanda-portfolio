import './App.css';
import { Banner } from './components/Banner';
import { NavegationContainer } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavegationContainer/>
      <Banner/>
    </div>
  );
}

export default App;
