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
  passwordapp,
  assitiveGlasses,
  velammalLogo,
  figma,
  docker,
  nextgenChatbot,
  boneFracture,
  jobconnect,
  threejs,
  python,
  express,
  flutter,
  java,
  mysql,
  postgres,
  postman,
  internshipPortal,
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
  "<ReactJs Developer />",
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

const projects = [
  {
    name: "Assistive Glasses For Visually Impaired People",
    description:
      "Designed and developed assistive glasses with face, object, and text recognition capabilities to aid visually impaired users, showcasing advanced integration of YOLO v4 and EasyOCR on a Raspberry Pi platform.",
    tags: [
      {
        name: "Raspberry Pi",
        color: "blue-text-gradient",
      },
      {
        name: "YOLO v4",
        color: "green-text-gradient",
      },
      {
        name: "EasyOCR",
        color: "pink-text-gradient",
      },
      {
        name: "Face Recognition",
        color: "orange-text-gradient",
      },
      {
        name: "Object Recognition",
        color: "purple-text-gradient",
      },
    ],
    image: assitiveGlasses,
    source_code_link:
      "https://github.com/Saisandeepsangeetham/Assistive-Glasses-For-Visually-Impaired-People",
  },
  {
    name: "Password Manager Application",
    description:
      "Secure password manager built with Flutter, Dart, and SQLite. Features: biometric login, master password, PIN lock, password storage, generator (custom length, letters, numbers, symbols), search, delete, and clean UI.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "SQLite",
        color: "pink-text-gradient",
      },
    ],
    image: passwordapp,
    source_code_link:
      "https://github.com/Saisandeepsangeetham/Password-Manager",
  },
  {
    name: "NextGen ChatBot",
    description:
      "AI chatbot built with Gemini API in a MERN stack, offering intelligent conversations with user authentication and database integration.",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "orange-text-gradient",
      },
      {
        name: "Gemini API",
        color: "purple-text-gradient",
      },
    ],
    image: nextgenChatbot,
    source_code_link: "https://github.com/Saisandeepsangeetham/NextGen-ChatBot",
  },
  {
    name: "SSN Internship Management Portal",
    description:
      "A comprehensive web app for managing student internships at SSN College. Features: Google OAuth login, internship submission form, document upload, coordinator dashboard with filtering, Excel export, and responsive design.",
    tags: [
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "gray-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Google Drive API",
        color: "red-text-gradient",
      },
    ],
    image: internshipPortal,
    source_code_link: "https://github.com/Saisandeepsangeetham/InternForm",
  },
  {
    name: "Job Connect: Tailored Job Recommendations",
    description:
      "A C-based CLI job recommendation system using KNN algorithm. Matches candidate skills with recruiter needs, providing tailored job matches and application management for seekers and hiring managers.",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "KNN Algorithm",
        color: "green-text-gradient",
      },
      {
        name: "CLI",
        color: "pink-text-gradient",
      },
    ],
    image: jobconnect,
    source_code_link: "https://github.com/Saisandeepsangeetham/Job_connect",
  },
  {
    name: "Advanced Image Processing For Bone Fracture Detection",
    description:
      "Research on enhancing X-ray images using CLAHE and smoothing filters, with Decision Trees/KNN/Linear Regression for fracture detection. Achieved higher accuracy via preprocessing.",
    tags: [
      {
        name: "Image Processing",
        color: "blue-text-gradient",
      },
      {
        name: "CLAHE",
        color: "green-text-gradient",
      },
      {
        name: "Decision Trees",
        color: "pink-text-gradient",
      },
      {
        name: "KNN",
        color: "orange-text-gradient",
      },
      {
        name: "Linear Classifier",
        color: "purple-text-gradient",
      },
    ],
    image: boneFracture,
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
  projects,
};
