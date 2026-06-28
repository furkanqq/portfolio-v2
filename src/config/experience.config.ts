export interface IExperienceType {
  title: string | "";
  date: string | "";
  info: string | "";
}

const experience: IExperienceType[] = [
  {
    title: "Balance Network",
    info: "As a Web Application Developer at Balance Network, my primary responsibility was to develop exchange platforms and related web applications using TypeScript, React.js, Next.js, Node.js, Nest.js, and Web3 technologies. Contributed to the development of the exchange platform by implementing key features such as wallet functionality, crypto trading, and secure transaction processing. Collaborated with UI/UX designers and the engineering team on design, architecture, and feature planning, resulting in enhanced user engagement and visually appealing interfaces.",
    date: "2023/03 – 2024/09",
  },
  {
    title: "Gormek Lazim E-Commerce (Short-term contract)",
    info: "Joined the development of a new e-commerce platform, building customer, partner, and admin interfaces. Leveraged Next.js page router for a modular, high-performance system and Jotai for state management. Utilized TypeScript and SCSS to create a secure, scalable frontend focused on enhancing user experience and delivering intuitive interfaces for management and partners.",
    date: "2024/09 – 2025/01",
  },
  {
    title: "Solverhood",
    info: "I worked on refactoring, bug fixing, and feature development for an appointment system and promotional website built for a school. I worked with Sanity and Salesforce integrations, analyzed the existing structure, and implemented improvements such as fallback mechanisms for missing or problematic areas. I later took ownership of the development process for a franchise-focused SaaS project that already had its UI and core infrastructure in place. I developed features such as email integrations, PDF / image / video upload and download flows, task management, and action-based automatic email or task creation. Based on user and team feedback, I continuously implemented improvements and contributed to making the product production-ready. I worked with technologies such as Next.js, Next.js API Routes, TypeScript, Tailwind CSS, WorkOS, and S3-based file management.",
    date: "2025/11 – present",
  },
  {
    title: "Freelance, Web Developer",
    info: "Delivered tailored web solutions for 6+ clients, creating responsive websites and applications using React.js, Next.js, HTML, CSS, and JavaScript. Collaborated on requirements, designed intuitive interfaces, and managed end-to-end project lifecycles. Ensured on-time delivery while leveraging the latest technologies to optimize user engagement and reduce bounce rates.",
    date: "2023 – present",
  },
];

export default experience;
