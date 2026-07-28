export interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'Backend' | 'AI' | 'Enterprise';
  tagline: string;
  description: string;
  architectureOverview: string;
  githubUrl: string;
  liveUrl?: string;
  image: string;
  fallbackImage: string;
  featured: boolean;
  techStack: string[];
  features: string[];
  challenges: string[];
  optimizations: string[];
  database: string;
  auth: string;
  apis: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Internship' | 'Remote';
  isCurrent: boolean;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  icon: string;
  skills: string[];
  credentialUrl?: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  tags: string[];
}

export interface TimelineMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
}

export const PERSONAL_INFO = {
  name: "Himanshu Vishwakarma",
  roleTitle: "Full Stack Java Developer & AI Engineer",
  subtitles: ["Full Stack Java Developer", "Backend Engineer", "AI Enthusiast", "Spring Boot & React Specialist"],
  bio: "Full-Stack Java Developer and AI Engineer specializing in high-performance backend systems, modern web architectures, and AI integrations. Passionate about building robust microservices, production-ready React UIs, and intuitive software solutions.",
  location: "Mirzapur, Uttar Pradesh, India",
  email: "iamcoolhimanshu.9636@gmail.com",
  phone: "+91-6392085869",
  linkedin: "https://www.linkedin.com/in/himanshu146/",
  github: "https://github.com/iamcoolhimanshu",
  instagram: "https://www.instagram.com/06_himanshuu/",
  profileImage: "/profile.jpg",
  education: {
    institution: "Dr. A.P.J. Abdul Kalam Technical University",
    location: "Lucknow, Uttar Pradesh",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    period: "2022 – 2026",
    cgpa: "7.47 CGPA",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering"
    ]
  },
  philosophy: "Writing clean, modular, scalable code that bridges backend reliability with delightful frontend user experiences.",
  careerGoal: "Building cloud-native, high-throughput applications and integrating agentic AI capabilities into enterprise systems."
};

export const PROJECTS: Project[] = [
  {
    id: "lifeos",
    title: "LifeOS - AI Productivity System",
    category: "AI",
    tagline: "An AI-powered personal operating system for habits, tasks & cognitive focus tracking.",
    description: "LifeOS is a full-stack, AI-enhanced life productivity platform designed to streamline daily goal setting, habit streak analytics, task management, and focus cycles with dynamic AI recommendations.",
    architectureOverview: "Built with a modern Spring Boot backend architecture utilizing Spring AI and microservice principles. Communicates via RESTful APIs with JWT security to a responsive React 18 TypeScript web client.",
    githubUrl: "https://github.com/iamcoolhimanshu/LifeOS",
    liveUrl: "https://lifeos-frontend-qxsy.onrender.com/",
    image: "/projects/lifeos.png",
    fallbackImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    techStack: ["Java", "Spring Boot", "Spring AI", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "JWT", "REST APIs"],
    features: [
      "AI-driven task prioritization & personalized daily energy insights",
      "Pomodoro focus session timer with completion analytics",
      "Interactive habit streak trackers and milestone logs",
      "Full role-based access control and encrypted JWT session state"
    ],
    challenges: [
      "Optimizing prompt responses from LLM APIs while minimizing latencies",
      "Ensuring real-time synchronization between timer state and backend storage"
    ],
    optimizations: [
      "Implemented server-side response caching for non-volatile metrics",
      "Optimized bundle size using dynamic code splitting in Vite"
    ],
    database: "PostgreSQL with normalized schemas for users, habits, & logs",
    auth: "Stateless JWT Authentication with refresh tokens",
    apis: ["Spring AI OpenAI Interface", "Custom REST Services", "User Analytics Service"]
  },
  {
    id: "vantoor-medcity",
    title: "Vantoor Medcity - Hospital Management",
    category: "Enterprise",
    tagline: "Comprehensive healthcare portal for appointments, medical records & hospital workflow.",
    description: "Vantoor Medcity is an enterprise-grade hospital management system enabling online appointment bookings, patient history records, doctor schedule management, and role-based staff administration.",
    architectureOverview: "Decoupled architecture featuring a Spring Boot backend, Spring Security with role-based authorization rules, and a clean web frontend interface.",
    githubUrl: "https://github.com/iamcoolhimanshu/Vantoor-Medcity",
    liveUrl: "https://vantoor-medcity-1.onrender.com/",
    image: "/projects/vantoor-medcity.png",
    fallbackImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    techStack: ["Java", "Spring Boot", "Spring Security", "Hibernate/JPA", "MySQL", "React", "REST APIs", "JWT"],
    features: [
      "Multi-role user authentication (Patients, Doctors, Hospital Staff, Admin)",
      "Real-time appointment slot reservation and calendar scheduling",
      "Digital prescription management and patient health history",
      "Comprehensive hospital analytics dashboard and department management"
    ],
    challenges: [
      "Designing complex database relationships between doctors, slots, and medical records",
      "Preventing overlapping appointment reservations during high concurrent traffic"
    ],
    optimizations: [
      "Database transaction isolation locks during reservation updates",
      "Optimized Hibernate JPA fetch strategies to resolve N+1 query bottlenecks"
    ],
    database: "MySQL relational database with indexed tables for doctors & slots",
    auth: "Spring Security with Role-Based Access Control (RBAC) & JWT",
    apis: ["Appointments API", "Patient Billing API", "Doctor Directory API"]
  },
  {
    id: "ecommerce-app",
    title: "E-Commerce Shopping Platform",
    category: "Full Stack",
    tagline: "Scalable online store featuring product discovery, cart, orders & payments.",
    description: "A production-grade e-commerce application providing a smooth online shopping experience, including interactive product discovery, multi-item cart management, order history tracking, and secure checkout workflows.",
    architectureOverview: "Layered Spring Boot application architecture with MVC separation, Repository patterns, REST APIs, and modern React interface.",
    githubUrl: "https://github.com/iamcoolhimanshu/E-Commerce",
    image: "/projects/ecommerce.png",
    fallbackImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    techStack: ["Java", "Spring Boot", "MySQL", "React", "REST APIs", "JWT", "Hibernate/JPA", "Tailwind CSS"],
    features: [
      "Product catalog with instant search, category filters, and sorting",
      "Persistent user shopping cart with dynamic price calculations",
      "Order placement workflow with role-based JWT authentication",
      "Admin panel for managing product inventory and monitoring user orders"
    ],
    challenges: [
      "Handling concurrent cart updates and inventory stock verification",
      "Maintaining state consistency across page refreshes"
    ],
    optimizations: [
      "Used indexing on MySQL query columns (category, price, title)",
      "Client-side state caching using browser storage and context providers"
    ],
    database: "MySQL with normalized product, user, and order schema tables",
    auth: "Role-based JWT Security",
    apis: ["Products API", "Cart API", "Order Management API", "Auth API"]
  },
  {
    id: "travel-system",
    title: "Travel Management System",
    category: "Full Stack",
    tagline: "All-in-one travel booking and trip itinerary planner.",
    description: "Architected a full-stack travel booking application enabling users to discover destination packages, make reservations, cancel bookings, and manage personal travel itineraries.",
    architectureOverview: "Spring Boot RESTful service architecture backed by MySQL schemas for trip packages, reservations, and customer details.",
    githubUrl: "https://github.com/iamcoolhimanshu",
    image: "/projects/travel.png",
    fallbackImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    techStack: ["Java", "Spring Boot", "MySQL", "REST APIs", "JWT", "Hibernate/JPA", "HTML/CSS"],
    features: [
      "Destination package search with dynamic itinerary displays",
      "Instant reservation booking and cancellation capabilities",
      "Customer booking history and invoice details generation"
    ],
    challenges: ["Schema normalization across multi-city travel itineraries"],
    optimizations: ["Optimized SQL query joins for multi-table queries"],
    database: "MySQL",
    auth: "JWT Authentication",
    apis: ["Destinations API", "Reservations API"]
  },
  {
    id: "student-management",
    title: "Student Management Platform",
    category: "Backend",
    tagline: "Dockerized academic CRUD platform for student enrollment & records.",
    description: "Built a full-stack academic platform supporting CRUD operations for students, course directory catalog, enrollments, and academic reports with full Docker containerization.",
    architectureOverview: "Spring Boot application packaged into Docker containers with Spring Security authorization and Hibernate/JPA ORM persistence layer.",
    githubUrl: "https://github.com/iamcoolhimanshu",
    image: "/projects/student-management.png",
    fallbackImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    techStack: ["Java", "Spring Boot", "Docker", "MySQL", "Thymeleaf", "Spring Security", "JWT", "Hibernate/JPA"],
    features: [
      "Student record administration and automated grade transcripts",
      "Course registration, capacity validation, and enrollment tracking",
      "Dockerized setup for seamless environment deployment"
    ],
    challenges: ["Ensuring transaction consistency during course enrollment overload"],
    optimizations: ["Containerized deployment using multi-stage Docker builds"],
    database: "MySQL with Hibernate ORM",
    auth: "Spring Security & JWT",
    apis: ["Student API", "Course Enrollment API"]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "real-it-solution",
    role: "Java Full Stack Developer",
    company: "Real IT Solution Pune",
    period: "Feb 2026 – Present",
    location: "Remote",
    type: "Remote",
    isCurrent: true,
    description: "Engineered scalable backend microservices and modern frontend applications using Java, Spring Boot, React, and integrated modern AI development workflows.",
    responsibilities: [
      "Designing and implementing scalable RESTful APIs using Java 17+, Spring Boot, and Spring MVC.",
      "Building responsive frontend user interfaces using React, TypeScript, and modern styling libraries.",
      "Optimizing MySQL database queries, indexing strategies, and ORM mappings to enhance system performance.",
      "Leveraging modern AI tools (Claude, Antigravity, ChatGPT, Spring AI) to accelerate development and integrate smart software features.",
      "Participating in agile sprints, technical architecture discussions, code reviews, and continuous deployment pipelines."
    ],
    achievements: [
      "Improved backend API latency by 35% through query optimization and caching.",
      "Architected clean, component-driven frontend structures reducing UI regression bugs."
    ],
    technologies: ["Java", "Spring Boot", "Spring MVC", "Spring Security", "React", "TypeScript", "MySQL", "Spring AI", "Docker", "Git"]
  },
  {
    id: "elevate-labs",
    role: "Java Developer Intern",
    company: "Elevate Labs",
    period: "Sep 2025 – Nov 2025",
    location: "Remote",
    type: "Internship",
    isCurrent: false,
    description: "Contributed to backend service development, REST API design, and database optimization in a collaborative agile engineering environment.",
    responsibilities: [
      "Developed robust backend RESTful APIs using Core Java, Spring Boot, and Hibernate JPA.",
      "Created normalized MySQL database schemas, wrote optimized SQL queries, and conducted debugging.",
      "Integrated version control using Git, adhered to clean code principles, and participated in sprint reviews."
    ],
    achievements: [
      "Successfully delivered 15+ backend endpoints with zero critical security flaws.",
      "Implemented comprehensive automated unit tests improving code coverage."
    ],
    technologies: ["Java", "Spring Boot", "Hibernate/JPA", "MySQL", "REST APIs", "Git", "Postman"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend Development",
    icon: "Server",
    skills: [
      { name: "Java (8 / 11 / 17)", level: 95, highlight: true },
      { name: "Spring Boot 3", level: 92, highlight: true },
      { name: "Spring MVC & Security", level: 88, highlight: true },
      { name: "Hibernate / JPA", level: 90 },
      { name: "Microservices Architecture", level: 85, highlight: true },
      { name: "RESTful API Design", level: 95, highlight: true },
      { name: "Thymeleaf", level: 80 }
    ]
  },
  {
    title: "Frontend & UI",
    icon: "Layout",
    skills: [
      { name: "React 18 / 19", level: 90, highlight: true },
      { name: "TypeScript", level: 88, highlight: true },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "Tailwind CSS v4", level: 92, highlight: true },
      { name: "HTML5 / CSS3 Design System", level: 95 }
    ]
  },
  {
    title: "Databases & Caching",
    icon: "Database",
    skills: [
      { name: "MySQL", level: 92, highlight: true },
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 80 },
      { name: "Redis Caching", level: 82 }
    ]
  },
  {
    title: "AI Tools & Frameworks",
    icon: "Bot",
    skills: [
      { name: "Spring AI", level: 85, highlight: true },
      { name: "Claude (Anthropic)", level: 90, highlight: true },
      { name: "Antigravity IDE & Agents", level: 95, highlight: true },
      { name: "ChatGPT (OpenAI)", level: 92 },
      { name: "Open Code", level: 88 },
      { name: "Python", level: 82 }
    ]
  },
  {
    title: "DevOps & Cloud Tools",
    icon: "Cloud",
    skills: [
      { name: "Docker Basics", level: 85, highlight: true },
      { name: "Git & GitHub", level: 95, highlight: true },
      { name: "Maven & Build Tools", level: 90 },
      { name: "Postman & API Testing", level: 92 },
      { name: "AWS Basics", level: 75 },
      { name: "Apache Kafka", level: 75 },
      { name: "IntelliJ IDEA & Eclipse", level: 95 }
    ]
  },
  {
    title: "Core Engineering Competencies",
    icon: "Cpu",
    skills: [
      { name: "Data Structures & Algorithms", level: 90, highlight: true },
      { name: "Object-Oriented Programming (OOP)", level: 95, highlight: true },
      { name: "API & System Architecture", level: 88 },
      { name: "Database Normalization & Design", level: 90 },
      { name: "CI/CD Basics & Clean Code", level: 85 }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-1",
    title: "Define a Microsoft AI Strategy",
    issuer: "Microsoft",
    date: "2025",
    icon: "Cpu",
    skills: ["AI Strategy", "Enterprise Cloud", "Machine Learning Concepts"],
    credentialUrl: "https://microsoft.com"
  },
  {
    id: "cert-2",
    title: "Introduction to Generative AI",
    issuer: "Google",
    date: "2025",
    icon: "Sparkles",
    skills: ["Generative AI", "LLM Fundamentals", "Prompting Techniques"],
    credentialUrl: "https://cloud.google.com"
  },
  {
    id: "cert-3",
    title: "Spring 6 & Spring Boot 3 Masterclass",
    issuer: "Udemy",
    date: "2025",
    icon: "Server",
    skills: ["Spring Boot 3", "Spring Security 6", "REST APIs", "Microservices"],
    credentialUrl: "https://udemy.com"
  },
  {
    id: "cert-4",
    title: "Java Basic Certificate",
    issuer: "HackerRank",
    date: "2024",
    icon: "Code",
    skills: ["Java Fundamentals", "Syntax & Logic", "Collection Framework"],
    credentialUrl: "https://hackerrank.com"
  },
  {
    id: "cert-5",
    title: "Introduction to Programming Using Java",
    issuer: "Udemy",
    date: "2024",
    icon: "Terminal",
    skills: ["Core Java", "OOP Principles", "Exception Handling"],
    credentialUrl: "https://udemy.com"
  },
  {
    id: "cert-6",
    title: "Java: Data Structures",
    issuer: "LinkedIn Learning",
    date: "2024",
    icon: "Network",
    skills: ["Data Structures", "Algorithms", "Time Complexity Analysis"],
    credentialUrl: "https://linkedin.com"
  },
  {
    id: "cert-7",
    title: "MySQL Database Certification",
    issuer: "HackerRank",
    date: "2024",
    icon: "Database",
    skills: ["SQL Queries", "Database Joins", "Aggregation & Indexing"],
    credentialUrl: "https://hackerrank.com"
  },
  {
    id: "cert-8",
    title: "Introduction to Programming Using Python",
    issuer: "Udemy",
    date: "2024",
    icon: "FileCode",
    skills: ["Python Fundamentals", "Scripting", "Data Structures"],
    credentialUrl: "https://udemy.com"
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "post-funny-1",
    title: "The Night a Missing Semicolon & NullPointer Almost Ended My Sanity",
    slug: "missing-semicolon-null-pointer-2am-story",
    excerpt: "A hilarious true tale of a 2:45 AM debugging session, 3 cold cups of coffee, and finding out a silent Java null check was caused by a single typo in a JPA query.",
    category: "Developer Stories & Humor",
    readTime: "4 min read",
    date: "Feb 2026",
    tags: ["Java", "Debugging Humor", "Spring Boot", "Coffee"],
    content: [
      "# The Night a Missing Semicolon & NullPointer Almost Ended My Sanity",
      "",
      "It was 2:45 AM on a chilly Tuesday night. My IDE dark mode was glowing like a portal to the Nether region. I had consumed three cups of cold instant coffee, and my Java Spring Boot API was stubbornly returning:",
      "",
      "java.lang.NullPointerException: Cannot invoke User.getAccountStatus() because user is null",
      "",
      "## The Suspects",
      "1. The Database: 'Did PostgreSQL go down?' (No, it was happily running on port 5432).",
      "2. Spring Security: 'Is JWT stripping the user principal?' (No, authorization passed cleanly).",
      "3. My Brain: 'Maybe I forgot how Java works after 12 hours of coding?' (Extremely plausible).",
      "",
      "## The Discovery",
      "After 45 minutes of adding System.out.println('HERE 1'), System.out.println('HERE 2'), and System.out.println('WHY GOD WHY'), I finally noticed it.",
      "",
      "In my JPA Query annotation, I had written :emial instead of :email!",
      "Hibernate didn't throw a syntax error—it just quietly bound null to the query parameter!",
      "",
      "## The Lesson",
      "1. Never debug SQL queries after 2 AM without double checking your spelling.",
      "2. AI assistants like Antigravity & Claude spot typos in 2 seconds that human eyes miss after 2 hours.",
      "3. Cold coffee tastes like regret, but fixing a bug at 3:15 AM feels like winning a Nobel Prize in Computer Science."
    ].join("\n")
  },
  {
    id: "post-funny-2",
    title: "I Asked AI to Code-Review My Spring Boot Microservice: Here is What Happened",
    slug: "ai-code-review-spring-boot-story",
    excerpt: "When I ran an automated AI code review on my backend service, it replaced 40 lines of verbose Java boilerplate with 2 Lombok annotations and then critiqued my variable naming choices.",
    category: "AI & Tech Stories",
    readTime: "5 min read",
    date: "Feb 2026",
    tags: ["AI Tools", "Spring AI", "Claude", "Clean Code"],
    content: [
      "# I Asked AI to Code-Review My Spring Boot Microservice",
      "",
      "Last week, I decided to run my newly written Spring Boot REST controller through Antigravity AI Agent and Claude for an automated code review.",
      "",
      "I expected mild feedback like 'Good job Himanshu, clean architecture!'",
      "",
      "Instead, the AI gave me a humble reality check.",
      "",
      "## Lesson 1: Boilerplate Exterminator",
      "I had written explicit getters, setters, 2 constructors, and custom equals() and hashCode() methods across 6 DTO classes. Total lines of code: 240 lines.",
      "",
      "The AI prompt returned:",
      "-> 'Himanshu, you can delete 220 lines by replacing them with @Data, @NoArgsConstructor, and @AllArgsConstructor from Lombok. Also, consider Java 17 record classes.'",
      "",
      "It felt like watching a master chef turn my complex 15-ingredient recipe into a 2-step masterpiece.",
      "",
      "## Lesson 2: The Variable Naming Intervention",
      "In my service layer, I had a loop using variable name 'lst'. The AI gently commented:",
      "-> 'Variable name lst is ambiguous. Rename to activeUserSubscriptions for clear domain-driven intent.'",
      "",
      "## The Verdict",
      "AI tools don't take your job—they make you a 10x developer. Embracing AI agents like Spring AI and Antigravity turns tedious boilerplate writing into pure architectural design!"
    ].join("\n")
  },
  {
    id: "post-funny-3",
    title: "Why Coffee is Scientifically Required for Java Developers: A Technical Analysis",
    slug: "coffee-java-developer-technical-analysis",
    excerpt: "A humorous technical paper mapping JVM Garbage Collection sweep cycles directly to developer caffeine intake levels and bug discovery rates.",
    category: "Developer Humor",
    readTime: "3 min read",
    date: "Jan 2026",
    tags: ["Java", "Humor", "Coffee", "JVM"],
    content: [
      "# Why Coffee is Scientifically Required for Java Developers",
      "",
      "It is a well-known axiom in computer science:",
      "",
      "Developer (noun): An organism that converts caffeine and pizza into clean Java code.",
      "",
      "## The JVM vs Human Mental Heap Spectrum",
      "",
      "0 Cups Coffee -> Mental Heap: OutOfMemoryError | GC Pause: Frozen | Bug Rate: High",
      "1 Cup Coffee  -> Mental Heap: 512MB Allocated  | GC Pause: Mark-and-Sweep Active | Bug Rate: Medium",
      "2 Cups Coffee -> Mental Heap: 4GB G1GC Optimized | GC Pause: Zero Latency | Bug Rate: ZERO (Peak Performance)",
      "4+ Cups Coffee -> Mental Heap: Thread Lockup   | GC Pause: Hyperactive Thrashing | Writes 5 new frameworks",
      "",
      "## Conclusion",
      "Java was named after Java coffee for a reason. Keep your coffee hot, your Spring Boot services stateless, and your JVM heap well-tuned!"
    ].join("\n")
  },
  {
    id: "post-funny-4",
    title: "Monolith vs Microservices: Expectations vs 3 AM Production Reality",
    slug: "monolith-vs-microservices-production-reality",
    excerpt: "The funny truth about distributed tracing, network latency, and why 'let's split this app into 15 microservices' sounds great until a service mesh goes rogue.",
    category: "Architecture Stories",
    readTime: "6 min read",
    date: "Jan 2026",
    tags: ["Microservices", "Spring Boot", "Docker", "Architecture"],
    content: [
      "# Monolith vs Microservices: Expectations vs 3 AM Production Reality",
      "",
      "Every engineering team reaches a point where someone points to the codebase and says:",
      "",
      "'This monolith is getting too big! Let's split it into 12 Spring Boot microservices inside Docker containers!'",
      "",
      "Everyone cheers. Whiteboards are filled with neat boxes and arrows.",
      "",
      "## The Expectation",
      "- Service A handles Users.",
      "- Service B handles Payments.",
      "- Service C handles Notifications.",
      "- Everything runs seamlessly with 99.999% uptime!",
      "",
      "## The 3 AM Production Reality",
      "Suddenly, a user clicks 'Buy Now', and:",
      "1. User Service makes a REST call to Payment Service.",
      "2. Payment Service calls Notification Service.",
      "3. Notification Service tries to verify User status via User Service.",
      "4. Result: An infinite circular REST loop causing 100% CPU spikes across 3 cloud nodes!",
      "",
      "## The Golden Rule",
      "Don't build microservices just because it's trendy. Build microservices when team size and domain boundaries strictly require independent deployments. And always use circuit breakers like Resilience4j!"
    ].join("\n")
  },
  {
    id: "post-1",
    title: "Building Resilient Backend Microservices with Java & Spring Boot",
    slug: "building-resilient-backend-microservices",
    excerpt: "Explore battle-tested strategies for designing distributed microservices with robust fault tolerance, rate limiting, and JWT stateless security.",
    category: "Backend Architecture",
    readTime: "6 min read",
    date: "Feb 2026",
    tags: ["Java", "Spring Boot", "Microservices", "REST APIs"],
    content: [
      "# Building Resilient Backend Microservices with Java & Spring Boot",
      "",
      "In modern software development, building monolithic applications often leads to scaling bottlenecks. Transitioning to microservice architectures allows engineering teams to independently deploy, scale, and maintain individual domains.",
      "",
      "## Key Principles of Microservice Architecture",
      "1. Single Responsibility: Each service manages its own database domain.",
      "2. Stateless Authentication: Using JSON Web Tokens (JWT) allows services to verify requests independently without central session databases.",
      "3. Resilience & Circuit Breaking: Implementing fallback patterns prevents cascading failures when downstream services experience latency spikes.",
      "",
      "## Database Optimization with JPA & Hibernate",
      "Avoid the classic N+1 query problem by leveraging explicit JOIN FETCH queries or @EntityGraph annotations."
    ].join("\n")
  },
  {
    id: "post-2",
    title: "Integrating Spring AI & Agentic Tools into Full-Stack Systems",
    slug: "integrating-spring-ai-and-agentic-tools",
    excerpt: "How to connect Spring Boot backends with Anthropic Claude and OpenAI models via Spring AI to deliver context-aware user experiences.",
    category: "AI Engineering",
    readTime: "8 min read",
    date: "Jan 2026",
    tags: ["Spring AI", "AI Tools", "Java", "React"],
    content: [
      "# Integrating Spring AI & Agentic Tools into Full-Stack Systems",
      "",
      "Generative AI is shifting from standalone chatbots to embedded core capabilities within full-stack applications. Spring AI provides a unified API abstraction for interacting with AI models natively in Java.",
      "",
      "## Why Spring AI?",
      "Spring AI eliminates vendor lock-in by abstracting model providers (OpenAI, Anthropic Claude, HuggingFace) behind standard Spring interfaces.",
      "",
      "## Developer Workflow Boosters",
      "Using AI IDE assistants like Antigravity and Claude alongside Spring Boot allows rapid prototype generation, automated unit testing, and instant architecture validation."
    ].join("\n")
  },
  {
    id: "post-3",
    title: "Designing High-Performance UIs with React 19 and Tailwind CSS v4",
    slug: "designing-high-performance-uis",
    excerpt: "A deep dive into component design systems, smooth 60fps animations with Framer Motion, and lightweight canvas visuals.",
    category: "Frontend Craftsmanship",
    readTime: "5 min read",
    date: "Dec 2025",
    tags: ["React", "TypeScript", "Tailwind CSS", "Design"],
    content: [
      "# Designing High-Performance UIs with React 19 and Tailwind CSS v4",
      "",
      "Creating a premium portfolio or SaaS interface requires a relentless focus on micro-interactions, responsive typography, and lightweight render loops.",
      "",
      "## Design Token Philosophy",
      "Avoid hardcoded color hex values across components. Instead, establish semantic design tokens in CSS variables."
    ].join("\n")
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: "2026",
    title: "Java Full Stack Developer",
    subtitle: "Real IT Solution Pune (Remote)",
    description: "Architecting backend microservices, Spring AI features, React interfaces, and optimizing database performance.",
    badge: "Current Role"
  },
  {
    year: "2025",
    title: "Java Developer Intern & Major Full-Stack Projects",
    subtitle: "Elevate Labs & Open Source",
    description: "Built and deployed LifeOS AI productivity suite, Vantoor Medcity Hospital Portal, and E-Commerce platforms.",
    badge: "Internship & Portfolio"
  },
  {
    year: "2024",
    title: "Advanced Java & React Ecosystem Mastery",
    subtitle: "Spring Boot, React, TypeScript & Docker",
    description: "Mastered RESTful API architectures, JWT security, relational database normalization, and containerization.",
    badge: "Milestone"
  },
  {
    year: "2023",
    title: "Core Computer Science & Backend Foundations",
    subtitle: "Object-Oriented Programming & DSA",
    description: "Built strong foundation in Data Structures, Algorithms, MySQL, and Core Java development patterns."
  },
  {
    year: "2022",
    title: "B.Tech Computer Science & Engineering",
    subtitle: "Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
    description: "Commenced B.Tech in CSE (2022-2026). Achieved an impressive 7.47 CGPA.",
    badge: "Academic"
  }
];
