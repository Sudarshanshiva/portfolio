export const personalInfo = {
  name: "Sudarshan Kumar",
  title: "Software Engineer",
  subtitle: "Android & Cross-Platform Mobile Specialist",
  tagline: "Building high-performance Android & Flutter applications with Kotlin, Jetpack Compose, and modern architecture.",
  location: "Hyderabad, India",
  phone: "+91 6299146175",
  email: "contactshiva403@gmail.com",
  linkedin: "https://www.linkedin.com/in/sudarshan-kumar-61a97128b/",
  leetcode: "https://leetcode.com/u/Sudarshan27/",
  github: "https://github.com/Sudarshanshiva",
  resumeLink: "https://drive.google.com/file/d/1ZRC7uewsWoTnfGzYhWW1WOfE_WjBqOdo/view?usp=sharing",
  objective: "Software Engineer with hands-on experience building, testing, and debugging Android and cross-platform applications using Kotlin, Jetpack Compose, and Flutter. Skilled in root-cause analysis, defect tracking, and troubleshooting across the development lifecycle. Delivered a production React-to-Flutter migration and contributed features across three live Android apps. Strong foundation in Data Structures & Algorithms, OOP, OS, and DBMS; SIH 2022 national hackathon winner.",
  stats: [
    { label: "Production Apps", value: "3+", description: "Live Android & Flutter apps shipped" },
    { label: "Hackathon Winner", value: "1st", description: "Smart India Hackathon 2022 Winner" },
    { label: "DSA & Problem Solving", value: "550+", description: "450+ LeetCode, 100+ CodeChef solved" },
    { label: "Degree", value: "B.Tech CS", description: "Rungta College (2021-2025)" }
  ]
};

export const education = {
  degree: "Bachelor of Computer Science",
  institution: "Rungta College of Engineering and Technology",
  period: "2021 - 2025",
  location: "Bhilai, Chhattisgarh, India"
};

export const skills = {
  languages: [
    { name: "Kotlin", level: "Advanced", primary: true, icon: "android" },
    { name: "Dart", level: "Advanced", primary: true, icon: "flutter" },
    { name: "Java", level: "Intermediate", primary: true },
    { name: "SQL", level: "Intermediate" },
    { name: "C", level: "Basics" }
  ],
  frameworks: [
    { name: "Flutter", category: "Cross-Platform", primary: true },
    { name: "Jetpack Compose", category: "Native Android", primary: true },
    { name: "BLoC Architecture", category: "State Management", primary: true },
    { name: "RoomDB", category: "Android Persistence" },
    { name: "Firebase", category: "Backend / Auth / DB" },
    { name: "Node.js", category: "Backend APIs" },
    { name: "MongoDB", category: "NoSQL DB" }
  ],
  csFundamentals: [
    "Data Structures & Algorithms (DSA)",
    "Object-Oriented Programming (OOP)",
    "Operating Systems (OS)",
    "Database Management Systems (DBMS)",
    "Computer Networks (CN)"
  ],
  tools: [
    "Android Studio",
    "Postman",
    "Visual Studio Code",
    "NetBeans",
    "Git & GitHub",
    "Linux",
    "Windows"
  ]
};

export const experiences = [
  {
    role: "Junior Software Engineer",
    company: "Vigocare",
    location: "Hyderabad, India",
    period: "Sep 2025 - Aug 2026",
    type: "Full-Time",
    highlights: [
      "Led the migration of a production application from React to Flutter using the BLoC architecture, delivering 30% of the codebase — UI screens, business logic, and state management — for a seamless cross-platform transition.",
      "Shipped new features, bug fixes, and performance improvements across three live Android applications using Kotlin, Jetpack Compose, and Flutter, reducing UI load latency and improving app stability.",
      "Partnered with cross-functional design, QA, and backend teams to ship high-quality, user-focused mobile applications on schedule, maintaining clean, maintainable, and scalable code.",
      "Debugged and resolved production issues through systematic root-cause analysis and profiling, improving app reliability and reducing crash reports.",
      "Tracked, documented, and prioritized defects using GitHub Issues, collaborating with developers to verify fixes before release."
    ],
    techStack: ["Kotlin", "Jetpack Compose", "Flutter", "BLoC Architecture", "React", "GitHub Issues", "Profiling"]
  }
];

export const projects = [
  {
    id: "developer-pr",
    title: "DeveloperPR – AI-Powered GitHub Pull Request Code Reviewer & Developer Tool",
    subtitle: "Flutter & Dart — GitHub",
    category: "Android & Mobile",
    period: "Featured AI Tool",
    badge: "🤖 AI-Powered Flutter Tool",
    description: "Engineered an automated GitHub PR review tool in Flutter/Dart powered by an AI model, analyzing complex code diffs in real-time to detect security vulnerabilities, memory leaks, architectural risks, and test coverage gaps.",
    highlights: [
      "Engineered an automated GitHub PR review tool in Flutter/Dart powered by an AI model, analyzing complex code diffs in real-time to detect security vulnerabilities, memory leaks, architectural risks, and test coverage gaps.",
      "Built a high-resilience networking & LLM parsing pipeline featuring dynamic AI model discovery, rate-limiting interceptors, exponential retries, and a custom fault-tolerant JSON repair engine to handle truncated LLM token streams gracefully.",
      "Architected a clean layered codebase using BLoC state management and the repository pattern, decoupling business logic from UI components to optimize cross-platform performance and deliver low-latency PR reviews."
    ],
    techStack: ["Flutter", "Dart", "BLoC", "LLM APIs", "JSON Repair Engine", "GitHub REST API"],
    links: {
      github: "https://github.com/Sudarshanshiva/DeveloperPR",
      demo: null
    }
  },
  {
    id: "epfo-grievance",
    title: "EPFO (Employees' Provident Fund Organisation) Related Issue",
    subtitle: "Smart India Hackathon 2022, 1st Place (IIT Dhanbad)",
    category: "Full-Stack Web & API",
    period: "SIH 2022",
    badge: "🏆 1st Place Winner (IIT Dhanbad)",
    description: "Designed and built a full-stack application to streamline EPFO (Employees' Provident Fund Organisation) grievance handling and improve accessibility for end users.",
    highlights: [
      "Designed and built a full-stack application to streamline EPFO grievance handling and improve accessibility for end users across India.",
      "Built REST APIs with Node.js and MongoDB to manage user requests, status tracking, and grievance resolution.",
      "Presented and demonstrated live to a national panel of expert hackathon judges at IIT Dhanbad."
    ],
    techStack: ["Java", "Node.js", "MongoDB", "REST APIs", "Express"],
    links: {
      github: "https://github.com/Sudarshanshiva",
      demo: null
    }
  }
];

export const achievements = [
  {
    title: "Smart India Hackathon 2022 - 1st Place Winner",
    organization: "Ministry of Education & IIT Dhanbad",
    date: "2022",
    description: "Secured 1st Place nationally among thousands of competing teams by engineering an automated EPFO grievance handling platform.",
    badge: "National Winner"
  },
  {
    title: "IDE (Innovation Design and Entrepreneurship) Bootcamp",
    organization: "IIT Bhubaneswar & AICTE",
    date: "2023",
    description: "Participated in an intensive hands-on bootcamp focusing on design thinking, startup validation, product development, and venture pitching.",
    badge: "Participant"
  },
  {
    title: "Competitive Programming & Problem Solving",
    organization: "LeetCode & CodeChef",
    date: "Active",
    description: "Solved 450+ problems on LeetCode and 100+ on CodeChef, strengthening core Data Structures & Algorithms and problem-solving skills.",
    badge: "550+ Problems Solved"
  }
];
