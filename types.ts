import type React from 'react';

export interface Skill {
  name: string;
  // FIX: Specified that the icon element accepts a className prop to resolve type errors with React.cloneElement.
  icon: React.ReactElement<{ className?: string }>;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  // FIX: Specified that the icon element accepts a className prop to resolve type errors with React.cloneElement.
  icon: React.ReactElement<{ className?: string }>;
}

export interface Internship {
  role: string;
  company: string;
  // FIX: Specified that the icon element accepts a className prop to resolve type errors with React.cloneElement.
  icon: React.ReactElement<{ className?: string }>;
}