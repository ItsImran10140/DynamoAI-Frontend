import { motion, useInView } from "framer-motion";
import { fadeInUpAnimation, scrollRevealOptions } from "./animations";
import { useRef } from "react";

export const ContentCreationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, scrollRevealOptions);
  return (
    <motion.div
      initial="hidden"
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      variants={fadeInUpAnimation}
      className=" relative border-[0.75px] border-neutral-600/40 "
    >
      <div className="absolute z-0 top-0">
        <img src="/line_glow.webp" alt="glow" className="h-[600px] " />
      </div>

      <div className="flex pb-20">
        <div className="w-[55%] h-full ml-20 mt-20">
          <motion.div variants={fadeInUpAnimation}>
            <p className="text-5xl bg-gradient-to-t from-zinc-500 to-zinc-300 bg-clip-text text-transparent">
              Revolutionize content <br /> creation with AI
            </p>
          </motion.div>

          <motion.div variants={fadeInUpAnimation} className="my-6">
            <p className="text-neutral-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              vitae nulla <br /> lacinia, vulputate mauris eget, accumsan justo.
            </p>
          </motion.div>

          <motion.div variants={fadeInUpAnimation}>
            {[
              {
                title: "Intelligent Algorithms",
                description: "Lorem ipsum dolor sit amet consectetur.",
              },
              {
                title: "Optimizing Data Collection",
                description: "Lorem ipsum dolor sit amet consectetur.",
              },
            ].map((feature, index) => (
              <div key={index} className="flex w-96 p-2">
                <div className="w-16 h-16 mr-3 rounded-md bg-neutral-900/10 border-neutral-900 border">
                  <div className="h-[2px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-6 ml-[19px]">
                    <div className="h-[12px] bg-neutral-900/20 w-6"></div>
                    <div className="h-[12px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-6 blur-lg"></div>
                  </div>
                </div>
                <div>
                  <p className="text-lg bg-gradient-to-t from-zinc-500 to-zinc-300 bg-clip-text text-transparent">
                    {feature.title}
                  </p>
                  <p className="text-neutral-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUpAnimation}
            className="h-[2px] my-4 w-96 flex justify-evenly"
          >
            {[...Array(36)].map((_, i) => (
              <div
                key={i}
                className="w-[6px] rounded-full h-full bg-zinc-600/30"
              ></div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUpAnimation} className="my-4">
            <div className="flex">
              <div className="">
                <input
                  className="rounded-full py-2 w-64 pl-4 bg-stone-600/20 border-[0.75px] border-zinc-500/30 shadow-inner shadow-stone-800"
                  type="text"
                  placeholder="imran@gmail.com"
                />
              </div>
              <div className="rounded-full py-2 ml-4 w-28 text-center bg-stone-600/20 border-[0.75px] border-zinc-500/30 shadow-inner shadow-zinc-400">
                <button>Get Started</button>
              </div>
            </div>
            <p className="my-4 pl-2 text-sm text-neutral-600">
              Hint text can be added here.{" "}
              <a href="#" className="underline text-white">
                Link
              </a>
            </p>
          </motion.div>
        </div>

        <motion.div variants={fadeInUpAnimation} className="w-[45%] h-full p-4">
          <div className="w-full border-[0.75px] border-neutral-600/30 h-[600px] rounded-3xl p-2 flex flex-col justify-evenly bg-neutral-800/20 mr-16">
            <div className="border-[0.75px] border-neutral-600/30 h-[50%] rounded-3xl mb-3"></div>
            <div className="h-[50%] rounded-xl">
              <div>
                <div className="h-[2px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-14 ml-4">
                  <div className="h-[12px] bg-neutral-900/20 w-14"></div>
                  <div className="h-[12px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-14 blur-lg"></div>
                </div>
                <div className="w-14 h-14 ml-4 mt-3 rounded-md border-[0.75px] border-neutral-600/70"></div>
              </div>
              <p className="my-4 ml-4 text-2xl">Integrate API driven AI</p>
              <p className="ml-4 text-neutral-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Morbi vitae nulla lacinia, vulputate mauris eget.
              </p>
              <div className="w-full mt-6 flex justify-evenly">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <span
                    key={num}
                    className="h-10 w-10 border-[0.75px] border-neutral-600/40 rounded-full flex items-center justify-center bg-neutral-900"
                  >
                    {num}
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
