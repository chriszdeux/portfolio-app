import { About } from './components/about';
import { WorkExperience } from './components/experience';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Navbar } from './components/header/index';
import { BottomFade } from './components/helpers/BottomFade';
import { LightBackground } from './components/helpers/LightBackground';
import { SideNeon } from './components/helpers/SideNeon';
import { Hero } from './components/hero';
import { Projects } from './components/projects';
import { Skills } from './components/Skils/Skills';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <Skills />
      <Projects />
      <Footer />
      <SideNeon />
      {/* <LightBackground /> */}
    </div>
  );
}

export default App;
