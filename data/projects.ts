export type Project = {
  slug: string;
  title: string;
  role: string;
  summary: string;
  image: string;
  tech: string[];
  problem: string[];
  goals: string[];
  solution: string[];
  challenges: string[];
  learnings: string;
  liveLink: string;
   sourceCode: string; 
};

export const projects: Project[] = [
  /* ---------------- QUICKCART ---------------- */
  {
    slug: "quick-cart",
    title: "QuickCart E-Commerce",
    role: "Frontend Developer",
    summary:
      "Quick Cart is a modern e-commerce web application designed to deliver a smooth and engaging online shopping experience. It features dynamic product listings, promotional banners, intuitive navigation, and a responsive, mobile-first UI that allows users to browse products, view details, and purchase items seamlessly across all devices.",
    image: "/assets/projects/quickcart.png",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "Clerk"],
    problem: [
      "Static and cluttered shopping interfaces reduce user engagement",
      "Poor cart state handling leads to inconsistent user experience",
      "Lack of responsive design across devices",
      "Slow UI rendering affects performance and usability",
    ],

    goals: [
      "Improve checkout speed",
      "Create mobile-first UI",
      "Build scalable components",
    ],
    solution: [
      "Built a dynamic, component-based frontend for product browsing",
      "Implemented efficient cart and UI state management",
      "Designed a fully responsive, mobile-first layout",
      "Optimized rendering and assets for faster load times",
    ],

    challenges: [
      "Managing cart state efficiently",
      "Optimizing performance",
      "Handling edge cases in checkout flow",
    ],
    learnings:
      "Improved my understanding of performance optimization, state management, and scalable UI design.",
    liveLink: "https://quick-cart-six-theta.vercel.app/",
      sourceCode: "https://github.com/Nandhini-priya-r",
  },

  /* ---------------- BLUBOX ---------------- */
  {
    slug: "bluebox",
    title: "BluBox",
    role: "Frontend Developer",
    summary:
      "This website showcases a premium range of architectural and furniture hardware products, including hinges, handles, wheels, locks, and accessories. It focuses on durability, elegant design, and user-friendly navigation to help customers explore products, view details, and make enquiries easily.",
    image: "/assets/projects/bbox.png",
    tech: ["Next.js", "CSS", "TypeScript", "Framer Motion"],
    problem: [
      "Traditional product catalogs lack visual appeal and clarity",
      "Difficult navigation across multiple product categories",
      "Limited product discovery and user engagement",
      "No streamlined way for users to enquire about products",
      
    ],

    goals: [
      "Create a premium brand identity",
      "Improve visual appeal",
      "Ensure responsive design",
    ],
    solution: [
      "Designed a clean, visually rich UI to showcase products effectively",

      "Implemented structured navigation and category-based browsing",

      "Created reusable product cards for consistency and scalability",

      "Added clear enquiry and contact CTAs for better user interaction",
    ],
    challenges: [
      "Maintaining visual consistency",
      "Balancing animations with performance",
    ],
    learnings:
      "Learned how to design business-focused UIs and use animations effectively without impacting performance.",
    liveLink: "https://www.bluboxexports.com/",
      sourceCode: "https://github.com/Nandhini-priya-r",
  },

  /* ---------------- SMARTHOURS ---------------- */
  {
    slug: "smart-hours",
    title: "Smart Hours",
    role: "Frontend Developer",
    summary:
      "Smart Hours is a career-focused learning platform offering expert-led internships with real-world projects in AI, Full Stack, Data Science, and more.It helps students and freshers gain practical skills, certifications, and internship experience to become job-ready.",
    image: "/assets/projects/smart.png",
    tech: ["Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
    problem: [
      "Static and non-interactive user interface",
      "Poor responsiveness across different screen sizes",
      "Inefficient UI state handling",
      "Inconsistent and cluttered layout design",
    ],

    goals: [
      "Automate restaurant operations",
      "Provide intuitive UI for staff",
      "Ensure real-time updates",
    ],
    solution: [
      "Developed interactive and dynamic UI components",
      "Implemented responsive design for all devices",
      "Managed UI state efficiently for smooth user interactions",
      "Designed a clean, intuitive, and user-friendly interface",
    ],
    challenges: [
      "Handling real-time data updates",
      "Managing complex UI states",
    ],
    learnings:
      "Gained experience in building data-driven UIs and handling real-time interactions.",
    liveLink: "https://smarthours.in/",
      sourceCode: "https://github.com/Nandhini-priya-r",
  },
];
