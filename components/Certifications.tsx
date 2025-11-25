import React from 'react';
import { CERTIFICATIONS_DATA } from '../constants';
import { motion } from 'framer-motion';
import ContentShelf from './ContentShelf';
import TiltCard from './TiltCard';

const Certifications: React.FC = () => {
  return (
    <ContentShelf id="certifications" title="Certifications">
      {CERTIFICATIONS_DATA.map((cert, index) => (
        <motion.div
          key={cert.title}
          className="flex-shrink-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <TiltCard className="w-80 md:w-96" glowColor="rgba(138, 43, 226, 0.4)">
            <div 
              className="group relative bg-space-gray/60 backdrop-blur-md border border-gray-700/50 p-5 flex items-start space-x-4 h-full transition-all duration-300 hover:border-neon-violet/50 hover:shadow-glow-violet overflow-hidden shadow-tech-inner rounded-md"
              style={{ transform: "translateZ(20px)" }}
            >
               {/* Side Accent */}
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-700 transition-all duration-300 group-hover:bg-neon-violet" />
               
              <div className="text-gray-400 group-hover:text-neon-violet transition-colors mt-1 flex-shrink-0" style={{ transform: "translateZ(25px)" }}>
                  {React.cloneElement(cert.icon, { className: "h-10 w-10" })}
              </div>
              <div style={{ transform: "translateZ(20px)" }}>
                <h3 className="font-semibold text-white group-hover:text-neon-violet/90 transition-colors leading-tight mb-1">{cert.title}</h3>
                <p className="text-xs uppercase tracking-wider text-gray-500 group-hover:text-gray-300">{cert.issuer}</p>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      ))}
    </ContentShelf>
  );
};

export default Certifications;