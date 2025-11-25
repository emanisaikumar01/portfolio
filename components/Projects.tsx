import React from 'react';
import { PROJECTS_DATA } from '../constants';
import { motion } from 'framer-motion';
import ContentShelf from './ContentShelf';
import TiltCard from './TiltCard';

const ExternalLinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

const FolderIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
    </svg>
);

const Projects: React.FC = () => {
  return (
    <ContentShelf id="projects" title="Featured Projects">
      {PROJECTS_DATA.map((project, index) => {
        const CardTag = project.link ? 'a' : 'div';
        const cardProps = project.link ? {
            href: project.link,
            target: "_blank",
            rel: "noopener noreferrer"
        } : {};

        return (
            <motion.div
                key={project.title}
                className="flex-shrink-0"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
            >
            <TiltCard className="w-[22rem] md:w-[34rem] h-[32rem]" glowColor="rgba(0, 255, 255, 0.4)">
                <CardTag 
                {...cardProps}
                className="relative block w-full h-full bg-space-black/90 backdrop-blur-xl border border-gray-800 flex flex-col transition-all duration-500 hover:border-neon-cyan/70 hover:shadow-[0_0_40px_rgba(0,255,255,0.15)] shadow-2xl overflow-hidden rounded-xl group text-left"
                style={{ transform: "translateZ(20px)" }}
                >
                    {/* Header Bar */}
                    <div className="h-10 bg-gray-900/90 border-b border-gray-800 flex items-center px-4 justify-between" style={{ transform: "translateZ(30px)" }}>
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-sm"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-sm"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-sm"></div>
                        </div>
                        <div className="text-[10px] font-mono text-neon-cyan/40 tracking-widest group-hover:text-neon-cyan/80 transition-colors">SYS.PROJ.0{index + 1}</div>
                    </div>

                    <div className="p-6 md:p-8 flex flex-col h-full relative z-10">
                        {/* Title Section */}
                        <div className="flex items-start justify-between mb-6" style={{ transform: "translateZ(40px)" }}>
                             <div className="flex items-start gap-4">
                                <div className="p-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 group-hover:border-neon-cyan/50 text-gray-400 group-hover:text-neon-cyan transition-all duration-300 shadow-inner">
                                    <FolderIcon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-wide group-hover:text-neon-cyan transition-colors drop-shadow-md leading-tight">
                                        {project.title}
                                    </h3>
                                    <span className="inline-flex items-center gap-2 text-xs font-mono text-gray-500 mt-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                        <span className="text-green-400/80">SYSTEM ACTIVE</span>
                                    </span>
                                </div>
                             </div>
                             {project.link && (
                                <div className="p-2 rounded-full bg-white/5 border border-white/5 group-hover:bg-neon-cyan group-hover:border-neon-cyan group-hover:text-black transition-all duration-300 transform group-hover:rotate-45">
                                     <ExternalLinkIcon className="w-5 h-5" />
                                </div>
                            )}
                        </div>
                        
                        {/* Description Box */}
                        <div 
                            className="flex-grow relative mb-6 rounded-lg bg-gray-900/30 border border-gray-800/50 group-hover:border-gray-700 transition-colors p-3" 
                            style={{ transform: "translateZ(35px)" }}
                        >
                             <div className="h-full overflow-y-auto neon-scrollbar pr-2 text-gray-300 font-sans font-light leading-relaxed text-sm">
                                {project.description}
                             </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="mt-auto" style={{ transform: "translateZ(30px)" }}>
                             <div className="flex items-center gap-2 mb-3 opacity-60">
                                 <div className="h-[1px] w-4 bg-neon-cyan"></div>
                                 <div className="text-[10px] font-mono text-neon-cyan uppercase tracking-widest">Tech Stack</div>
                             </div>
                            <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                key={tag}
                                className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 text-gray-400 text-xs rounded-md font-mono tracking-tight hover:bg-neon-cyan/10 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all duration-300"
                                >
                                {tag}
                                </span>
                            ))}
                            </div>
                        </div>
                    </div>

                    {/* Decorative Background Elements */}
                    <div className="absolute top-1/2 right-0 w-64 h-64 bg-neon-cyan/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-50" />
                </CardTag>
            </TiltCard>
            </motion.div>
        );
      })}
    </ContentShelf>
  );
};

export default Projects;