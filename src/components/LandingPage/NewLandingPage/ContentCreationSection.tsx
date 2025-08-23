import { motion, useInView } from "framer-motion";
import { fadeInUpAnimation, scrollRevealOptions } from "./animations";
import { useRef } from "react";

const Icons = [
  "/IC1.webp",
  "/IC2.webp",
  "/IC3.webp",
  "/IC4.webp",
  "/IC5.webp",
  "/IC6.webp",
];

export const ContentCreationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, scrollRevealOptions);

  return (
    <motion.div
      initial="hidden"
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      variants={fadeInUpAnimation}
      className="relative border-[0.75px] border-neutral-600/40"
    >
      {/* Background glow - hidden on mobile */}
      <div className="absolute z-0 top-0 hidden md:block">
        <img
          src="/line_glow.webp"
          alt="glow"
          className="h-[400px] lg:h-[600px]"
        />
      </div>

      <div className="flex flex-col lg:flex-row pb-10 md:pb-20 relative z-10">
        {/* Left content section */}
        <div className="w-full lg:w-[55%] px-4 md:px-8 lg:ml-20 mt-10 md:mt-20 mb-8 lg:mb-0">
          <motion.div variants={fadeInUpAnimation}>
            <p className="text-3xl md:text-4xl bg-gradient-to-t from-zinc-500 to-zinc-300 bg-clip-text text-transparent leading-tight">
              Revolutionize Math Education with{" "}
              <br className="hidden sm:block" />
              AI-Generated Visual Learning
            </p>
          </motion.div>

          <motion.div variants={fadeInUpAnimation} className="my-6">
            <p className="text-neutral-600 text-sm md:text-base">
              Bridge the gap between abstract mathematical concepts and student
              understanding. Our AI creates animations that transform complex
              ideas into clear, engaging visual narratives.
            </p>
          </motion.div>

          <motion.div variants={fadeInUpAnimation} className="space-y-4">
            {[
              {
                title: "Intelligent Animation Generation",
                description:
                  "Create precise mathematical visualizations automatically",
                Icon: "/Icon4.webp",
              },
              {
                title: "Instant Professional Results",
                description: "Export high-quality animations in seconds",
                Icon: "/Icon2.webp",
              },
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 max-w-md">
                <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 rounded-md bg-neutral-900/10 border-neutral-900 border relative">
                  <div className="h-[2px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-6 absolute top-0 left-1/2 transform -translate-x-1/2">
                    <div className="h-[12px] bg-neutral-900/20 w-6"></div>
                    <div className="h-[12px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-6 blur-lg"></div>
                  </div>
                  <div className="p-2 md:p-3">
                    <img
                      src={feature.Icon}
                      alt={`Icon ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-base md:text-lg bg-gradient-to-t from-zinc-500 to-zinc-300 bg-clip-text text-transparent">
                    {feature.title}
                  </p>
                  <p className="text-neutral-600 text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Decorative dots */}
          <motion.div
            variants={fadeInUpAnimation}
            className="h-[2px] my-6 max-w-md flex justify-between"
          >
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className="w-[4px] md:w-[6px] rounded-full h-full bg-zinc-600/30"
              ></div>
            ))}
          </motion.div>

          {/* CTA section */}
          <motion.div variants={fadeInUpAnimation} className="my-6">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex-1">
                <input
                  className="rounded-full py-2 w-full sm:w-64 pl-4 bg-stone-600/20 border-[0.75px] border-zinc-500/30 shadow-inner shadow-stone-800 text-sm md:text-base"
                  type="text"
                  placeholder="imran@gmail.com"
                />
              </div>
              <div className="rounded-full py-2 w-full sm:w-40 text-center bg-stone-600/20 border-[0.75px] border-zinc-500/30 shadow-inner shadow-zinc-400">
                <button className="text-sm md:text-base">
                  Get Started Free
                </button>
              </div>
            </div>
            <p className="my-4 text-xs md:text-sm text-neutral-600">
              No credit card required • Generate 5 animations free •{" "}
              <a href="#" className="underline text-white">
                Upgrade anytime
              </a>
            </p>
          </motion.div>
        </div>

        {/* Right content section */}
        <motion.div
          variants={fadeInUpAnimation}
          className="w-full lg:w-[45%] px-4 md:px-8 lg:pr-16"
        >
          <div className="w-full border-[0.75px] border-neutral-600/30 h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl p-2 flex flex-col justify-between bg-neutral-800/20">
            {/* Image section */}
            <div className="border-[0.75px] border-neutral-600/30 h-[45%] rounded-3xl overflow-hidden bg-black">
              <img
                className="w-full h-full object-cover rounded-3xl"
                src="/item8.png"
                alt="Demo visualization"
              />
            </div>

            {/* Content section */}
            <div className="h-[50%] flex flex-col justify-between p-2">
              <div>
                <div className="mb-4">
                  <div className="h-[2px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-12 md:w-14">
                    <div className="h-[12px] bg-neutral-900/20 w-12 md:w-14"></div>
                    <div className="h-[12px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-12 md:w-14 blur-lg"></div>
                  </div>
                  <div className="w-12 h-12 md:w-14 md:h-14 mt-3 rounded-md border-[0.75px] border-neutral-600/70 flex items-center justify-center p-2">
                    <img
                      src="/Icon5.webp"
                      alt="API Icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <p className="text-xl md:text-2xl mb-2 md:mb-4">
                  Integrate API driven AI
                </p>
                <p className="text-neutral-500 text-sm md:text-base mb-4 md:mb-6">
                  Seamlessly integrate our powerful AI into your existing
                  workflow. Build custom applications with our comprehensive
                  API.
                </p>
              </div>

              {/* Icons row */}
              <div className="flex justify-center gap-2 md:gap-3">
                {Icons.map((num, index) => (
                  <span
                    key={num}
                    className="h-8 w-8 md:h-10 md:w-10 border-[0.75px] border-neutral-600/40 rounded-full flex items-center justify-center bg-neutral-900 p-1"
                  >
                    <img
                      src={num}
                      alt={`Integration ${index + 1}`}
                      className="w-4 h-4 md:w-5 md:h-5"
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
