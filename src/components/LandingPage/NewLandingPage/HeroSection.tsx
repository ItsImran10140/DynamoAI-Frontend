import { motion } from "framer-motion";
import { fadeInUpAnimation } from "./animations";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup");
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeInUpAnimation}
      className="min-h-[400px] md:h-[500px] mt-16 md:mt-20 px-4 md:px-8 lg:ml-20"
    >
      <div className="max-w-4xl">
        {/* Badge */}
        <div className="mb-6 md:mb-8">
          <div className="border-[0.75px] border-neutral-800 inline-block py-2 px-4 rounded-full bg-neutral-950">
            <p className="text-neutral-300 text-xs md:text-sm">
              1000+ Animations Created
            </p>
          </div>
        </div>

        {/* Main heading */}
        <div className="mb-6 md:mb-8">
          <p className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-t from-zinc-500 to-zinc-300 bg-clip-text text-transparent leading-tight">
            The Ultimate AI-Powered <br className="hidden sm:block" />
            Mathematical Animation Studio
          </p>
        </div>

        {/* Subheading and description */}
        <div className="mb-8 md:mb-10">
          <p className="text-lg md:text-xl text-neutral-500 mb-4 md:mb-6">
            Transform Complex Math into Stunning Visual Stories
          </p>
          <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-2xl">
            Create professional-quality mathematical animations in seconds, not
            hours. Simply describe what you want to visualize, and our AI
            generates beautiful Manim animations instantly - no coding required.
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <button
            onClick={handleGetStarted}
            className="rounded-full py-3 md:py-2 px-8 md:px-12 lg:w-72 text-center bg-stone-600/20 border-[0.75px] border-zinc-500/30 shadow-inner shadow-purple-300/70 cursor-pointer relative z-20 hover:bg-transparent hover:shadow transition-all duration-200"
          >
            <span className="text-sm md:text-md text-neutral-300 hover:text-white font-thin">
              Get Started
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
