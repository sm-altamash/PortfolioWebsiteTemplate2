import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from './components/Layout';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import ThemeProvider from './context/ThemeContext';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize GSAP animations
    gsap.fromTo(
      '.fade-in',
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.fade-in',
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;