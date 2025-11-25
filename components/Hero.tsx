import React from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import TypingEffect from './TypingEffect';
import HolographicInterface from './HolographicInterface';

const PlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.748 1.295 2.538 0 3.286L7.279 20.99c-1.25.72-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
  </svg>
);


const Hero: React.FC = () => {
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

  const handleMouseMove = ({ clientX, clientY }: React.MouseEvent) => {
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const handleMouseLeave = () => {
    if (typeof window !== 'undefined') {
      animate(mouseX, window.innerWidth / 2, { duration: 0.5, ease: 'easeOut' });
      animate(mouseY, window.innerHeight / 2, { duration: 0.5, ease: 'easeOut' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-space-black overflow-hidden bg-grid"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <HolographicInterface mouseX={mouseX} mouseY={mouseY} />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-space-black z-10" />
      
      <div className="container mx-auto px-6 text-center z-20">
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -30 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8 }}
          className="perspective-1000"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display mb-4 text-white tracking-wider text-glow">
            EBK Sai Kumar
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-300 mb-8 uppercase tracking-widest">
            
          </h2>
          <TypingEffect
            texts={["Full Stack Developer | AI Enthusiast"]}
            className="text-lg md:text-xl text-white h-8 md:h-10 block font-mono font-bold tracking-wide drop-shadow-md"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12"
        >
          <a
            href="#projects"
            onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 px-8 py-3 bg-neon-cyan/10 border border-neon-cyan text-neon-cyan rounded-sm font-bold text-lg hover:bg-neon-cyan hover:text-black transition-all duration-300 shadow-glow-cyan"
          >
            <PlayIcon className="w-6 h-6" />
            <span>Explore My Work</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;