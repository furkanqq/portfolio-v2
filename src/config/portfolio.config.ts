export interface PortfolioType {
  title: string;
  type: string;
  shortDescription: string;
  stack: string[];
  image: string;
  problem?: string;
  role?: string;
  solution?: string;
  infrastructure?: string;
  result?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  githubUrl?: string;
  liveLabel?: string;
  status?: string;
  featured?: boolean;
  priority?: number;
  category?: string;
  workedOn?: string[];
  subProjects?: {
    title: string;
    description: string;
    stack?: string[];
    status?: string;
  }[];
}

const portfolio: PortfolioType[] = [
  {
    title: "Fit House",
    type: "QR-Based Gym Attendance System",
    shortDescription:
      "Gym attendance and lesson tracking with QR check-in, automatic lesson deduction and email reminders.",
    problem:
      "The gym needed a faster and more reliable way to track student attendance and remaining lesson rights.",
    role: "Designed and developed the system from scratch, including user management, QR code generation, QR scanning flow, attendance tracking and email automation.",
    solution:
      "Built a QR-based attendance system where each student has a unique QR code. When the QR is scanned, the system automatically deducts one lesson and displays a welcome screen.",
    stack: [
      "Next.js",
      "TypeScript",
      "Database",
      "QR Scanner",
      "Email Automation",
    ],
    result:
      "Reduced manual tracking, made the check-in process faster and created a clearer lesson tracking workflow for the gym.",
    image:
      "https://res.cloudinary.com/ddfqedsqq/image/upload/v1743492169/fithouse_cover.webp",
    status: "Private admin panel",
    featured: true,
    priority: 1,
    category: "Business System",
  },
  {
    title: "Galerie QR",
    type: "Full-Stack Event Media Sharing Platform",
    shortDescription:
      "QR-based photo and video sharing platform for weddings and private events.",
    problem:
      "Event guests need a simple way to share photos and videos in one shared gallery without installing an app or going through a complicated process.",
    role: "Designed and developed the full-stack application, including frontend experience, backend flow, QR-based access, media upload logic and VPS deployment.",
    solution:
      "Built a QR-based event gallery platform where guests can join an event page, upload photos or videos and view shared memories in a responsive gallery experience.",
    stack: [
      "Next.js",
      "TypeScript",
      "SCSS",
      "Next.js API Routes / backend flow",
      "VPS Deployment",
      "Media Upload Flow",
    ],
    infrastructure:
      "Configured and deployed the application on a VPS environment and handled the production setup required for the project.",
    result:
      "Built as a functional full-stack event media sharing platform for weddings and private events.",
    image:
      "https://res.cloudinary.com/ddfqedsqq/image/upload/v1781872371/galerieqr-cover_icszl0.webp",
    liveUrl: "https://www.galerieqr.com/",
    status: "Functional full-stack project",
    featured: true,
    priority: 2,
    category: "Full-Stack Product",
  },
  {
    title: "Görmek Lazım",
    type: "E-commerce Admin & Partner Panels",
    shortDescription:
      "Admin and partner panel development for an e-commerce platform.",
    problem:
      "The platform needed internal admin and partner-facing panels to manage operational workflows.",
    role: "Developed admin and partner panel interfaces during a short-term contract.",
    solution:
      "Built responsive dashboard screens, panel flows and management interfaces based on project requirements.",
    stack: ["React", "TypeScript", "Dashboard UI", "API Integration"],
    result:
      "Delivered admin and partner panel interfaces within the contract period.",
    image:
      "https://res.cloudinary.com/ddfqedsqq/image/upload/v1743492171/gl_cover.webp",
    liveUrl: "https://www.gormeklazim.com/",
    featured: true,
    priority: 3,
    category: "E-commerce",
  },
  {
    title: "Balance Network Ecosystem",
    type: "Web3 Product Interfaces & Crypto Platform Frontend",
    shortDescription:
      "Frontend work across a crypto exchange ecosystem, including landing pages, exchange UI, NFT marketplace, IDO launchpad and wallet-related flows.",
    problem:
      "A crypto exchange ecosystem needed multiple frontend interfaces across public landing pages and product-specific Web3 flows.",
    role: "Worked as a frontend developer and contributed to React/Next.js interfaces, wallet connection flows, exchange-related UI, NFT marketplace screens, IDO launchpad screens and frontend/backend communication where needed.",
    solution:
      "Built and maintained user-facing interfaces across the Balance Network ecosystem, including public pages and private product interfaces for exchange, NFT and token launch workflows.",
    stack: ["React", "Next.js", "TypeScript", "Web3", "Redux", "REST API"],
    result:
      "Gained production experience in fintech/Web3 interfaces, real-time product flows, wallet integrations and blockchain-related frontend workflows.",
    image:
      "https://res.cloudinary.com/ddfqedsqq/image/upload/v1758328637/crypto-cover.webp",
    liveUrl: "https://balance-landing-v3.vercel.app/",
    liveLabel: "Public Preview",
    status:
      "Some product interfaces are no longer publicly available due to business and access restrictions. Source code is private due to company ownership.",
    featured: true,
    priority: 4,
    category: "Web3 / Fintech",
    workedOn: [
      "Public landing page",
      "Crypto exchange interface",
      "NFT marketplace interface",
      "IDO launchpad interface",
      "Wallet connection flows",
      "Web3-related frontend integrations",
    ],
    subProjects: [
      {
        title: "Public Landing Page",
        description:
          "Public-facing marketing and ecosystem overview pages for Balance Network.",
        stack: ["Next.js", "TypeScript", "REST API"],
      },
      {
        title: "Crypto Exchange Interface",
        description:
          "Trading interface work covering exchange-related screens, market flows and account-facing UI.",
        stack: ["React", "TypeScript", "Redux", "Web3"],
        status: "No longer publicly available due to business restrictions.",
      },
      {
        title: "NFT Marketplace Interface",
        description:
          "Marketplace screens and Web3 interaction flows for NFT browsing and transaction-related UI.",
        stack: ["Next.js", "TypeScript", "Web3", "Wagmi"],
        status: "No longer publicly available due to access restrictions.",
      },
      {
        title: "IDO Launchpad Interface",
        description:
          "Token launch workflow screens for project launch, investor-facing flows and Web3 interactions.",
        stack: ["React", "Next.js", "Web3", "REST API"],
        status: "No longer publicly available due to access restrictions.",
      },
    ],
  },
  {
    title: "F-Ball",
    type: "Football Party Game Platform",
    shortDescription:
      "Football-themed web game platform for friends to play guessing and challenge games together.",
    problem:
      "Football fans often play verbal guessing games with friends, but there are few simple web-based tools designed specifically for this experience.",
    role: "Designed and developed the product concept, UI, game flows and frontend logic.",
    solution:
      "Built a football-themed game platform with multiple game modes, interactive flows and a playful visual identity.",
    stack: ["Next.js", "TypeScript", "Game Logic", "UI Design"],
    result:
      "Created a product-style web application that demonstrates UI thinking, game flow design and frontend implementation.",
    image:
      "https://res.cloudinary.com/ddfqedsqq/image/upload/v1781873547/f-ball-cover_abzhfo.webp",
    liveUrl: "https://f-ball.vercel.app/",
    featured: true,
    priority: 5,
    category: "Product Concept",
  },
  {
    title: "f-solve",
    type: "Premium Web & Product Studio Concept",
    shortDescription:
      "Personal service brand for premium web interfaces, landing pages and product-focused frontend work.",
    problem:
      "I wanted to create a focused service brand to present my frontend, UI and product development work in a more premium way.",
    role: "Designed and developed the brand identity, landing page, UI direction and service positioning.",
    solution:
      "Created a minimal and premium-looking web presence for frontend development, landing pages and product-focused digital experiences.",
    stack: ["Next.js", "TypeScript", "Branding", "UI Design"],
    result:
      "Built a personal service brand experiment that helped me clarify my positioning and presentation style.",
    image:
      "https://res.cloudinary.com/ddfqedsqq/image/upload/v1781907073/f-solve-cover_wruxx9.webp",
    liveUrl: "https://f-solve.com/",
    featured: true,
    priority: 6,
    category: "Service Brand",
  },

  {
    title: "Balance Solution",
    type: "Software Company Website",
    shortDescription:
      "Company website with CMS-backed content, responsive pages and optimized media handling.",
    stack: ["Next.js", "TypeScript", "SCSS", "Directus"],
    image:
      "https://res.cloudinary.com/ddfqedsqq/image/upload/v1743492170/solution_cover.webp",
    liveUrl: "https://balance-software-v2.vercel.app/",
    category: "Company Website",
  },
  {
    title: "Aurum",
    type: "Custom Watch Product Configurator",
    shortDescription:
      "Custom watch platform where users configure a timepiece and request a personalized quote.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image:
      "https://res.cloudinary.com/ddfqedsqq/image/upload/v1781875006/aurum-cover_zpma7o.webp",
    liveUrl: "https://aurum-beige-beta.vercel.app/",
    category: "Product Concept",
  },
  {
    title: "Art Museum",
    type: "Animated Gallery Website",
    shortDescription:
      "Gallery-style website showcasing famous artworks with smooth animated transitions.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudinary"],
    image:
      "https://res.cloudinary.com/ddfqedsqq/image/upload/v1743492169/art_cover.webp",
    liveUrl: "https://art-gallery-five-blond.vercel.app/",
    githubUrl: "https://github.com/furkanqq/art-gallery",
    category: "Experiment",
  },
  {
    title: "PDR Portfolio",
    type: "Professional Portfolio Website",
    shortDescription:
      "Portfolio website for a psychological counseling and guidance professional.",
    stack: ["React", "Tailwind CSS", "Responsive Design", "Brand Identity"],
    image:
      "https://res.cloudinary.com/ddfqedsqq/image/upload/v1758232077/pdr-cover.webp",
    liveUrl: "https://pdr-sooty.vercel.app/",
    category: "Client Website",
  },
  {
    title: "Portfolio Website",
    type: "Previous Personal Portfolio",
    shortDescription:
      "Earlier personal portfolio built with React and TypeScript to showcase work and contact details.",
    stack: ["React", "TypeScript", "Module CSS", "Context"],
    image:
      "https://res.cloudinary.com/ddfqedsqq/image/upload/v1757860040/portfolio-cover.webp",
    liveUrl: "https://portfolio-137k.vercel.app/",
    githubUrl: "https://github.com/furkanqq/portfolio",
    category: "Personal",
  },
  {
    title: "Blind Lover",
    type: "AI-Powered Relationship Insight App",
    shortDescription:
      "AI app that asks guided questions and returns personalized relationship insights.",
    stack: ["Next.js", "TypeScript", "Jotai", "OpenAI API"],
    image:
      "https://res.cloudinary.com/ddfqedsqq/image/upload/v1743492169/blindlover_cover.webp",
    liveUrl: "https://blindlover.vercel.app/en",
    githubUrl: "https://github.com/furkanqq/blindlover",
    category: "AI Product",
  },

  {
    title: "Denizcilik Tahkim",
    type: "Organization Website",
    shortDescription:
      "Website for a maritime arbitration organization with service, team and contact pages.",
    stack: ["HTML", "CSS", "Responsive Design"],
    image:
      "https://res.cloudinary.com/ddfqedsqq/image/upload/v1743492170/tahkim_cover.webp",
    liveUrl: "https://denizciliktahkim.org/",
    category: "Client Website",
  },
  {
    title: "Seat Covers E-Commerce Task",
    type: "Shopify Liquid E-commerce Task",
    shortDescription:
      "Custom e-commerce storefront task built with Shopify Liquid, HTML, CSS and JavaScript.",
    stack: ["Shopify Liquid", "HTML", "CSS", "JavaScript"],
    image:
      "https://res.cloudinary.com/ddfqedsqq/image/upload/v1757852024/shopify-seat-cover.png",
    liveUrl: "https://furkanilhan-test.myshopify.com/",
    status: "Password protected test storefront.",
    category: "E-commerce",
  },
  {
    title: "Itopya E-Commerce Task",
    type: ".NET MVC E-commerce Task",
    shortDescription:
      "Custom e-commerce landing page task implemented with .NET MVC, HTML, CSS and jQuery.",
    stack: [".NET MVC", "HTML", "CSS", "jQuery"],
    image:
      "https://res.cloudinary.com/ddfqedsqq/image/upload/v1758575249/itopya-cover.webp",
    githubUrl: "https://github.com/furkanqq/Itopya-WebUzmani-Task",
    category: "E-commerce",
  },
  {
    title: "NPM Packages",
    type: "JavaScript Utility Packages",
    shortDescription:
      "Small JavaScript packages designed to be easy to integrate into React applications.",
    stack: ["Node.js", "JavaScript", "Package Manager"],
    image:
      "https://res.cloudinary.com/ddfqedsqq/image/upload/v1743492170/npm_cover.webp",
    liveUrl: "https://www.npmjs.com/~murki",
    category: "Open Source",
  },
];

export default portfolio;
