export const personalInfo = {
  name: "Sudarshan Kumar",
  title: "Software Engineer",
  subtitle: "Android & Cross-Platform Mobile Specialist",
  tagline: "Building high-performance Android & Flutter applications with Kotlin, Jetpack Compose, and modern architecture.",
  location: "Hyderabad, India",
  phone: "+91 6299146175",
  email: "sudarshan6299146175@gmail.com",
  linkedin: "https://www.linkedin.com/in/sudarshan-kumar-61a97128b/",
  leetcode: "https://leetcode.com/u/Sudarshan27/",
  github: "https://github.com/Sudarshanshiva",
  objective: "Software Engineer with hands-on experience building and shipping Android and cross-platform applications using Kotlin, Jetpack Compose, and Flutter. Delivered a production React-to-Flutter migration and contributed features across three live Android apps. Strong foundation in Data Structures & Algorithms, OOP, and DBMS; SIH 2022 national hackathon winner.",
  stats: [
    { label: "Production Apps", value: "3+", description: "Live Android & Flutter apps shipped" },
    { label: "Hackathon Winner", value: "1st", description: "Smart India Hackathon 2022 Winner" },
    { label: "App Migration", value: "30%", description: "React to Flutter migration completed" },
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
    "Database Management Systems (DBMS)",
    "Operating Systems (OS)",
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
    period: "Feb 2026 - Aug 2026",
    type: "Full-Time",
    highlights: [
      "Contributed to the development and maintenance of three Android applications by implementing new features, fixing bugs, and improving application performance using Kotlin, Jetpack Compose, and Flutter.",
      "Collaborated with cross-functional teams to deliver high-quality, user-focused mobile applications.",
      "Followed modern Android development practices and wrote clean, maintainable, and scalable code."
    ],
    techStack: ["Kotlin", "Jetpack Compose", "Flutter", "Android Studio", "Git"]
  },
  {
    role: "Engineering Intern",
    company: "Vigocare",
    location: "Hyderabad, India",
    period: "Oct 2025 - Feb 2026",
    type: "Internship",
    highlights: [
      "Contributed to the migration of a production application from React to Flutter using the BLoC architecture.",
      "Completed approximately 30% of the application's migration, implementing UI screens, business logic, and state management.",
      "Gained hands-on experience in Flutter development, state management, and collaborative software development workflows."
    ],
    techStack: ["Flutter", "BLoC Architecture", "Dart", "React", "State Management"]
  }
];

export const projects = [
  {
    id: "developer-pr",
    title: "DeveloperPR - Pull Request & Review Management App",
    subtitle: "Android Application / Open-Source Developer Tool",
    category: "Android & Mobile",
    period: "Featured Project",
    badge: "📱 Open Source Repository",
    description: "A modern native Android application built with Kotlin and Jetpack Compose designed to streamline GitHub pull requests management, code review tracking, and developer productivity workflows.",
    highlights: [
      "Built clean declarative UI layouts using Jetpack Compose with reactive state management.",
      "Integrated Git & GitHub API endpoints for pull request status monitoring and repository insights.",
      "Followed Android modern app architecture (MVVM/Clean Architecture) with scalable component design."
    ],
    techStack: ["Kotlin", "Jetpack Compose", "Android Studio", "REST APIs", "Git"],
    links: {
      github: "https://github.com/Sudarshanshiva/DeveloperPR",
      demo: null
    }
  },
  {
    id: "epfo-grievance",
    title: "EPFO Grievance Resolution & Tracking System",
    subtitle: "Smart India Hackathon 2022 - 1st Place National Winner",
    category: "Full-Stack Web & API",
    period: "SIH 2022",
    badge: "🏆 1st Place Winner (IIT Dhanbad)",
    description: "Designed and built a full-stack application to streamline EPFO (Employees' Provident Fund Organisation) grievance handling and significantly improve accessibility for end users across India.",
    highlights: [
      "Built robust RESTful APIs with Node.js and MongoDB for user request management and real-time grievance status tracking.",
      "Streamlined EPFO service request workflows to facilitate speedier resolution of pension and provident fund queries.",
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
    title: "Active Competitive Programmer on LeetCode",
    organization: "LeetCode",
    date: "Ongoing",
    description: "Consistently solving complex algorithmic challenges in Data Structures, Dynamic Programming, and Graph theory.",
    badge: "Problem Solver"
  }
];
