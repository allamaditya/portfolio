export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Healthcare IT' | 'Enterprise Full-Stack' | 'Cloud Architecture';
  status: 'In Progress' | 'Concept' | 'Verified Showcase';
  problemStatement: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  architectureOverview: string;
  githubUrl?: string;
  demoUrl?: string;
  previewType: 'hospital' | 'vehicle' | 'rental' | 'cloud';
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  isCurrent: boolean;
  location?: string;
  summary: string;
  keyResponsibilities: string[];
  technologiesUsed: string[];
  operationalBridges: string[];
}

export interface SkillItem {
  name: string;
  level: 'Experienced' | 'Working Knowledge' | 'Continuous Learning';
  note?: string;
}

export interface SkillCategory {
  title: string;
  categoryKey: string;
  description: string;
  skills: SkillItem[];
}

export interface CareerInterest {
  title: string;
  description: string;
  transferableStrengths: string[];
  iconName: string;
}

export interface WorkflowStage {
  step: number;
  name: string;
  tagline: string;
  operationalPerspective: string;
  technicalPerspective: string;
  deliverables: string[];
}

export const PORTFOLIO_DATA = {
  identity: {
    name: "Aditya Allam",
    initials: "AA",
    currentRole: "Hospital Operations Manager",
    previousRole: "Full-Stack Developer at Cognizant",
    headline: "Hospital Operations Manager | Former Full-Stack Developer | Healthcare IT & Digital Transformation",
    tagline: "Bridging Healthcare Operations and Technology.",
    supportingDescription:
      "Combining software development experience, healthcare operations, and business-oriented thinking to help organizations connect people, processes, and technology.",
    fullBio: [
      "I am a Hospital Operations Manager with a background in full-stack software development. My professional journey combines software engineering experience with practical exposure to healthcare operations, operational workflows, vendor coordination, hospital software systems, and technology-enabled process improvement.",
      "Previously, I worked as a Full-Stack Developer at Cognizant, gaining experience in software development and technologies including Java, Angular, SQL, and AWS. I subsequently transitioned into hospital management, where my technical background complements my understanding of operational requirements, healthcare workflows, software vendors, and digital systems.",
      "I am interested in opportunities that bring together technology, business operations, and healthcare digital transformation. My goal is to help organizations improve processes, implement effective technology solutions, and connect business needs with technical execution."
    ],
    heroTechBadges: [
      "Java",
      "Angular",
      "SQL",
      "AWS",
      "Healthcare IT",
      "Operations Management",
      "Digital Transformation"
    ]
  },

  links: {
    linkedin: "https://www.linkedin.com/in/aditya-allam-2270a0146",
    github: "https://github.com/allamaditya",
    instagram: "https://instagram.com/aditya.allam",
    email: "allamaditya99@gmail.com"
  },

  aboutHighlights: [
    {
      title: "Software Engineering Foundation",
      description: "Hands-on experience in Java, Angular, SQL, and AWS from Cognizant provides deep technical comprehension of software architectures and APIs."
    },
    {
      title: "Real Healthcare Operations",
      description: "Active management of day-to-day hospital facilities, patient journey workflows, multi-departmental coordination, and hospital administrative operations."
    },
    {
      title: "Technical & Vendor Coordination",
      description: "Bilingual ability to translate clinical and operational constraints into technical specifications for software vendors and engineering teams."
    },
    {
      title: "Continuous Business Leadership",
      description: "Pursuing an online Master of Business Administration (MBA) from Andhra University to master strategic organizational planning and operational scale."
    }
  ],

  experiences: [
    {
      id: "exp-hospital-ops",
      role: "Hospital Operations Manager",
      organization: "Healthcare Facility Operations",
      period: "March 2025 – Present",
      isCurrent: true,
      summary:
        "Managing hospital operations while drawing on a previous software development background to understand healthcare systems, operational workflows, and technology requirements.",
      keyResponsibilities: [
        "Hospital operations and workflow coordination across clinical and administrative units",
        "Coordination with hospital software vendors and internal cross-functional teams",
        "Hospital Information Systems (HIS) and healthcare software coordination",
        "Data migration and software implementation exposure during system transitions",
        "Operational process improvement to reduce administrative friction and bottlenecks",
        "Inter-departmental alignment connecting clinical staff, administration, and technical support",
        "Identifying practical opportunities to improve hospital workflows through technology"
      ],
      technologiesUsed: [
        "Hospital Information Systems (HIS)",
        "Healthcare Workflow Optimization",
        "Data Migration Planning",
        "Vendor Coordination",
        "Cross-Functional Management",
        "Process Mapping"
      ],
      operationalBridges: [
        "Translating clinician pain points into clear functional software requirements",
        "Reviewing vendor software proposals through both operational and engineering lenses",
        "Guiding clinical staff through digital process transitions with minimal friction"
      ]
    },
    {
      id: "exp-cognizant-dev",
      role: "Full-Stack Developer",
      organization: "Cognizant",
      period: "December 2021 – June 2024",
      isCurrent: false,
      summary:
        "Worked in software development, building a strong technical foundation in enterprise application development, databases, and web technologies that continues to inform my approach to operational and technology-related challenges.",
      keyResponsibilities: [
        "Engineered full-stack enterprise web applications utilizing Java and Angular frameworks",
        "Designed and maintained relational database schemas, complex queries, and data integrity with SQL",
        "Built and consumed RESTful APIs for seamless multi-tier system integration",
        "Utilized AWS cloud services for application deployment, monitoring, and infrastructure management",
        "Conducted end-to-end debugging, root cause analysis, code reviews, and software troubleshooting",
        "Collaborated with cross-functional teams, business analysts, and QA within Agile sprints"
      ],
      technologiesUsed: [
        "Java",
        "Angular",
        "SQL",
        "AWS",
        "REST APIs",
        "Git / GitHub",
        "Full-Stack Architecture"
      ],
      operationalBridges: [
        "Gained direct empathy for software delivery timelines, edge cases, and code maintenance",
        "Learned how database schemas dictate the flexibility of business reporting and analytics",
        "Understood cloud infrastructure and scalability parameters critical for enterprise systems"
      ]
    }
  ] as Experience[],

  skillsData: [
    {
      title: "Software Development",
      categoryKey: "software",
      description: "Previous hands-on engineering experience building enterprise applications, APIs, and responsive frontends.",
      skills: [
        { name: "Java", level: "Experienced", note: "Enterprise backend development and object-oriented design" },
        { name: "Angular", level: "Experienced", note: "Component-based web architecture and state management" },
        { name: "JavaScript", level: "Experienced", note: "Modern ES6+ frontend scripting and async programming" },
        { name: "HTML & CSS", level: "Experienced", note: "Responsive design, semantic structure, and styling" },
        { name: "REST APIs", level: "Experienced", note: "API design, endpoint integration, and JSON contracts" },
        { name: "Full-Stack Development", level: "Experienced", note: "Connecting UI, service layers, and databases" }
      ]
    },
    {
      title: "Databases & Cloud",
      categoryKey: "cloud",
      description: "Relational data structuring, query development, version control, and cloud environment familiarity.",
      skills: [
        { name: "SQL", level: "Experienced", note: "Relational querying, schema design, and data retrieval" },
        { name: "Database Fundamentals", level: "Working Knowledge", note: "ACID properties, indexing, and data modeling" },
        { name: "AWS", level: "Working Knowledge", note: "Cloud services, compute, and deployment exposure" },
        { name: "Git & GitHub", level: "Experienced", note: "Version control, branching workflows, and repo management" }
      ]
    },
    {
      title: "Healthcare IT & Systems",
      categoryKey: "healthcare",
      description: "Operational knowledge of clinical workflows, hospital systems, and digital healthcare delivery.",
      skills: [
        { name: "Hospital Information Systems (HIS)", level: "Working Knowledge", note: "Operational usage and administrative coordination" },
        { name: "Healthcare Software Workflows", level: "Working Knowledge", note: "Patient flow, admission, billing, and department handoffs" },
        { name: "Data Migration Exposure", level: "Working Knowledge", note: "Data extraction, schema alignment, and cutover stages" },
        { name: "Software Implementation Coordination", level: "Working Knowledge", note: "Assisting rollout, training, and pilot testing" },
        { name: "Vendor Coordination", level: "Experienced", note: "Managing deliverables, SLA discussions, and requirement specs" },
        { name: "Technical Troubleshooting", level: "Experienced", note: "Diagnosing workflow vs software root causes" },
        { name: "Business Requirements Understanding", level: "Experienced", note: "Translating stakeholder needs into clear specifications" }
      ]
    },
    {
      title: "Operations & Business Management",
      categoryKey: "operations",
      description: "Core operational management, cross-functional leadership, and organizational process refinement.",
      skills: [
        { name: "Hospital Operations Management", level: "Experienced", note: "Daily facility, logistics, and resource oversight" },
        { name: "Workflow Coordination", level: "Experienced", note: "Synchronizing multidisciplinary departmental tasks" },
        { name: "Process Improvement", level: "Working Knowledge", note: "Identifying friction and eliminating operational delays" },
        { name: "Cross-Functional Coordination", level: "Experienced", note: "Aligning doctors, nurses, administrators, and IT" },
        { name: "Stakeholder Communication", level: "Experienced", note: "Clear executive reporting and vendor dialogue" },
        { name: "Business & Technology Alignment", level: "Experienced", note: "Ensuring tech initiatives deliver tangible operational value" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "project-hms",
      title: "Hospital Management System",
      subtitle: "Integrated clinical & operational workflow architecture",
      category: "Healthcare IT",
      status: "In Progress",
      problemStatement:
        "Hospital workflows frequently encounter friction when clinical scheduling, bed admissions, and administrative billing operate in disconnected silos, leading to operational delays and fragmented records.",
      solution:
        "A modular hospital software concept designed to streamline patient intake, doctor scheduling, department ward management, and unified billing while maintaining audit-ready data tracking.",
      keyFeatures: [
        "Patient Registration & Electronic Medical Record (EMR) intake",
        "Doctor appointment scheduling with conflict detection",
        "Bed capacity tracking across ICU, inpatient, and emergency wards",
        "Modular billing engine integrating pharmacy, lab, and consultation costs",
        "Role-based access control for administrative, medical, and billing staff"
      ],
      techStack: ["Java", "Angular", "SQL", "REST APIs", "Healthcare IT"],
      architectureOverview:
        "Multi-tiered architecture with an Angular single-page frontend, Java RESTful backend services, and a normalized SQL database designed for high availability and strict data consistency.",
      githubUrl: "https://github.com/allamaditya",
      previewType: "hospital"
    },
    {
      id: "project-vehicle-service",
      title: "Vehicle Service Management System",
      subtitle: "End-to-end service job card & customer tracking platform",
      category: "Enterprise Full-Stack",
      status: "Verified Showcase",
      problemStatement:
        "Automotive service centers often struggle with paper-based job cards, uncoordinated mechanic assignments, and lack of real-time service transparency for vehicle owners.",
      solution:
        "A full-stack management application that digitizes the entire vehicle repair lifecycle from vehicle check-in to inventory deduction, service history tracking, and automated invoicing.",
      keyFeatures: [
        "Customer and vehicle registration with comprehensive service history",
        "Dynamic job card creation with checklist inspection points",
        "Technician assignment and live repair stage progress monitoring",
        "Spare parts inventory lookup and cost calculation",
        "Automated invoice generation and payment logging"
      ],
      techStack: ["Java", "Spring Boot", "Angular", "SQL", "REST APIs"],
      architectureOverview:
        "Spring Boot microservice backend with JPA/Hibernate handling persistence to relational SQL, paired with an Angular management dashboard with real-time status updates.",
      githubUrl: "https://github.com/allamaditya",
      previewType: "vehicle"
    },
    {
      id: "project-car-rental",
      title: "Car Rental Booking Platform",
      subtitle: "Scalable fleet reservation & availability engine",
      category: "Enterprise Full-Stack",
      status: "Concept",
      problemStatement:
        "Managing dynamic vehicle availability across multiple branches requires instant synchronization to prevent double-booking and optimize fleet utilization rates.",
      solution:
        "A modern web application concept featuring intuitive vehicle catalog filtering, booking reservation flows, flexible rental durations, and automated pricing rules.",
      keyFeatures: [
        "Fleet catalog with category filters (SUV, Sedan, Electric, Luxury)",
        "Interactive date-range picker with instant vehicle availability check",
        "Dynamic pricing algorithm factoring duration and seasonal rates",
        "Customer booking confirmation and reservation modification dashboard",
        "Fleet management portal for vehicle maintenance scheduling"
      ],
      techStack: ["Angular", "TypeScript", "SQL", "Cloud Architecture"],
      architectureOverview:
        "Component-based architecture emphasizing clean separation of UI state, booking query services, and a relational schema optimized for range-based availability queries.",
      githubUrl: "https://github.com/allamaditya",
      previewType: "rental"
    },
    {
      id: "project-cloud-app",
      title: "Cloud-Ready Full-Stack Application",
      subtitle: "High-reliability enterprise services with AWS deployment",
      category: "Cloud Architecture",
      status: "In Progress",
      problemStatement:
        "Enterprise applications demand robust fault tolerance, scalable API architectures, and reproducible cloud deployment pipelines.",
      solution:
        "A reference full-stack architecture demonstrating best practices in secure REST API design, relational schema normalization, containerization, and AWS cloud hosting patterns.",
      keyFeatures: [
        "Secure stateless authentication using JWT and role-based policies",
        "Optimized SQL queries with indexed lookups and transaction integrity",
        "Containerized deployment configuration for reproducible environments",
        "AWS architecture design for compute, storage (S3), and database (RDS)",
        "Structured logging, error handling middleware, and health probe endpoints"
      ],
      techStack: ["Java", "Angular", "SQL", "AWS", "REST APIs", "Docker"],
      architectureOverview:
        "Tiered enterprise architecture deploying backend services on cloud compute, data stored in AWS RDS SQL, and frontend assets delivered via cloud distribution.",
      githubUrl: "https://github.com/allamaditya",
      previewType: "cloud"
    }
  ] as Project[],

  digitalTransformationStages: [
    {
      step: 1,
      name: "Business Requirements",
      tagline: "Translating operational friction into clear specifications",
      operationalPerspective:
        "Observing real-world healthcare workflows, identifying administrative bottlenecks, and capturing the authentic requirements of doctors, nurses, and administrative personnel.",
      technicalPerspective:
        "Structuring unstructured clinical demands into formalized functional requirements, user stories, data schemas, and API integration boundaries.",
      deliverables: ["Process maps", "Functional requirement documents", "Stakeholder pain-point matrices"]
    },
    {
      step: 2,
      name: "System Evaluation",
      tagline: "Assessing technology capabilities against operational realities",
      operationalPerspective:
        "Validating whether proposed software suites align with hospital compliance policies, clinical ergonomics, and patient turnaround speed.",
      technicalPerspective:
        "Evaluating software architecture, database scalability, security standards, REST API extensibility, and cloud vs on-premise infrastructure costs.",
      deliverables: ["Architecture fit assessments", "Technical feasibility reports", "System comparison matrix"]
    },
    {
      step: 3,
      name: "Vendor Coordination",
      tagline: "Bridging organizational intent with software vendor delivery",
      operationalPerspective:
        "Representing hospital interests during vendor demonstrations, ensuring software providers understand clinical workflow nuances rather than offering off-the-shelf mismatch.",
      technicalPerspective:
        "Reviewing technical architecture proposals, API documentation, SLA terms, data residency, and engineering change requests with vendor dev teams.",
      deliverables: ["Vendor requirement briefs", "Technical SLA reviews", "Feature gap analysis"]
    },
    {
      step: 4,
      name: "Data Migration",
      tagline: "Ensuring data continuity, clinical safety, and data integrity",
      operationalPerspective:
        "Coordinating cutover scheduling during low-volume hours to safeguard patient care continuity and prevent operational disruption.",
      technicalPerspective:
        "Mapping legacy schemas to modern structures, designing ETL validation scripts, ensuring referential integrity, and running reconciliation audits.",
      deliverables: ["Schema mapping registers", "Data validation test runs", "Disaster recovery rollback plans"]
    },
    {
      step: 5,
      name: "Implementation",
      tagline: "Phased rollouts, departmental onboarding, and pilot validation",
      operationalPerspective:
        "Leading change management on the ground, conducting staff walk-throughs, and collecting immediate feedback from front-desk and clinical users.",
      technicalPerspective:
        "Monitoring deployment health, triage of day-one software bugs, error log analysis, and rapid configuration adjustments with technical support.",
      deliverables: ["Departmental rollout checklists", "User training guides", "Immediate issue triage logs"]
    },
    {
      step: 6,
      name: "Workflow Improvement",
      tagline: "Iterative optimization and tech-enabled efficiency gains",
      operationalPerspective:
        "Analyzing post-implementation turnaround times, patient satisfaction, and administrative throughput to measure tangible operational gains.",
      technicalPerspective:
        "Synthesizing operational feedback into engineering feature requests, software refinement backlog items, and database query optimizations.",
      deliverables: ["Turnaround metrics review", "Continuous improvement backlog", "Long-term tech roadmap"]
    }
  ] as WorkflowStage[],

  careerInterests: [
    {
      title: "Healthcare IT Implementation Specialist",
      description:
        "Guiding hospitals and healthcare networks through the successful rollout, customization, and user adoption of digital clinical systems.",
      transferableStrengths: [
        "Hands-on hospital operations awareness",
        "Technical comprehension of hospital software architecture",
        "Direct experience with vendor and clinical stakeholder alignment"
      ],
      iconName: "Stethoscope"
    },
    {
      title: "Technical Business Analyst",
      description:
        "Bridging business stakeholders and engineering teams by translating complex operational needs into clear technical specifications.",
      transferableStrengths: [
        "Software engineering background at Cognizant",
        "Ability to inspect SQL databases and review REST API contracts",
        "Practical business problem-solving mindset"
      ],
      iconName: "FileSpreadsheet"
    },
    {
      title: "IT Project Coordinator / Associate PM",
      description:
        "Orchestrating technical delivery timelines, sprint coordination, cross-departmental alignment, and project governance.",
      transferableStrengths: [
        "Cross-functional operational coordination experience",
        "Familiarity with Agile software lifecycles from Cognizant",
        "Ongoing MBA training in management and strategic planning"
      ],
      iconName: "KanbanSquare"
    },
    {
      title: "IT Operations Analyst or Manager",
      description:
        "Ensuring mission-critical systems and software operations run with high availability, strong SLA compliance, and minimal friction.",
      transferableStrengths: [
        "Operational incident handling in fast-paced hospital environment",
        "Technical troubleshooting and root cause analysis",
        "Vendor SLA governance and service management"
      ],
      iconName: "ActivitySquare"
    },
    {
      title: "Technology Delivery Coordinator",
      description:
        "Managing software releases, system deployments, user readiness, and inter-team operational handoffs for enterprise software.",
      transferableStrengths: [
        "Full-stack development lifecycle exposure",
        "Operational change management and staff onboarding",
        "Strong communication across developers, managers, and end-users"
      ],
      iconName: "Send"
    },
    {
      title: "Digital Transformation Professional",
      description:
        "Helping organizations modernize manual processes, introduce technology-enabled workflows, and align business strategy with digital tools.",
      transferableStrengths: [
        "Unique hybrid background in code and operational leadership",
        "Process bottleneck identification and optimization",
        "Focus on delivering pragmatic, human-centered technology solutions"
      ],
      iconName: "Sparkles"
    }
  ] as CareerInterest[],

  education: [
    {
      degree: "Master of Business Administration (MBA)",
      institution: "Andhra University",
      mode: "Online MBA",
      status: "Currently Enrolled",
      timeline: "Expected Completion: June 2027",
      description:
        "Deepening strategic business acumen, organizational leadership, financial planning, and operational scale to complement technical engineering roots.",
      focusAreas: [
        "Operations & Process Management",
        "Strategic Organizational Leadership",
        "Business Analytics & Decision Science",
        "Technology & Digital Innovation"
      ]
    },
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Undergraduate Engineering Program",
      mode: "Full-Time",
      status: "Completed",
      timeline: "Completed 2021",
      description:
        "Built a strong foundational education in computer science, software engineering principles, algorithms, data structures, and system design.",
      focusAreas: [
        "Software Engineering",
        "Database Management Systems",
        "Object-Oriented Programming (Java)",
        "Web Technologies & Computer Networks"
      ]
    }
  ],

  certifications: [
    {
      title: "Full-Stack Development Foundations",
      issuer: "Cognizant Technical Enablement",
      focus: "Java, Angular, Enterprise Web Architecture, SQL",
      status: "Verified Professional Track"
    },
    {
      title: "Cloud & Infrastructure Exploration",
      issuer: "Continuous Learning",
      focus: "AWS Fundamentals, Cloud Deployment, Docker",
      status: "Active Exploration"
    },
    {
      title: "Healthcare Systems & Operations",
      issuer: "Hospital Management Practice",
      focus: "HIS Workflows, Healthcare Logistics, Patient Care Process Optimization",
      status: "Practical Domain Application"
    }
  ]
};
