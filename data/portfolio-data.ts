import { fetchMediumPosts } from './medium';

export interface Experience {
  id: string;
  companyName: string;
  companyImage: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  cover: string;
  link: string;
  githubLink?: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  timeline: string
}

export interface Article {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  author: string;
  thumbnail: string;
  description: string;
  categories: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  email: string;
  location: string;
  experiencedFrom: string;
  keywords: string[];
}

export interface SocialLink {
  name: string;
  icon: string;
  link: string;
  label: string;
}

// Personal Information
export function getPersonalInfo(): PersonalInfo {
  return {
    name: 'Md Sabit Islam Bhuiya',
    title: 'Software Engineer & Design Pattern Enthusiast',
    subtitle:
      'Software Engineer with 2+ years of experience in NodeJs and NextJs ecosystem',
    description:
      'Passionate about building scalable web applications with clean architecture and design patterns. As a design pattern enthusiast, I create exceptional user experiences while maintaining robust, maintainable codebases. Currently working as a Software Engineer at JB Connect LTD.',
    image: '/avatar.jpg',
    email: 'sib.sustswe@gmail.com',
    location: 'Bangladesh',
    experiencedFrom: '2023-1-1',
    keywords: [
      'Design Patterns',
      'Clean Architecture',
      'SOLID Principles',
      'Node.js',
      'Next.js',
      'TypeScript',
      'MongoDB',
      'PostgreSQL',
      'AWS',
    ],
  };
}

// Social Links
export function getSocialLinks(): SocialLink[] {
  return [
    {
      name: 'github',
      icon: 'github',
      link: 'https://github.com/sib61',
      label: 'GitHub',
    },
    {
      name: 'email',
      icon: 'mail',
      link: 'mailto:sib.sustswe@gmail.com',
      label: 'Email',
    },
    {
      name: 'instagram',
      icon: 'instagram',
      link: 'https://www.instagram.com/sabit_islam_bhuiya/',
      label: 'Instagram',
    },
    {
      name: 'twitter',
      icon: 'twitter',
      link: 'https://www.linkedin.com/in/sib61/',
      label: 'Linkedin',
    },
  ];
}

// Work Experience
export function getExperiences(): Experience[] {
  return [
    {
      id: 'jb-connect-2025',
      companyName: 'JB Connect LTD',
      companyImage:
        'https://media.licdn.com/dms/image/v2/D560BAQHjoQGwlOhYQg/company-logo_200_200/company-logo_200_200/0/1709195320516/jb_connect_limited_logo?e=1755129600&v=beta&t=DZF0yjNFapO1onBNRAT2CYFP67_Ix3uz0eWa0J557PM',
      position: 'Software Engineer',
      startDate: '2025-4-1',
      endDate: '',
      description:
        'Working as a Software Engineer at JB Connect LTD, focusing on building scalable web applications using modern technologies. Developing full-stack solutions with emphasis on performance and user experience.',
      technologies: [
        'Node.js',
        'Next.js',
        'AWS',
        'PostgreSQL',
        'Prisma',
        'TypeScript',
      ],
    },
    {
      id: 'shellbeehaken-engineer',
      companyName: 'Shellbeehaken Ltd.',
      companyImage:
        'https://media.licdn.com/dms/image/v2/C4D0BAQG8wvjCFbINNg/company-logo_200_200/company-logo_200_200/0/1656188465781/shellbeehaken_logo?e=1755129600&v=beta&t=Wexxf-bKMWBEveB_AxS92O72tGjUZlpHPHc1GIdee1o',
      position: 'Software Engineer I',
      startDate: '2025-1-1',
      endDate: '2025-3-31',
      description:
        'Worked as an associate team lead in a team of 7 members. Lead my team building real time services from scatch.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'React', 'JavaScript'],
    },
    {
      id: 'shellbeehaken-associate',
      companyName: 'Shellbeehaken Ltd.',
      companyImage:
        'https://media.licdn.com/dms/image/v2/C4D0BAQG8wvjCFbINNg/company-logo_200_200/company-logo_200_200/0/1656188465781/shellbeehaken_logo?e=1755129600&v=beta&t=Wexxf-bKMWBEveB_AxS92O72tGjUZlpHPHc1GIdee1o',
      position: 'Associate Software Engineer',
      startDate: '2023-8-1',
      endDate: '2024-12-31',
      description:
        'Continued as an Associate Software Engineer after my internship at Shellbeehaken Ltd. Worked on several production projects and contributed to the development of scalable web applications.',
      technologies: [
        'Next.js',
        'Node.js',
        'MongoDB',
        'React',
        'JavaScript',
        'Redis',
      ],
    },
    {
      id: 'shellbeehaken-intern',
      companyName: 'Shellbeehaken Ltd.',
      companyImage:
        'https://media.licdn.com/dms/image/v2/C4D0BAQG8wvjCFbINNg/company-logo_200_200/company-logo_200_200/0/1656188465781/shellbeehaken_logo?e=1755129600&v=beta&t=Wexxf-bKMWBEveB_AxS92O72tGjUZlpHPHc1GIdee1o',
      position: 'Software Engineer Intern',
      startDate: '2023-2-1',
      endDate: '2023-7-31',
      description:
        'Completed internship at Shellbeehaken Ltd. Learned modern web development technologies and worked on production projects in the final months of the internship.',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'MongoDB',
        'Express.js',
        'Next.js',
        'Git',
      ],
    },
    {
      id: 'geeky-solutions',
      companyName: 'Geeky Solutions',
      companyImage:
        'https://geeky.solutions/wp-content/uploads/2020/09/favicon.ico',
      position: 'Software Engineer Trainee',
      startDate: '2022-6-1',
      endDate: '2022-12-31',
      description:
        'Participated in Learnathon 2022 organized by Geeky Solutions. Learned advanced technologies and developed two major projects including a WhatsApp clone and Twitter clone.',
      technologies: [
        'TypeScript',
        'Angular',
        'MongoDB',
        '.NET Core',
        'RabbitMQ',
        'SignalR',
      ],
    },
  ];
}

// Projects - Extended with more projects
export function getProjects(): Project[] {
  return [
    {
      id: 'Kriyakarak',
      title: 'Kriyakarak for Shellbeehaken Ltd.',
      cover: '/kriyakarak.jpg',
      link: 'https://www.kriyakarak.com/',
      description: "KriyaKarak is a Bangladesh-based creative networking and hiring platform launched in 2024, designed for artists, designers, photographers, and service providers. It helps professionals showcase portfolios, manage bookings, and connect with clients across various categories like beauty, events, art, and consulting. Features include low commissions, verified profiles, NFC business cards, secure transactions, and global reach. Available on web, Android, and iOS.",
      technologies: [
        'Next.js',
        'Express',
        'MongoDB',
        'Socket.IO',
        'Redis',
        'React',
        'AWS',
      ],
      featured: true,
      timeline: '2024 - 2025'
    },
    {
      id: 'Mapage',
      title: 'Mapage for Shellbeehaken Ltd.',
      cover: '/mapage.jpg',
      link: 'https://introduction.mapage.net/',
      description: "Mapage is a web and mobile platform for beauty professionals, especially hairdressers, to create sleek, personalized websites in minutes. It offers templates co-designed with influencer stylists, Instagram integration, NFC digital business cards, online reservations, payments, and even e-commerce features. Stylists can manage schedules, clients, and services efficiently. Ideal for both individuals and salon teams, Mapage helps boost branding, streamline bookings, and enhance customer engagement—all from one easy-to-use platform.",
      technologies: [
        'Next.js',
        'Express',
        'MongoDB',
        'Socket.IO',
        'Redis',
        'React',
        'Tailwind CSS',
      ],
      featured: true,
      timeline: '2023 - 2024'
    },
    {
      id: 'Honnemir',
      title: 'Honnemir for Shellbeehaken Ltd.',
      cover: '/honnemir.jpg',
      link: 'https://shellbeehaken.com/portfolio/5',
      description: "The Honnemir User app, developed by ShellBeeHaken for Fujitsu, is a mobile platform designed to facilitate user participation in various surveys. Users can respond to a wide range of survey questions and enhance their responses by uploading videos and images. This interactive approach allows for more detailed and expressive feedback. The surveys are commissioned by different companies seeking to gather valuable insights and data. Through the Honnemir app, these companies can collect comprehensive responses that provide a deeper understanding of user opinions and behaviors .",
      technologies: [
        'Next.js',
        'AWS Amplify',
        'React',
        'Tailwind CSS',
      ],
      featured: true,
      timeline: '2023'
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      cover: '/og-image.png?height=200&width=300',
      link: '/',
      githubLink: 'https://github.com/SIB61/Twitter-Clone',
      description:
        'A beautiful portfolio website to showcase my projects, articles, expericences and others in one place.',
      technologies: [
        'Next.js',
        'React',
        'Tailwind CSS',
        'Shadcn'
      ],
      featured: true,
      timeline: '2025 - Present'
    },
    {
      id: 'twitter-clone-nextjs',
      title: 'Twitter Clone (Next.js)',
      cover: '/twitter-clone.jpg?height=200&width=300',
      link: 'https://www.youtube.com/watch?v=Vpre5X0EIoA',
      githubLink: 'https://github.com/SIB61/Twitter-Clone',
      description:
        'A full-featured Twitter clone built with modern web technologies, featuring real-time messaging and social interactions.',
      technologies: [
        'Next.js',
        'MongoDB',
        'Socket.IO',
        'React',
        'Tailwind CSS',
      ],
      featured: true,
      timeline: '2023'
    },
    {
      id: 'twitter-clone-angular',
      title: 'Twitter Clone (Dotnet Core + Angular)',
      cover: '/twitter-clone.jpg?height=200&width=300',
      link: 'https://www.youtube.com/watch?v=xHMAGtaW3CY',
      githubLink:
        'https://github.com/SIB61/Tweeter-clone-Learnathon-final-project-',
      description:
        'Enterprise-grade Twitter clone built with Angular and .NET Core, featuring real-time communication and microservices architecture.',
      technologies: [
        'Angular',
        'SignalR',
        '.NET Core',
        'MongoDB',
        'RabbitMQ',
        'Redis',
      ],
      featured: true,
      timeline: '2022'
    },
    {
      id: 'express-folder-router',
      title: 'Express Folder Router',
      cover:
        'https://th.bing.com/th/id/R.64bd21adf0efc47f19a6643516a23426?rik=XbxZLBVOeMaQkw&riu=http%3a%2f%2fanpsthemes.com%2fwp-content%2fuploads%2f2016%2f03%2fnpm-1.jpg&ehk=vsbtr9uLTdV5gUm%2fBaYlC%2fRvVG%2fgKX3j2XlZbJqWt28%3d&risl=&pid=ImgRaw&r=0',
      link: 'https://www.npmjs.com/package/express-folder-router',
      githubLink: 'https://github.com/SIB61/express-folder-router',
      description:
        'A folder-based router solution for Express.js that automatically generates routes based on file structure.',
      technologies: ['Node.js', 'Express', 'JavaScript', 'NPM'],
      featured: false,
      timeline: '2024'
    },
    {
      id: 'health-care-app',
      title: 'Health Care App',
      cover: '/healthcare.jpeg?height=200&width=300',
      link: 'https://www.youtube.com/watch?v=gHOVX9jQMzY',
      githubLink: 'https://github.com/SIB61/MIST-Mobile-App-Contest',
      description:
        'Complete healthcare Android application with appointment booking, medical records, and telemedicine features.',
      technologies: [
        'Java',
        'Android',
        'Firestore',
        'Firebase',
        'Material Design',
      ],
      featured: true,
      timeline: '2021'
    },
    {
      id: 'react-classname',
      title: 'React ClassName',
      cover:
        'https://th.bing.com/th/id/R.64bd21adf0efc47f19a6643516a23426?rik=XbxZLBVOeMaQkw&riu=http%3a%2f%2fanpsthemes.com%2fwp-content%2fuploads%2f2016%2f03%2fnpm-1.jpg&ehk=vsbtr9uLTdV5gUm%2fBaYlC%2fRvVG%2fgKX3j2XlZbJqWt28%3d&risl=&pid=ImgRaw&r=0',
      link: 'https://www.npmjs.com/package/@sib61/react-classnames',
      githubLink: 'https://github.com/SIB61/react-classnames',
      description:
        'A simple React library that automatically uses classNames from CSS modules, simplifying styling workflows.',
      technologies: ['React', 'JavaScript', 'CSS Modules', 'NPM'],
      featured: false,
      timeline: '2024'
    },
    {
      id: 'messenger',
      title: 'Messenger',
      cover: '/placeholder.svg?height=200&width=300',
      link: '',
      githubLink: 'https://github.com/SIB61/Spy-Messenger',
      description:
        'A real time end to end encrypted messaging app using java and android with firebase as a backend service.',
      technologies: ['Java', 'Android', 'Firebase', 'RSA'],
      featured: false,
      timeline: '2022'
    },
    {
      id: 'roll-the-dice',
      title: 'Roll The Dice',
      cover: '/roll-the-dice.png?height=200&width=300',
      link: 'https://sib61.github.io/Roll-The-Dice/',
      githubLink: 'https://github.com/SIB61/Roll-The-Dice',
      description:
        'An interactive dice rolling game with animations and score tracking, built with vanilla web technologies.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      featured: false,
      timeline: '2023'
    },
  ];
}

// Articles - Extended with more articles
export async function getArticles(): Promise<Article[]> {
  return await fetchMediumPosts('sib.sustswe');
}

// Skills - Enhanced with more detailed categorization
export function getSkills() {
  return {
    frontend: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Angular',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
    ],
    backend: [
      'Node.js',
      'Express.js',
      '.NET Core',
      'Prisma',
      'REST APIs',
      'GraphQL',
      'Microservices',
    ],
    database: [
      'MongoDB',
      'PostgreSQL',
      'Redis',
      'Firestore',
      'MySQL',
      'SQLite',
    ],
    cloud: ['AWS', 'Vercel', 'Firebase', 'Docker', 'Kubernetes', 'Netlify'],
    tools: [
      'Git',
      'RabbitMQ',
      'SignalR',
      'Socket.IO',
      'Webpack',
      'Vite',
      'Jest',
    ],
  };
}
