import React from 'react';
import { motion, Variants } from 'framer-motion';

interface SectionTitleProps {
  children: string;
  className: string;
}

const sentenceVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.05,
    },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
    }
  },
};

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className }) => {
  return (
    <motion.h2
      className={className}
      variants={sentenceVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      aria-label={children}
    >
      {children.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={letterVariants}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default SectionTitle;