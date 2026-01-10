'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const WorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="work" className="py-20 bg-background relative overflow-hidden">
      {/* Small blue dot indicator */}
      <div className="absolute top-8 left-8 w-3 h-3 bg-blue-400 rounded-full border border-white opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-48 items-center min-h-[65vh]"
        >
          {/* Left side - My Work content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
          >
            {/* Large My Work heading */}
            <div>
              <h2
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white leading-tight tracking-tight"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                <div>My</div>
                <div>Work</div>
              </h2>
            </div>

            {/* Description text */}
            <div
              className="space-y-3 sm:space-y-4 text-white text-base sm:text-lg leading-relaxed max-w-lg text-justify"
              style={{
                fontFamily:
                  'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              }}
            >
              <p>
                Passionate frontend developer crafting exceptional digital
                experiences with modern web technologies. Specializing in React,
                Next.js, and cutting-edge UI/UX design.
              </p>
              <p>
                Delivered successful projects for global clients, building
                scalable web applications, mobile apps, and data visualization
                solutions that drive real business impact.
              </p>
            </div>
          </motion.div>

          {/* Right side - Featured Project */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            {/* Purple curved arrow - hidden on mobile */}
            <div className="hidden lg:block absolute -left-16 top-1/2 transform -translate-y-1/2 z-20">
              <svg
                width="80"
                height="80"
                viewBox="0 0 120 80"
                className="text-purple-500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 40 Q60 10 110 40"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M100 35 L110 40 L100 45"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>

            <div className="relative">
              {/* Desktop Screen Content */}
              <motion.div
                className="relative z-10"
                animate={{
                  rotateY: [0, 360],
                  rotateX: [0, 20, 0, -20, 0],
                  y: [0, -20, 0, 20, 0],
                  scale: [1, 1.05, 1, 0.95, 1],
                }}
                transition={{
                  rotateY: {
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                  rotateX: {
                    duration: 20,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                  y: {
                    duration: 15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                  scale: {
                    duration: 25,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
              >
                <motion.div
                  className="w-[300px] h-[200px] sm:w-[500px] sm:h-[350px] lg:w-[700px] lg:h-[500px] shadow-2xl"
                  animate={{
                    boxShadow: [
                      '0 30px 60px rgba(0,0,0,0.4)',
                      '0 50px 100px rgba(0,0,0,0.6)',
                      '0 30px 60px rgba(0,0,0,0.4)',
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {/* Desktop Screen Content */}
                  <div className="w-full h-full relative overflow-hidden">
                    <Image
                      src="/p1.png"
                      alt="HomeIGO Project"
                      fill
                      className="object-cover"
                    />
                    {/* Edgy overlay effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent"></div>

                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 backdrop-blur-sm">
                      <h3 className="text-white font-bold text-xl">HOMEIGO</h3>
                      <p className="text-gray-200 text-sm">Full Stack Real Estate Platform</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Projects Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid sm:grid-cols-2 gap-8 sm:gap-12 mt-16 sm:mt-20"
        >
          {/* Hiredroid Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="relative"
          >
            <motion.div
              className="relative z-10"
              animate={{
                y: [0, -10, 0, 10, 0],
                scale: [1, 1.02, 1, 0.98, 1],
              }}
              transition={{
                y: {
                  duration: 60,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                scale: {
                  duration: 100,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            >
              <motion.div
                className="w-full h-[200px] sm:h-[300px] shadow-2xl"
                animate={{
                  boxShadow: [
                    '0 15px 30px rgba(0,0,0,0.3)',
                    '0 25px 50px rgba(0,0,0,0.4)',
                    '0 15px 30px rgba(0,0,0,0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-full h-full relative overflow-hidden">
                  <Image
                    src="/p3.png"
                    alt="Hiredroid Screenshot"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent"></div>
                </div>
              </motion.div>
            </motion.div>
            <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gray-900 rounded-lg border border-teal-500/50 shadow-lg shadow-teal-500/10">
              {/* Header Section */}
              <div className="flex items-start mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg border border-teal-500/50 flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white text-base sm:text-lg font-bold">
                    &lt;/&gt;
                  </span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    Weather App
                  </h3>
                  <p className="text-teal-400 text-xs sm:text-sm font-mono">
                    React.js, OpenWeather API
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                A modern weather forecasting application built with React.js that provides real-time weather data.
                Features include location-based forecasting, beautiful visualizations, and responsive design for all devices.
              </p>

              {/* Tech Stack Section */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-2 sm:mb-3 text-center">
                  TECH STACK
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    React.js
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    API Integration
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    CSS3
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    Responsive
                  </span>
                </div>
              </div>

              <a
                href="https://wheatherapp-sigma.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-2 px-4 bg-teal-500/10 text-teal-400 rounded border border-teal-500/50 hover:bg-teal-500/20 hover:border-teal-500 transition-all duration-300 text-sm"
              >
                View Project →
              </a>
            </div>
          </motion.div>

          {/* SD Trade Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="relative"
          >
            <motion.div
              className="relative z-10"
              animate={{
                y: [0, -10, 0, 10, 0],
                scale: [1, 1.02, 1, 0.98, 1],
              }}
              transition={{
                y: {
                  duration: 60,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                scale: {
                  duration: 100,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            >
              <motion.div
                className="w-full h-[200px] sm:h-[300px] shadow-2xl"
                animate={{
                  boxShadow: [
                    '0 15px 30px rgba(0,0,0,0.3)',
                    '0 25px 50px rgba(0,0,0,0.4)',
                    '0 15px 30px rgba(0,0,0,0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-full h-full relative overflow-hidden">
                  <Image
                    src="/p2.png"
                    alt="SD Trade Screenshot"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-red-500 to-transparent"></div>
                </div>
              </motion.div>
            </motion.div>
            <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gray-900 rounded-lg border border-teal-500/50 shadow-lg shadow-teal-500/10">
              {/* Header Section */}
              <div className="flex items-start mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg border border-teal-500/50 flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white text-base sm:text-lg font-bold">
                    &lt;/&gt;
                  </span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    HOMEIGO
                  </h3>
                  <p className="text-teal-400 text-xs sm:text-sm font-mono">
                    Express, MongoDB,Node,Js,EJS
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                A real-time rental property management application powered by Node.js.
                Features secure authentication and  MongoDB.
              </p>

              {/* Tech Stack Section */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-2 sm:mb-3 text-center">
                  TECH STACK
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    Node.js
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    MongoDB
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    Express
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    EJS
                  </span>
                </div>
              </div>

              <a
                href="https://homeigo-fullstack-project-1.onrender.com/listings"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-2 px-4 bg-teal-500/10 text-teal-400 rounded border border-teal-500/50 hover:bg-teal-500/20 hover:border-teal-500 transition-all duration-300 text-sm"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
