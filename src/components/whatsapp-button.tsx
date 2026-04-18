'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '923214194045'; // without + or spaces
  const message = encodeURIComponent("Hi Abdullah! I'd like to connect with you.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.div
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 2, type: 'spring', stiffness: 200 }}
    >
      {/* Tooltip */}
      <motion.div
        className="absolute bottom-full right-0 mb-3 whitespace-nowrap pointer-events-none"
        initial={{ opacity: 0, y: 5 }}
        animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="px-4 py-2 rounded-lg text-sm font-medium shadow-lg"
          style={{
            background: 'hsl(var(--foreground))',
            color: 'hsl(var(--background))',
          }}
        >
          Chat on WhatsApp
        </div>
      </motion.div>

      {/* Pulse ring */}
      <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-green-500" />
      <div className="absolute inset-[-4px] rounded-full animate-pulse opacity-30 bg-green-500/30" />

      {/* Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-xl"
        style={{
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.35)',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 32 32"
          fill="white"
          className="w-7 h-7 sm:w-8 sm:h-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.129 6.742 3.047 9.379L1.054 31.27l6.121-1.96A15.91 15.91 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.35 22.614c-.393 1.106-1.943 2.023-3.192 2.291-.856.18-1.974.324-5.738-1.233-4.818-1.992-7.916-6.884-8.156-7.203-.232-.32-1.942-2.588-1.942-4.936 0-2.348 1.228-3.502 1.664-3.981.393-.434 1.038-.623 1.656-.623.2 0 .38.01.541.018.476.02.715.048 1.029.795.393.93 1.35 3.277 1.468 3.516.12.24.24.554.08.874-.152.328-.28.474-.52.746-.24.272-.468.48-.708.772-.22.264-.468.546-.194 1.02.272.468 1.214 2.002 2.607 3.244 1.787 1.594 3.294 2.088 3.762 2.32.348.172.762.14 1.042-.16.356-.38.796-1.008 1.244-1.628.32-.44.72-.496 1.1-.332.384.156 2.433 1.148 2.852 1.358.42.212.698.316.8.492.1.176.1 1.024-.293 2.13z" />
        </svg>
      </motion.a>
    </motion.div>
  );
};

export default WhatsAppButton;
