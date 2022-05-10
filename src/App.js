import { useState } from 'react';
import { About } from './components/about';
import { WorkExperience } from './components/experience';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Navbar } from './components/header/index';
import { BottomFade } from './components/helpers/BottomFade';
import { LightBackground } from './components/helpers/LightBackground';
import { SideBars } from './components/helpers/SideBars';
import { Hero } from './components/hero';
import { Others } from './components/others';
import { Projects } from './components/projects';
import { Skills } from './components/Skils/Skills';
import { SourceOfTheTruth } from './context/context';
import logo from './logo.svg';
import { MainRouter } from './router/MainRouter';

function App() {
  const [sideBars, setSideBars] = useState({
    height: '10rem'
  })
  return (
    <SourceOfTheTruth.Provider value={{
      sideBars, setSideBars
    }}>
    <div className="App">
      {/* <MainRouter /> */}
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <Skills />
      <Projects /> 
      <Others />
      <SideBars />
      {/* <Footer />
      {/* <LightBackground /> */}
    </div>
    </SourceOfTheTruth.Provider>
  );
}

export default App;
