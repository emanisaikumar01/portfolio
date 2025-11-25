import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Internships from './components/Internships';
import Contact from './components/Contact';
import AnimatedParticles from './components/AnimatedParticles';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  return (
    <div className="bg-space-black text-gray-300 min-h-screen font-sans overflow-x-hidden relative">
      <AnimatedParticles />
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <div className="space-y-16 md:space-y-24 py-16 md:py-24">
            <About />
            <Projects />
            <Skills />
            <Internships />
            <Certifications />
          </div>
          <Contact />
        </main>

        <motion.footer 
          className="text-center py-8 text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <p>&copy; {new Date().getFullYear()} EBK Sai Kumar. All rights reserved.</p>
        </motion.footer>
      </div>
    </div>
  );
};

export default App;