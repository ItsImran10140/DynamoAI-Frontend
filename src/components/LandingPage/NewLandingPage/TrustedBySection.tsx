import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUpAnimation, scrollRevealOptions } from "./animations";

export const TrustedBySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, scrollRevealOptions);

  return (
    <motion.div
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      initial="hidden"
      variants={fadeInUpAnimation}
      className="mt-12 md:mt-16 lg:mt-[62px] px-2 md:px-4"
    >
      <img
        className="w-full h-auto object-contain z-0 border-[0.75px] border-neutral-700/40 rounded-lg md:rounded-xl"
        src="/saas.png"
        alt="SaaS Dashboard Preview"
      />
    </motion.div>
  );
};
