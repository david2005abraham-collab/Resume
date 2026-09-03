/**
 * ============================================================================
 * DAVID ABRAHAM - PORTFOLIO CONFIGURATION & DATA STORE
 * ============================================================================
 * This file contains all the editable content for David Abraham's portfolio.
 * You can easily add, edit, or remove projects, skills, education, and links
 * without modifying any HTML structure!
 */

export const PORTFOLIO_CONFIG = {
  personalInfo: {
    name: "David Abraham",
    role: "Aspiring Software Developer",
    location: "Chennai, Tamil Nadu, India",
    phone: "8667820195",
    email: "david2005abraham@gmail.com",
    linkedin: "https://www.linkedin.com/in/david-abraham-b88016352",
    github: "https://github.com/david2005abraham-collab",
    resumePath: "David_Abraham_Resume.pdf",
    shortBio: "I am a motivated and detail-oriented aspiring Software Developer with a strong interest in programming, databases, software development, and problem solving. I enjoy learning new technologies and building practical projects that improve my technical skills.",
    motto: "Learning. Building. Improving.",
    languages: ["English", "Tamil"],
    availability: "Available for Entry-Level & Fresher Software Developer Roles",
  },

  heroBadges: [
    { name: "SQL", icon: "database" },
    { name: "MySQL", icon: "server" },
    { name: "Excel", icon: "table" },
    { name: "Power BI", icon: "bar-chart-2" },
    { name: "Programming", icon: "code" },
    { name: "Database Management", icon: "hard-drive" }
  ],

  // ==========================================================================
  // FEATURED PROJECT
  // Highly prominent card at top of Projects section. (Easily editable)
  // ==========================================================================
  featuredProject: {
    badge: "Featured Showcase",
    name: "Hotel Bookings Analysis & Relational Database System",
    isEditable: true,
    problemStatement: "Hospitality organizations frequently deal with booking cancellations, revenue volatility, and guest scheduling challenges. The goal was to clean, query, and analyze raw booking records to identify cancellation factors, seasonal booking trends, and guest stay behaviors.",
    technologies: ["SQL", "MySQL", "MS Excel", "Power BI", "Data Cleaning"],
    keyFeatures: [
      "Rigorous data cleaning and validation across complex booking records",
      "Advanced multi-table SQL queries utilizing aggregation, GROUP BY, and filtering",
      "Identification of cancellation triggers based on lead times and customer segments",
      "Interactive KPI cards and reporting dashboards for clear visual presentation"
    ],
    whatILearned: "Enhanced my ability to translate raw data into structured relational tables, craft efficient analytical queries, and present actionable insights through clear visual reporting.",
    githubUrl: "https://github.com/david2005abraham-collab",
    liveDemoUrl: "", // Leave blank or add live link if available
  },

  // ==========================================================================
  // PROJECT SHOWCASE
  // Categories:
  // 1: "sql"       - SQL Projects
  // 2: "mysql"     - MySQL Projects
  // 3: "excel"     - Excel Projects
  // 4: "powerbi"   - Power BI Projects
  // 5: "software"  - Other Software / Development Projects
  // ==========================================================================
  projects: [
    {
      id: "proj-1",
      category: "sql",
      categoryLabel: "SQL Projects",
      title: "Retail Sales & Transactional SQL Analysis",
      description: "Structured database queries designed to explore transactional data, identify top-performing product categories, and calculate monthly revenue growth metrics.",
      technologies: ["SQL", "Data Analysis", "Database Management"],
      features: [
        "Aggregate queries calculating monthly revenue, order volume, and average order value",
        "Filtering and subqueries to detect customer purchasing frequency and trends",
        "Clean, well-documented SQL scripts structured for maintainability"
      ],
      skillsDemonstrated: "Data extraction, aggregation functions, query structure, analytical thinking",
      githubUrl: "https://github.com/david2005abraham-collab",
      liveDemoUrl: "",
      isTemplate: false
    },
    {
      id: "proj-2",
      category: "mysql",
      categoryLabel: "MySQL Projects",
      title: "Hospitality & Hotel Database Querying",
      description: "Relational database implementation and structured queries analyzing guest booking patterns, cancellation percentages, and room occupancy rates.",
      technologies: ["MySQL", "Relational Schema", "Data Cleaning"],
      features: [
        "Relational table design with appropriate data types and constraints",
        "JOIN queries to connect guest details, booking dates, and payment records",
        "Data validation scripts to resolve null values and duplicate records"
      ],
      skillsDemonstrated: "Relational database design, table joins, data integrity, SQL optimization",
      githubUrl: "https://github.com/david2005abraham-collab",
      liveDemoUrl: "",
      isTemplate: false
    },
    {
      id: "proj-3",
      category: "excel",
      categoryLabel: "Excel Projects",
      title: "Hotel Bookings Interactive Excel Dashboard",
      description: "Comprehensive spreadsheet dashboard delivering dynamic analytics on guest reservations, cancellation trends, and lead times with interactive slicers.",
      technologies: ["Microsoft Excel", "Pivot Tables", "Advanced Formulas", "Data Cleaning"],
      features: [
        "Data normalization using nested formulas (XLOOKUP, INDEX-MATCH, IF-conditions)",
        "Dynamic pivot tables and interactive slicers for instant data filtering",
        "Executive KPI summary cards displaying cancellation rate and average daily rate (ADR)"
      ],
      skillsDemonstrated: "Advanced Excel modeling, data visualization, formula automation, dashboard UX",
      githubUrl: "https://github.com/david2005abraham-collab",
      liveDemoUrl: "",
      isTemplate: false
    },
    {
      id: "proj-4",
      category: "powerbi",
      categoryLabel: "Power BI Projects",
      title: "Business Performance & Analytics Power BI Dashboard",
      description: "Interactive visual intelligence dashboard tracking key performance indicators, customer demographics, and revenue trends with drill-through exploration.",
      technologies: ["Microsoft Power BI", "Data Visualization", "DAX Calculations", "Data Reporting"],
      features: [
        "Custom DAX calculated measures for YoY comparison and dynamic KPI indicators",
        "Interactive cross-filtering charts connecting customer categories to revenue",
        "Clean, executive layout optimized for rapid decision-making and reporting"
      ],
      skillsDemonstrated: "Business intelligence, DAX expressions, visual storytelling, data modeling",
      githubUrl: "https://github.com/david2005abraham-collab",
      liveDemoUrl: "",
      isTemplate: false
    },
    {
      id: "proj-5",
      category: "software",
      categoryLabel: "Other Software / Development Projects",
      title: "Personal Developer Portfolio Website",
      description: "Modern, responsive, glassmorphic portfolio website showcasing technical projects, skills, developer roadmap, and credentials with clean code architecture.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      features: [
        "Modular JavaScript data store enabling effortless project and skill updates",
        "Sleek dark navy & purple neon aesthetic with smooth CSS animations",
        "Fully responsive on mobile, tablet, and desktop with interactive category filtering"
      ],
      skillsDemonstrated: "Frontend development, responsive design, DOM manipulation, clean code",
      githubUrl: "https://github.com/david2005abraham-collab",
      liveDemoUrl: "https://david2005abraham-collab.github.io",
      isTemplate: false
    },
    {
      id: "proj-6",
      category: "software",
      categoryLabel: "Other Software / Development Projects",
      title: "[Template] Upcoming Software Application",
      description: "Placeholder card ready for your next software development project (e.g. Python CLI, Web App, REST API, or Full-Stack solution). Simply edit this entry in js/projects-data.js!",
      technologies: ["Programming Fundamentals", "Problem Solving", "Software Concepts"],
      features: [
        "Modular architecture designed for scalability",
        "Database integration with clean queries",
        "User-friendly interface and structured exception handling"
      ],
      skillsDemonstrated: "Application architecture, clean coding practices, problem solving",
      githubUrl: "https://github.com/david2005abraham-collab",
      liveDemoUrl: "",
      isTemplate: true
    }
  ],

  // ==========================================================================
  // TECHNICAL & SOFT SKILLS
  // ==========================================================================
  skillCategories: [
    {
      id: "programming",
      title: "Programming / Development",
      icon: "code",
      accent: "from-blue-500 to-indigo-500",
      skills: [
        { name: "Programming Fundamentals", desc: "Core logic, control flow, data types, and functions" },
        { name: "Problem Solving", desc: "Algorithmic thinking and systematic debugging" },
        { name: "Software Development Concepts", desc: "Modular architecture, clean code, and SDLC awareness" }
      ]
    },
    {
      id: "database",
      title: "Database Management",
      icon: "database",
      accent: "from-indigo-500 to-purple-500",
      skills: [
        { name: "SQL", desc: "Complex queries, joins, aggregates, and subqueries" },
        { name: "MySQL", desc: "Relational database operations, constraints, and optimization" },
        { name: "Database Management", desc: "Schema design, data integrity, and normalization" }
      ]
    },
    {
      id: "tools",
      title: "Tools & Technologies",
      icon: "cpu",
      accent: "from-purple-500 to-pink-500",
      skills: [
        { name: "Microsoft Excel", desc: "Formulas, Pivot Tables, VLOOKUP/XLOOKUP, and modeling" },
        { name: "Microsoft Power BI", desc: "Interactive dashboards, reports, and DAX calculations" },
        { name: "Data Visualization", desc: "Visual storytelling, KPI design, and executive charts" },
        { name: "Data Cleaning", desc: "Transforming raw data, handling nulls, and validation" },
        { name: "Data Reporting", desc: "Automated business reports and actionable metrics" }
      ]
    },
    {
      id: "soft",
      title: "Soft Skills & Professional Traits",
      icon: "users",
      accent: "from-cyan-500 to-blue-500",
      skills: [
        { name: "Problem-Solving Mindset", desc: "Approaching challenges logically and methodically" },
        { name: "Analytical Thinking", desc: "Deriving actionable insights from data and patterns" },
        { name: "Communication", desc: "Clear verbal and written articulation of ideas" },
        { name: "Teamwork & Collaboration", desc: "Supportive team player eager to share and learn" },
        { name: "Attention to Detail", desc: "Thoroughness in code, queries, and data integrity" },
        { name: "Time Management", desc: "Prioritizing tasks effectively to meet milestones" },
        { name: "Adaptability", desc: "Flexible in fast-changing tech environments" },
        { name: "Quick Learner", desc: "Rapidly grasps new tools, frameworks, and workflows" }
      ]
    }
  ],

  // ==========================================================================
  // DEVELOPER JOURNEY
  // ==========================================================================
  developerJourney: [
    {
      step: 1,
      title: "Learning",
      subtitle: "Foundational Knowledge",
      description: "Building strong fundamentals in programming logic, database concepts, and data structures.",
      icon: "book-open"
    },
    {
      step: 2,
      title: "Building Projects",
      subtitle: "Hands-on Practice",
      description: "Creating practical SQL queries, MySQL databases, Excel models, and Power BI dashboards.",
      icon: "layers"
    },
    {
      step: 3,
      title: "Improving Programming Skills",
      subtitle: "Code Quality & Logic",
      description: "Refining algorithmic problem solving, writing readable code, and utilizing Git version control.",
      icon: "terminal"
    },
    {
      step: 4,
      title: "Learning Software Development",
      subtitle: "Architecture & Practices",
      description: "Understanding application structure, API concepts, database normalization, and debugging.",
      icon: "cpu"
    },
    {
      step: 5,
      title: "Building Real-World Applications",
      subtitle: "Practical Solutions",
      description: "Developing end-to-end practical software and data-driven solutions with user-centric design.",
      icon: "rocket"
    },
    {
      step: 6,
      title: "Entry-Level Software Developer",
      subtitle: "Career Ready",
      description: "Prepared to contribute as an enthusiastic, responsible junior developer in a collaborative team.",
      icon: "award"
    }
  ],

  // ==========================================================================
  // EDUCATION
  // ==========================================================================
  education: [
    {
      degree: "Bachelor of Theology (B.Th)",
      institution: "Senate of Serampore University",
      location: "Madhuri Dhanaji, Lamb, Pasumalai, Madurai, Tamil Nadu 625004",
      period: "Graduated",
      highlights: [
        "Developed strong critical thinking, research, and communication abilities",
        "Honed disciplined time management, ethics, and collaborative teamwork skills"
      ]
    },
    {
      degree: "Data Science & Analytics with Gen AI",
      institution: "Professional Training Program",
      location: "Old No: AC 6 & New No: 129, LKS Plaza, 2nd Floor, Anna Nagar, Tamil Nadu 600040",
      period: "Specialized Coursework",
      highlights: [
        "In-depth hands-on training in SQL, MySQL, Database Management, Excel, and Power BI",
        "Practical project work in data cleaning, exploratory analysis, and dashboard development"
      ]
    }
  ],

  // ==========================================================================
  // CERTIFICATIONS (Editable)
  // ==========================================================================
  certifications: [
    {
      title: "Data Analytics Course",
      organization: "Professional Certification",
      description: "Comprehensive coursework covering SQL query construction, relational database principles, advanced Excel data modeling, and Power BI dashboard reporting.",
      badge: "Verified Skillset"
    },
    {
      title: "Bachelor of Theology",
      organization: "Senate of Serampore University",
      description: "University degree curriculum fostering disciplined research, analytical perspective, cross-functional collaboration, and effective verbal/written communication.",
      badge: "Academic Degree"
    }
  ]
};
