import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'CampusForge',
      url: '',
      repo: 'https://github.com/SMuhammadMustafa/CampusForge-Society-Management-System',
      img: 'https://i.imgur.com/tav8UZi.png',
      year: 2023,
      tags: ['C#', 'Visual Studio', 'MS SQL Server'],
    },
    {
      id: getId(),
      name: 'Portfolio Website v1',
      url: 'https://mk61395.github.io/portfolio-website/',
      repo: 'https://github.com/MK61395/portfolio-website',
      img: 'https://i.imgur.com/UB5pIQF.png',
      year: 2023,
      tags: ['HTML', 'TailwindCSS'],
    },
    {
      id: getId(),
      name: 'Portfolio Website v0',
      url: 'https://mordred613.vercel.app/',
      repo: 'https://github.com/MK61395/My-Portfolio',
      img: 'https://i.imgur.com/LJoIMfN.png',
      year: 2022,
      tags: ['HTML', 'CSS'],
    },
    {
      id: getId(),
      name: 'ResuMake',
      url: '',
      repo: '',
      img: 'https://i.imgur.com/ZJzfgNE.jpg',
      year: 2025,
      tags: ['React', 'Django', 'Docker', 'LangChain'],
    },
    {
      id: getId(),
      name: 'Digital Wallet',
      url: 'https://digital-wallet-bootstrap.vercel.app/',
      repo: 'https://github.com/MK61395/Digital-Wallet-Bootstrap',
      img: 'https://i.imgur.com/6k4ddjR.png',
      year: 2023,
      tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
      id: getId(),
      name: 'Sudoko Solver',
      url: '',
      repo: 'https://github.com/MK61395/Sudoku-and-Magic-Square',
      img: 'https://i.imgur.com/IVceBvH.jpg',
      year: 2024,
      tags: ['Python', 'Jupyter Notebook'],
    },
    {
      id: getId(),
      name: 'PetPal',
      url: '',
      repo: 'https://github.com/MK61395/SDA-Project---PET-PAL',
      img: 'https://i.imgur.com/v4DdcKl.jpg',
      year: 2022,
      tags: ['Java', 'JavaFX', 'MySQL'],
    },
   
   
  ],
};
