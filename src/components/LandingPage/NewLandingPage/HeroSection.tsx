/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { fadeInUpAnimation } from "./animations";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// Mock animation for demonstration

export const HeroSection = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    // alert("Button clicked! Getting started...");
    // console.log("Get Started button clicked");
    navigate("/signup");
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
          <div className="border-[0.75px] border-neutral-800 my-8 w-[205px] py-1 px-4 rounded-full bg-neutral-950">
            <p className="text-neutral-300 text-sm">1000+ Animations Created</p>
          </div>
        </div>
        <div>
          <p className="text-6xl bg-gradient-to-t from-zinc-500 to-zinc-300 bg-clip-text text-transparent">
            The Ultimate AI-Powered <br /> Mathematical Animation Studio
            {/* The Ultimate AI-Powered Mathematical Animation Studio */}
          </p>
        </div>
        <div>
          <p className="my-8 text-xl text-neutral-500">
            Transform Complex Math into Stunning Visual Stories
          </p>
          <p className="text-neutral-500">
            Create professional-quality mathematical animations in seconds, not
            hours. <br />
            Simply describe what you want to visualize, <br />
            and our AI generates beautiful Manim animations <br />
            instantly - no coding required.
            {/* Create professional-quality mathematical animations in seconds, not hours. Simply describe what you want to visualize, and our AI generates beautiful Manim animations instantly - no coding required. */}
          </p>
        </div>
        <div>
          {/* <Link to="/signup"> */}
          <button
            onClick={handleGetStarted}
            className="rounded-full mt-6 py-2 w-72 text-center bg-stone-600/20 border-[0.75px] border-zinc-500/30 shadow-inner shadow-purple-300/70 cursor-pointer relative z-20 hover:bg-transparent hover:shadow transition-all duration-200"
          >
            <span className="text-md text-neutral-300 hover:text-white font-thin">
              Get Started
            </span>
          </button>
          {/* </Link> */}
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
