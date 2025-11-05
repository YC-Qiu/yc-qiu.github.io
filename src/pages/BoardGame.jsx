import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const boardGames = [
    {
        title: 'Schrödinger & Cat',
        tagline: 'A lighthearted social-strategy board game of hidden incentives and shifting alliances.',
        description: [
            'Schrödinger & Cat blends hidden information with playful, two-phase “experiments” in which players secretly seed a black box with quirky items, then react to partial clues to steer a test animal toward survival or doom.',
            'Incentives and alliances evolve mid-game, rewarding table talk, quick reads, and clever double-bluffs more than rules memorization.',
            'Designed for lively groups, short arcs, and easy teaching, the experience wraps tension in cozy, charming art so every reveal elicits laughter rather than stress.',
            '<highlight>Multiplayer mind-games, not math grind.</highlight>',
            '<highlight>Dynamic factions & shifting incentives.</highlight>',
            '<highlight>Two-phase rounds (hidden setup → informed reaction).</highlight>',
            '<highlight>Cute visuals, fast turns, high replayability.</highlight>',
        ],
        images: [
            { src: '/assets/board_game/schrodinger.png', alt: 'Schrödinger & Cat game artwork' },
        ],
        timeline: [
            'Final playtest scheduled next month',
            'Kickstarter launch planned for mid-December',
        ],
    },
    {
        title: 'Asmodeus’s Whisper',
        tagline: 'A cinematic social deduction mystery steeped in dread and shifting alliances.',
        description: [
            'A social deduction mystery in the tradition of Werewolf, Blood on the Clocktower, and Town of Salem—but built around a richer narrative spine and a constant sense of dread.',
            'Set in a once-peaceful village now haunted by a sealed demon, players investigate by day and scheme by night, weaving rumor, evidence, and role powers into a tense, evolving story. The tone is cinematic and suspenseful: every choice feels consequential, and every whisper might be the demon’s.',
            '<highlight>No early elimination.</highlight> NPC villagers are the primary victims, and even “jailed” players remain in the game—able to listen, signal, and wait for release. You keep agency instead of sitting out.',
            '<highlight>Player-driven morality.</highlight> Alignment isn’t locked to your role. Strategy emerges from real choices, not assignments.',
            '<highlight>Multiple win conditions.</highlight> Third-party objectives create shifting alliances, unexpected betrayals, and fresh endgames every session.',
        ],
        images: [
            { src: '/assets/board_game/asmodeuswhisper.png', alt: "Asmodeus's Whisper promotional artwork" },
        ],
        timeline: [
            '04.11.2024 — Prototype v1',
            '05.29.2024 — V2 Playtest',
            '07.05.2024 — V3 Playtest',
            '08.06.2024 — V4 Playtest',
            '11.04.2024 — V5 Playtest',
            '04.15.2025 — V6 Playtest',
            '11.2025 — V7 in preparation',
        ],
    },
    {
        title: 'Dream League Tabletop',
        tagline: 'A fast-paced, strategy-packed football board game for 2–8 players.',
        description: [
            'Dream League Tabletop brings the thrill of football to the tabletop, blending tactical movement with chance-driven excitement across a grid-based field.',
            'Players draft customized footballers with randomized stats and unique talents, then guide them across the pitch over 30 action-packed turns.',
            'Smart positioning, stamina management, and dramatic dice rolls decide passes, interceptions, and shots—making every turn feel like a highlight play.',
            'Whether planning a clever through-ball or a daring sliding tackle, Dream League Tabletop turns sports tension into a compelling tactical party game.',
        ],
        images: [
            { src: '/assets/board_game/dreamleague1.png', alt: 'Dream League Tabletop board game artwork' },
        ],
    },
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

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function BoardGame() {
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
                        Board Games 🎲
                    </motion.h1>

                    <motion.section
                        className="space-y-8"
                        variants={sectionVariants}
                    >
                        {boardGames.map((game, idx) => (
                            <div
                                key={game.title}
                                className="bg-white/10 text-white px-[40px] py-[20px] rounded-2xl shadow-lg backdrop-blur-sm border border-white/20 space-y-6 hover:ring-4 hover:ring-yellow-300/60 hover:ring-inset transition-all"
                            >
                                <div className="space-y-3">
                                    <h2 className="oxanium text-[36px] font-bold">{game.title}</h2>
                                    <p className="text-white/85 italic">{game.tagline}</p>
                                    {game.description.map((paragraph, pIdx) => (
                                        <p key={`${game.title}-desc-${pIdx}`} className="text-white/90 leading-snug mt-1 first:mt-0">
                                            {paragraph.includes('<highlight>')
                                                ? paragraph.split(/<highlight>|<\/highlight>/).map((part, hIdx) =>
                                                      hIdx % 2 === 1 ? (
                                                          <span
                                                              key={`${game.title}-hl-${pIdx}-${hIdx}`}
                                                              className="oxanium font-semibold tracking-tight"
                                                          >
                                                              {part}
                                                          </span>
                                                      ) : (
                                                          part
                                                      )
                                                  )
                                                : paragraph}
                                        </p>
                                    ))}
                                    <div className="flex flex-wrap gap-3 justify-center">
                                        {game.images.map((image, imgIdx) => (
                                            <img
                                                key={`${game.title}-img-${imgIdx}`}
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-[500px] max-w-sm h-auto rounded-lg"
                                            />
                                        ))}
                                    </div>
                                    {game.timeline && (
                                        <div className="text-white/80 text-sm">
                                            <p className="oxanium font-semibold">Timeline:</p>
                                            <div className="flex flex-wrap items-center gap-4">
                                                {game.timeline.map((entry, tIdx) => (
                                                    <React.Fragment key={`${game.title}-timeline-${tIdx}`}>
                                                        <span>{entry}</span>
                                                        {tIdx < game.timeline.length - 1 && (
                                                            <span className="text-white/40"> &nbsp; &nbsp; ▶ &nbsp; &nbsp;</span>
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </motion.section>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}