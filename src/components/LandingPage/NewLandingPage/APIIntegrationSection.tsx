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

export const APIIntegrationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, scrollRevealOptions);

  return (
    <motion.div
      initial="hidden"
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      variants={fadeInUpAnimation}
      className="pt-10 md:pt-20 border-x-[0.75px] border-neutral-600/40"
    >
      {/* Trusted by section */}
      <div className="h-32 md:h-52 flex flex-col justify-center items-center border-t border-neutral-600/30 px-4">
        <motion.p
          variants={fadeInUpAnimation}
          className="mb-6 md:mb-8 text-sm md:text-base text-center"
        >
          Trusted by Educators Worldwide
        </motion.p>
        <motion.div
          variants={fadeInUpAnimation}
          className="w-full max-w-md md:max-w-none flex justify-evenly px-4 md:px-0"
        >
          {Icons.map((num, index) => (
            <span
              key={num}
              className="h-8 w-8 md:h-10 md:w-10 border-[0.75px] border-neutral-600/40 rounded-full flex items-center justify-center bg-neutral-900"
            >
              <img
                src={num}
                alt={`Icon ${index + 1}`}
                className="w-4 h-4 md:w-5 md:h-5"
              />
            </span>
          ))}
        </motion.div>
      </div>

      {/* Main content section */}
      <div className="w-full border-t border-neutral-600/30 pt-10 md:pt-20 pb-10 md:pb-20 px-4 md:px-0">
        <motion.div variants={fadeInUpAnimation} className="my-6 md:my-8">
          <p className="text-center text-3xl md:text-4xl lg:text-5xl bg-gradient-to-t from-zinc-500 to-zinc-300 bg-clip-text text-transparent leading-tight">
            Bring Mathematical Concepts <br className="hidden sm:block" />
            to Life with AI-Powered Animations
          </p>
          <p className="text-center my-6 md:my-8 text-neutral-500 text-base md:text-lg px-4 md:px-0 max-w-4xl mx-auto">
            From calculus derivatives to complex geometric transformations, our
            AI understands mathematical language and creates precise,
            educational animations that make abstract concepts tangible and
            engaging.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUpAnimation}
          className="flex justify-center p-2 md:p-4"
        >
          {/* Desktop and tablet layout */}
          <div className="hidden md:flex w-full max-w-7xl gap-4">
            {/* First card */}
            <div className="w-1/2 border-[0.75px] border-neutral-600/30 bg-stone-800/20 h-[500px] lg:h-[600px] rounded-3xl p-2 flex flex-col justify-evenly">
              <div className="border-[0.75px] border-neutral-600/30 h-[50%] rounded-3xl mb-3 bg-black overflow-hidden">
                <video
                  className="w-full h-full object-contain z-0 border-[0.75px] border-neutral-600/30 rounded-3xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src="/dynamo_demo.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="h-[50%] rounded-xl">
                <div>
                  <div className="h-[2px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-14 ml-4">
                    <div className="h-[12px] bg-neutral-900/20 w-14"></div>
                    <div className="h-[12px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-14 blur-lg"></div>
                  </div>
                  <div className="w-14 h-14 ml-4 mt-3 rounded-md border-[0.75px] border-neutral-600/70">
                    <img src="/Icon2.webp" alt="Icon2" />
                  </div>
                </div>
                <p className="my-4 ml-4 text-xl lg:text-2xl">
                  Create Animations with Natural Language
                </p>
                <p className="ml-4 text-neutral-500 text-sm lg:text-base pr-4">
                  Simply type "Show me how the derivative of x² changes as x
                  increases" or "Animate the Pythagorean theorem proof" and
                  watch our AI generate professional Manim code and render
                  beautiful animations instantly.
                </p>
              </div>
            </div>

            {/* Second card */}
            <div className="w-1/2 border-[0.75px] border-neutral-600/30 h-[500px] lg:h-[600px] rounded-3xl p-2 flex flex-col justify-evenly bg-neutral-800/20">
              <div className="border-[0.75px] border-neutral-600/30 h-[50%] rounded-3xl mb-3 overflow-hidden">
                <video
                  className="w-full h-full object-contain z-0 border-[0.75px] border-neutral-600/30 rounded-3xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src="/Demo_2.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="h-[50%] rounded-xl">
                <div>
                  <div className="h-[2px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-14 ml-4">
                    <div className="h-[12px] bg-neutral-900/20 w-14"></div>
                    <div className="h-[12px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-14 blur-lg"></div>
                  </div>
                  <div className="w-14 h-14 ml-4 mt-3 rounded-md border-[0.75px] border-neutral-600/70">
                    <img src="/Icon3.webp" alt="Icon3" />
                  </div>
                </div>
                <p className="my-4 ml-4 text-xl lg:text-2xl">
                  Professional Results, Zero Coding
                </p>
                <p className="ml-4 text-neutral-500 text-sm lg:text-base pr-4">
                  Get the same quality animations used by top math educators
                  like 3Blue1Brown, without writing a single line of code. Our
                  AI handles all the complex Manim programming behind the
                  scenes.
                </p>
                <div className="w-full mt-4 flex justify-center gap-2">
                  {Icons.map((num, index) => (
                    <span
                      key={num}
                      className="h-6 w-6 lg:h-7 lg:w-7 border-[0.75px] border-neutral-600/40 rounded-full flex items-center justify-center bg-neutral-900"
                    >
                      <img
                        src={num}
                        alt={`Icon ${index + 1}`}
                        className="w-3 h-3 lg:w-4 lg:h-4"
                      />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden w-full max-w-sm space-y-6">
            {/* First card - mobile */}
            <div className="border-[0.75px] border-neutral-600/30 bg-stone-800/20 rounded-3xl p-4">
              <div className="border-[0.75px] border-neutral-600/30 h-48 rounded-3xl mb-4 bg-black overflow-hidden">
                <video
                  className="w-full h-full object-contain border-[0.75px] border-neutral-600/30 rounded-3xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src="/dynamo_demo.mp4" type="video/mp4" />
                </video>
              </div>
              <div>
                <div className="mb-4">
                  <div className="h-[2px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-12">
                    <div className="h-[10px] bg-neutral-900/20 w-12"></div>
                    <div className="h-[10px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-12 blur-lg"></div>
                  </div>
                  <div className="w-12 h-12 mt-3 rounded-md border-[0.75px] border-neutral-600/70">
                    <img src="/Icon2.webp" alt="Icon2" />
                  </div>
                </div>
                <p className="text-xl mb-3">
                  Create Animations with Natural Language
                </p>
                <p className="text-neutral-500 text-sm">
                  Simply type "Show me how the derivative of x² changes as x
                  increases" and watch our AI generate professional animations
                  instantly.
                </p>
              </div>
            </div>

            {/* Second card - mobile */}
            <div className="border-[0.75px] border-neutral-600/30 bg-neutral-800/20 rounded-3xl p-4">
              <div className="border-[0.75px] border-neutral-600/30 h-48 rounded-3xl mb-4 overflow-hidden">
                <video
                  className="w-full h-full object-contain border-[0.75px] border-neutral-600/30 rounded-3xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src="/Demo_2.mp4" type="video/mp4" />
                </video>
              </div>
              <div>
                <div className="mb-4">
                  <div className="h-[2px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-12">
                    <div className="h-[10px] bg-neutral-900/20 w-12"></div>
                    <div className="h-[10px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-12 blur-lg"></div>
                  </div>
                  <div className="w-12 h-12 mt-3 rounded-md border-[0.75px] border-neutral-600/70">
                    <img src="/Icon3.webp" alt="Icon3" />
                  </div>
                </div>
                <p className="text-xl mb-3">
                  Professional Results, Zero Coding
                </p>
                <p className="text-neutral-500 text-sm mb-4">
                  Get the same quality animations used by top math educators
                  without writing code.
                </p>
                <div className="flex justify-center gap-2">
                  {Icons.map((num, index) => (
                    <span
                      key={num}
                      className="h-6 w-6 border-[0.75px] border-neutral-600/40 rounded-full flex items-center justify-center bg-neutral-900"
                    >
                      <img
                        src={num}
                        alt={`Icon ${index + 1}`}
                        className="w-3 h-3"
                      />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
