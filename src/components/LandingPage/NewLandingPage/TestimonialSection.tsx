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
          Streamline Writing <br />
          Processes with Intelligent AI
        </p>
      </motion.div>

      <motion.div variants={fadeInUpAnimation}>
        <InfiniteCarousel />
      </motion.div>

      <motion.div variants={fadeInUpAnimation} className="my-24">
        <p className="text-center text-neutral-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi <br />
          vitae nulla lacinia, vulputate mauris eget, accumsan justo.
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUpAnimation}
        className="absolute h-60 mt-[-500px] w-full flex items-center justify-center"
      >
        <div
          className="w-80 h-80 rounded-full flex items-center justify-center bg-neutral-600/30 border-4 border-dashed border-neutral-700/40 relative"
          style={{ animation: "spin 20s linear infinite" }}
        ></div>
        <div className="border w-64 h-64 ml-[-288px] bg-neutral-950 rounded-full">
          <img src="/ring_light.webp" alt="ring light" />
        </div>
      </motion.div>
    </motion.div>
  );
};
