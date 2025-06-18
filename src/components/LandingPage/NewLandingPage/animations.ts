import { type Variants } from "framer-motion";

export const fadeInUpAnimation: Variants = {
  hidden: {
    opacity: 0.2,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 1.5,
    },
  },
};

export const scrollRevealOptions = {
  once: true,
  amount: 0.3,
};
