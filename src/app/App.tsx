import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Schedule } from './components/Schedule';
import { Registration } from './components/Registration';
import { Footer } from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-[#2E1E4D]' : 'bg-[#F1E7B5]'}`}>
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        scrollToSection={scrollToSection}
      />

      <Hero
        isDarkMode={isDarkMode}
        scrollToSection={scrollToSection}
      />

      <About isDarkMode={isDarkMode} />

      <Features isDarkMode={isDarkMode} />

      <Schedule isDarkMode={isDarkMode} />

      <Registration isDarkMode={isDarkMode} />

      <Footer
        isDarkMode={isDarkMode}
        scrollToSection={scrollToSection}
      />
    </div>
  );
}