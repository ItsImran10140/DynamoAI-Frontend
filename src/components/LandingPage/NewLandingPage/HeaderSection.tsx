import { motion } from "framer-motion";
import { fadeInUpAnimation } from "./animations";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const HeaderSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeInUpAnimation}
        className="relative"
      >
        {/* Main header container */}
        <div className="flex items-center justify-between mt-6 md:mt-8 px-4 sm:px-6 md:px-8 lg:px-20">
          {/* Logo section */}
          <div className="flex-shrink-0">
            <div className="text-xl sm:text-2xl md:text-3xl font-medium">
              <p className="pb-4 md:pb-5">DynamooAI</p>
              <div className="h-[2px] bg-gradient-to-r from-orange-300 to-purple-400 w-full mb-[-24px] md:mb-[-30px]">
                <div className="h-[10px] md:h-[12px] bg-neutral-900/20 w-full"></div>
                <div className="h-[10px] md:h-[12px] bg-gradient-to-r from-orange-300 to-purple-400 w-full blur-lg md:blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <button className="py-2 px-4 lg:px-5 bg-neutral-800/80 hover:bg-neutral-700/80 rounded-full text-sm font-thin transition-colors duration-200">
              Home
            </button>
            <button className="py-2 px-4 lg:px-5 bg-neutral-800/80 hover:bg-neutral-700/80 rounded-full text-sm font-thin transition-colors duration-200">
              About
            </button>
            <button className="py-2 px-4 lg:px-5 bg-neutral-800/80 hover:bg-neutral-700/80 rounded-full text-sm font-thin transition-colors duration-200">
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg bg-neutral-800/80 hover:bg-neutral-700/80 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden bg-neutral-900/95 backdrop-blur-sm border-t border-neutral-700/50 mt-4"
        >
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3 px-4 bg-neutral-800/80 hover:bg-neutral-700/80 rounded-full text-sm font-thin text-left transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3 px-4 bg-neutral-800/80 hover:bg-neutral-700/80 rounded-full text-sm font-thin text-left transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3 px-4 bg-neutral-800/80 hover:bg-neutral-700/80 rounded-full text-sm font-thin text-left transition-colors duration-200"
            >
              Contact
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative line with dot - only show when mobile menu is closed */}
      <div
        className={`transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-0 md:opacity-100" : "opacity-100"
        }`}
      >
        <div className="h-[0.75px] w-full bg-neutral-600/40 mt-4 md:mt-6 relative">
          <div className="absolute left-4 sm:left-6 md:left-8 lg:left-20 top-[-6px] bg-neutral-900 rounded-sm w-3 h-3 border border-neutral-600/40"></div>
        </div>
      </div>
    </>
  );
};
