import React from 'react';
import type { Skill, Project, Certification, Internship } from './types';

// SVG Icons (Heroicons, etc.) for better aesthetics
const CodeBracketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
  </svg>
);

const CommandLineIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

const CpuChipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m1.5-4.5V21m6-18v1.5m0 15V21m6-18v1.5m0 15V21M9 6.75h6M9 17.25h6m-6-4.5h6m-6-3.75h6m-6 3.75H9m6 0h1.5m-1.5-3.75H9m6 0h1.5m-1.5 3.75h.75m.75 0h.75m.75 0h.75m-3 0h.75m.75 0h.75m.75 0h.75M9 6.75H8.25m-.75 0H6.75m-.75 0H5.25m-.75 0H3.75m0 0v1.5m0 3V9m0 3v1.5m0 3V15m0 3v1.5m1.5-16.5v1.5m13.5 0v1.5m0 13.5v1.5m-1.5-1.5H18m-1.5 0h-1.5m-1.5 0h-1.5m-1.5 0h-1.5m-1.5 0H9m-1.5 0H6.75m-.75 0H5.25m-.75 0H3.75m15 0h1.5m-1.5-1.5V6m0 1.5V9m0 3v1.5m0 3V15m0 3v1.5M15 3.75v1.5m-6 15v1.5" />
  </svg>
);

const AcademicCapIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-3.21-2.28m3.21 2.28l3.21 2.28m15.482-4.56l-3.21 2.28m3.21-2.28l-3.21-2.28m-9.06 8.16l-3.21-2.28m3.21 2.28l3.21 2.28m0 0l-3.21 2.28m3.21-2.28l3.21-2.28" />
    </svg>
);

const BriefcaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.098a2.25 2.25 0 01-2.25 2.25h-12a2.25 2.25 0 01-2.25-2.25v-4.098m16.5 0a2.25 2.25 0 00-2.25-2.25h-12a2.25 2.25 0 00-2.25 2.25m16.5 0v-4.098a2.25 2.25 0 00-2.25-2.25h-12a2.25 2.25 0 00-2.25-2.25v4.098" />
    </svg>
);

export const SKILLS_DATA: Skill[] = [
  { name: 'HTML', icon: <CodeBracketIcon className="h-8 w-8 text-white" /> },
  { name: 'CSS', icon: <CodeBracketIcon className="h-8 w-8 text-white" /> },
  { name: 'JavaScript', icon: <CodeBracketIcon className="h-8 w-8 text-white" /> },
  { name: 'React', icon: <CodeBracketIcon className="h-8 w-8 text-white" /> },
  { name: 'Tailwind CSS', icon: <CodeBracketIcon className="h-8 w-8 text-white" /> },
  { name: 'Python', icon: <CommandLineIcon className="h-8 w-8 text-white" /> },
  { name: 'MySQL', icon: <CommandLineIcon className="h-8 w-8 text-white" /> },
  { name: 'Problem Solving', icon: <CpuChipIcon className="h-8 w-8 text-white" /> },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'AI Resume Analyzer',
    description: 'A full-stack web application that analyzes resumes using Google Gemini AI to extract skills, weaknesses, ATS score, and job role suggestions. Built with React (frontend), Node.js & Express (backend), Render, and Vercel, it provides smart insights based on PDF parsing and AI-powered evaluation.',
    tags: ['React', 'Node.js', 'Express', 'Gemini AI', 'Render', 'Vercel'],
    link: 'https://ai-resume-analyzer-1cnm5hcn1-sai-kumar-s-projects.vercel.app/'
  },
];

export const INTERNSHIPS_DATA: Internship[] = [
    { role: 'Web Developer', company: 'Rinex.AI', icon: <BriefcaseIcon className="h-10 w-10 text-white" /> },
    { role: 'Ethical Hacking', company: 'Rinex.AI', icon: <BriefcaseIcon className="h-10 w-10 text-white" /> }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  { title: 'Python Fundamentals', issuer: 'Kaggle', icon: <AcademicCapIcon className="h-10 w-10 text-white" /> },
  { title: 'Java Fundamentals', issuer: 'Infosys', icon: <AcademicCapIcon className="h-10 w-10 text-white" /> },
  { title: 'Exploratory Data Analytics', issuer: 'NASSCOM', icon: <AcademicCapIcon className="h-10 w-10 text-white" /> },
  { title: 'AWS Cloud Practitioner Essentials', issuer: 'AWS', icon: <AcademicCapIcon className="h-10 w-10 text-white" /> },
  { title: 'AI in Cloud', issuer: 'Microsoft Azure', icon: <AcademicCapIcon className="h-10 w-10 text-white" /> },
  { title: 'Practical Cyber Security for Cyber Security Practitioners', issuer: 'NPTEL', icon: <AcademicCapIcon className="h-10 w-10 text-white" /> },
];

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/emani-sai-kumar',
  github: 'https://github.com/emanisaikumar01',
};

export const CONTACT_INFO = {
    phone: '+91 9515654301',
    email: 'emanisaikumar01@gmail.com',
};

export const RESUME_URL = '/resume.html';