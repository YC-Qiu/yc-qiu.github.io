import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const experiences = [
    {
        organization: 'Nullmax Autonomous Driving',
        location: 'Shanghai, China',
        role: 'Front-End Developer Intern',
        time: '2022.06 – 2022.08',
        bullets: [
            'Develop a 3D visualization framework with THREE.js.',
            'Implement data visualization and obstacle detection on the client side.',
            'Add workflow-friendly features such as automatic zoom for dynamic scenes and trajectory prediction based on Foxglove.',
        ],
    },
    {
        organization: 'Wicresoft International LTD.',
        location: 'Remote',
        role: 'Software Engineer Intern',
        time: '2024.11 – 2025.08',
        bullets: [
            'Build ToolBox, a centralized suite of web applications for Wicresoft Managed Telecom Services engineers.',
            'Lead front-end development with jQuery and Jinja templates; deliver back-end features and unit tests with Python and React.',
        ],
    },
];

const researchProjects = [
    {
        organization: 'Mechanical Impedance of Ankle — University of Michigan',
        location: 'Ann Arbor, MI',
        role: 'Full-time Research Assistant',
        time: '2023.07 – 2024.11',
        bullets: [
            'Implement, maintain, and optimize a GUI communicating with a perturbation robot using Python and Arduino C.',
            'Collect and analyze motion data with Qualisys and MATLAB to refine impedance models.',
        ],
    },
    {
        organization: 'Age-related Differences in Ankle Impedance During Standing',
        location: 'University of Michigan',
        role: 'Research Publication',
        time: 'In preparation',
        bullets: [
            'Manuscript: Age-related differences in ankle impedance during standing under varied load and perturbation amplitudes.',
            'Authors: Shin, D.S.†, Rodriguez, K.M.†, Augenstein, T.E., Qiu, Y., Claflin, E.S., Rouse, E.J., & Krishnan, C.',
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

function EntryCard({ data }) {
    const { organization, location, role, time, bullets } = data;
    return (
        <motion.div variants={cardVariants} className="bg-white/10 text-white px-[40px] py-[12px] rounded-2xl shadow-lg backdrop-blur-sm border border-white/20 hover:ring-4 hover:ring-yellow-300/60 hover:ring-inset transition-all">
            <h2 className="oxanium text-2xl font-bold">{organization}</h2>

            <div className="mt-1 text-sm text-gray-300 flex justify-between">
                <span className="text-white/90 orbitron">{role}</span>
                <span className="bungee italic">{time}</span>
            </div>

            <div className="orbitron mt-1 text-sm text-gray-300 text-right italic">
                {location}
            </div>

            {bullets?.length > 0 && (
                <div className="mt-1 space-y-1">
                    {bullets.map((item, idx) => (
                        <div key={idx} className="text-sm text-white/90 leading-tight">
                            <span className="text-[#213547]">•    </span>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            )}
        </motion.div>
    );
}

export default function Work() {
    const backgroundSrc = '/assets/images/empty_bg.png';
    const [bgLoaded, setBgLoaded] = React.useState(false);

    React.useEffect(() => {
        const img = new Image();
        img.src = backgroundSrc;

        const handleReady = () => setBgLoaded(true);
        if (img.complete) {
            setBgLoaded(true);
        } else {
            img.addEventListener('load', handleReady);
            img.addEventListener('error', handleReady);
        }

        return () => {
            img.removeEventListener('load', handleReady);
            img.removeEventListener('error', handleReady);
        };
    }, [backgroundSrc]);

    if (!bgLoaded) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
                <div className="h-16 w-16 rounded-full border-4 border-[#3dbae3]/40 border-t-[#fcd34d] animate-spin" />
                <p className="mt-5 uppercase tracking-[0.35em] text-sm text-white/70">loading</p>
            </div>
        );
    }

    return (
        <motion.div
            className="min-h-screen bg-black text-white p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
            <motion.div
                className="min-h-screen w-full text-white bg-cover bg-center bg-no-repeat bg-fixed px-4 pt-6"
                style={{
                    backgroundImage: `url('${backgroundSrc}')`,
                    backgroundColor: '#000',
                }}
            >
                <motion.div
                    className="max-w-5xl mx-auto space-y-12 pt-4 px-4 edu-tight"
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
                        Experience 👨‍💼
                    </motion.h1>

                    <motion.section className="space-y-6" variants={sectionVariants}>
                        <motion.h2 variants={headerVariants} className="orbitron text-3xl font-bold text-[#213547] text-center">
                            Professional Experience
                        </motion.h2>
                        <motion.div className="space-y-6" variants={listVariants}>
                            {experiences.slice().reverse().map((entry, idx) => (
                                <EntryCard data={entry} key={`exp-${idx}`} />
                            ))}
                        </motion.div>
                    </motion.section>

                    <motion.section className="space-y-6" variants={sectionVariants}>
                        <motion.h2 variants={headerVariants} className="orbitron text-3xl font-bold text-[#213547] text-center">
                            Research
                        </motion.h2>
                        <motion.div className="space-y-6" variants={listVariants}>
                            {researchProjects.slice().reverse().map((entry, idx) => (
                                <EntryCard data={entry} key={`res-${idx}`} />
                            ))}
                        </motion.div>
                    </motion.section>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}