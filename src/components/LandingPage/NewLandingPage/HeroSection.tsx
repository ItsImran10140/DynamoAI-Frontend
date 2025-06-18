/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { fadeInUpAnimation } from "./animations";

// Mock animation for demonstration

export const HeroSection = () => {
  const handleGetStarted = () => {
    alert("Button clicked! Getting started...");
    console.log("Get Started button clicked");
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeInUpAnimation}
      className="h-[500px] mt-20 ml-20"
    >
      <div>
        <div>
          <div className="border-[0.75px] border-neutral-800 my-8 w-[150px] py-1 px-4 rounded-full bg-neutral-950">
            <p className="text-neutral-300 text-sm">33,000+ Creator</p>
          </div>
        </div>
        <div>
          <p className="text-7xl bg-gradient-to-t from-zinc-500 to-zinc-300 bg-clip-text text-transparent">
            The Ultimate AI <br /> workspace for writers.
          </p>
        </div>
        <div>
          <p className="my-8 text-xl text-neutral-500">
            AI-Powered Writing Excellence
          </p>
          <p className="text-neutral-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
            Ipsa laudantium ipsam ab nostrum placeat natus quia! <br />
            Accusamus quis corporis expedita nemo fugiat, consectetur <br />
            suscipit quibusdam, sed eos nisi itaque vitae?
          </p>
        </div>
        <div>
          <button
            onClick={handleGetStarted}
            className="rounded-full mt-6 py-2 w-72 text-center bg-stone-600/20 border-[0.75px] border-zinc-500/30 shadow-inner shadow-purple-300/70 cursor-pointer relative z-20 hover:bg-transparent hover:shadow transition-all duration-200"
          >
            <span className="text-md text-neutral-300 hover:text-white font-thin">
              Get Started
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
