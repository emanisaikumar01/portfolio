import React from 'react';
import { SKILLS_DATA } from '../constants';
import { motion } from 'framer-motion';
import ContentShelf from './ContentShelf';
import TiltCard from './TiltCard';

const Skills: React.FC = () => {
  return (
    <ContentShelf id="skills" title="My Arsenal">
      {SKILLS_DATA.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="flex-shrink-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
        >
          <TiltCard className="w-44 h-44" glowColor="rgba(0, 255, 255, 0.3)">
            <div
              className="group relative w-full h-full bg-space-gray/60 backdrop-blur-md border border-gray-700/50 flex flex-col items-center justify-center text-center transition-all duration-500 hover:border-neon-cyan/50 shadow-tech-inner rounded-md"
              style={{ transform: "translateZ(20px)" }}
            >
               {/* Small Corner Accents */}
               <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-gray-500 group-hover:border-neon-cyan transition-colors" style={{ transform: "translateZ(10px)" }}></div>
               <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-gray-500 group-hover:border-neon-cyan transition-colors" style={{ transform: "translateZ(10px)" }}></div>

              <div className="text-gray-400 transition-all duration-300 group-hover:scale-110 group-hover:text-neon-cyan relative z-10" style={{ transform: "translateZ(30px)" }}>
                {React.cloneElement(skill.icon, { className: "h-12 w-12" })}
              </div>
              <p className="mt-4 text-md font-semibold text-gray-300 transition-colors duration-300 group-hover:text-white tracking-wide" style={{ transform: "translateZ(20px)" }}>
                {skill.name}
              </p>
            </div>
          </TiltCard>
        </motion.div>
      ))}
    </ContentShelf>
  );
};

export default Skills;