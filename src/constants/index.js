import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  postgresql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  africanbank,
  altron,
  briefcase,
  capitec,
  takealot,
  csharp,
  dotnet,
  bootstrap
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Fullstack Software Engineer',
    icon: frontend,
  },
  {
    title: 'System Analyst',
    icon: backend,
  },
  {
    title: 'Business Analyst',
    icon: ux,
  },
  {
    title: 'Software Tester',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'csharp',
    icon: csharp,
  },
  {
    name: 'dotnet',
    icon: dotnet,
  },
];

const experiences = [
  {
    title: 'Software Developer',
    company_name: 'African Cellar Suppliers',
    icon: briefcase,
    iconBg: '#333333',
    date: 'Feb 2016 - Nov 2016',
  },
  {
    title: 'Business Systems Analyst',
    company_name: 'Altron Systems Integration',
    icon: altron,
    iconBg: '#333333',
    date: 'Feb 2017 - Jul 2018',
  },
  {
    title: 'Business & Systems Administrator',
    company_name: 'African Bank',
    icon: africanbank,
    iconBg: '#333333',
    date: 'Jul 2018 - Jun 2021',
  },
  {
    title: 'Business Analyst',
    company_name: 'Takealot Online',
    icon: takealot,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2023',
  },
  {
    title: 'System Analyst',
    company_name: 'Capitec Business',
    icon: capitec,
    iconBg: '#333333',
    date: 'Mar 2023 - present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Project1',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Project2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'project3',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'project4',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'project5',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
