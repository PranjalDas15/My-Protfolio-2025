import {
  Angualar,
  CPP,
  CSS,
  Django,
  ExpressJs,
  GSAP,
  HTML,
  JavaScript,
  Laravel,
  MongoDB,
  MySQL,
  NextJs,
  PHP,
  Python,
  React,
  Redux,
  TailwindCSS,
  TypeScript,
} from "./technologies";

export const projects = [
  {
    name: "My Portfolio",
    type: "Personal Project",
    brief:
      "Developed a dynamic and responsive portfolio using React, GSAP and Tailwind CSS.",
    technologies: [NextJs, JavaScript, GSAP , Redux, TailwindCSS],
    images: ['/assets/portfolio.png'],
    links: {
      github: "https://github.com/PranjalDas15/Runix---Shopping",
      deploy: "https://runix-shopping.vercel.app",
    },
    desc: [
      "Runicx E-commerce is a sports-themed shopping website built using Next.js, MongoDB, Redux, Cloudinary, Tailwind CSS, GSAP, and written in TypeScript.",
      "It features role-based authentication (admin, seller, customer) and manages global state efficiently using Redux.",
      "The project leverages Next.js Server-Side Rendering (SSR) for faster data loading and improved performance",
      "GSAP animations are used on the landing page to create smooth and dynamic user experiences.",
    ],
  },
  {
    name: "Runicx e-Commerce Website",
    type: "Personal Project",
    brief:
      "Developed a dynamic e-commerce platform with a sports theme, leveraging Next.js for a seamless user experience, MongoDB for robust data management, and Redux for efficient state management.",
    technologies: [NextJs, TypeScript, MongoDB, Redux, TailwindCSS],
    images: ['/assets/runicx.png'],
    links: {
      github: "https://github.com/PranjalDas15/Runix---Shopping",
      deploy: "https://runix-shopping.vercel.app",
    },
    desc: [
      "Runicx E-commerce is a sports-themed shopping website built using Next.js, MongoDB, Redux, Cloudinary, Tailwind CSS, GSAP, and written in TypeScript.",
      "It features role-based authentication (admin, seller, customer) and manages global state efficiently using Redux.",
      "The project leverages Next.js Server-Side Rendering (SSR) for faster data loading and improved performance",
      "GSAP animations are used on the landing page to create smooth and dynamic user experiences.",
    ],
  },
  {
    name: "Grievance Portal",
    type: "Internship @ APDCL",
    brief:
      "Developed and enhanced the grievance portal using AngularJS and Python. Implemented user interface components and backend functionalities.",
    technologies: [Angualar, Django, MongoDB, TypeScript],
    images: ['/assets/apdcl.png'],
    links: {
      github:
        "https://github.com/PranjalDas15/Grievance-Deploy",
      deploy:
        "https://grievance-deploy-1.onrender.com/",
    },
    desc: [
      "Grievance Portal is a web application built with AngularJS, Django, MongoDB, and TailwindCSS, using TypeScript.",
      "Developed during an internship at Assam Power Distribution Company Limited (APDCL).",
      "The portal allows users to log in and submit grievances related to power services.",
      "Admins can view, update, and resolve user queries through a status management system.",
      "The platform ensures efficient communication between consumers and the organization for faster issue resolution.",
    ],
  },
  {
    name: "Early Diagnosis of COPD using Machine Learning",
    type: "College Project",
    brief:
      "Used techniques such as data preprocessing, classifier selection and Ensemble Learning, to achieve an accuracy of 80% in detecting COPD severity. I was responsible for the backend and model development for the web application using Python",
    technologies: [HTML, CSS, JavaScript, Python],
    images: ['/assets/copd.png'],
    desc: [
      "An Expert System for Early Diagnosis of COPD is a machine learning project built with Python (Flask), MongoDB, Scikit-learn, JavaScript, HTML, and CSS.",
      "Developed as a final year team project during college, focusing on early detection of COPD severity based on user input.",
      "The system allows users to log in, input their symptoms and required data, and predicts COPD severity, generating a PDF report.",
      "Ensemble learning techniques were used to improve the accuracy and reliability of the machine learning model.",
      "I was responsible for training the machine learning model and building the backend to integrate it with the web application.",
    ],
    link: {
      github: 'https://github.com/PranjalDas15/COPD-College',
      deploy: "",
    }
  },
  {
    name: "Teacher Appoimntment Booking Portal",
    type: "Personal Project",
    brief:
      "Developed a full-stack web application for students to book appointments with teachers and message them directly. MongoDB, Express.js, React.js, Node.js, JWT authentication, Cloudinary (for image uploads), React Toastify (for notifications) the web application using Python",
    technologies: [React, ExpressJs, MongoDB, TailwindCSS],
    images: ['/assets/edumentor.png'],
    links: {
      github: "https://github.com/PranjalDas15/EduMentorComplete",
      deploy: "https://edumentor-frontend.onrender.com/",
    },
    desc: [
      "Teacher Appointment Booking Portal is a web application built with React, Express.js, MongoDB, and Cloudinary.",
      "This was my first project using React, developed to learn full-stack web development.",
      "The platform allows students to log in, book appointments with teachers, and chat with them.",
      "Teachers can view appointment requests and finalize bookings through the portal.",
    ],
  },
];


export const workwith = [
  NextJs,
  React,
  TailwindCSS,
  ExpressJs,
  GSAP,
  JavaScript,
  TypeScript,
  Python,
  MongoDB,
  MySQL,
];

export const familiar = [Django, Laravel, Angualar, PHP, CPP];

export const SKILLS = [
  NextJs,
  React,
  TailwindCSS,
  ExpressJs,
  GSAP,
  JavaScript,
  TypeScript,
  Python,
  MongoDB,
  MySQL,
  Django,
  Laravel,
  Angualar,
  PHP,
  CPP,
];

export const frontend = [ HTML, CSS, React, NextJs, GSAP, TailwindCSS ]
export const backendAndDatabases = [ ExpressJs, NextJs, Django, MongoDB, MySQL ]
export const languages = [ JavaScript, TypeScript, Python, PHP ]
export const extras = [ Laravel, Angualar, CPP]

export const aboutMe =
  "I'm a Computer Science Engineering graduate from Assam Down Town University, and I discovered my love for coding a bit later—around the 7th semester of my college journey. What began as curiosity quickly turned into a deep interest in web development. Since then, I've immersed myself in building full-stack applications using technologies like React, Next.js, Tailwind CSS, Node.js, and MongoDB. I'm focused on sharpening my skills and looking for opportunities to grow as a developer, contribute to meaningful projects, and keep learning.";
