import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Muhammad Kashif.',
  tagline: 'I bring ideas to life with code and design.',
  description:
    "I'm a passionate Software Developer with expertise in Full-Stack development and creating cross-platform mobile applications. I have hands-on experience building scalable solutions using React, React Native, Node.js, and Next.js, while integrating modern tools like TypeScript and TailwindCSS.",
  specialText: 'Open to freelance and collaborative opportunities',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

