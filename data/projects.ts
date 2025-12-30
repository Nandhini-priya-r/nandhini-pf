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
};

export const projects: Project[] = [
  /* ---------------- QUICKCART ---------------- */
  {
    slug: "quick-cart",
    title: "QuickCart E-Commerce Platform",
    role: "Frontend Developer",
    summary:
      "A modern e-commerce platform focused on fast checkout, responsive UI, and scalable architecture.",
    image: "/assets/projects/quickcart.png",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "Clerk"],
    problem: [
      "Slow checkout experience",
      "High cart abandonment",
      "Poor mobile usability",
    ],
    goals: [
      "Improve checkout speed",
      "Create mobile-first UI",
      "Build scalable components",
    ],
    solution: [
      "Optimized cart flow with minimal steps",
      "Reusable UI components using Tailwind",
      "Secure authentication with Clerk",
    ],
    challenges: [
      "Managing cart state efficiently",
      "Optimizing performance",
      "Handling edge cases in checkout flow",
    ],
    learnings:
      "Improved my understanding of performance optimization, state management, and scalable UI design.",
    liveLink: "https://quick-cart-six-theta.vercel.app/",
  },

  /* ---------------- BLUBOX ---------------- */
  {
    slug: "bluebox",
    title: "BluBox Exports Website",
    role: "Frontend Developer",
    summary:
      "A premium export business website designed to showcase products with professional branding and smooth interactions.",
    image: "/assets/projects/bbox.png",
    tech: ["Next.js", "CSS", "TypeScript", "Framer Motion"],
    problem: [
      "Lack of strong brand presence",
      "Outdated UI design",
      "Poor user engagement",
    ],
    goals: [
      "Create a premium brand identity",
      "Improve visual appeal",
      "Ensure responsive design",
    ],
    solution: [
      "Designed clean, modern UI layouts",
      "Added subtle animations using Framer Motion",
      "Optimized layout for all screen sizes",
    ],
    challenges: [
      "Maintaining visual consistency",
      "Balancing animations with performance",
    ],
    learnings:
      "Learned how to design business-focused UIs and use animations effectively without impacting performance.",
    liveLink: "https://www.bluboxexports.com/",
  },

  /* ---------------- SMARTHOURS ---------------- */
  {
    slug: "smart-hours",
    title: "Smart Restaurant Management App",
    role: "Frontend Developer",
    summary:
      "A smart restaurant management application built to streamline ordering and improve operational efficiency.",
    image: "/assets/projects/smart.png",
    tech: ["Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
    problem: [
      "Manual order management",
      "Poor user experience for staff",
      "Lack of real-time updates",
    ],
    goals: [
      "Automate restaurant operations",
      "Provide intuitive UI for staff",
      "Ensure real-time updates",
    ],
    solution: [
      "Built interactive dashboards",
      "Implemented real-time order updates",
      "Designed clean and easy-to-use UI",
    ],
    challenges: [
      "Handling real-time data updates",
      "Managing complex UI states",
    ],
    learnings:
      "Gained experience in building data-driven UIs and handling real-time interactions.",
    liveLink: "https://smarthours.in/",
  },
];
