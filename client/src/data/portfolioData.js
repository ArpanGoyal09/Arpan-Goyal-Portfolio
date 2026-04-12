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
      description: 'A decentralized platform for carbon credit trading using blockchain technology.',
      tech: ['React', 'Node.js', 'Solidity', 'Express'],
      github: 'https://github.com/ArpanGoyal09/Carbon-Coin',
      live: '#',
    },
    {
      id: 2,
      title: 'Invoice Tracker',
      description: 'A simple invoice management application built with MERN Stack.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/ArpanGoyal09/Invoice-Tracker',
      live: '#',
    },
    {
      id: 3,
      title: 'CodeCampus',
      description: 'A platform for students to work on their coding skills while having fun using MERN.',
      tech: ['React', 'MongoDB', 'Node.js', 'Express', 'Judge0 API'],
      github: 'https://github.com/Aman018-gif/coding_platform_jklu',
      live: '#',
    },
  ],

  education: [
    {
      type: 'education',
      title: 'B.Tech in Computer Science & Engineering',
      institution: 'J.K. Lakshmipat University, Jaipur',
      period: '2023 – 2027',
      description: 'Specializing in full-stack development and machine learning. Actively involved in technical clubs and hackathons.',
    },
    {
      type: 'work',
      title: 'Internship',
      institution: 'Globe Asia Trasport Pvt. Ltd.',
      period: 'May 2025 – July 2025',
      description: 'Worked on developing a MERN stack application for centralised management of transportation logistics, improving efficiency by 30%.',
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

  certifications: [
    {
      title: 'C Programming Course',
      platform: 'Infosys Springboard',
      link: '#',
      year: '2023',
    },
    {
      title: 'Programming for Everybody by University of Michigan',
      platform: 'Coursera',
      link: '#',
      year: '2023',
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
