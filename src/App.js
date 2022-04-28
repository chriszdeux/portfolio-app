import { Header } from './components/header';
import { Navbar } from './components/header/index';
import { Hero } from './components/hero';
import { Projects } from './components/projects';
import { Skills } from './components/Skils/Skills';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
