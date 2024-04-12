import {
  mobile,
  backend,
  creator,
  web,
  sumz,
  cpp,
  python,
  snappy,
  imaginify,
  gssoc,
  javascript,
  typescript,
  html,
  yb,
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
  nextjs,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  timechain,
} from "../assets";

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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: web,
  },
  {
    title: "Web Developer ",
    icon: web,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },

];

const experiences = [
  {
    title: "Open Source Developer",
    company_name: "Timechain Labs",
    icon: timechain,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Built Contract Store - a marketplace for predefined smart contracts which users can use as templates.",
      "Led initiative in design as well as development phase of the project for the frontend part of the project.",
      "Tech Stack : Javascript, NestJS, Firebase, Sveltekit",
    ],
  },
  {
    title: "Open Source Developer",
    company_name: "Girlscript Summer Of Code",
    icon: gssoc,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2023",
    points: [
      "Contributed to Projects: Moksha and Web Resources Hub",
      "Added code of different data Structures and algorithms which refactored the code into more optimised ones.",
      "Tech Stack : HTML, CSS and Javascript",
    ],
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
    name: "Imaginify",
    description:
      "Built an AI Image SaaS platform offering advanced functionalities like image restoration, recoloring, object removal, generative filling, and background removal.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: imaginify,
    source_code_link: "https://github.com/anandpanda3/imaginify_saas_app",
  },
  {
    name: "Snappy",
    description:
      "Snappy is a realtime chat application that also has in built avatars for all users to choose from ",
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
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "purple-text-",
      },
      {
        name: "Socket.io",
        color: "red-text-gradient",
      }
    ],
    image: snappy,
    source_code_link: "https://github.com/anandpanda3/snappy",
  },
  {
    name: "Sumz",
    description:
      "Developed an AI based article summarizer that transforms lengthy articles into clear and concise summaries.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "red-text-gradient",
      }
    ],
    image: sumz,
    source_code_link: "https://github.com/anandpanda3/sumz_article_summarizer",
  },
  {
    name: "Youtube Bookmarker",
    description:
      "Developed a chrome extension which allows users to stop and create bookmarks while watching youtube videos.",
    tags: [
      
    ],
    image: yb,
    source_code_link: "https://chromewebstore.google.com/detail/youtube-bookmarker/peohjdmkchbdleoobfpfjifdeocagafc",
  },
];

export { services, technologies, experiences, testimonials, projects };
