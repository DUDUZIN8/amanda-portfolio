import './App.css';
import { Banner } from './components/Banner';
import { Channel } from './components/Channel';
import { NavegationContainer } from './components/Navbar';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      <NavegationContainer/>
      <Banner/>
      <Skills/>
      <Channel/>
    </div>
  );
}

export default App;
