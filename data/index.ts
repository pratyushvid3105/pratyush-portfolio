export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Full-Stack Engineer with expertise in Frontend Development",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Proficient in React, Next, Go & Cloud Technologies",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Currently working at Amagi Media Labs as SDE 2",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The inside scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Open to collaborations on innovative frontend projects!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    des: "A Next.js-based portfolio showcasing my skills, projects, and professional journey. Built with modern animations.",
    img: "/personal-portfolio.webp",
    iconLists: [
      "/next.svg",
      "/ts.svg",
      "/redux.svg",
      "/tail.svg",
      "/aceternity.webp",
      "/fm.svg",
    ],
    link: "https://github.com/pratyushvid3105/pratyush-portfolio",
  },
  {
    id: 2,
    title: "Go REST API",
    des: "A simple REST API built with Go, featuring CRUD operations, JSON responses, and validation with Docker support.",
    img: "/go-rest-api.webp",
    iconLists: ["/go.svg", "/docker.svg"],
    link: "https://github.com/pratyushvid3105/Go-Rest-API",
  },
  {
    id: 3,
    title: "React Webpack Boilerplate",
    des: "A minimal React setup with Webpack for optimized bundling, faster development, and better performance.",
    img: "/react-webpack.webp",
    iconLists: ["/react.svg", "/webpack.svg", "/babel.svg"],
    link: "https://github.com/pratyushvid3105/react-webpack",
  },
];

export const testimonials = [
  {
    quote:
      "Pratyush is a highly skilled full-stack engineer with a keen eye for optimization. His work on reducing execution times and improving frontend performance has been invaluable.",
    name: "Senior Engineering Manager",
    title: "Amagi Media Labs",
  },
  {
    quote:
      "He played a crucial role in implementing our real-time alert system. His ability to integrate seamless authentication with Auth0 was impressive.",
    name: "Tech Lead",
    title: "Amagi Central Project",
  },
];

export const companies = [
  {
    id: 1,
    name: "Amagi Media Labs",
    img: "/amagi.svg",
    nameImg: "/amagiName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Development Engineer 2",
    desc: "Leading the frontend engineering efforts for self-serve platforms & real-time analytics at Amagi Media Labs.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Development Engineer",
    desc: "Built a scalable customer portal using Next.js, reducing support tickets & improving UX.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "SDE Intern - Frontend Development",
    desc: "Developed logging tools & improved search efficiency by 35% with optimized UI components.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/pratyushvid3105",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "http://www.linkedin.com/in/pratyushvidyarthi3105",
  },
];
