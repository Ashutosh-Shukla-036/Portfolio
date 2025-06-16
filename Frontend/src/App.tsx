import React, { useEffect } from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { themeState } from './store/atoms';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import DSAJourney from './components/DSAJourney';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Achievements from './components/Achievements';

const AppContent: React.FC = () => {
  const theme = useRecoilValue(themeState);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'dark' : ''
    }`}>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <DSAJourney />
        <TechStack />
        <Achievements />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
};

function App() {
  return (
    <RecoilRoot>
      <AppContent />
    </RecoilRoot>
  );
}

export default App;