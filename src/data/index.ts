import avatar from '@/assests/avatar/avatar.jpg';
import educationProgramingProject from '@/assests/project/education-programing-website.png';
import blogProject from '@/assests/project/blog-website.png';

export const myCvLink =
  'https://drive.google.com/file/d/1j-da0u2EH56gPscWql0WnnAVhHZ0e3Xn/view?usp=drive_link';
export const avatarImg = avatar;
export const currentPosition = 'Frontend Developer (ReactJs)';
export const currentAddress =
  'Ho Van Hue, Phu Nhuan District, Ho Chi Minh City';
export const skillList = {
  fe: 'ReactJS (NextJS, Hook, Redux Toolkit), Angular, Material UI, TailwindCSS, Bootstrap, Antd, Typescript',
  be: 'Java (Springboot), NodeJs (ExpressJs)',
  db: 'Postgres, MySQL, MongoDB, Redis',
  other: 'Git, Docker, Microservice Architecture',
};
export const numberOfYearExp = 1;
export const languageExp = 'Javascript, ReactJs';
export const contactList = {
  gmail: {
    title: 'duongthanhthong0611@gmail.com',
    url: '',
  },
  linkedin: {
    title: 'Linkedin - Duong Thanh Thong',
    url: 'https://www.linkedin.com/in/th%C3%B4ng-d%C6%B0%C6%A1ng-0113182b7/',
  },
  github: {
    title: 'Github - Duong Thanh Thong',
    url: 'https://github.com/Herocode-DThanhThong',
  },
};
export const sidebarList = [
  {
    name: 'About me',
    url: '/#about',
  },
  {
    name: 'Experience',
    url: '/#experience',
  },
  {
    name: 'English',
    url: '/#english',
  },
  {
    name: 'Projects',
    url: '/#projects',
  },
  {
    name: 'Skills & Targets',
    url: '/#skills-targets',
  },
  {
    name: 'Education',
    url: '/#education',
  },
];
export const experiences = [
  {
    companyName: 'TMA Solutions',
    role: 'Frontend Engineer',
    url: 'https://www.tmasolutions.vn/',
    time: {
      fromDateToDate: 'May 2023 – Mar 2024',
      total: '(10 months)',
    },
    projects: [
      {
        name: 'Ecommerce Project - Petlove',
        technologies:
          'ReactJs, NextJs, Next Auth, Springboot, Redux, Antd Design, Gitlab.',
        reponsibility: [
          'Developed features and fixed bugs based on the tickets.',
          'Collaborated with QA teams to understand, and troubleshoot reported bugs, ensuring prompt resolution.',
          'Utilized Postman to test and validate new APIs, guaranteeing reliable and secure communication between frontend and backend components.',
          'Engaged in code reviews and contributed to improving code quality and maintainability.',
        ],
      },
      {
        name: 'Network Project - Nokia Altiplano',
        technologies:
          'Java, Javascript, Robot Framework, Netconf Yang, FreeMaker, Docker, Jenkins, and Jira.',
        reponsibility: [
          'Developed and implemented new features for product releases and user stories.',
          'Conducted critical bug fixes and performed rigorous code reviews to product stability.',
          'Introduced unit testing to enhance development feedback and code quality.',
          'Implementing the automation test using RobotFramework.',
          'Using Jenkins to automate the build process and merge code to master branch.',
        ],
      },
    ],
  },
];
export const projects = [
  {
    name: 'Website Education Programing',
    technology: 'ReactJs, Redux, Material UI, Springboot, PostgreSQL ',
    role: 'Frontend, Backend',
    description: [
      'User: Register/Login, see all, search, register courses, learn lessons via video, text, and exercise in the courses. Manage their info, crud post in the community, chat with another user in the system, add friends/reject friends, chatbot, and so on.',
      'Admin: Management courses, lessons, users, learning pathways, statistic registrant, popular, and number of subscriber courses.',
      'Using Spring web socket to handle real-time features like commenting, liking, sharing posts, chatting and accepting/rejecting friends.',
      'Using ChatGPT API to build a chatbot to help users easily find solutions to issues quickly.',
    ],
    gitLink:
      'https://github.com/Herocode-DThanhThong/education-programing-project',
    img: educationProgramingProject,
  },
  {
    name: 'Website Blog',
    technology:
      'Angular, Antd, Java Springboot, JWT, PostgreSQL, Redis, Docker',
    role: 'Frontend, Backend',
    description: [
      'User: Register/login, authorization, verify email to activate accounts. View blogs, search for blogs, send requests to the admin to gain writing permissions, perform CRUD operations on blogs, view their blog posts, and view detailed blog posts.',
      'Admin: view all users, view all blog posts, approve, or reject requests to gain writing permissions.',
      'Using Redis to cache frequently requests for getting blogs and requests for gaining writing permissions using Redis, and clear the cache when creating, updating, or deleting blog posts. Schedule jobs to clear the Redis cache after a specific time.',
      'Deployment backend to Docker.',
    ],
    gitLink: 'https://github.com/Herocode-DThanhThong/blog-project',
    img: blogProject,
  },
];
export const english = [
  {
    title: 'TOEIC CERTIFICATE - OVERALL: 730 / 990',
    detail: ['Listening: 410 / 495', 'Reading: 320 / 495'],
    certificate: true,
  },
  {
    title: 'VIETNAMESE STANDARDIZED TEST OF ENGLISH PROFICIENCY (VSTEP)',
    detail: ['Level: B1'],
    certificate: true,
  },
  {
    title: 'ENGLISH FOR WORK!',
    detail: [
      'For Reading: I can comfortably read and interpret documentation, project specifications, and work totally in English.',
      'For Speaking: I am capable of basic communication and am always striving to improve everyday. I am now practicing communication with a native teacher every weekend.',
      'I would really like the opportunity to work at your organization, where I would be able to practice my ability to speak English.',
    ],
    certificate: false,
  },
];
export const objectives = [
  'Improve foreign language skills, and approach IELTS with a goal of 7.0 point',
  'Master the frontend skills',
  'Master the backend skills',
  'Become the fullstack developer',
];
