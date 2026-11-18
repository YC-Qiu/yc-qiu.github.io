import { additionalProjects } from "./additionalProjects.js";

export const projects = [
  {
    category: "coursework",
    isGame: true,
    order: 3,
    title: "The Legend of Zelda – Unity Remastered",
    location: "University of Michigan",
    time: "2023.01 – 2023.02",
    tech: "Unity, C#",
    team: "Co-op with Varun Rajesh",
    description: [
      "Recreated the first dungeon of the 1986 classic with Unity, faithfully restoring the original mechanics and polishing a custom level.",
    ],
    contributions: [
      "Implemented physics systems including colliders and flying weapon movement.",
      "Built weapon arsenal: punch, arrow, boomerang, bombs, with VFX and damage detection.",
      "Designed a custom magician boss encounter that conjures blocks within the level.",
    ],
    links: [
      {
        label: "Windows Build",
        url: "https://drive.google.com/file/d/1A7b_m2cZcqZ39bF1ONh_RIzsAw79VxUP/view?usp=share_link",
      },
      {
        label: "MacOS Build",
        url: "https://drive.google.com/file/d/1PG5Vv_tzdm7MxvarMfim4sAiYHWyaM3o/view?usp=share_link",
      },
      {
        label: "Play Online",
        url: "https://yc-qiu.itch.io/zelda-dungeon-punch-man",
      },
    ],
    images: [],
  },
  {
    category: "coursework",
    isGame: true,
    order: 2,
    title: "Computer Lab Simulator – VR Experience",
    location: "University of Michigan",
    time: "2023.01 – 2023.02",
    tech: "Unreal Engine, Blueprint",
    team: "Co-op with Mehar Chhatwal",
    description: [
      "Built a VR simulator of the Bob and Betty Beyster computer lab with interactive NPCs and environmental affordances.",
    ],
    contributions: [
      "Scripted interactive affordances: fire alarm, printer duplication, trash can mechanics.",
      "Recreated the physical lab by placing and tuning assets to mirror the real space.",
      "Authored light switch logic and ambient effects to sell the setting.",
    ],
    links: [{ label: "Watch on YouTube", url: "https://youtu.be/owv9_xFt0nk" }],
    images: [],
  },
  {
    category: "featured-game",
    isGame: true,
    order: 1,
    title: "Checkmate",
    location: "University of Michigan",
    time: "2023.01 – 2023.04",
    tech: "Unity, C#",
    team: "Individual project",
    description: [
      "A roguelike strategy game built around chess spirits with evolving mechanics and tutorialized onboarding.",
    ],
    contributions: [
      "Designed all 14 chess spirits with unique abilities, rewards, and progression systems.",
      "Created a boss encounter that constrains decision time to reshape pacing.",
      "Produced tutorial, VFX, audio, and iterative playtesting for balance and polish.",
    ],
    links: [
      {
        label: "Windows Build",
        url: "https://drive.google.com/file/d/14tqzNZ1Ldlpyvz6C5dqTCEGjUcnQJCMt/view?usp=sharing",
      },
      {
        label: "MacOS Build",
        url: "https://drive.google.com/file/d/16jRg5vEJ-HGKoBg1l16-PMF16YBl-q23/view?usp=sharing",
      },
      { label: "Play Online", url: "https://yc-qiu.itch.io/checkmate" },
    ],
    images: [
      {
        src: "/assets/game/checkmate.png",
        alt: "Checkmate roguelike strategy game screenshot",
      },
    ],
  },
  {
    category: "coursework",
    isGame: true,
    order: 1,
    title: "Ann Arbor Go! – AR Game",
    location: "University of Michigan",
    time: "2023.02 – 2023.03",
    tech: "Unity AR, C#",
    team: "Co-op with Mehar Chhatwal",
    description: [
      "Designed an AR exploration game inspired by Pokémon Go where players plant trees, battle squirrels, and unlock rewards across Ann Arbor.",
    ],
    contributions: [
      "Built UI for landmark and “shop” pages.",
      "Implemented AR object interactions for trees, squirrels, and collectibles.",
      "Balanced combat loops with acorn throwing and custom chocolate power-ups.",
    ],
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/watch?v=I98d0JSJ3eU",
      },
    ],
    images: [],
  },
  {
    category: "featured-game",
    isGame: true,
    order: 2,
    title: "Cosmic Flux Frenzy",
    location: "University of Michigan",
    time: "2023.02 – 2023.04",
    tech: "Unity, C#",
    team: "Team: Jeremy Angelo Damacino Abapo, Bilal Al-Jaibaji, Tianze You",
    description: [
      "Action-adventure prototype featuring a magnetic weapon system that lets players attract or repel foes throughout a space-faring journey.",
    ],
    contributions: [
      "Crafted UI assets (RPG icons, maps, shop panel) and dialogue systems.",
      "Implemented planet/level controllers, target management, and game feel tuning.",
      "Designed motion aesthetics: space rotation, smooth acceleration, collider handling.",
    ],
    links: [
      {
        label: "Watch the Trailer",
        url: "https://www.youtube.com/watch?v=cowJNnLBkbo",
      },
    ],
    images: [
      {
        src: "/assets/game/cosmic-flux.png",
        alt: "Cosmic Flux Frenzy gameplay screenshot",
      },
    ],
  },
  {
    category: "featured-game",
    isGame: true,
    order: 3,
    title: "VR Restaurant Simulator",
    location: "University of Michigan",
    time: "2023.02 – 2023.04",
    tech: "Unreal Engine 5",
    team: "Team: Hongxiao Zheng, Yi He, Ruiying He, Mehar Chhatwal",
    description: [
      "A VR farming and cooking simulator that guides players from planting to selling, featuring rich interactions and cozy aesthetics.",
    ],
    contributions: [
      "Created materials, 3D assets, and assembled scenes for an inviting restaurant world.",
      "Implemented gameplay systems for growing apples, juicing, and cooking workflows.",
      "Authored basic hand animations and interactive props.",
    ],
    links: [
      {
        label: "How to Play",
        url: "https://www.youtube.com/watch?v=d4VxvhRjTR4",
      },
      {
        label: "Watch the Trailer",
        url: "https://www.youtube.com/watch?v=-vm1rLNXGl0",
      },
      { label: "Product Website", url: "https://p3-devlog.webflow.io/" },
    ],
    images: [
      {
        src: "/assets/game/restaurant-simulator.png",
        alt: "VR restaurant simulator environment",
      },
    ],
  },
  {
    category: "featured-game",
    isGame: true,
    order: 4,
    title: "Don't Flock Up",
    location: "University of Michigan",
    time: "2024.12",
    tech: "Unity",
    team: "Game jam team: Alexander, Dallas, Tristan, Justin",
    description: [
      "A cooperative “Counterproductive” themed game jam entry that won the <highlight>3rd place</highlight> at U of M’s Turkey Game Jam.",
    ],
    contributions: [
      "Produced interface assets, main run loop, sound effects, and sprite visuals.",
    ],
    links: [
      {
        label: "Windows Build",
        url: "https://drive.google.com/file/d/1wa_LHYLO8CnsMDPuFeA1HMNHkBvqM5SH/view?usp=sharing",
      },
    ],
    images: [
      {
        src: "/assets/game/dont-flock-up-1.png",
        alt: "Don't Flock Up main menu screenshot",
      },
      {
        src: "/assets/game/dont-flock-up-2.png",
        alt: "Don't Flock Up cooperative gameplay screenshot",
      },
    ],
  },
  {
    category: "ai-ml",
    order: 1,
    title: "Understanding Global Drivers and Barriers of AI Adoption",
    location: "Northwestern University",
    time: "2025 Fall",
    tech: "Python, Tableau, Supervised ML (Classification & Regression)",
    team: "",
    description: [
      "Analyzed a multilingual survey to reveal <highlight>who adopts AI and who hesitates</highlight> across regions.",
      "Built a full pipeline—<highlight>data cleaning, feature engineering, supervised models, Tableau dashboards</highlight>—to turn raw responses into clear signals.",
      "Findings guide <highlight>market targeting, localization, and responsible rollout</highlight> for global AI initiatives.",
    ],
    contributions: [
      "Standardized 20+ country datasets and engineered behavioral features from survey text.",
      "Benchmarked classification and regression models to rank adoption drivers.",
      "Delivered interactive Tableau stories summarizing readiness, barriers, and personas.",
    ],
    links: [],
    images: [
      {
        src: "/assets/ai_projects/ai_opinion1.png",
        alt: "Global AI adoption dashboard view",
      },
      {
        src: "/assets/ai_projects/ai_opinion2.png",
        alt: "Country-level AI adoption readiness analysis",
      },
    ],
  },
  {
    category: "ai-ml",
    order: 2,
    title: "Cross-Domain Sentiment Analysis without Fine-Tuning",
    location: "Northwestern University",
    time: "2025 Fall",
    tech: "Python (scikit-learn, pandas), NLP feature engineering, cross-domain evaluation",
    team: "",
    description: [
      "Investigated how sentiment models generalize to a new domain and how to improve their performance <highlight>without fine-tuning</highlight>.",
      "Examined the performance drop when a model trained in one source domain is applied to a different target domain.",
      "Explored methods for improving target-domain performance while keeping the trained model fixed, rather than fine-tuning it on the new domain.",
    ],
    contributions: [
      "Evaluated sentiment-model performance across source and target domains to understand the impact of domain shift.",
      "Investigated approaches to improve cross-domain generalization without fine-tuning the trained model.",
    ],
    links: [],
    images: [],
  },
  {
    category: "ai-ml",
    order: 3,
    title: "Meal Logistics Planner: AI Scheduling for Multi-Dish Cooking",
    location: "Northwestern University",
    time: "2026 Winter",
    tech: "Python, PDDL (Fast Downward), LLM integration, planning & scheduling",
    team: "",
    description: [
      "Developed an AI-powered system to automatically coordinate multi-dish cooking under resource and timing constraints.",
      "Modeled recipes as task graphs with dependencies and resource requirements, and translated them into PDDL planning problems to generate conflict-free execution plans.",
      "Built a full pipeline from natural language input to synchronized schedules, bottleneck resource detection, and detailed execution timelines.",
    ],
    contributions: [
      "Designed symbolic planning framework ensuring all dishes finish simultaneously without resource conflicts.",
      "Implemented PDDL-based planner with fallback scheduling for robustness.",
      "Built interactive web interface with an LLM agent for custom kitchen and recipe generation.",
      "Delivered end-to-end system from natural language input to planning and executable schedule.",
    ],
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/weicheng998/371-meal-logistics-planner",
      },
      {
        label: "Project Poster",
        url: "https://drive.google.com/file/d/1F5NqtPl5cbXQWFZAe2xmjbLqB-rCn1wc/view?usp=sharing",
      },
    ],
    images: [],
    videos: [
      {
        src: "https://www.youtube.com/embed/fOl1YRtSIp4",
        title: "Meal Logistics Planner demo",
      },
    ],
  },
  ...additionalProjects,
];
