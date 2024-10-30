import './App.css';
import { Banner } from './components/Banner';
import { NavegationContainer } from './components/Navbar';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      <NavegationContainer/>
      <Banner/>
      <Skills/>
    </div>
  );
}

export default App;
