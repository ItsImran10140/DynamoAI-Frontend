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
      className="mt-[62px]"
    >
      <img
        className="w-full h-full object-contain z-0 border-[0.75px] border-neutral-700"
        src="/saas.png"
        alt="saas"
      />
    </motion.div>
  );
};
