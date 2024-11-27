import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'Circuit Stream',
      companyUrl: '',
      role: 'Software Engineer',
      started: 'August 2024',
      upto: 'Present',
      tasks: [
        'Designed and developed 12+ interactive screens, ensuring a seamless user experience and responsive functionality.',
        'Integrated secure payment processing systems and financial APIs to enable smooth transactions.',
        'Implemented robust security protocols to safeguard sensitive user data and prevent fraudulent activities.',
        'Built 20+ features from scratch, facilitating advanced project management and data analytics for administrators.',
        'Developed the dashboard using React, Node.js, and Express, ensuring seamless integration with the mobile app backend.',
        'Collaborated with UX/UI designers to create intuitive interfaces and enhance usability.',
        'Leveraged React Native for cross-platform app development and React for the web-based admin dashboard.',
        'Streamlined development workflows and implemented best practices for maintainable and scalable codebases.',
      ]
      },
      {
        company: 'Knowledge Discovery and Data Science Lab',
        companyUrl: 'http://isb.nu.edu.pk/kdd/index.php',
        role: 'Generative AI + Full Stack Dev Intern',
        started: 'May 2024',
        upto: 'August 2024',
        tasks: [
          'Collaborated with cross-functional teams to gather requirements and translate them into functional web features.',
          'Integrated generative AI models, utilizing both local models (Llama 3.1) and APIs (Gemini Flash 1.5).',
          'Designed user interfaces for PlotPal and Mulazmat, improving usability scores by 20%.',
          'Developed and maintained frontend and backend systems using Flask, reducing API response time by 35%.',
          'Conducted rigorous testing and debugging to ensure web application functionality, reducing critical bugs by 90%.',
        ],
      },
      
    {
      company: 'FAST NUCES Islamabad',
      companyUrl: 'http://isb.nu.edu.pk/',
      role: 'Operating Systems Teaching Assistant',
      started: 'September 2024',
      upto: 'Present',
      tasks: [
        'Assisted instructors in creating quizzes, assignments, and evaluation criteria for the Operating Systems course.',
    'Checked quizzes and assignments for over 100 students, ensuring accurate grading and timely feedback.',
    'Conducted student demos to evaluate understanding of OS concepts, including process scheduling and synchronization.',
    'Provided guidance to students during lab sessions and office hours to clarify course material.',
      ],
    },
  ],
};
