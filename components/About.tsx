import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        <motion.div 
          className="md:w-1/3 animate-float relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          {/* Tech Frame for Image */}
          <div className="relative p-2 bg-space-gray/30 backdrop-blur-sm border border-neon-cyan/30 rounded-lg shadow-glow-cyan/20">
             {/* Corner Markers */}
             <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-neon-cyan"></div>
             <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-neon-cyan"></div>
             <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-neon-cyan"></div>
             <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-neon-cyan"></div>
             
             <img 
              src="https://i.postimg.cc/VNhdNQ0G/IMG-20240923-205933.jpg"
              alt="EBK Sai Kumar" 
              className="rounded-sm aspect-[4/5] object-cover w-full opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
            {/* Scanline overlay on image */}
            <div className="absolute inset-2 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-20"></div>
          </div>
        </motion.div>
        <motion.div 
          className="md:w-2/3 text-lg text-gray-400 space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
           <SectionTitle className="font-display text-4xl md:text-5xl text-white mb-6 tracking-wide text-neon-cyan text-glow">
            About Me
          </SectionTitle>
          <div className="bg-space-gray/20 backdrop-blur-sm p-6 border-l-2 border-neon-cyan/50 rounded-r-lg">
            <p className="mb-4 leading-relaxed">
                I am a passionate and driven <span className="text-neon-cyan/80 font-semibold">Full Stack Web Developer</span> and <span className="text-neon-violet/80 font-semibold">AI Enthusiast</span>, currently pursuing my B.Tech in Computer Science and Engineering at ICFAI University, Hyderabad. My journey in technology is fueled by a desire to build intelligent and efficient solutions that solve real-world problems.
            </p>
            <p className="mb-4 leading-relaxed">
                My goal is to merge the worlds of web development and artificial intelligence to create seamless, intuitive, and powerful user experiences. I am constantly exploring new technologies and honing my skills to stay at the forefront of innovation.
            </p>
            <p className="leading-relaxed">
                With a strong foundation in both front-end and back-end technologies, I am eager to contribute to challenging projects and collaborate with like-minded professionals to build the future of the web.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;