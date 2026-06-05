export const profile = {
  name: "Baraka",
  fullName: "Baraka Mangesho",
  title: "Software Developer",
  heroRole: "Software Developer",
  heroLearning:
    "Practising and sharpening my skills on DevOps and Cyber Security",
  tagline: "i build and explore on Blockchain/Web3",
  email: "barakajimmy@outlook.com",
  phone: "+255 654 246 975",
  phoneHref: "https://wa.me/255654246975",
  whatsapp: "https://wa.me/255654246975",
  about: `I have a passion for innovative solutions and I'm exploring blockchain development, blending creativity with cutting-edge technology.
Dive in and explore what I've been building!`,
  github: "https://github.com/barakacanbyte",
  linkedin: "https://www.linkedin.com/in/barakamangesho",
  medium: "https://medium.com/@barackjimmy1",
};

export const certifications = [
  {
    period: "2024",
    title: "Data Analysis With Python",
    issuer: "DataCamp",
    description:
      "Foundational data analysis skills using Python, pandas, and visualization workflows.",
  },
  {
    period: "2023",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    description:
      "Modern responsive layouts, accessibility basics, and semantic HTML/CSS patterns.",
  },
  {
    period: "2023",
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    description:
      "Core CS fundamentals, algorithmic thinking, and JavaScript problem solving.",
  },
  {
    period: "2024",
    title: "AI Career Essentials",
    issuer: "ALX Africa",
    description:
      "AI literacy, productivity tooling, and career skills for tech professionals.",
  },
];

const projectImage = (filename) =>
  `${import.meta.env.BASE_URL}projects/${filename}`;

export const skillCategories = [
  {
    title: "Languages",
    items: [
      { name: "Java", icon: "fab fa-java" },
      { name: "JavaScript", icon: "fab fa-js" },
      { name: "Python", icon: "fab fa-python" },
      { name: "TypeScript", icon: "fab fa-js" },
      { name: "Rust", icon: "fas fa-gear" },
      { name: "Solidity", icon: "fas fa-cube" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "React", icon: "fab fa-react" },
      { name: "Next.js", icon: "fas fa-bolt" },
      { name: "Node.js", icon: "fab fa-node-js" },
      { name: "Express", icon: "fas fa-server" },
      { name: "Django", icon: "fas fa-leaf" },
    ],
  },
  {
    title: "Other",
    items: [
      { name: "Web3", icon: "fab fa-ethereum" },
      { name: "Technical Writing", icon: "fas fa-pen-nib" },
    ],
  },
];

export const projects = [
  {
    name: "Amini",
    description:
      "Personal side project (in progress) — Amini is a transparent fund disbursement protocol on Base. Every contribution is streamed on-chain and every milestone is attested on EAS, turning charitable giving from blind faith into verified impact.",
    url: "https://amini-project.vercel.app/",
    codeUrl: null,
    tech: ["Web3", "Stablecoins", "Bun", "XMTP", "TypeScript", "Solidity"],
    image: projectImage("amini-desktop.png"),
  },
  {
    name: "NEDAPAY",
    description:
      "NEDApay is a borderless payments platform built on Base. It lets you send money to anyone in the world in seconds.",
    url: "https://nedapay.xyz",
    codeUrl: null,
    tech: ["Node.js", "TypeScript", "Web3", "Stablecoins", "Solidity"],
    image: projectImage("nedapay-mobile.png"),
  },
];
