import avatar from '@/assests/avatar/avatar.jpg';
import educationProgramingProject from '@/assests/project/education-programing-website.png';
import blogProject from '@/assests/project/blog-website.png';

export const myCvLink =
  'https://drive.google.com/file/d/1ygoNegtUkyr9kyQtEMfFgZfrevJLz9WZ/view?usp=drive_link';
export const avatarImg = avatar;
export const currentPosition = 'FullStack Developer';
export const currentAddress =
  'Ho Van Hue, Phu Nhuan District, Ho Chi Minh City';
export const skillList = {
  fe: 'HTML, CSS, Javascript, Typescript, ReactJS.',
  be: 'Java, Spring Boot',
  db: 'Postgres, MySQL, MongoDB, Redis',
  other: 'Git, Docker, MUI, Antd, TailwindCSS, Bootstrap, Redux, Redux toolkit',
};
export const numberOfYearExp = 1.5;
export const languageExp = 'Javascript, Java, ReactJs, SpringBoot';
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
    companyName: 'Tego Global',
    role: 'Frontend Engineer',
    url: 'https://tego.global/',
    time: {
      fromDateToDate: 'Mar 2024 – Jul 2024',
      total: '(5 months)',
    },
    projects: [
      {
        name: 'Swim School',
        technologies: 'Typescript, ReactJs, SCSS, MUI.',
        description:
          'A web app used to assist clubs or water sports centers to effectively manage their daily operations. This system integrates essential processes such as student registration, class scheduling, progress tracking, parent management, etc.',
        reponsibility: [
          'Utilized Reactjs library to craft responsive, interactive web designs, ensuring a seamless and user-friendly experience.',
          'Fixed bugs and implemented features to ensure these are correct with requirements.',
          'Researched multiple libraries and chose the best for the project, Optimized performance for the website.',
          'Created and maintained reusable codes and libraries to streamline future development processes.',
          'Joined meetings with Australian customers to discuss bugs and features.',
          'Engaged in code reviews and contributed to improving code quality and maintainability.',
        ],
      },
      {
        name: 'Employee Management System ',
        technologies:
          'Typescript, ReactJs, Antd, Redux, Redux toolkit, TailwindCSS.',
        description:
          'A web app used by company operators to manage employees, overtime/timesheets, work schedules, benefits, projects, processes/schedules for recruitment candidates, new company announcements, etc.',
        reponsibility: [
          'Engaged in daily Scrum meetings with our team to report the task progress, solve the bugs problems, and discuss features.',
          'Collaborated closely with web designers and backend developers, ensuring alignment with product requirements.',
          'Developed and optimized features to enhance overall system performance and ensure these are correct with requirements.',
        ],
      },
    ],
  },
  {
    companyName: 'TMA Solutions',
    role: 'FullStack Engineer',
    url: 'https://www.tmasolutions.vn/',
    time: {
      fromDateToDate: 'May 2023 – Mar 2024',
      total: '(10 months)',
    },
    projects: [
      {
        name: 'E-Commerce Website for Pet Products ',
        technologies:
          'ReactJs, NextJs, TailwindCSS, Springboot, Redux, Antd, Javascript',
        description:
          'A web app used to manage and sell products, and services catering to the needs of pets. The website allows customers to easily find food, toys, supplies, accessories, and health products for different types of pets',
        reponsibility: [
          'Used ReactJS to develop features, fixed bugs, implemented multiple UIs, and ensured that these were correct with requirements, Figma.',
          'Collaborated with QA teams and BE teams to understand, and troubleshoot reported bugs, ensuring prompt resolution.',
          'Designed schema and entities for the database.',
          'Implemented API for CRUD operations, business logic, and workflows for the system.',
          'Optimized features enhance the UI/UX, optimize performance for the website, optimize re-render of the component by using hooks (useMemo, useCallback, useRef, …), memo, lazy loading, etc.',
        ],
      },
      {
        name: 'Nokia Altiplano',
        technologies:
          'Java, Javascript, Robot Framework, Docker, Jenkins, and Jira.',
        description: 'A platform used to config network devices.',
        reponsibility: [
          'Developed and implemented new features for product releases and user stories. ',
          'Conducted daily meetings with Indian customers and Demo features for them.',
          'Performed critical bug fixes and rigorous code reviews to ensure product stability. ',
          'Introduced unit testing, and automation tests to enhance development feedback and code quality.',
          'Using Jenkins to automate the build process and merge code to the master branch.',
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
