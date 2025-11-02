import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const hobbies = [
    { title: '🎮 Gaming', description: 'Enjoy narrative-driven adventures, strategy titles, and game jam challenges.' },
    { title: '🎧 Music Production', description: 'Experiment with electronic music and layered soundscapes using Ableton Live.' },
    { title: '📸 Photography', description: 'Capture urban night scenes and character moments with digital and film cameras.' },
    { title: '🕹️ Retro Collecting', description: 'Collect and restore retro consoles and cartridges—nostalgia meets tech tinkering.' },
];

const containerVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.12 },
    },
};

const headerVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function Hobbies() {
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
                        Hobbies 🎨
                    </motion.h1>

                    <motion.div
                        className="grid gap-6 sm:grid-cols-2"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.1, delayChildren: 0.1 },
                            },
                        }}
                    >
                        {hobbies.map((hobby, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white/10 text-white px-6 py-8 rounded-2xl shadow-lg backdrop-blur-sm border border-white/20 hover:ring-4 hover:ring-yellow-300/60 hover:ring-inset transition-all flex flex-col"
                                variants={cardVariants}
                            >
                                <h3 className="orbitron text-2xl font-bold mb-3 text-[#fcd34d]">{hobby.title}</h3>
                                <p className="text-white/85 leading-snug flex-1">{hobby.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}