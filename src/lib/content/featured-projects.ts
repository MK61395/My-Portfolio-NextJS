import { FeaturedProjectsSectionType } from '@/lib/types/sections';
//import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: '1',
      name: 'Ritter Dahait Admin Dashboard',
      description: 'The admin dashboard for the Ritter Dahait Investment app.',
      tasks: "Designed and developed the admin interface for an investment app to allow admins various tasks such as Managing user accounts, monitoring transactions, and overseeing investment portfolios in real time. Integrated role-based access control to ensure data integrity and confidentiality",
      url: 'https://github.com/MK61395/Admin-Dashboard-Mobile-Wallet-Application',
      img: 'https://i.imgur.com/8CdLTv7.png',
      video: 'https://i.imgur.com/8CdLTv7.mp4', // Add video URL here
      tags: [
        'React',
        'JavaScript',
        'NodeJS',
        'CSS',
        'PostgreSQL',
        'AWS',
        'Express',
      ],
    },
    {
      id: '2',
      name: 'Ritter Dahait Mobile App',
      description:
        'A comprehensive mobile app designed to facilitate investment tracking, user engagement, and seamless financial management for Ritter Dahait users.',
      tasks:
        'Developed the mobile app using React Native and Expo for cross-platform compatibility. Implemented user-friendly UI components, integrated backend APIs for real-time data fetching, and designed secure authentication and transaction management features. Collaborated with the client to gather requirements and ensured smooth functionality by conducting extensive testing.',
      url: 'https://github.com/fareeahhh/MobileWalletApp-Interface-Frontend',
      img: 'https://i.imgur.com/I375sk5.png',
      video: 'https://i.imgur.com/avYJDtJ.mp4',
      tags: ['React Native', 'Node JS', 'Expo', 'APIs', 'PostgreSQL'],
    },    
    {
      id: '3',
      name: 'PlotPal',
      description: 'An AI-Powered Visualisation Chatbot.',
      tasks:
        'Designed a responsive UI/UX for the chatbot, implemented 8 new features, and integrated front-end components with Flask for seamless functionality. Enhanced user experience by developing a chat interface capable of generating visualizations like bar graphs and data frames using Gemini and Llama APIs.',
      url: 'https://mordred613.pythonanywhere.com/login',
      img: 'https://i.imgur.com/3m56VAv.png',
      video: 'https://i.imgur.com/F0Yl4kA.mp4',
      tags: ['Flask', 'HTML', 'CSS', 'Gemini', 'Llama', 'SQLAlchemy'],
    },
    {
      id: '4',
      name: 'SchedEase',
      description: 'Timetable Scheduler for FAST University.',
      tasks:
        'Developed an advanced timetable scheduler for FAST University using a genetic algorithm in Python. Successfully reduced scheduling conflicts by 95% for over 100 classes across multiple departments and sections. Implemented binary chromosome encoding and an optimized fitness function to generate conflict-free weekly timetables while adhering to hard and soft constraints.',
      url: 'https://github.com/MK61395/Time-Table-Scheduler-Genetic-Algorithm',
      img: 'https://i.imgur.com/0m4W8sj.png',
      video: 'https://i.imgur.com/MeUaiBf.mp4',
      tags: ['Python', 'Jupyter Notebook', 'Genetic Algorithm', 'HTML'],
    },
  ],
};

export default featuredProjectsSection;
