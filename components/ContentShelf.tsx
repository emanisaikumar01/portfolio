import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

interface ContentShelfProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const ContentShelf: React.FC<ContentShelfProps> = ({ id, title, children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id={id} className="container mx-auto px-6">
      <SectionTitle className="font-display text-3xl md:text-4xl text-neon-cyan text-glow mb-8 tracking-wide">
        {title}
      </SectionTitle>
      <motion.div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto pb-6 no-scrollbar cursor-grab active:cursor-grabbing"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default ContentShelf;