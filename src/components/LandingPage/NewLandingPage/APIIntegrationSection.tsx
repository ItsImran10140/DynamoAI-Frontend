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
      className="pt-20 border-x-[0.75px] border-neutral-600/40"
    >
      <div className="h-52 flex flex-col justify-center items-center border-t border-neutral-600/30">
        <motion.p variants={fadeInUpAnimation} className="mb-8">
          Trusted by Educators Worldwide
        </motion.p>
        <motion.div
          variants={fadeInUpAnimation}
          className="w-full flex justify-evenly"
        >
          {Icons.map((num) => (
            <span
              key={num}
              className="h-10 w-10 border-[0.75px] border-neutral-600/40 rounded-full flex items-center justify-center bg-neutral-900 "
            >
              <img src={num} alt="" />
            </span>
          ))}
        </motion.div>
      </div>

      <div className="w-full border-t border-neutral-600/30 pt-20 pb-20">
        <motion.div variants={fadeInUpAnimation} className="my-8">
          <p className="text-center text-5xl bg-gradient-to-t from-zinc-500 to-zinc-300 bg-clip-text text-transparent">
            Bring Mathematical Concepts <br /> to Life with AI-Powered
            Animations
            {/* Bring Mathematical Concepts to Life with AI-Powered Animations */}
          </p>
          <p className="text-center my-8 text-neutral-500 text-lg">
            From calculus derivatives to complex geometric transformations, our
            AI understands mathematical language <br />
            and creates precise, educational animations that make abstract
            concepts tangible and engaging.
            {/* From calculus derivatives to complex geometric transformations, our AI understands mathematical language and creates precise, educational animations that make abstract concepts tangible and engaging. */}
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUpAnimation}
          className="flex justify-center p-4"
        >
          <div className="w-[50%] border-[0.75px] border-neutral-600/30 bg-stone-800/20 h-[600px] rounded-3xl mx-4 p-2 flex flex-col justify-evenly ml-16">
            <div className="border-[0.75px] border-neutral-600/30 h-[50%] rounded-3xl mb-3 bg-black">
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
              <p className="my-4 ml-4 text-2xl">
                Create Animations with Natural Language
              </p>
              <p className="ml-4 text-neutral-500">
                Simply type "Show me how the derivative of x² changes as x
                increases" or "Animate the Pythagorean theorem proof"
                <br />
                and watch our AI generate professional Manim code and render
                beautiful animations instantly.
              </p>
            </div>
          </div>

          <div className="w-[50%] border-[0.75px] border-neutral-600/30 h-[600px] rounded-3xl mx-4 p-2 flex flex-col justify-evenly bg-neutral-800/20 mr-16">
            <div className="border-[0.75px] border-neutral-600/30 h-[50%] rounded-3xl mb-3">
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
              <p className="my-4 ml-4 text-2xl">
                Professional Results, Zero Coding
              </p>
              <p className="ml-4 text-neutral-500">
                Get the same quality animations used by top math educators like
                3Blue1Brown, without <br />
                writing a single line of code. Our AI handles all the complex
                Manim programming behind the scenes.
              </p>
              <div className="w-full mt-4  ml-[-25px] flex justify-evenly">
                {Icons.map((num) => (
                  <span
                    key={num}
                    className="h-7 w-7 border-[0.75px] border-neutral-600/40 rounded-full flex items-center justify-center bg-neutral-900 "
                  >
                    <img src={num} alt="" />
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
