// src/App.jsx
import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Work from './pages/Work';
import Hobbies from './pages/Hobbies';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const sections = [
  { title: 'Education', image: '/assets/images/education.png', path: '/education' },
  { title: 'Projects', image: '/assets/images/projects.png', path: '/projects' },
  { title: 'Work', image: '/assets/images/work.png', path: '/work' },
  { title: 'Hobbies', image: '/assets/images/hobby.png', path: '/hobbies' },
];

const socialLinks = [
  { title: 'GitHub', iconClass: 'fab fa-github', url: 'https://github.com/YC-Qiu' },
  { title: 'LinkedIn', iconClass: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/ycqiu/' },
  { title: 'Email', iconClass: 'fas fa-envelope', url: 'mailto:yc_qiu@hotmail.com' },
];

const cardVariants = {
  hidden: (index) => {
    const directions = [
      { x: -240, y: 180, rotate: -14 },
      { x: 260, y: 210, rotate: 12 },
      { x: -190, y: -240, rotate: 16 },
      { x: 240, y: -200, rotate: -18 },
    ];
    const dir = directions[index % directions.length];

    return {
      opacity: 0,
      x: dir.x,
      y: dir.y,
      rotate: dir.rotate,
      scale: 0.76,
    };
  },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      delay: index * 0.12,
      type: 'spring',
      stiffness: 240,
      damping: 22,
      mass: 1.1,
    },
  }),
  active: {
    opacity: 0.5,
    scale: 2,
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.28,
      ease: [0.42, 0, 0.25, 1],
    },
  },
  inactive: {
    opacity: 0.2,
    scale: 0.7,
    transition: {
      duration: 0.32,
      ease: 'easeOut',
    },
  },
};

function Home() {
  const [activeCard, setActiveCard] = React.useState(null);
  const navigate = useNavigate();

  const handleCardClick = React.useCallback(
    (event, path, index) => {
      event.preventDefault();
      if (activeCard !== null) return;

      setActiveCard(index);
      setTimeout(() => {
        navigate(path);
      }, 260);
    },
    [activeCard, navigate]
  );

  return (
    <motion.div
      className="h-screen w-screen text-white px-10 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/assets/images/index_bg.png')",
        backgroundColor: '#000',
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <div className="neon-line-wrapper">
        <motion.span
          className="neon-line-trace"
          initial={{ opacity: 0, backgroundPosition: '-120% 0' }}
          animate={{
            opacity: [0, 0.75, 0],
            backgroundPosition: ['-120% 0', '120% 0'],
          }}
          transition={{ duration: 3.2, repeat: Infinity, repeatDelay: 1.2, ease: 'linear' }}
        />
        <motion.h1
          className="neon-title fredoka text-[88px] name-title font-bold text-center pt-[40px] pb-[6px] text-[#213547] rounded-xl shadow-lg w-fit mx-auto"
          initial={{ textShadow: '0 0 0 rgba(61,186,227,0)' }}
          animate={{
            textShadow: [
              '0 0 12px rgba(61,186,227,0.45), 0 0 24px rgba(252,211,77,0.3)',
              '0 0 24px rgba(61,186,227,0.75), 0 0 48px rgba(252,211,77,0.55)',
              '0 0 12px rgba(61,186,227,0.45), 0 0 24px rgba(252,211,77,0.3)'
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="neon-title-text">YC (Yucheng) Qiu</span>
        </motion.h1>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-[20px]">
        {sections.map(({ title, image, path }, i) => (
          <motion.div
            key={i}
            className="will-change-transform"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={
              activeCard === null
                ? 'visible'
                : activeCard === i
                  ? 'active'
                  : 'inactive'
            }
            whileHover={activeCard === null ? { y: -6 } : undefined}
            whileTap={activeCard === null ? { scale: 0.98 } : undefined}
            style={{
              zIndex: activeCard === i ? 50 : 1,
              pointerEvents: activeCard === null || activeCard === i ? 'auto' : 'none',
            }}
          >
            <Link
              to={path}
              onClick={(event) => handleCardClick(event, path, i)}
              className="
                w-[230px] h-[330px] rounded-2xl shadow-xl 
                hover:scale-105 hover:shadow-2xl 
                hover:ring-4 hover:ring-[#FFD700] 
                transition duration-300 cursor-pointer 
                backdrop-blur-lg bg-white/80
                overflow-hidden flex flex-col p-4 
                text-[#3e2f1c] hover:text-[#b35700] no-underline"
            >
              {image && (
                <div className="w-full h-[140px] flex justify-center items-center overflow-hidden mb-2">
                  <img
                    src={image}
                    alt={title}
                    className="h-full object-contain rounded-md"
                  />
                </div>
              )}
              <div className="flex-1 flex items-center justify-center">
                <h2 className="orbitron text-[40px] font-bold text-center w-full">{title}</h2>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Social Section */}
      <div className="text-center mt-16 mb-4">
        <p className="orbitron text-[35px] font-semibold">Connect with me</p>
      </div>
      <div className="grid grid-flow-col auto-cols-max justify-center gap-x-10 pt-6 pb-10">
        {socialLinks.map(({ title, iconClass, url }) => (
          <a
            key={title}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-[#3dbae3] no-visited w-[90px] h-[90px] rounded-2xl icon-link flex items-center justify-center shadow-xl hover:rotate-12 hover:scale-110 transition"
            title={title}
          >
            <i className={`${iconClass} text-[70px]`}></i>
          </a>
        ))}
      </div>
    </motion.div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/education" element={<Education />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/work" element={<Work />} />
      <Route path="/hobbies" element={<Hobbies />} />
    </Routes>
  );
}
