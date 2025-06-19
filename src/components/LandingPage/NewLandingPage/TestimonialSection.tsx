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
      className="py-12 border-x border-neutral-600/30 pt-20"
    >
      <motion.div variants={fadeInUpAnimation}>
        <p className="text-center text-5xl mb-32 mt-16 bg-gradient-to-t from-zinc-500 to-zinc-300 bg-clip-text text-transparent">
          Streamline Mathematical <br />
          Visualization with Intelligent AI
        </p>
      </motion.div>

      <motion.div variants={fadeInUpAnimation}>
        <InfiniteCarousel />
      </motion.div>

      <motion.div variants={fadeInUpAnimation} className="my-24">
        <p className="text-center text-neutral-500">
          Our AI understands mathematical notation, concepts, and educational
          best practices <br />
          to create animations that perfectly illustrate your ideas.
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUpAnimation}
        className="absolute h-60 mt-[-500px] w-full flex items-center justify-center"
      >
        <div
          className="w-80 h-80 rounded-full flex items-center justify-center bg-transparent  border-4 border-dashed border-neutral-700/40 relative"
          style={{ animation: "spin 20s linear infinite" }}
        ></div>
        <div
          className="w-[310px] h-[310px] rounded-full flex items-center justify-center  ml-[-315px]   border-neutral-700/30 border-[25px]  relative "
          style={{ animation: "spin 20s linear infinite" }}
        ></div>
        <div className="border-[0.75px] border-neutral-500/20 w-64 h-64 ml-[-284px] bg-transparent rounded-full">
          <img
            className="absolute w-64 z-20"
            src="/ring_light.webp"
            alt="ring light"
          />
          <p className="flex absolute justify-center mt-[106px] ml-16 items-center pl-8 text-5xl  bg-gradient-to-tr from-orange-300 to bg-purple-400 bg-clip-text text-transparent">
            3k+
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// bg-neutral-600/30
