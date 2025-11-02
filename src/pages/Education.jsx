// src/pages/Education.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Education() {
    const educationData = [
        {
            category: 'Graduate',
            order: 1,
            school: 'Northwestern University',
            location: 'Evanston, IL',
            time: '2025.09 – 2026.12',
            degree: 'M.S of Artificial Intelligence',
            gpa: '4.0 / 4.0',
            honors: [],
            courses: [
                'Machine Learning',
                'Deep Learning',
                'Human-Computer Interaction',
                'Natural Language Processing',
            ],
            logo: '/logos/education/northwestern.png',
        },
        {
            category: 'Undergraduate',
            order: 2,
            school: 'University of Michigan, Ann Arbor',
            location: 'Ann Arbor, MI',
            time: '2020.09 – 2023.05',
            degree: 'B.S of Computer Science and Engineering',
            gpa: '3.8 / 4',
            honors: ['University Honors Designation'],
            courses: ['Database', 'Software Development', 'Game Design', 'Extended Reality Game Design'],
            logo: '/logos/education/michigan.png',
        },
        {
            category: 'Undergraduate',
            order: 3,
            school: 'University of Wisconsin, Madison',
            location: 'Madison, WI',
            time: '2019.09 – 2020.08',
            degree: 'B.S of Computer Science',
            gpa: '3.9 / 4',
            honors: ["Dean's List"],
            courses: ['Programming', 'Discrete Math'],
            logo: '/logos/education/wisconsin.png',
        },
        {
            category: 'High School',
            order: 4,
            school: 'High School Affiliated to Shanghai Jiao Tong University',
            location: 'Shanghai, China',
            time: '2016.09 – 2019.05',
            degree: 'International Baccalaureate',
            honors: [],
            gpa: null,
            courses: ['Further Math', 'Physics'],
            logo: '/logos/education/sjtu-high.png',
        },
    ];

    const educationSections = [
        { key: 'Graduate', title: 'Graduate' },
        { key: 'Undergraduate', title: 'Undergraduate' },
        { key: 'High School', title: 'High School' },
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

    return (
        <motion.div
            className="min-h-screen bg-black text-white p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
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
                        style={{ marginTop: "24px", marginLeft: "24px" }}
                    >
                        <i className="fas fa-arrow-left fa-3x leading-none !text-[#213547] hover:!text-[#213547] visited:!text-[#213547] focus:!text-[#213547] active:!text-[#213547] p-2"></i>
                    </Link>
                </motion.div>


                <motion.h1 variants={headerVariants} className="orbitron text-5xl font-bold text-center text-white">Education 👨‍💼</motion.h1>

                {educationSections.map(({ key, title }) => {
                    const items = educationData
                        .filter((edu) => edu.category === key)
                        .sort((a, b) => a.order - b.order);

                    if (items.length === 0) return null;

                    return (
                        <motion.section key={key} className="space-y-6" variants={sectionVariants}>
                            <motion.h2 variants={headerVariants} className="orbitron text-3xl font-bold text-[#213547] text-center">{title}</motion.h2>
                            <motion.div className="space-y-6" variants={listVariants}>
                                {items.map((edu) => (
                                    <motion.div
                                        key={edu.school}
                                        className="bg-white/10 text-white px-[40px] py-[12px] rounded-2xl shadow-lg backdrop-blur-sm border border-white/20 hover:ring-4 hover:ring-yellow-300/60 hover:ring-inset transition-all"
                                        variants={cardVariants}
                                    >
                                        <div className="flex items-center">
                                            {edu.logo && (
                                                <img
                                                    src={edu.logo}
                                                    alt={`${edu.school} logo`}
                                                    className="edu-logo"
                                                    loading="lazy"
                                                />
                                            )}
                                            <h3 className="oxanium text-2xl font-bold flex-1">{edu.school}</h3>
                                        </div>

                                        {/* Row 1: Degree (left) | Time (right) */}
                                        <div className="mt-1 text-sm text-gray-300 flex justify-between">
                                            <span className="orbitron italic text-white/90">{edu.degree}</span>
                                            <span className="bungee">{edu.time}</span>
                                        </div>

                                        {/* Row 2: GPA (left) | Location (right) */}
                                        <div className="mt-1 text-sm text-gray-300 flex justify-between">
                                            <span className="orbitron not-italic">{edu.gpa ? (<><strong>GPA:</strong> {edu.gpa}</>) : ''}</span>
                                            <span className="orbitron italic">{edu.location}</span>
                                        </div>

                                        {edu.honors.length > 0 && (
                                            <div className="mt-2 overflow-x-auto leading-tight">
                                                <span className="font-bold inline">Honors: </span>
                                                <span className="oxanium whitespace-nowrap italic">{edu.honors.join(', ')}</span>
                                            </div>
                                        )}

                                        {(edu.courses?.length > 0 || edu.coursesText) && (
                                            <div className="mt-2 overflow-x-auto">
                                                <span className="font-bold inline">Course List: </span>
                                                <span className="whitespace-nowrap italic">{edu.coursesText ?? edu.courses.join(', ')}</span>
                                            </div>
                                        )}
                                    </motion.div>
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
