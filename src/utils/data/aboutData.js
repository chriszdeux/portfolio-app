import { randomId } from "../../functions/randomId";
import { icons } from "../icons/icons";

export const aboutMeData = {
  about_me: [
    `I started in the world of development a little over 10 years ago, when I tried to develop a video game on my own. The reason why I decided to focus on web development is because I can solve people's problems and that you can see immediately.`,
    `Working together with the designers and seeing the creativity they have and that I can translate it into code I think is fantastic`,
    `Currently I am dedicated to Frontend development with the MERN stack and
    in my free time I dedicated to my personal CryptoAnt project, where in the future I will teach the basics so that people learn to invest.`

  ],
  short_version: `I'm a person who likes to solve things, I like technology but I would like to focus on Blockchain, I think we should all learn a little bit of programming basics, you can apply it to real life.
  
  Throughout 2021 I tried to learn, not just watching videos trying to follow in the footsteps of the master, I dedicated myself to really learning the technologies.
  
  I know that I can be an important member of a team, if I am assigned a task I'll do it`,
  my_skills: [
    {
      id: randomId(),
      skill: 'HTML',
      more: 'Maintaining the use of the appropriate tags.',
      // list: []
    },
    {
      id: randomId(),
      skill: 'CSS',
      more: `Styling and positioning using flex-box, grid.
      Also, the use of media-queries for responsive handling
      and the use of animations and transitions. `,
    },
    {
      id: randomId(),
      skill: 'Javascript',
      more: `ECMAScript 6+, OOP, Closures, Scope, Async
      Await, REST API. `,
    },
    {
      id: randomId(),
      skill: 'TypeScript',
      more: null,
    },
    {
      id: randomId(),
      skill: 'SASS',
      more: `Variables, Nesting, Partials, Modules, Mixins,
      Extend/Inheritance and Operators. `,
      // list: []
    },
    {
      id: randomId(),
      skill: 'React',
      more: `Functional components, use hooks like: useState,
      useEffect, useMemo, useCallback, useReducer,useRef, react-router, Context, react-redux, lazy-load, and custom hooks. `,
    },
    {
      id: randomId(),
      skill: 'Node Js',
      more: `As a backend for integration with my frontend,
      resolving errors, maintaining status codes, microservices
      and giving routes to my endpoints. `,
      // list: []
    },
    {
      id: randomId(),
      skill: 'Express',
      more: ``,
    },
    {
      id: randomId(),
      skill: 'MongoDB',
      more: ``,
    },
    {
      id: randomId(),
      skill: 'Dev-Tools',
      more: `Chrome-dev-tools to debug my code, have a status
      of my project and have a bigger picture when I get an
      error. `,
    },
    {
      id: randomId(),
      skill: 'NPM',
      more: ``,
      // list: []
    },
    {
      id: randomId(),
      skill: 'Source Control Versions',
      more: ``,
    },
    {
      id: randomId(),
      skill: 'Deploy Projects',
      more: `Git/GitHub. `,
    },
    {
      id: randomId(),
      skill: 'APIs',
      more: ``,
      // list: []
    },
    // {
      // id: randomId(),
    //   skill: 'Google',
    //   list: ['Not only looking for the solution is important, analyzing and understanding is essential']
    // },
  ],

  softSkills: [
    'Critical Thinking',
    'Friendly, Positive Attitude',
    'Organizational Skills',
    'Conflict Resolution',
    'Spanish / English',
    'Problem Resolution',
    'Attention to Detail',
  ],

  work_experience: [
    {
      job_title: `Call City`,
      description: `In this company I had the role as a frontend developer where I was only in charge of making
      the frontend and connecting it with a database. Here I work with html, css and php.`,
      start_date: `November/2013`,
      end_date: `February/2014`,
      delay: '.4s'
    },
    {
      job_title: `Boiler Ochoa`,
      description: `In this company I had the role of systems manager, I was in control of the website, the server
      and the networks. As well as helping the boss solve remote problems. `,
      start_date: `April/2014`,
      end_date: `November/2016`,
      delay: '.8s'
    },
    {
      job_title: `Community`,
      description: `I also supported several Startups in a community called HackerGarage that was located in
      Mexico. Many projects never materialized in some I had to leave the project. In this community I also
      learned many skills such as how to work as a team, contribute ideas, how to work correctly with other
      fields.`,
      start_date: `2016`,
      end_date: `2017`,
      delay: '1.2s'
    },
    {
      job_title: `Inkfluencer`,
      description: `I'm currently working on a Startup called Inkfluencer which is focused on the world of
      NFT's. My role is as a frontend developer using technologies like React and Material UI.`,
      start_date: `March/2022`,
      end_date: null,
      delay: '1.5s'
    },
  ],

  hobbies: [
    'Lecture',
    'Walk in the evenings with my wife',
    'Watch animes with good narrative stories',
    'Insvestments, in special cryptocurrencies',
    'I love dogs ( I have 3 :) )',
  ],
  contact: [
    {
      name: 'Linkedin',
      icon: icons.linkedin_icon,
      link: 'https://www.linkedin.com/in/christian-meza-front-end/',
      color: '#0A66C2'
    },
    {
      name: 'Instagram',
      icon: icons.instagram_icon,
      link: 'https://www.instagram.com/chriszdeux/',
      color: '#D62977'
    },
    {
      name: 'GitHub',
      icon: icons.github_icon,
      link: 'https://www.github.com/chriszdeux/',
      color: '#D62977'
    },
  ],
  learning: [
  {
    technology: 'Node',
    icon: icons.node_icon,
    color: '#72B254'
  },
  {
    technology: 'Express',
    icon: icons.express_icon,
    color: '#3b3b3b'
  },
  {
    technology: 'MongoDB',
    icon: icons.mongo_icon,
    color: '#3C9237'
  },
  {
    technology: 'TypeScript',
    icon: icons.typescript_icon,
    color: '#2F74C0'
  },
  {
    technology: 'Jest',
    icon: icons.jest_icon,
    color: '#BF3B14'
  },
  ],
  resume: 'https://firebasestorage.googleapis.com/v0/b/proyects-screenshots.appspot.com/o/ChristianMezaResume_C.pdf?alt=media&token=751593cf-f811-4086-9730-ec4e370c0742'
}

