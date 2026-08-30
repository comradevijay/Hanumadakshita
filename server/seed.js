import "dotenv/config";
import mongoose from "mongoose";
import Course from "./models/Course.js";

// Shared benefits
const defaultBenefits = {
  eyebrow: "Program Benefits",
  title: "Why choose this program?",
  items: [
    {
      icon: "check",
      title: "Job Guarantee",
      desc: "100% job assistance until you get placed.",
    },
    {
      icon: "mentor",
      title: "Industry Mentors",
      desc: "Learn from experienced professionals.",
    },
    {
      icon: "briefcase",
      title: "Real Projects",
      desc: "Build 5+ industry-ready applications.",
    },
    {
      icon: "star",
      title: "Portfolio Ready",
      desc: "Graduate with a professional portfolio.",
    },
  ],
};

const courses = [
  // ==========================================
  // PYTHON FULL STACK
  // ==========================================
  {
    slug: "python-full-stack",
    title: "Python Full Stack",
    tagline: "Django/Flask + React, ground up",
    description:
      "Core Python, OOP, and DSA basics, then Django/Flask on the backend paired with React on the frontend. Ends with a deployed capstone project you can show in interviews.",
    stack: ["Python", "Django", "Flask", "React", "PostgreSQL"],
    duration: "16 weeks",
    schedule: "Mon–Fri, 6:00–8:00 PM",
    seatsTotal: 20,
    seatsFilled: 6,
    benefits: defaultBenefits,

    roadmap: {
      eyebrow: "Course Roadmap",
      title: "Become job-ready in 100 days.",
      subtitle:
        "Master Python essentials to full-stack development in 100 days, with guaranteed placement support at the finish line.",

      phases: [
        {
          day: "Day 0 · Kickoff",
          phase: "01",
          title: "Python & Database",
          desc: "Master Python essentials, OOP concepts, and data structures. Learn SQL basics, database design, and CRUD operations while building strong programming logic.",
        },
        {
          day: "Day 30",
          phase: "02",
          title: "Backend with Django & Flask",
          desc: "Build REST APIs, handle authentication, and connect applications to real databases. Learn backend architecture and deployment fundamentals.",
        },
        {
          day: "Day 65",
          phase: "03",
          title: "Frontend Development",
          desc: "Master HTML, CSS, JavaScript, and React to build responsive and interactive user interfaces integrated with your backend.",
        },
        {
          day: "Day 95",
          phase: "04",
          title: "Project Development",
          desc: "Build real-world full-stack applications by combining frontend, backend, authentication, APIs, and databases into complete production-ready projects.",
        },
        {
          day: "Day 100",
          phase: "05",
          title: "Career Preparation",
          desc: "Enhance interview readiness through aptitude training, soft skills, mock interviews, Git/GitHub, resume building, and deployment preparation.",
        },
      ],
    },

    curriculum: {
      eyebrow: "Detailed Curriculum",
      title: "The complete Python full-stack curriculum.",
      subtitle:
        "A structured module-by-module learning path designed by industry experts.",

      intro: [
        {
          title: "Master Python essentials",
          desc: "Build a strong foundation with Python, OOPs concepts, data structures, file handling, and exception handling. Get hands-on with modern Python libraries (NumPy, Pandas).",
        },
        {
          title: "Django, Flask & REST APIs",
          desc: "Learn backend development and web frameworks through module-based projects, weekly assessments and mocks.",
        },
        {
          title: "Deploy real projects",
          desc: "Focus on database management, SQL queries, frameworks like Django and Flask, and build real-world full-stack projects.",
        },
      ],

      modules: [
        {
          title: "Python",
          topicsCount: 4,
          points: [
            "Master Python syntax and object-oriented principles",
            "Understand data types, operators and control structures",
            "Work with functions, modules and file handling",
            "Master exception handling and Pythonic best practices",
          ],
        },
        {
          title: "DSA",
          topicsCount: 4,
          points: [
            "Master data structures and algorithms fundamentals",
            "Solve 500+ coding challenges with optimal solutions",
            "Learn problem-solving and algorithmic thinking",
            "Build a strong foundation for technical interviews",
          ],
        },
        {
          title: "MySQL",
          topicsCount: 4,
          points: [
            "Master SQL queries and database operations",
            "Learn database design and normalization",
            "Understand relationships and indexing",
            "Practice database management and optimization",
          ],
        },
        {
          title: "HTML, CSS & JS",
          topicsCount: 4,
          points: [
            "Build structured content with semantic HTML",
            "Style responsive layouts with modern CSS & Bootstrap",
            "Create interactive UIs with JavaScript",
            "Master DOM manipulation and events",
          ],
        },
        {
          title: "Python Web Development",
          topicsCount: 4,
          points: [
            "Build web apps with Flask and Django",
            "Master templating, routing and form handling",
            "Implement sessions, authentication and middleware",
            "Connect web apps to databases using an ORM",
          ],
        },
        {
          title: "Frameworks & REST APIs",
          topicsCount: 4,
          points: [
            "Build RESTful services with Django REST Framework & FastAPI",
            "Implement authentication, validation and serialization",
            "Use Git, GitHub, Postman and deployment tools",
            "Containerize and deploy applications with Docker",
          ],
        },
        {
          title: "Data & AI Tools",
          topicsCount: 4,
          points: [
            "Work with NumPy and Pandas for data handling",
            "Create visualizations with Matplotlib, Seaborn & Plotly",
            "Integrate AI features using the OpenAI API",
            "Apply Python to real-world data and AI use cases",
          ],
        },
      ],
    },
  },

  // ==========================================
  // JAVA FULL STACK
  // ==========================================
  {
    slug: "java-full-stack",
    title: "Java Full Stack",
    tagline: "Core Java, Spring Boot, React",
    description:
      "Java fundamentals and DSA, Spring Boot for REST APIs, and React for the frontend. Focused on the patterns product-based companies actually interview for.",
    stack: ["Java", "Spring Boot", "React", "MySQL"],
    duration: "16 weeks",
    schedule: "Mon–Fri, 6:00–8:00 PM",
    seatsTotal: 20,
    seatsFilled: 11,
    benefits: defaultBenefits,

    roadmap: {
      eyebrow: "Course Roadmap",
      title: "Become job-ready in 100 days.",
      subtitle:
        "Master Core Java through enterprise Spring Boot development, with guaranteed placement support at the finish line.",

      phases: [
        {
          day: "Day 0 · Kickoff",
          phase: "01",
          title: "Core Java & Database",
          desc: "Learn Java fundamentals, OOP concepts, collections, exception handling, multithreading, and SQL database fundamentals.",
        },
        {
          day: "Day 30",
          phase: "02",
          title: "Spring Boot & Hibernate",
          desc: "Build enterprise backend applications using Spring Boot, REST APIs, JPA, Hibernate, authentication, and MySQL integration.",
        },
        {
          day: "Day 65",
          phase: "03",
          title: "Frontend Development",
          desc: "Master HTML, CSS, JavaScript, and React to create responsive interfaces and connect them with Spring Boot APIs.",
        },
        {
          day: "Day 95",
          phase: "04",
          title: "Project Development",
          desc: "Develop complete full-stack applications using Java, Spring Boot, React, REST APIs, authentication, and databases.",
        },
        {
          day: "Day 100",
          phase: "05",
          title: "Career Preparation",
          desc: "Prepare for technical interviews with Java coding practice, aptitude training, mock interviews, resume building, Git/GitHub, and deployment.",
        },
      ],
    },

    curriculum: {
      eyebrow: "Detailed Curriculum",
      title: "The complete Java full-stack curriculum.",
      subtitle:
        "A structured module-by-module learning path designed by industry experts.",

      intro: [
        {
          title: "Master Core Java",
          desc: "Build a strong foundation with Java syntax, OOPs concepts, collections, exception handling, and multithreading fundamentals.",
        },
        {
          title: "Spring Boot & REST APIs",
          desc: "Learn enterprise backend development through module-based projects, weekly assessments and mocks.",
        },
        {
          title: "Deploy real projects",
          desc: "Focus on database management, SQL queries, Spring Boot and Hibernate, and build real-world full-stack projects.",
        },
      ],

      modules: [
        {
          title: "Core Java",
          topicsCount: 4,
          points: [
            "Master Java syntax and object-oriented principles",
            "Understand data types, operators and control structures",
            "Work with collections, generics and exception handling",
            "Master multithreading and Java best practices",
          ],
        },
        {
          title: "DSA",
          topicsCount: 4,
          points: [
            "Master data structures and algorithms fundamentals",
            "Solve 500+ coding challenges with optimal solutions",
            "Learn problem-solving and algorithmic thinking",
            "Build a strong foundation for technical interviews",
          ],
        },
        {
          title: "MySQL",
          topicsCount: 4,
          points: [
            "Master SQL queries and database operations",
            "Learn database design and normalization",
            "Understand relationships and indexing",
            "Practice database management and optimization",
          ],
        },
        {
          title: "HTML, CSS & JS",
          topicsCount: 4,
          points: [
            "Build structured content with semantic HTML",
            "Style responsive layouts with modern CSS & Bootstrap",
            "Create interactive UIs with JavaScript",
            "Master DOM manipulation and events",
          ],
        },
        {
          title: "Spring Boot",
          topicsCount: 4,
          points: [
            "Build REST APIs with Spring Boot and Spring MVC",
            "Master dependency injection and Spring architecture",
            "Implement sessions, authentication and middleware",
            "Connect applications to databases using JPA/Hibernate",
          ],
        },
        {
          title: "Frameworks & REST APIs",
          topicsCount: 4,
          points: [
            "Build RESTful services with Spring Boot",
            "Implement authentication, validation and serialization",
            "Use Git, GitHub, Postman and deployment tools",
            "Containerize and deploy applications with Docker",
          ],
        },
        {
          title: "React & Integration",
          topicsCount: 4,
          points: [
            "Build interactive UIs with React components and hooks",
            "Connect React frontends to Spring Boot REST APIs",
            "Handle routing, state management and forms",
            "Apply React to real-world full-stack projects",
          ],
        },
      ],
    },
  },

  // ==========================================
  // WEB DEVELOPMENT
  // ==========================================
  {
    slug: "web-development",
    title: "Web Development",
    tagline: "HTML, CSS, JS to a live portfolio site",
    description:
      "From semantic HTML and modern CSS through JavaScript fundamentals to a deployed personal portfolio site. Built for anyone starting from zero.",
    stack: ["HTML", "CSS", "JavaScript", "Git"],
    duration: "8 weeks",
    schedule: "Mon–Fri, 6:00–7:30 PM",
    seatsTotal: 25,
    seatsFilled: 14,
    benefits: defaultBenefits,

    roadmap: {
      eyebrow: "Course Roadmap",
      title: "Become job-ready in 100 days.",
      subtitle:
        "Master modern web development from fundamentals to React, with guaranteed placement support at the finish line.",

      phases: [
        {
          day: "Day 0 · Kickoff",
          phase: "01",
          title: "HTML, CSS & JavaScript",
          desc: "Build a strong foundation in semantic HTML, modern CSS, responsive design, JavaScript fundamentals, and DOM manipulation.",
        },
        {
          day: "Day 25",
          phase: "02",
          title: "React Fundamentals",
          desc: "Learn components, props, state, hooks, routing, and modern React development to build dynamic web applications.",
        },
        {
          day: "Day 50",
          phase: "03",
          title: "APIs & State Management",
          desc: "Work with REST APIs, asynchronous JavaScript, state management, forms, authentication concepts, and real-world application patterns.",
        },
        {
          day: "Day 75",
          phase: "04",
          title: "Project Development",
          desc: "Build responsive and interactive real-world web applications and create a professional portfolio showcasing your work.",
        },
        {
          day: "Day 90",
          phase: "05",
          title: "Career Preparation",
          desc: "Prepare your portfolio, GitHub profile, resume, and interview skills through mock interviews and practical career guidance.",
        },
      ],
    },

    curriculum: {
      eyebrow: "Detailed Curriculum",
      title: "The complete web development curriculum.",
      subtitle:
        "A structured module-by-module learning path designed by industry experts.",

      intro: [
        {
          title: "Master the fundamentals",
          desc: "Build a strong foundation with semantic HTML, modern CSS, responsive layouts, and JavaScript fundamentals.",
        },
        {
          title: "React & real APIs",
          desc: "Learn component-based development and API integration through module-based projects, weekly assessments and mocks.",
        },
        {
          title: "Deploy real projects",
          desc: "Focus on state management, authentication concepts, and build a real-world, deployable portfolio site.",
        },
      ],

      modules: [
        {
          title: "HTML & CSS",
          topicsCount: 4,
          points: [
            "Build structured content with semantic HTML",
            "Style responsive layouts with modern CSS & Flexbox/Grid",
            "Implement mobile-first, responsive design",
            "Use Bootstrap for rapid UI development",
          ],
        },
        {
          title: "JavaScript",
          topicsCount: 4,
          points: [
            "Master JavaScript syntax, functions and scope",
            "Understand arrays, objects and ES6+ features",
            "Create interactive UIs with DOM manipulation",
            "Handle events and asynchronous JavaScript",
          ],
        },
        {
          title: "Git & GitHub",
          topicsCount: 4,
          points: [
            "Master version control fundamentals with Git",
            "Work with branches, merges and pull requests",
            "Collaborate using GitHub workflows",
            "Deploy projects using GitHub Pages",
          ],
        },
        {
          title: "React Fundamentals",
          topicsCount: 4,
          points: [
            "Understand components, props and JSX",
            "Master state and the core React hooks",
            "Implement client-side routing",
            "Structure scalable React applications",
          ],
        },
        {
          title: "APIs & State Management",
          topicsCount: 4,
          points: [
            "Consume REST APIs with fetch and async/await",
            "Manage application state across components",
            "Build and validate forms",
            "Understand authentication concepts on the frontend",
          ],
        },
        {
          title: "Portfolio Project",
          topicsCount: 4,
          points: [
            "Plan and design a personal portfolio site",
            "Build responsive, interactive pages end to end",
            "Optimize performance and accessibility",
            "Deploy a live, shareable portfolio",
          ],
        },
      ],
    },
  },

  // ==========================================
  // SQL & MONGODB
  // ==========================================
  {
    slug: "sql-mongodb",
    title: "SQL & MongoDB",
    tagline: "Relational and document databases",
    description:
      "Design, query, and optimize databases in both SQL and MongoDB — schema design, joins, aggregation pipelines, indexing, and real query performance.",
    stack: ["SQL", "MySQL", "MongoDB", "Mongoose"],
    duration: "6 weeks",
    schedule: "Mon–Fri, 7:00–8:00 PM",
    seatsTotal: 25,
    seatsFilled: 9,
    benefits: defaultBenefits,

    roadmap: {
      eyebrow: "Course Roadmap",
      title: "Become database-ready in 60 days.",
      subtitle:
        "Master both relational and NoSQL databases, with guaranteed placement support at the finish line.",

      phases: [
        {
          day: "Day 0 · Kickoff",
          phase: "01",
          title: "SQL Fundamentals",
          desc: "Learn database fundamentals, SQL queries, filtering, sorting, joins, subqueries, aggregate functions, and CRUD operations.",
        },
        {
          day: "Day 15",
          phase: "02",
          title: "Database Design & Optimization",
          desc: "Master schema design, normalization, relationships, indexes, transactions, query optimization, and database performance.",
        },
        {
          day: "Day 35",
          phase: "03",
          title: "MongoDB & NoSQL",
          desc: "Learn document-based databases, MongoDB CRUD operations, schema design, aggregation pipelines, indexing, and Mongoose.",
        },
        {
          day: "Day 50",
          phase: "04",
          title: "Project Development",
          desc: "Build real-world database projects using SQL and MongoDB. Design schemas, optimize queries, and integrate databases with applications.",
        },
        {
          day: "Day 55",
          phase: "05",
          title: "Career Preparation",
          desc: "Enhance interview readiness through aptitude training, database interview questions, SQL practice, mock interviews, Git/GitHub, and deployment skills.",
        },
      ],
    },

    curriculum: {
      eyebrow: "Detailed Curriculum",
      title: "The complete SQL & MongoDB curriculum.",
      subtitle:
        "A structured module-by-module learning path designed by industry experts.",

      intro: [
        {
          title: "Master SQL essentials",
          desc: "Build a strong foundation with SQL queries, joins, subqueries, aggregate functions, and CRUD operations.",
        },
        {
          title: "Design & optimize databases",
          desc: "Learn schema design and query optimization through module-based projects, weekly assessments and mocks.",
        },
        {
          title: "Go NoSQL with MongoDB",
          desc: "Focus on document databases, aggregation pipelines, and build real-world projects using both SQL and MongoDB.",
        },
      ],

      modules: [
        {
          title: "SQL Basics",
          topicsCount: 4,
          points: [
            "Master SQL syntax and CRUD operations",
            "Filter, sort and paginate query results",
            "Write joins and subqueries",
            "Use aggregate functions and grouping",
          ],
        },
        {
          title: "Database Design",
          topicsCount: 4,
          points: [
            "Design normalized relational schemas",
            "Model relationships (one-to-many, many-to-many)",
            "Understand keys, constraints and indexing",
            "Apply normalization best practices",
          ],
        },
        {
          title: "Query Optimization",
          topicsCount: 4,
          points: [
            "Analyze and optimize query performance",
            "Work with transactions and isolation levels",
            "Use indexes effectively",
            "Diagnose and fix slow queries",
          ],
        },
        {
          title: "MongoDB & NoSQL",
          topicsCount: 4,
          points: [
            "Understand document-based database concepts",
            "Perform MongoDB CRUD operations",
            "Design flexible document schemas",
            "Build aggregation pipelines",
          ],
        },
        {
          title: "Mongoose & Integration",
          topicsCount: 4,
          points: [
            "Model MongoDB schemas with Mongoose",
            "Implement validation and middleware",
            "Connect databases to real applications",
            "Apply indexing strategies in MongoDB",
          ],
        },
        {
          title: "Real-World Projects",
          topicsCount: 4,
          points: [
            "Design and build a SQL-backed application",
            "Design and build a MongoDB-backed application",
            "Optimize queries across both databases",
            "Prepare for database interview questions",
          ],
        },
      ],
    },
  },
];

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);

  console.log("Connected. Seeding courses...");

  for (const c of courses) {
    await Course.findOneAndUpdate(
      { slug: c.slug },
      c,
      {
        upsert: true,
        new: true,
      }
    );

    console.log(`Upserted: ${c.title}`);
  }

  console.log("Done.");

  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});