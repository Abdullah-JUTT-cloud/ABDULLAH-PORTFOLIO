"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const WorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Banking System",
      subtitle: "Full Stack Finance Platform",
      description:
        "A modern banking system built with React.js that provides real-time banking data. Features include login, signup, deposit, withdraw, transfer, request loan, request credit card, request cheque book and responsive design for all devices.",
      image: "/p3.png",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "API Integration"],
      link: "https://enterpriselevelbankingsystem.vercel.app/login",
      gradient: "from-emerald-500/20 via-cyan-500/10 to-blue-500/20",
      accentColor: "emerald",
      delay: 1.0,
    },
    {
      title: "HOMEIGO",
      subtitle: "Real Estate Platform",
      description:
        "A real-time rental property management application powered by Node.js. Features secure authentication and MongoDB for scalable data handling.",
      image: "/p2.png",
      tech: ["Node.js", "Express", "MongoDB", "EJS"],
      link: "https://homeigo-fullstack-project-1.onrender.com/listings",
      gradient: "from-orange-500/20 via-rose-500/10 to-red-500/20",
      accentColor: "orange",
      delay: 1.2,
    },
    {
      title: "Lazarev.agency",
      subtitle: "Agency Website Clone",
      description:
        "A pixel-perfect clone of lazarev.agency website with smooth GSAP animations and Locomotive Scroll for an ultra-smooth scrolling experience.",
      image: "/p4.png",
      tech: ["HTML", "CSS", "JavaScript", "GSAP", "Locomotive Scroll"],
      link: "https://beamish-cajeta-b009d1.netlify.app/",
      gradient: "from-violet-500/20 via-purple-500/10 to-indigo-500/20",
      accentColor: "violet",
      delay: 1.4,
    },
    {
      title: "Chatify",
      subtitle: "Real-Time Messaging App",
      description:
        "Chatify is a real-time messaging application that allows users to send and receive messages instantly. Built with WebSocket technology for seamless communication.",
      image: "/p5.png",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      link: "https://chatify-v8u2.onrender.com/login",
      gradient: "from-amber-500/20 via-yellow-500/10 to-orange-500/20",
      accentColor: "amber",
      delay: 1.6,
    },
    {
      title: "Sudoku Game",
      subtitle: "Interactive Puzzle Game",
      description:
        "A challenging puzzle game where players fill a 9x9 grid with numbers 1-9, ensuring each row, column, and 3x3 subgrid contains all numbers without repetition.",
      image: "/p6.png",
      tech: ["React.js", "Tailwind CSS", "JavaScript", "DSA"],
      link: "https://sudukoreact.vercel.app/",
      gradient: "from-pink-500/20 via-rose-500/10 to-purple-500/20",
      accentColor: "pink",
      delay: 1.8,
    },
    {
      title: "Chess Game",
      subtitle: "Classic Strategy Game",
      description:
        "A Java-based chess game using JavaFX and Swing libraries. Two players compete on a virtual chessboard with features like piece movement, capture, and game history tracking.",
      image: "/p7.png",
      tech: ["Java", "DSA", "JavaFX", "Java Swing"],
      link: "https://github.com/Abdullah-JUTT-cloud/Chess_java",
      gradient: "from-teal-500/20 via-emerald-500/10 to-cyan-500/20",
      accentColor: "teal",
      delay: 2.0,
    },
  ];

  return (
    <section
      id="work"
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, hsl(var(--background)) 0%, hsl(0 0% 6%) 50%, hsl(var(--background)) 100%)`,
      }}
    >
      {/* Background decorative elements */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--accent)) 1px, transparent 1px), radial-gradient(circle at 80% 50%, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, hsl(var(--accent) / 0.3), transparent)`,
        }}
      />

      {/* ===== HERO AREA ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 sm:pt-32 pb-16 sm:pb-24">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[60vh]"
        >
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 order-2 lg:order-1"
          >
            {/* Section indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
              }
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <div
                className="h-px w-8 sm:w-12"
                style={{ background: "hsl(var(--accent))" }}
              />
              <span
                className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em]"
                style={{ color: "hsl(var(--accent))" }}
              >
                Featured Work
              </span>
            </motion.div>

            {/* Heading */}
            <div>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
                <motion.span
                  className="block"
                  style={{ color: "hsl(var(--foreground))" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  My
                </motion.span>
                <motion.span
                  className="block"
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)))`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Work
                </motion.span>
              </h2>
            </div>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg leading-relaxed max-w-lg"
              style={{ color: "hsl(var(--muted-foreground))" }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              MEDALERTO exists because healthcare systems are slow, fragmented,
              and full of inefficiencies that cost lives. We&apos;re building a
              system that eliminates missed follow-ups, forgotten patients, and
              chaotic doctor workflows. From intelligent alerts to real-time
              patient tracking, MEDALERTO turns reactive healthcare into
              proactive execution.
            </motion.p>

            {/* Stats row */}
            <motion.div
              className="flex gap-8 sm:gap-12 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                { number: "6+", label: "Projects" },
                { number: "2+", label: "Years Exp" },
                { number: "10+", label: "Technologies" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-2xl sm:text-3xl font-bold font-mono"
                    style={{ color: "hsl(var(--accent))" }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-xs sm:text-sm mt-1"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Featured Project (ANIMATIONS PRESERVED) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            {/* Glow behind the featured project */}
            <div
              className="absolute inset-0 blur-3xl opacity-20 rounded-full"
              style={{
                background: `radial-gradient(circle, hsl(var(--accent) / 0.4), transparent 70%)`,
              }}
            />

            <div className="relative" style={{ perspective: "1200px" }}>
              {/* Desktop Screen Content - ANIMATION PRESERVED */}
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
                    ease: "linear",
                  },
                  rotateX: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  y: {
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  scale: {
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <motion.div
                  className="w-[280px] h-[190px] min-[400px]:w-[340px] min-[400px]:h-[240px] sm:w-[480px] sm:h-[340px] lg:w-[620px] lg:h-[440px] rounded-xl overflow-hidden"
                  animate={{
                    boxShadow: [
                      "0 30px 60px rgba(0,0,0,0.4), 0 0 40px hsl(180 60% 65% / 0.1)",
                      "0 50px 100px rgba(0,0,0,0.6), 0 0 60px hsl(180 60% 65% / 0.15)",
                      "0 30px 60px rgba(0,0,0,0.4), 0 0 40px hsl(180 60% 65% / 0.1)",
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-full h-full relative overflow-hidden">
                    <Image
                      src="/p1.png"
                      alt="HomeIGO Project"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30 pointer-events-none" />
                    {/* Accent border glow */}
                    <div
                      className="absolute top-0 left-0 w-full h-[2px]"
                      style={{
                        background:
                          "linear-gradient(90deg, hsl(var(--accent)), hsl(var(--primary)))",
                      }}
                    />
                    <div
                      className="absolute bottom-0 left-0 w-full h-[2px]"
                      style={{
                        background:
                          "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))",
                      }}
                    />

                    <div
                      className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 backdrop-blur-md"
                      style={{
                        background:
                          "linear-gradient(to top, hsl(var(--background) / 0.9), hsl(var(--background) / 0.5))",
                      }}
                    >
                      <h3
                        className="font-bold text-lg sm:text-xl"
                        style={{ color: "hsl(var(--foreground))" }}
                      >
                        MediMate
                      </h3>
                      <p
                        className="text-xs sm:text-sm"
                        style={{ color: "hsl(var(--accent))" }}
                      >
                        Full Stack Healthcare Platform
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ===== PROJECT GRID ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-24 sm:pb-32">
        {/* Section divider */}
        <motion.div
          className="flex items-center gap-4 mb-12 sm:mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div
            className="h-px flex-1"
            style={{
              background: `linear-gradient(90deg, hsl(var(--accent) / 0.3), transparent)`,
            }}
          />
          <span
            className="text-xs font-mono uppercase tracking-[0.2em] px-4"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            All Projects
          </span>
          <div
            className="h-px flex-1"
            style={{
              background: `linear-gradient(90deg, transparent, hsl(var(--accent) / 0.3))`,
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: project.delay }}
              className="group relative"
            >
              <div
                className="relative rounded-xl overflow-hidden border transition-all duration-500 group-hover:border-opacity-60 h-full flex flex-col"
                style={{
                  background: "hsl(var(--background))",
                  borderColor: "hsl(var(--border))",
                }}
              >
                {/* Hover glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Image with animation preserved */}
                <div className="relative overflow-hidden">
                  <motion.div
                    className="relative z-10"
                    animate={{
                      y: [0, -6, 0, 6, 0],
                      scale: [1, 1.01, 1, 0.99, 1],
                    }}
                    transition={{
                      y: {
                        duration: 60,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      scale: {
                        duration: 100,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <motion.div
                      className="w-full h-[180px] sm:h-[220px]"
                      animate={{
                        boxShadow: [
                          "0 15px 30px rgba(0,0,0,0.3)",
                          "0 25px 50px rgba(0,0,0,0.4)",
                          "0 15px 30px rgba(0,0,0,0.3)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="w-full h-full relative overflow-hidden">
                        <Image
                          src={project.image}
                          alt={`${project.title} Screenshot`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-5 sm:p-6 flex-1 flex flex-col">
                  {/* Title & subtitle */}
                  <div className="mb-3">
                    <h3
                      className="text-lg sm:text-xl font-bold mb-1 transition-colors duration-300"
                      style={{ color: "hsl(var(--foreground))" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-xs sm:text-sm font-mono"
                      style={{ color: "hsl(var(--accent))" }}
                    >
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p
                    className="text-xs sm:text-sm leading-relaxed mb-4 flex-1"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="mb-5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-[10px] sm:text-xs font-mono rounded-full transition-colors duration-300"
                          style={{
                            backgroundColor: "hsl(var(--accent) / 0.08)",
                            color: "hsl(var(--accent))",
                            border: "1px solid hsl(var(--accent) / 0.15)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-300 group/btn"
                    style={{
                      background: "hsl(var(--accent) / 0.08)",
                      color: "hsl(var(--accent))",
                      border: "1px solid hsl(var(--accent) / 0.2)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "hsl(var(--accent) / 0.15)";
                      e.currentTarget.style.borderColor =
                        "hsl(var(--accent) / 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "hsl(var(--accent) / 0.08)";
                      e.currentTarget.style.borderColor =
                        "hsl(var(--accent) / 0.2)";
                    }}
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </div>

                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, hsl(var(--accent)), hsl(var(--primary)), hsl(var(--accent)))`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: `linear-gradient(to top, hsl(var(--background)), transparent)`,
        }}
      />
    </section>
  );
};

export default WorkSection;
