import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projectSections = [
    { key: 'featured', title: 'Featured Projects' },
    { key: 'coursework', title: 'Coursework Projects' },
];

const projects = [
    {
        category: 'coursework',
        order: 3,
        title: 'The Legend of Zelda – Unity Remastered',
        location: 'University of Michigan, Ann Arbor, MI',
        time: '2023.01 – 2023.02',
        tech: 'Unity, C#',
        team: 'Co-op with Varun Rajesh',
        description: [
            'Recreated the first dungeon of the 1986 classic with Unity, faithfully restoring the original mechanics and polishing a custom level.',
        ],
        contributions: [
            'Implemented physics systems including colliders and flying weapon movement.',
            'Built weapon arsenal: punch, arrow, boomerang, bombs, with VFX and damage detection.',
            'Designed a custom magician boss encounter that conjures blocks within the level.',
        ],
        links: [
            { label: 'Windows Build', url: 'https://drive.google.com/file/d/1A7b_m2cZcqZ39bF1ONh_RIzsAw79VxUP/view?usp=share_link' },
            { label: 'MacOS Build', url: 'https://drive.google.com/file/d/1PG5Vv_tzdm7MxvarMfim4sAiYHWyaM3o/view?usp=share_link' },
            { label: 'Play Online', url: 'https://yc-qiu.itch.io/zelda-dungeon-punch-man' },
        ],
        images: [],
    },
    {
        category: 'coursework',
        order: 2,
        title: 'Computer Lab Simulator – VR Experience',
        location: 'University of Michigan, Ann Arbor, MI',
        time: '2023.01 – 2023.02',
        tech: 'Unreal Engine, Blueprint',
        team: 'Co-op with Mehar Chhatwal',
        description: [
            'Built a VR simulator of the Bob and Betty Beyster computer lab with interactive NPCs and environmental affordances.',
        ],
        contributions: [
            'Scripted interactive affordances: fire alarm, printer duplication, trash can mechanics.',
            'Recreated the physical lab by placing and tuning assets to mirror the real space.',
            'Authored light switch logic and ambient effects to sell the setting.',
        ],
        links: [
            { label: 'Watch on YouTube', url: 'https://youtu.be/owv9_xFt0nk' },
        ],
        images: [],
    },
    {
        category: 'featured',
        order: 1,
        title: 'Checkmate',
        location: 'University of Michigan, Ann Arbor, MI',
        time: '2023.02 (two-week sprint)',
        tech: 'Unity, C#',
        team: 'Individual project',
        description: [
            'A roguelike strategy game built around chess spirits with evolving mechanics and tutorialized onboarding.',
        ],
        contributions: [
            'Designed all 14 chess spirits with unique abilities, rewards, and progression systems.',
            'Created a boss encounter that constrains decision time to reshape pacing.',
            'Produced tutorial, VFX, audio, and iterative playtesting for balance and polish.',
        ],
        links: [
            { label: 'Windows Build', url: 'https://drive.google.com/file/d/14tqzNZ1Ldlpyvz6C5dqTCEGjUcnQJCMt/view?usp=sharing' },
            { label: 'MacOS Build', url: 'https://drive.google.com/file/d/16jRg5vEJ-HGKoBg1l16-PMF16YBl-q23/view?usp=sharing' },
            { label: 'Play Online', url: 'https://yc-qiu.itch.io/checkmate' },
        ],
        images: [
            { src: '/assets/projects/checkmate.png', alt: 'Checkmate roguelike strategy game screenshot' },
        ],
    },
    {
        category: 'coursework',
        order: 1,
        title: 'Ann Arbor Go! – AR Game',
        location: 'University of Michigan, Ann Arbor, MI',
        time: '2023.02 – 2023.03',
        tech: 'Unity AR, C#',
        team: 'Co-op with Mehar Chhatwal',
        description: [
            'Designed an AR exploration game inspired by Pokémon Go where players plant trees, battle squirrels, and unlock rewards across Ann Arbor.',
        ],
        contributions: [
            'Built UI for landmark and “shop” pages.',
            'Implemented AR object interactions for trees, squirrels, and collectibles.',
            'Balanced combat loops with acorn throwing and custom chocolate power-ups.',
        ],
        links: [
            { label: 'Watch on YouTube', url: 'https://www.youtube.com/watch?v=I98d0JSJ3eU' },
        ],
        images: [],
    },
    {
        category: 'featured',
        order: 2,
        title: 'Cosmic Flux Frenzy',
        location: 'University of Michigan, Ann Arbor, MI',
        time: '2023.02 – 2023.04',
        tech: 'Unity, C#',
        team: 'Team: Jeremy Angelo Damacino Abapo, Bilal Al-Jaibaji, Tianze You',
        description: [
            'Action-adventure prototype featuring a magnetic weapon system that lets players attract or repel foes throughout a space-faring journey.',
        ],
        contributions: [
            'Crafted UI assets (RPG icons, maps, shop panel) and dialogue systems.',
            'Implemented planet/level controllers, target management, and game feel tuning.',
            'Designed motion aesthetics: space rotation, smooth acceleration, collider handling.',
        ],
        links: [
            { label: 'Watch the Trailer', url: 'https://www.youtube.com/watch?v=cowJNnLBkbo' },
        ],
        images: [
            { src: '/assets/projects/cosmic-flux.png', alt: 'Cosmic Flux Frenzy gameplay screenshot' },
        ],
    },
    {
        category: 'featured',
        order: 3,
        title: 'VR Restaurant Simulator',
        location: 'University of Michigan, Ann Arbor, MI',
        time: '2023.02 – 2023.04',
        tech: 'Unreal Engine 5',
        team: 'Team: Hongxiao Zheng, Yi He, Ruiying He, Mehar Chhatwal',
        description: [
            'A VR farming and cooking simulator that guides players from planting to selling, featuring rich interactions and cozy aesthetics.',
        ],
        contributions: [
            'Created materials, 3D assets, and assembled scenes for an inviting restaurant world.',
            'Implemented gameplay systems for growing apples, juicing, and cooking workflows.',
            'Authored basic hand animations and interactive props.',
        ],
        links: [
            { label: 'How to Play', url: 'https://www.youtube.com/watch?v=d4VxvhRjTR4' },
            { label: 'Watch the Trailer', url: 'https://www.youtube.com/watch?v=-vm1rLNXGl0' },
            { label: 'Product Website', url: 'https://p3-devlog.webflow.io/' },
        ],
        images: [
            { src: '/assets/projects/restaurant-simulator.png', alt: 'VR restaurant simulator environment' },
        ],
    },
    {
        category: 'featured',
        order: 4,
        title: "Don't Flock Up", 
        location: 'University of Michigan, Ann Arbor, MI',
        time: '2024.12',
        tech: 'Unity',
        team: 'Game jam team: Alexander, Dallas, Tristan, Justin',
        description: [
            'A cooperative “Counterproductive” themed game jam entry that won 3rd place at U of M’s Turkey Game Jam.',
        ],
        contributions: [
            'Produced interface assets, main run loop, sound effects, and sprite visuals.',
        ],
        links: [
            { label: 'Windows Build', url: 'https://drive.google.com/file/d/1wa_LHYLO8CnsMDPuFeA1HMNHkBvqM5SH/view?usp=sharing' },
        ],
        images: [
            { src: '/assets/projects/dont-flock-up-1.png', alt: "Don't Flock Up main menu screenshot" },
            { src: '/assets/projects/dont-flock-up-2.png', alt: "Don't Flock Up cooperative gameplay screenshot" },
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: 'easeOut',
            when: 'beforeChildren',
            staggerChildren: 0.12,
        },
    },
};

const headerVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const sectionVariants = {
    hidden: { opacity: 0, y: 26 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.1, delayChildren: 0.05 },
    },
};

const listVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 32, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.45, ease: 'easeOut' },
    },
};

function ProjectCard({ project }) {
    const imageList = Array.isArray(project.images)
        ? project.images.filter(Boolean)
        : typeof project.image === 'string' && project.image.trim().length > 0
            ? [{ src: project.image, alt: project.imageAlt || project.title }]
            : [];

    return (
        <motion.div
            className="bg-white/10 text-white px-[40px] py-[12px] rounded-2xl shadow-lg backdrop-blur-sm border border-white/20 hover:ring-4 hover:ring-yellow-300/60 hover:ring-inset transition-all"
            variants={cardVariants}
        >
            <h3 className="oxanium text-2xl font-bold">{project.title}</h3>

            <div className="mt-1 text-sm text-gray-300 flex justify-between">
                <span className="orbitron italic text-white/90">{project.location}</span>
                <span className="bungee">{project.time}</span>
            </div>

            <div className="mt-1 text-sm text-gray-300 flex flex-wrap justify-between gap-y-1">
                <span className="text-white/80"><strong>Tech:</strong> {project.tech}</span>
                {project.team && <span className="italic text-right">{project.team}</span>}
            </div>

            {project.description?.map((paragraph, idx) => (
                <p key={idx} className="mt-3 text-white/90 leading-snug">
                    {paragraph}
                </p>
            ))}

            {project.contributions?.length > 0 && (
                <div className="mt-3 space-y-1">
                    {project.contributions.map((item, idx) => (
                        <div key={idx} className="text-sm text-white/90 leading-tight">
                            <span className="text-[#213547]">{`•\u00A0\u00A0`}</span>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            )}

            {project.links?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3">
                    {project.links.map(({ label, url }) => (
                        <a
                            key={label}
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            className="no-visited text-[#3dbae3] hover:text-[#fcd34d] underline-offset-4 decoration-dotted"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            )}

            {imageList.length > 0 ? (
                <div className="mt-4 flex flex-wrap justify-center gap-4">
                    {imageList.map(({ src, alt }, idx) => (
                        <figure
                            key={`${project.title}-img-${idx}`}
                            className="w-[240px] sm:w-[260px] rounded-xl bg-black/30 overflow-hidden"
                        >
                            <img
                                src={src}
                                alt={alt || project.title}
                                className="w-full object-contain"
                                loading="lazy"
                            />
                        </figure>
                    ))}
                </div>
            ) : null}
        </motion.div>
    );
}

export default function Projects() {
    return (
        <motion.div
            className="min-h-screen bg-black text-white p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
            <motion.div
                className="min-h-screen w-screen text-white bg-cover bg-center bg-no-repeat bg-fixed px-4 pt-6 pl-6"
                style={{
                    backgroundImage: "url('/assets/images/empty_bg.png')",
                    backgroundColor: '#000',
                }}
            >
                <motion.div
                    className="max-w-5xl mx-auto space-y-12 pt-4 pl-4 edu-tight"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={headerVariants} className="w-fit">
                        <Link
                            to="/"
                            className="no-visited text-white text-xl px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm w-fit inline-flex items-center justify-center shadow-md transition"
                            title="Back to Home"
                            style={{ marginTop: '24px', marginLeft: '24px' }}
                        >
                            <i className="fas fa-arrow-left fa-3x leading-none !text-[#213547] hover:!text-[#213547] visited:!text-[#213547] focus:!text-[#213547] active:!text-[#213547] p-2"></i>
                        </Link>
                    </motion.div>

                    <motion.h1 variants={headerVariants} className="orbitron text-5xl font-bold text-center text-white">
                        Projects 👨‍💻
                    </motion.h1>

                    {projectSections.map(({ key, title }) => {
                        const items = projects
                            .filter((proj) => proj.category === key)
                            .sort((a, b) => a.order - b.order);

                        if (items.length === 0) return null;

                        return (
                            <motion.section key={key} className="space-y-6" variants={sectionVariants}>
                                <motion.h2 variants={headerVariants} className="orbitron text-3xl font-bold text-[#213547] text-center">
                                    {title}
                                </motion.h2>
                                <motion.div className="space-y-6" variants={listVariants}>
                                    {items.map((project) => (
                                        <ProjectCard key={project.title} project={project} />
                                    ))}
                                </motion.div>
                            </motion.section>
                        );
                    })}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}