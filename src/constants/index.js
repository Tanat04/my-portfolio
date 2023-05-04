import {
  react,
  backend,
  nextjs,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  au,
  next,
  php,
  psql,
  hospital,
  tutorPlus,
  gradeTracker,
  suppliers,
} from "../assets";

export const myGithub = "https://github.com/tanat04";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Next JS Developer",
    icon: nextjs,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "next",
    icon: next,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "psql",
    icon: psql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer (Student)",
    company_name: "Assumption University",
    icon: au,
    iconBg: "#383E56",
    date: "June 2021 - Jan 2023",
    points: [
      "Developing web applications using React.js and other related technologies.",
      "Implementing Create, Read, Update, and Delete functionalities",
      "Focusing on frontend development",
    ],
  },
  {
    title: "Full stack Developer (Student)",
    company_name: "Assumption University",
    icon: au,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing a full-stack CRUD operation project",
      "Using ReactJS for frontend development, Next.js for server-side rendering and routing, MongoDB for database management",
      "Collaborating with a team to achieve project goals",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Grade Tracker",
    description:
      "The website allow students studying CS and IT at Assumption University to keep track of their GPA over the course of their academic journey.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "gatsby",
        color: "green-text-gradient",
      },
    ],
    image: gradeTracker,
    source_code_link: "https://github.com/Tanat04/web-dev-project1",
    demo_link: "https://tanat04.github.io/gradeTracker/",
  },
  {
    name: "Suppliers Management",
    description:
      "The website provides CRUD (Create, Read, Update, Delete) functionality for suppliers, with MongoDB serving as the backend database to store the relevant data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: suppliers,
    source_code_link: "https://github.com/Tanat04/stock-final-6410381",
    demo_link: "https://stock-final-6410381.vercel.app/",
  },
  {
    name: "Tutor Plus",
    description:
      "A simplified tutoring scheduling and management system. Features CRUD operations, user authentication, real-time updates, and admin-tutor-student roles",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tutorPlus,
    source_code_link: "https://github.com/LynnT-2003/TutorPlus-Registration",
    demo_link: "https://tutor-plus.vercel.app/",
  },
  {
    name: "Hospital Management",
    description:
      "A simplified hospital management and appointment system, which employs CRUD operations, PHP, and PostgreSQL as the database management system.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
    ],
    image: hospital,
    source_code_link:
      "https://github.com/Tanat04/databaseProject/tree/main/dbProject/hospital",
    demo_link:
      "https://github.com/Tanat04/databaseProject/tree/main/dbProject/hospital",
  },
];

export { services, technologies, experiences, testimonials, projects };
