import React from 'react';
import { INTERNSHIPS_DATA } from '../constants';
import { motion } from 'framer-motion';
import ContentShelf from './ContentShelf';
import TiltCard from './TiltCard';

const Internships: React.FC = () => {
  return (
    <ContentShelf id="internships" title="Internships">
      {INTERNSHIPS_DATA.map((internship, index) => (
        <motion.div
          key={internship.role}
          className="flex-shrink-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <TiltCard className="w-80 md:w-96" glowColor="rgba(138, 43, 226, 0.4)">
            <div 
              className="group relative bg-space-gray/60 backdrop-blur-md border border-gray-700/50 p-5 flex items-center space-x-4 h-full transition-all duration-300 hover:border-neon-violet/50 hover:shadow-glow-violet overflow-hidden shadow-tech-inner rounded-md"
              style={{ transform: "translateZ(20px)" }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-700 transition-all duration-300 group-hover:bg-neon-violet" />
              
               <div className="text-gray-400 group-hover:text-neon-violet transition-colors flex-shrink-0" style={{ transform: "translateZ(25px)" }}>
                  {React.cloneElement(internship.icon, { className: "h-10 w-10" })}
               </div>
              <div style={{ transform: "translateZ(20px)" }}>
                <h3 className="font-semibold text-white group-hover:text-neon-violet/90 transition-colors text-lg">{internship.role}</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-200 tracking-wide">{internship.company}</p>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      ))}
    </ContentShelf>
  );
};

export default Internships;