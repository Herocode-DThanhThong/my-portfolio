import avatar from "@/assests/avatar/avatar.jpg";
import educationProgramingProject from "@/assests/project/education-programing-website.png";
import blogProject from "@/assests/project/blog-website.png";

export const avatarImg = avatar;
export const projects = [
  {
    name: "Website Blog",
    technology:
      "Angular, Antd, Java Springboot, JWT, PostgreSQL, Redis, Docker",
    role: "Frontend, Backend",
    description: [
      "User: Register/login, authorization, verify email to activate accounts. View blogs, search for blogs, send requests to the admin to gain writing permissions, perform CRUD operations on blogs, view their blog posts, and view detailed blog posts.",
      "Admin: view all users, view all blog posts, approve, or reject requests to gain writing permissions.",
      "Using Redis to cache frequently requests for getting blogs and requests for gaining writing permissions using Redis, and clear the cache when creating, updating, or deleting blog posts. Schedule jobs to clear the Redis cache after a specific time.",
      "Deployment backend to Docker.",
    ],
    gitLink: "https://github.com/Herocode-DThanhThong/blog-project",
    img: blogProject,
  },
  {
    name: "Website Education Programing",
    technology: "ReactJs, Redux, Material UI, Springboot, PostgreSQL ",
    role: "Frontend, Backend",
    description: [
      "User: Register/Login, see all, search, register courses, learn lessons via video, text, and exercise in the courses. Manage their info, crud post in the community, chat with another user in the system, add friends/reject friends, chatbot, and so on.",
      "Admin: Management courses, lessons, users, learning pathways, statistic registrant, popular, and number of subscriber courses.",
      "Using Spring web socket to handle real-time features like commenting, liking, sharing posts, chatting and accepting/rejecting friends.",
      "Using ChatGPT API to build a chatbot to help users easily find solutions to issues quickly.",
    ],
    gitLink:
      "https://github.com/Herocode-DThanhThong/education-programing-project",
    img: educationProgramingProject,
  },
];
