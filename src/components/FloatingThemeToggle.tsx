import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FloatingThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const isMidnight = theme === 'midnight';

  return (
    <div className="fixed bottom-6 right-6 z-40 print:hidden flex items-center">
      <motion.button
        type="button"
        onClick={toggleTheme}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`group relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-full border shadow-2xl backdrop-blur-md transition-all duration-300 ${
          isMidnight
            ? 'bg-[#121017]/90 hover:bg-[#1B1721] text-[#F5F3F7] border-[#D4AF72]/40 hover:border-[#D4AF72] shadow-black/80'
            : 'bg-[#FFFFFF]/95 hover:bg-[#F9F7F4] text-[#14121A] border-[#966A1F]/40 hover:border-[#966A1F] shadow-[#966A1F]/15'
        }`}
        aria-label={`Toggle theme (currently ${isMidnight ? 'Midnight Dark' : 'Architectural Gold Light'})`}
        title={`Toggle to ${isMidnight ? 'Architectural Gold (Light)' : 'Midnight (Dark)'} theme`}
      >
        {/* Glow indicator ring */}
        <div 
          className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
            isMidnight
              ? 'bg-[#542B78]/40 text-[#D4AF72] group-hover:bg-[#542B78]/60'
              : 'bg-[#966A1F]/15 text-[#966A1F] group-hover:bg-[#966A1F]/25'
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMidnight ? (
              <motion.div
                key="sun"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Sun className="w-3.5 h-3.5" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Moon className="w-3.5 h-3.5" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Text Label */}
        <span className="text-xs font-semibold tracking-wide flex items-center gap-1.5">
          <span className={isMidnight ? 'text-[#D4AF72]' : 'text-[#966A1F]'}>
            {isMidnight ? 'Midnight' : 'Architectural'}
          </span>
          <span className="text-[10px] font-mono uppercase opacity-60 hidden sm:inline">
            {isMidnight ? 'Dark' : 'Gold'}
          </span>
        </span>

        {/* Subtle tooltip on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.15 }}
              className={`absolute bottom-full right-0 mb-2 px-3 py-1.5 rounded-lg text-[11px] font-medium whitespace-nowrap border shadow-xl pointer-events-none ${
                isMidnight
                  ? 'bg-[#1B1721] text-[#F5F3F7] border-[#302838]'
                  : 'bg-[#FFFFFF] text-[#14121A] border-[#E2DACB]'
              }`}
            >
              Switch to {isMidnight ? 'Architectural Gold (Light)' : 'Midnight (Dark)'}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};
