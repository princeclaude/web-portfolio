// src/data/projectsData.js
export const projects = [
  {
    id: 1,
    title: "Online Store",
    cover: "/images/project1.jpg", // thumbnail
    screenshots: [
      "/images/project2.jpg",
      "/images/project3.jpg",
      "/images/project4.jpg",
    ],
    description:
      "A modern e-commerce SPA with Firebase auth, Cloud Firestore and Stripe.",
    tech: ["React", "Firebase", "Tailwind", "paystack"],
    live: "https://classicroyal.vercel.app",
    github: "https://github.com/princeclaude/online-store",
  },
  {
    id: 2,
    title: "Portfolio ",
    cover: "/images/pro1.jpg",
    screenshots: ["/images/pro2.jpg", "/images/pro3.jpg"],
    description:
      "Animated portfolio with dark mode, EmailJS contact form and GitHub API.",
    tech: ["Vite", "React", "Framer Motion", "EmailJS"],
    live: "https://web-portfolio-nine-bice.vercel.app",
    github: "https://github.com/princeclaude/web-portfolio",
  },

  {
    id: 3,
    title: "Crypto-tracker ",
    cover: "/images/project14.jpg",
    screenshots: [
      "/images/project11.jpg",
      "/images/project12.jpg",
      "/images/project13.jpg",
      "/images/projectcover.jpg",
    ],
    description:
      "A crypto tracker for keeping up with prices and activities of more than 200 crypto coins in real time. The app provides much more features to manage your crypto assests.",
    tech: ["Expo", "React native", "Coin-gecko Api"],
    live: "https://github.com/princeclaude/cryptotracker",
    github: "https://github.com/princeclaude/cryptotracker",
  },
];
