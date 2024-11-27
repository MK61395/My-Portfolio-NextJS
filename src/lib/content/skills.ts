import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building full-stack web applications using Next.js with JavaScript/TypeScript, TailwindCSS and ShadCN',
        'Creating RESTful APIs using Express for backend development',
        'Developing scalable server-side applications and microservices using Node.js, ensuring efficient performance and maintainability.',
        'Building robust backend systems using Python frameworks like Django and Flask, optimizing API response times and ensuring secure data handling.',
      ],
      softwareSkills: [
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'typeScript', icon: 'vscode-icons:file-type-typescript-official' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'mongoDB', icon: 'logos:mongodb-icon' },  // React Native (using React logo as alternative)
        { name: 'django', icon: 'logos:django-icon' },  // Django (alternate icon)
        { name: 'AWS', icon: 'logos:aws' }, // AWS (updated AWS icon)
        { name: 'docker', icon: 'logos:docker-icon' }, // Docker for containerization
        { name: 'postgresql', icon: 'logos:postgresql' }, // PostgreSQL for database
      ],
      
    },
    {
      id: getId(),
      title: 'UI/UX designing',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Experience in designing user-friendly interfaces with figma',
        'Experience in developing design systems and style guides',
        'Providing user-friendly design solutions',
      ],
      softwareSkills: [
        { name: 'figma', icon: 'logos:figma' },
        { name: 'adobe illustrator', icon: 'logos:adobe-illustrator' },
        { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
      ],
    },
  ],
};
