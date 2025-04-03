import { title } from "framer-motion/client";
import {
  github,
  linkedin,
  instagram,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  c,
  gcp,
  colab,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  ssnLogo,
  velammalLogo,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  express,
  flutter,
  java,
  mysql,
  postgres,
  postman,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const sequenceText = [
  "Full Stack Developer",
  1000,
  "Flutter Developer",
  1000,
  "ReactJs Developer",
  1000,
  "AI/ML Enthusiast",
  1000,
  "Problem Solver",
  1000,
];

const socials = [
  {
    id: "github",
    icon: github,
    link: "https://github.com/Saisandeepsangeetham",
  },
  {
    id: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/sai-sandeep-sangeetham",
  },
  {
    id: "instagram",
    icon: instagram,
    link: "https://www.instagram.com/_.shivam._.here._",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Problem Solving",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Flutter Developer",
    icon: creator,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: html,
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: css,
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: javascript,
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: typescript,
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: c,
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: java,
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: python,
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
    {
      name: "TailwindCSS",
      icon: tailwind,
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: express,
      link: "https://expressjs.com/",
    },
    {
      name: "Flutter",
      icon: flutter,
      link: "https://flutter.dev/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: reactjs,
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: threejs,
      link: "https://threejs.org/",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: mysql,
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: postgres,
      link: "https://www.postgresql.org",
    },
    {
      name: "MongoDB",
      icon: mongodb,
      link: "https://www.mongodb.com/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: git,
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: github,
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: postman,
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: figma,
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: docker,
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: nodejs,
      link: "https://nodejs.org/en",
    },
    {
      name: "Google Cloud Program",
      icon: gcp,
      link: "https://console.cloud.google.com/",
    },
    {
      name: "Google Colab",
      icon: colab,
      link: "https://colab.research.google.com/",
    },
  ],
};
``;

const education = [
  {
    title: "Sri Sivasubramaniya Nadar College Of Engineering",
    name: "Bachelor Of Engineering Computer Science",
    icon: ssnLogo,
    date: "Oct 2022 - Present",
    points: [],
  },
  {
    title: "Velammal Matric Higher Sec School",
    name: "Higher Secondary Education-12th",
    icon: velammalLogo,
    date: "Jun 2021 - Mar 2022",
    points: [],
  },
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  navLinks,
  sequenceText,
  socials,
  services,
  technologies,
  education,
  testimonials,
  projects,
};
