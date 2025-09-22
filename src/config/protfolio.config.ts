export interface PortfolioType {
  title: string;
  params: string;
  img: string;
  link: string;
  githubLink: string;
  githubVisit?: boolean;
  visit?: boolean;
  desc: string;
}

const portfolio: PortfolioType[] = [
  {
    title: "Görmek Lazım E-Commerce",
    params: "NextJS, TypeScript, SCSS, Rest API, Responsive Design, Jotai",
    desc: "Joined the development of a new e-commerce platform, building customer, partner, and admin interfaces. Leveraged Next.js page router for a modular, high-performance system and Jotai for state management. Utilized TypeScript and SCSS to create a secure, scalable frontend focused on enhancing user experience and delivering intuitive interfaces for management and partners.",
    img: "https://res.cloudinary.com/ddfqedsqq/image/upload/v1743492171/gl_cover.webp",
    link: "https://www.gormeklazim.com/",
    githubLink: "",
    githubVisit: false,
    visit: true,
  },
  {
    title: "Moment QR",
    params: "Responsive Design, NextJS, SCSS, TypeScript",
    desc: "A web platform for weddings and events where guests can join via QR code to share photos in a common gallery. Currently only the frontend is available — the backend is not yet implemented.",
    img: "https://res.cloudinary.com/ddfqedsqq/image/upload/v1757776777/mq_cover.webp",
    link: "https://moment-qr.vercel.app/",
    githubLink: "https://github.com/furkanqq/momentQR",
    visit: true,
    githubVisit: true,
  },
  {
    title: "Art Museum",
    params:
      "Framer motion, Tailwind Css, NextJS, TypeScript, Responsive Design, Cloudinary",
    desc: "A gallery-style website built with Framer Motion, showcasing famous artworks from renowned artists such as Van Gogh and Salvador Dalí. Smooth animations and transitions provide an interactive and visually engaging user experience.",
    img: "https://res.cloudinary.com/ddfqedsqq/image/upload/v1743492169/art_cover.webp",
    link: "https://art-gallery-five-blond.vercel.app/",
    githubLink: "https://github.com/furkanqq/art-gallery",
    githubVisit: true,
    visit: true,
  },
  {
    title: "PDR Portfolio",
    params:
      "ReactJS, TailwindCSS, Responsive Design, Brand Identity, Web Design",
    desc: "A simple portfolio website for a psychological counseling and guidance professional, showcasing their services, experience, and contact information.",
    img: "https://res.cloudinary.com/ddfqedsqq/image/upload/v1758232077/pdr-cover.webp",
    link: "https://pdr-sooty.vercel.app/",
    githubLink: "",
    githubVisit: false,
    visit: true,
  },

  {
    title: "Balance Landing",
    params:
      "NextJS, JS, CSS, Context, Redux, Directus, Rest API, ESLint, Prettier, Responsive Design",
    desc: "A landing page for Balance Network, a blockchain ecosystem. The site provides information about the network's features, services, and how to get started.",
    img: "https://res.cloudinary.com/ddfqedsqq/image/upload/v1758328637/landing-cover.webp",
    link: "https://balance-landing-v3.vercel.app/",
    // link: "https://www.balancenetwork.io/",
    githubLink: "",
    githubVisit: false,
    visit: true,
  },

  {
    title: "Portfolio Website",
    params:
      "ReactJS, Module CSS, TypeScript, Responsive Design, Router Dom, Context",
    desc: "My old personal portfolio website built with ReactJS and TypeScript. Featuring a clean, responsive design, the site showcases my skills, projects, and contact information.",
    img: "https://res.cloudinary.com/ddfqedsqq/image/upload/v1757860040/portfolio-cover.webp",
    link: "https://portfolio-137k.vercel.app/",
    githubLink: "https://github.com/furkanqq/portfolio",
    githubVisit: true,
    visit: true,
  },
  {
    title: "Customer Tracking System",
    params:
      "NextJS, TailwindCSS, TypeScript, Responsive Design, NetGSM, Mail, QR Code Scanner, Railway",
    desc: "A customer tracking system designed for gyms and fitness centers. It allows staff to manage and update customer profiles, including personal details and the number of remaining classes. The system also integrates with a QR code scanner: when customers scan their code at the entrance, the system automatically deducts a class from their balance. If fewer than two classes remain, an automated email notification is sent to remind them to renew their package.",
    img: "https://res.cloudinary.com/ddfqedsqq/image/upload/v1743492169/fithouse_cover.webp",
    link: "It cannot be shared because it is an admin panel.",
    githubLink: "",
    githubVisit: false,
    visit: false,
  },
  {
    title: "Crypto Exchange",
    params:
      "ReactJS, TypeScript, JS, CSS, Redux, Web Socket, Rest API, ESLint, Prettier, Responsive Design",
    desc: "A cryptocurrency exchange platform that allows users to trade various digital assets. The platform features real-time price updates, advanced charting tools, and a user-friendly interface for seamless trading.",
    img: "https://res.cloudinary.com/ddfqedsqq/image/upload/v1758328637/crypto-cover.webp",
    link: "https://exchange-balancenetwork.io/",
    githubLink: "",
    githubVisit: false,
    visit: false,
  },
  {
    title: "Blind Lover",
    params:
      "NextJS, TailwindCSS, TypeScript, Responsive Design, Jotai, AdSense, OpenAI API",
    desc: "An AI-powered application that asks users 100 questions about their ideal partner. Based on the answers, the AI analyzes the results across 6 different categories and provides personalized insights to the user.",
    img: "https://res.cloudinary.com/ddfqedsqq/image/upload/v1743492169/blindlover_cover.webp",
    link: "https://blindlover.vercel.app/en",
    // link: "https://blindlover.com",
    githubLink: "https://github.com/furkanqq/blindlover",
    githubVisit: true,
    visit: true,
  },
  {
    title: "Balance Solution",
    params:
      "NextJS, SCSS, Rest API, Redux, TypeScript, Responsive Design, Directus, Cloudinary",
    desc: "Developed the Balance Solution website using Next.js, SCSS, and TypeScript, integrating with Directus CMS for dynamic content management. Implemented Redux for efficient state management and ensured a responsive design for optimal user experience across devices. Utilized Cloudinary for media handling, enhancing site performance and visual appeal.",
    img: "https://res.cloudinary.com/ddfqedsqq/image/upload/v1743492170/solution_cover.webp",
    link: "https://balance.software/",
    githubLink: "",
    githubVisit: false,
    visit: false,
  },

  {
    title: "Itopya E-Commerce Task",
    params: ".Net MVC, Html, Css, JQuery",
    desc: "A task to create a custom e-commerce landing page .Net MVC framework.(Design not submitted for responsive design)",
    img: "https://res.cloudinary.com/ddfqedsqq/image/upload/v1758575249/itopya-cover.webp",
    link: "",
    githubLink: "https://github.com/furkanqq/Itopya-WebUzmani-Task",
    githubVisit: true,
    visit: false,
  },

  {
    title: "Denizcilik Tahkim",
    params: "Responsive Design, Html, Css",
    desc: "A website for a maritime arbitration organization, providing information about their services, team, and contact details.",
    img: "https://res.cloudinary.com/ddfqedsqq/image/upload/v1743492170/tahkim_cover.webp",
    link: "https://denizciliktahkim.org/",
    githubLink: "",
    githubVisit: false,
    visit: true,
  },
  {
    title: "Blog",
    params: "NextJS, SCSS, TypeScript, Responsive Design",
    desc: "A simple blog page for sharing posts and updates, with a contact section for collecting user feedback.",
    img: "https://res.cloudinary.com/ddfqedsqq/image/upload/v1743492170/blogger_cover.webp",
    link: "https://blog-delta-eight-11.vercel.app/",
    githubLink: "https://github.com/furkanqq/blog",
    githubVisit: true,
    visit: true,
  },
  {
    title: "Meme Coin Page",
    params: "NextJS, TailwindCSS, TypeScript, Responsive Design, Jotai",
    desc: "A landing page for a meme cryptocurrency, providing information about the coin, its features, and how to get involved.",
    img: "https://res.cloudinary.com/ddfqedsqq/image/upload/v1743492169/momey_cover.webp",
    link: "https://www.momeycoin.com/",
    githubLink: "https://github.com/furkanqq/memeCoin",
    githubVisit: true,
    visit: true,
  },
  {
    title: "Seat Covers E-Commerce Task",
    params: "Shopify Liquid, HTML, CSS, JavaScript",
    desc: "A task to create a custom e-commerce website for selling seat covers using Shopify Liquid. Password: 'beupew'",
    img: "https://res.cloudinary.com/ddfqedsqq/image/upload/v1757852024/shopify-seat-cover.png",
    link: "https://furkanilhan-test.myshopify.com/",
    githubLink: "",
    githubVisit: false,
    visit: true,
  },
  {
    title: "NFT Marketplace",
    params:
      "NextJS, TypeScript, Tailwind, Redux, Web3, Wagmi, ESLint, Prettier, Responsive Design",
    desc: "An NFT marketplace where users can buy, sell, and trade non-fungible tokens. The platform integrates with popular wallets and provides a secure environment for NFT transactions.",
    img: "https://res.cloudinary.com/ddfqedsqq/image/upload/v1758328637/nft-cover.webp",
    link: "https://nft.balancenetwork.io/",
    githubLink: "",
    githubVisit: false,
    visit: false,
  },
  {
    title: "IDO Launchpad",
    params:
      "ReactJS, NextJS, Ethers, Web3, Wagmi, Viem, Smart Contract, Solidity, ABI, NestJS",
    desc: "A launchpad for Initial DEX Offerings (IDOs) that enables projects to raise funds and distribute tokens to investors. The platform offers a streamlined process for launching IDOs and provides tools for project management and investor engagement.",
    img: "https://res.cloudinary.com/ddfqedsqq/image/upload/v1758328637/ido-cover.webp",
    link: "https://ido.balancenetwork.io/",
    githubLink: "",
    githubVisit: false,
    visit: false,
  },
  {
    title: "NPM Packages",
    params: "NodeJS, JS, Package Manager",
    desc: "Each package is designed to be easy to integrate into React applications.",
    img: "https://res.cloudinary.com/ddfqedsqq/image/upload/v1743492170/npm_cover.webp",
    link: "https://www.npmjs.com/~murki",
    githubLink: "",
    githubVisit: false,
    visit: true,
  },
];

export default portfolio;
