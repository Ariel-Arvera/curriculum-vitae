// CV Data - Single source of truth for all content
// TODO: Replace with your actual data

export const personalInfo = {
  name: "Hassan Abdallah",
  title: "Computer Science (BSc)",
  location: "London",
  tagline: "Open to internships & software engineering roles",
  email: "Hassanabdallah0505@gmail.com",
  phone: "+07784015778",
  linkedin: "https://www.linkedin.com/in/hassan-abdallah-5248aa334",
  linkedinDisplay: "www.linkedin.com/in/hassan-abdallah-5248aa334",
  cvUrl: "/Hassan-Abdallah-CV.pdf", // TODO: replace asset
  profileImage: "/profile-placeholder.jpg", // TODO: replace asset
  availability: "Available to learn & grow",
};

export const aboutText = `Confident and hardworking Computer Science student with strong communication and organisational skills. Enjoys working in a team to achieve results while also being comfortable taking initiative independently. Motivated to continuously learn and apply skills in real-world environments.`;

export const sections = [
  { id: "about", title: "About", desc: "Quick intro + links" },
  { id: "experience", title: "Experience", desc: "Work history & responsibilities" },
  { id: "education", title: "Education", desc: "Academic background" },
  { id: "skills", title: "Skills", desc: "Searchable skills" },
  { id: "timeline", title: "Timeline", desc: "Updates & milestones" },
  { id: "contact", title: "Contact", desc: "Email & LinkedIn" },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "timeline", label: "Timeline" },
  { id: "contact", label: "Contact" },
];

export const experience = [
  {
    title: "Retail Assistant",
    company: "Primark",
    period: "Nov 2022 – Nov 2024",
    duties: [
      "Assisted customers and improved communication and service skills.",
      "Worked with a team to maintain shop floor standards and support sales.",
      "Supported different departments to help keep workflow running smoothly.",
    ],
  },
  {
    title: "Teaching Support",
    company: "Al-Ikhlas Institution",
    period: "Apr 2022 – Nov 2022",
    duties: [
      "Planned and supported teaching to provide a strong educational experience.",
      "Worked with teachers to overcome learning difficulties students faced.",
    ],
  },
  {
    title: "Waiter",
    company: "Sahara Restaurant",
    period: "Jun 2021 – Jan 2022",
    duties: [
      "Welcomed customers and provided a great experience.",
      "Handled complaints and helped find solutions to resolve issues.",
      "Took and processed orders and handled phone enquiries.",
    ],
  },
  {
    title: "Work Experience",
    company: "Boots",
    period: "Oct 2020 – Nov 2020",
    duties: [
      "Supported customers with enquiries and improved confidence and communication.",
      "Worked with the team to maintain standards and smooth operations.",
    ],
  },
];

export const extraCurricular = {
  title: "RBC Workshop",
  period: "Oct 2022",
  points: [
    "Built confidence speaking professionally in front of others.",
    "Improved communication and approachability with customers/clients.",
    "Developed patience and understanding when supporting others.",
  ],
};

export const education = [
  {
    institution: "University of Greenwich",
    degree: "BSc Computer Science (Faculty of Engineering)",
    period: "2023 – Present",
  },
  {
    institution: "St Augustine's CofE Sixth Form",
    location: "London, UK",
    period: "2021 – 2023",
    details: "Applied Science, Sports and IT: D*D*D",
  },
  {
    institution: "St Augustine's CofE High School",
    location: "London, UK",
    period: "2016 – 2021",
    details: "Grades 5–9 including Maths, English and Science",
  },
];

export const skills = [
  "Teamwork",
  "Communication",
  "Organisation",
  "Time management",
  "Resilient under pressure",
  "Presentation confidence",
  "Good writing",
  "Patience & sense of humour",
  "Arabic",
  "English",
];

export const timelineUpdates = [
  {
    title: "Portfolio upgraded: mobile-friendly + menu",
    date: "Dec 15, 2025",
    description: "Improved responsiveness on phones with a hamburger menu and better spacing.",
    tags: ["portfolio", "ui"],
    link: { label: "LinkedIn", url: "https://www.linkedin.com/in/hassan-abdallah-5248aa334" },
  },
  {
    title: "Started a new project: To-do app (local storage)",
    date: "Dec 10, 2025",
    description: "Building a simple task app with categories, filters, and persistent storage.",
    tags: ["javascript", "web"],
    link: { label: "GitHub", url: "#" }, // TODO: replace with actual link
  },
  {
    title: "Learning focus: Data structures practice",
    date: "Nov 28, 2025",
    description: "Worked on stacks/queues + Big-O analysis and implemented examples in Python.",
    tags: ["python", "learning"],
  },
];

export const allTags = ["javascript", "learning", "portfolio", "python", "ui", "web"];
