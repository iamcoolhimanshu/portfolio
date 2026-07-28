export interface KnowledgeItem {
  keywords: string[];
  response: string;
}

export const AI_KNOWLEDGE_BASE: KnowledgeItem[] = [
  {
    keywords: ["experience", "work", "company", "real it solution", "elevate labs", "job", "role"],
    response: "Himanshu is currently working as a **Java Full Stack Developer** at **Real IT Solution Pune** (Remote, Feb 2026 – Present), where he builds backend microservices using Spring Boot, React, MySQL, and Spring AI. Previously, he completed a Java Developer Internship at **Elevate Labs** (Sep 2025 – Nov 2025), delivering high-performance REST APIs and database optimizations."
  },
  {
    keywords: ["project", "projects", "lifeos", "vantoor", "medcity", "ecommerce", "hospital", "travel"],
    response: "Himanshu has engineered several production-ready full-stack applications:\n1. **LifeOS**: AI-powered productivity & habit system built with Spring Boot, Spring AI, PostgreSQL, and React.\n2. **Vantoor Medcity**: Comprehensive hospital management suite with RBAC, appointment scheduling, and patient history.\n3. **E-Commerce Platform**: Full-stack shopping app with JWT auth, cart tracking, and MySQL.\n4. **Travel Management System** & **Dockerized Student Management System**."
  },
  {
    keywords: ["skills", "java", "spring", "react", "tech stack", "technologies", "ai tools", "docker"],
    response: "Himanshu's primary technical capabilities include:\n• **Backend**: Core Java (8/11/17/21/25), Spring Boot 3, Spring Security, Hibernate/JPA, Microservices, REST APIs\n• **Frontend**: React 18/19, TypeScript, JavaScript, Tailwind CSS v4\n• **AI**: Spring AI, Claude (Anthropic), Antigravity IDE, ChatGPT (OpenAI), Open Code, Python\n• **Databases & DevOps**: MySQL, PostgreSQL, MongoDB, Redis, Docker, Git/GitHub, Maven, Postman"
  },
  {
    keywords: ["education", "degree", "aktu", "college", "cgpa", "marks", "university"],
    response: "Himanshu is pursuing his **Bachelor of Technology in Computer Science & Engineering** from **Dr. A.P.J. Abdul Kalam Technical University (AKTU)**, Lucknow (2022 – 2026) with an impressive **7.47 CGPA**."
  },
  {
    keywords: ["contact", "email", "phone", "linkedin", "github", "hire", "reach", "location"],
    response: "You can connect with Himanshu directly via:\n• **Email**: iamcoolhimanshu.9636@gmail.com\n• **LinkedIn**: linkedin.com/in/himanshu146/\n• **GitHub**: github.com/iamcoolhimanshu\n• **Phone**: +91-6392085869\n• **Location**: Mirzapur, Uttar Pradesh, India"
  },
  {
    keywords: ["certifications", "certificates", "google", "microsoft", "udemy", "hackerrank"],
    response: "Himanshu holds certifications from top organizations:\n1. *Define a Microsoft AI Strategy* (Microsoft)\n2. *Introduction to Generative AI* (Google)\n3. *Spring 6 & Spring Boot 3 Masterclass* (Udemy)\n4. *Java Basic & MySQL Certifications* (HackerRank)\n5. *Java Data Structures* (LinkedIn Learning)"
  }
];

export const getAiResponse = (userQuery: string): string => {
  const queryLower = userQuery.toLowerCase().trim();
  
  if (!queryLower) {
    return "Hello! I am Himanshu's portfolio AI assistant. How can I help you explore his experience, projects, skills, or resume today?";
  }

  for (const item of AI_KNOWLEDGE_BASE) {
    if (item.keywords.some(keyword => queryLower.includes(keyword))) {
      return item.response;
    }
  }

  return `Thanks for asking! Himanshu Vishwakarma is a Full Stack Java Developer & AI Engineer proficient in Spring Boot, React, Microservices, and AI integrations (Spring AI, Claude, Antigravity). For specific inquiries, feel free to drop him an email at **iamcoolhimanshu.9636@gmail.com** or ask me about his **projects**, **skills**, or **work experience**!`;
};
