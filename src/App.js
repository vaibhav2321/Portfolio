import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    // Fix for mobile viewport issues
    const handleResize = () => {
      // Force re-render on mobile devices
      if (window.innerWidth <= 768) {
        document.body.style.height = '100vh';
        document.body.style.minHeight = '100vh';
        // Force a reflow by accessing the property
        const height = document.body.offsetHeight;
        // Use the height to prevent unused expression warning
        if (height > 0) {
          // This ensures the reflow happens
          document.body.style.height = '100vh';
        }
      }
    };

    // Initial call
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
