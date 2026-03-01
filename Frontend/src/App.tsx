import React, { useEffect } from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { themeState } from './store/atoms';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Achievements from './components/Achievements';
import DSAJourney from './components/DSAJourney';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

const AppContent: React.FC = () => {
  const theme = useRecoilValue(themeState);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-black text-text-primary' : 'bg-surface-light text-text-primary-light'
        }`}
    >
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Achievements />
        <DSAJourney />
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