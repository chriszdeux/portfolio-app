import { About } from './components/about';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Navbar } from './components/header/index';
import { BottomFade } from './components/helpers/BottomFade';
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
      <About />
      <Footer />
    </div>
  );
}

export default App;
