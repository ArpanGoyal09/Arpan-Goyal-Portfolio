import carboncoin from '../assets/Carbon_Coin.png';
import duedash from '../assets/DueDash.png';
import codecampus from '../assets/CodeCampus.png';



const portfolioData = {
  name: 'Arpan Goyal',
  title: 'Full Stack Developer',
  roles: [
    'Full Stack Developer',
    'MERN Stack Enthusiast',
    'Problem Solver',
    'ML Explorer',
  ],
  subtitle: 'Building digital experiences with the MERN Stack',
  email: 'goyalarpan8444@gmail.com',
  github: 'https://github.com/ArpanGoyal09',
  linkedin: 'https://www.linkedin.com/in/arpan-goyal-394960352/',
  location: 'Jaipur, Rajasthan',
  university: 'J.K. Lakshmipat University',
  degree: 'B.Tech Computer Science & Engineering',
  year: '3rd Year (2023–2027)',
  bio: "I'm a curious full-stack developer who thrives at the intersection of clean code and creative problem-solving. Currently pursuing my B.Tech in CSE, I spend my time building MERN stack applications, exploring machine learning, and turning ideas into functional products. When I'm not coding, you'll find me digging into open-source projects or experimenting with new frameworks just to see what breaks.",

  skills: {
    frontend: [
      { name: 'React.js',         level: 85 },
      { name: 'HTML5 / CSS3',     level: 90 },
      { name: 'JavaScript ES6+',  level: 85 },
      { name: 'Tailwind CSS',     level: 75 },
    ],
    backend: [
      { name: 'Node.js',     level: 80 },
      { name: 'Express.js',  level: 80 },
      { name: 'MongoDB',     level: 75 },
      { name: 'REST APIs',   level: 80 },
    ],
    tools: [
      { name: 'Git & GitHub',      level: 85 },
      { name: 'Python',            level: 75 },
      { name: 'Machine Learning',  level: 60 },
      { name: 'VS Code',           level: 90 },
    ],
  },

  projects: [
    {
      id: 1,
      title: 'Carbon Coin',
      image: carboncoin,
      description: 'A decentralized platform for carbon credit trading using blockchain technology.',
      tech: ['React', 'Node.js', 'Solidity', 'Express'],
      github: 'https://github.com/ArpanGoyal09/Carbon-Coin',
      live: '#',
    },
    {
      id: 2,
      title: 'DueDash',
      image: duedash,
      description: 'A simple invoice management application built with MERN Stack.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/ArpanGoyal09/Invoice-Tracker',
      live: '#',
    },
    {
      id: 3,
      title: 'CodeCampus',
      image: codecampus,
      description: 'A platform for students to work on their coding skills while having fun using MERN.',
      tech: ['React', 'MongoDB', 'Node.js', 'Express', 'Judge0 API'],
      github: 'https://github.com/Aman018-gif/coding_platform_jklu',
      live: '#',
    },
  ],

  education: [
    {
      type: 'work',
      title: 'Internship',
      institution: 'Globe Asia Trasport Pvt. Ltd.',
      period: 'May 2025 – July 2025',
      description: 'Worked on developing a MERN stack application for centralised management of transportation logistics, improving efficiency by 30%.',
    },
    {
      type: 'education',
      title: 'B.Tech in Computer Science & Engineering',
      institution: 'J.K. Lakshmipat University, Jaipur',
      period: '2023 – 2027',
      description: 'Specializing in full-stack development and machine learning. Actively involved in technical clubs and hackathons.',
    },
    {
      type: 'education',
      title: 'Senior Secondary (XII)',
      institution: 'Neerja Modi School, Jaipur',
      period: '2021 – 2022',
      description: 'Science stream with Maths.',
    },
  ],

  experience: [],

  hobbies: {
    photography: [
      {
        id: 1,
        src: 'photos/photo1.jpeg',
        alt: 'Wings of the setting sun',
        caption: 'Flight of the Golden Hour',
      },
      {
        id: 2,
        src: 'photos/photo2.jpeg',
        alt: 'The Wandering Gleeman ',
        caption: 'Troubadour',
      },
      {
        id: 3,
        src: 'photos/photo3.jpeg',
        alt: 'Waves crashing on the shore',
        caption: 'Wave Whisperer',
      },
      {
        id: 4,
        src: 'photos/photo4.jpeg',
        alt: 'When the sun meets the sea',
        caption: 'Golden Serenity',
      },
      {
        id: 5,
        src: 'photos/photo5.jpeg',
        alt: 'Sunset over the horizon',
        caption: 'Windy Diaries',
      },
      {
        id: 6,
        src: 'photos/photo6.jpeg',
        alt: 'Hills in the morning mist',
        caption: 'Misty Peaks',
      },
      {
        id: 7,
        src: 'photos/photo7.jpeg',
        alt: 'Trees silhouetted against a cloudy sky',
        caption: 'Peace in the Mist',
      },
      {
        id: 8,
        src: 'photos/photo9.jpeg',
        alt: 'Forest Path',
        caption: 'Trailblazer',
      },
      {
        id: 9,
        src: 'photos/photo8.jpeg',
        alt: 'Clouds drifting across the sky',
        caption: 'Cloud Chaser',
      },
      {
        id: 10,
        src: 'photos/photo10.jpeg',
        alt: 'Ice paths in a winter landscape',
        caption: 'Icy Trails',
      },
      {
        id: 11,
        src: 'photos/photo11.jpeg',
        alt: 'Frozen river',
        caption: 'Freezing Flow',
      },
    ],
    music: [
      // Add your tracks here.
      // Link to SoundCloud, Spotify, or YouTube
      // Example entry:
      // { id: 1, title: 'Track Name', description: 'Short description', tags: ['Lo-fi', 'Chill'], link: 'https://soundcloud.com/...', platform: 'SoundCloud' },
    ],
  },

  certifications: [
    {
      title: 'Programming for Everybody by University of Michigan',
      platform: 'Coursera',
      link: '#',
      year: '2023',
    },
    {
      title: 'Programming in C',
      platform: 'Infosys Springboard',
      link: '#',
      year: '2024',
    },
    {
      title: 'Foundations: Data, Data, Everywhere by Google',
      platform: 'Coursera',
      link: '#',
      year: '2024',
    },
  ],
};

export default portfolioData;
