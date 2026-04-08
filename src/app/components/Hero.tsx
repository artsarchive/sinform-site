import { motion } from 'motion/react';

interface HeroProps {
  isDarkMode: boolean;
  scrollToSection: (id: string) => void;
}

export function Hero({ isDarkMode, scrollToSection }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      {/* Animated Organic Circular Blobs Background */}
      <div className="absolute inset-0">
        {/* Large blob bottom left */}
        <motion.div
          className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full ${isDarkMode ? 'bg-[#1a0f2e]' : 'bg-[#2E1E4D]/20'} blur-3xl opacity-60`}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Large blob top right */}
        <motion.div
          className={`absolute -top-40 -right-40 w-96 h-96 rounded-full ${isDarkMode ? 'bg-[#1a0f2e]' : 'bg-[#2E1E4D]/20'} blur-3xl opacity-60`}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Medium blob center right */}
        <motion.div
          className={`absolute top-1/3 right-0 w-72 h-72 rounded-full ${isDarkMode ? 'bg-[#251740]' : 'bg-[#2E1E4D]/15'} blur-2xl opacity-50`}
          animate={{
            x: [0, -60, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Medium blob center left */}
        <motion.div
          className={`absolute bottom-1/4 left-10 w-64 h-64 rounded-full ${isDarkMode ? 'bg-[#251740]' : 'bg-[#2E1E4D]/15'} blur-2xl opacity-50`}
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Concentric Corner Circles - Top Left */}
        <div className="absolute -top-32 -left-32">
          {[0, 1, 2, 3].map((index) => (
            <motion.div
              key={`tl-${index}`}
              className={`absolute top-0 left-0 rounded-full border-2 ${isDarkMode ? 'border-[#B2CCF1]/10' : 'border-[#2E1E4D]/10'}`}
              style={{
                width: `${200 + index * 80}px`,
                height: `${200 + index * 80}px`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -20, 0],
                y: [0, -20, 0],
                opacity: [0.15, 0.05, 0.15],
              }}
              transition={{
                duration: 15 + index * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              }}
            />
          ))}
        </div>

        {/* Concentric Corner Circles - Bottom Right */}
        <div className="absolute -bottom-32 -right-32">
          {[0, 1, 2, 3].map((index) => (
            <motion.div
              key={`br-${index}`}
              className={`absolute bottom-0 right-0 rounded-full border-2 ${isDarkMode ? 'border-[#B2CCF1]/10' : 'border-[#2E1E4D]/10'}`}
              style={{
                width: `${200 + index * 80}px`,
                height: `${200 + index * 80}px`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                x: [0, 20, 0],
                y: [0, 20, 0],
                opacity: [0.15, 0.05, 0.15],
              }}
              transition={{
                duration: 15 + index * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              }}
            />
          ))}
        </div>

        {/* Concentric Corner Circles - Top Right (subtle) */}
        <div className="absolute -top-40 -right-40">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={`tr-${index}`}
              className={`absolute top-0 right-0 rounded-full border-2 ${isDarkMode ? 'border-[#B2CCF1]/8' : 'border-[#2E1E4D]/8'}`}
              style={{
                width: `${180 + index * 70}px`,
                height: `${180 + index * 70}px`,
              }}
              animate={{
                scale: [1, 1.25, 1],
                x: [0, 15, 0],
                y: [0, -15, 0],
                opacity: [0.12, 0.04, 0.12],
              }}
              transition={{
                duration: 18 + index * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.7,
              }}
            />
          ))}
        </div>

        {/* Concentric Corner Circles - Bottom Left (subtle) */}
        <div className="absolute -bottom-40 -left-40">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={`bl-${index}`}
              className={`absolute bottom-0 left-0 rounded-full border-2 ${isDarkMode ? 'border-[#B2CCF1]/8' : 'border-[#2E1E4D]/8'}`}
              style={{
                width: `${180 + index * 70}px`,
                height: `${180 + index * 70}px`,
              }}
              animate={{
                scale: [1, 1.25, 1],
                x: [0, -15, 0],
                y: [0, 15, 0],
                opacity: [0.12, 0.04, 0.12],
              }}
              transition={{
                duration: 18 + index * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.7,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10 py-32">
        {/* SEMANA DE TECNOLOGIA */}
        <div className={`inline-block px-6 py-2 rounded-full mb-8 border ${isDarkMode ? 'border-[#5B439A] bg-[#5B439A]/20' : 'border-[#2E1E4D] bg-white/50'}`}>
          <p className={`text-xs font-bold tracking-[0.3em] uppercase ${isDarkMode ? 'text-[#A1ADCF]' : 'text-[#2E1E4D]'}`}>
            SEMANA DE TECNOLOGIA
          </p>
        </div>

        {/* SINFORM Logo */}
        <h1 className={`text-6xl sm:text-8xl font-bold tracking-[0.15em] mb-6 ${isDarkMode ? 'text-[#F1E7B5]' : 'text-[#2E1E4D]'}`} style={{ letterSpacing: '0.15em' }}>
          SINFORM
        </h1>

        {/* Date and Location */}
        <p className={`text-sm sm:text-base mb-12 ${isDarkMode ? 'text-[#A1ADCF]' : 'text-[#2E1E4D]'}`}>
          26 — 29 de maio · UESC, Ilhéus — BA
        </p>

        {/* Saiba mais Button */}
        <button
          onClick={() => scrollToSection('sobre')}
          className={`px-10 py-4 rounded-lg text-base transition-all duration-300 ${isDarkMode ? 'bg-[#5B439A] text-[#F1E7B5] hover:bg-[#B2CCF1] hover:text-[#2E1E4D]' : 'bg-[#5B439A] text-[#F1E7B5] hover:bg-[#2E1E4D]'} shadow-lg`}
        >
          Saiba mais
        </button>
      </div>
    </section>
  );
}
