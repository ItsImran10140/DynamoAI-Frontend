import { motion, useInView } from "framer-motion";
import InfiniteCarousel from "../../../UI/InfiniteCarosol";
import { fadeInUpAnimation, scrollRevealOptions } from "./animations";
import { useRef } from "react";

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, scrollRevealOptions);

  return (
    <motion.div
      initial="hidden"
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      variants={fadeInUpAnimation}
      className="py-8 md:py-12 border-x border-neutral-600/30 pt-10 md:pt-20 px-4 md:px-8"
    >
      <motion.div variants={fadeInUpAnimation}>
        <p className="text-center text-3xl md:text-4xl lg:text-5xl mb-16 md:mb-24 lg:mb-32 mt-8 md:mt-16 bg-gradient-to-t from-zinc-500 to-zinc-300 bg-clip-text text-transparent leading-tight">
          Streamline Mathematical <br className="hidden sm:block" />
          Visualization with Intelligent AI
        </p>
      </motion.div>

      <motion.div variants={fadeInUpAnimation}>
        <InfiniteCarousel />
      </motion.div>

      <motion.div
        variants={fadeInUpAnimation}
        className="my-12 md:my-20 lg:my-24"
      >
        <p className="text-center text-neutral-500 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
          Our AI understands mathematical notation, concepts, and educational
          best practices to create animations that perfectly illustrate your
          ideas.
        </p>
      </motion.div>

      {/* Animated circle with stats */}
      <motion.div
        variants={fadeInUpAnimation}
        className="relative h-40 md:h-60 mt-[-200px] md:mt-[-500px] w-full flex items-center justify-center"
      >
        {/* Outer dashed circle */}
        <div
          className="w-60 h-60 md:w-80 md:h-80 rounded-full flex items-center justify-center bg-transparent border-2 md:border-4 border-dashed border-neutral-700/40 relative"
          style={{ animation: "spin 20s linear infinite" }}
        ></div>

        {/* Inner solid circle */}
        <div
          className="w-52 h-52 md:w-[310px] md:h-[310px] rounded-full flex items-center justify-center ml-[-208px] md:ml-[-315px] border-neutral-700/30 border-[20px] md:border-[25px] relative"
          style={{ animation: "spin 20s linear infinite" }}
        ></div>

        {/* Center content */}
        <div className="border-[0.75px] border-neutral-500/20 w-48 h-48 md:w-64 md:h-64 ml-[-192px] md:ml-[-284px] bg-transparent rounded-full relative">
          <img
            className="absolute w-48 md:w-64 z-20 opacity-80"
            src="/ring_light.webp"
            alt="ring light"
          />
          <p className="flex absolute justify-center items-center w-full h-full text-3xl md:text-5xl bg-gradient-to-tr from-orange-300 to bg-purple-400 bg-clip-text text-transparent font-semibold z-30">
            3k+
          </p>
        </div>
      </motion.div>

      {/* Add CSS for the spin animation */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </motion.div>
  );
};
