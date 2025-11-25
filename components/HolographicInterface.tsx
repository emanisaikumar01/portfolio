import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';

interface HolographicInterfaceProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

const codeLines = [
  "import { createInterface } from 'ai-core';",
  "const core = createInterface({",
  "  consciousness: 'emergent',",
  "  reality: 'simulated',",
  "});",
  "",
  "async function init() {",
  "  await core.loadCognitiveModels();",
  "  await core.runDiagnostics();",
  "  console.log('AI Core Online');",
  "}",
  "",
  "init();",
];

const HolographicInterface: React.FC<HolographicInterfaceProps> = ({ mouseX, mouseY }) => {
  const rotateX = useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 0], [15, -15]);
  const rotateY = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 0], [-15, 15]);

  return (
    <div className="absolute inset-0 flex items-center justify-center z-0 perspective-1000">
      <motion.div
        className="relative w-[600px] h-[400px] preserve-3d"
        style={{ rotateX, rotateY }}
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      >
        {/* Main Code Panel */}
        <motion.div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm border border-neon-cyan/50 rounded-lg shadow-glow-cyan overflow-hidden"
          style={{ transform: 'translateZ(50px)' }}
        >
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-neon-cyan/20 to-transparent" />
          <div className="p-6 font-mono text-xs md:text-sm text-neon-cyan/90">
            <motion.div
                animate={{ y: ['0%', '-50%'] }}
                transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
            >
                {codeLines.map((line, i) => (
                    <p key={i} className="whitespace-pre">{line}</p>
                ))}
                {codeLines.map((line, i) => (
                    <p key={`dup-${i}`} className="whitespace-pre">{line}</p>
                ))}
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-neon-cyan/20 to-transparent" />
          
          {/* Scanning Line */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-[2px] bg-neon-cyan shadow-[0_0_10px_#00ffff]"
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
          />
        </motion.div>

        {/* Floating Side Panels */}
        <motion.div
          className="absolute w-40 h-24 top-0 -left-48 bg-black/30 backdrop-blur-sm border border-neon-violet/50 rounded shadow-glow-violet"
          style={{ transform: 'rotateY(-45deg) translateZ(-100px)' }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
             <div className="w-full h-full p-2 flex items-center justify-center">
                <div className="w-full h-1 bg-neon-violet/30 rounded overflow-hidden">
                    <motion.div 
                        className="h-full bg-neon-violet"
                        animate={{ width: ['0%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
             </div>
        </motion.div>

        <motion.div
          className="absolute w-48 h-16 bottom-0 -right-56 bg-black/30 backdrop-blur-sm border border-neon-violet/50 rounded shadow-glow-violet"
          style={{ transform: 'rotateY(45deg) translateZ(-80px)' }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
             <div className="grid grid-cols-4 gap-1 p-2 h-full">
                {[...Array(8)].map((_,i) => (
                    <motion.div 
                        key={i}
                        className="bg-neon-violet/40 rounded-sm"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
                    />
                ))}
             </div>
        </motion.div>

        {/* Animated Background Grid Lines */}
        {[...Array(5)].map((_, i) => (
            <motion.div
                key={`line-h-${i}`}
                className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent"
                style={{ top: `${20 + i * 15}%`, transform: 'translateZ(-150px)' }}
                animate={{ opacity: [0, 0.8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            />
        ))}

        {[...Array(5)].map((_, i) => (
            <motion.div
                key={`line-v-${i}`}
                className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-neon-violet/30 to-transparent"
                style={{ left: `${20 + i * 15}%`, transform: 'translateZ(-200px)' }}
                animate={{ opacity: [0, 0.8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
            />
        ))}
      </motion.div>
    </div>
  );
};

export default HolographicInterface;