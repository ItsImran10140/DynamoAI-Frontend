import { motion, useInView } from "framer-motion";
import { fadeInUpAnimation, scrollRevealOptions } from "./animations";
import { useRef } from "react";

export const FeaturesGridSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, scrollRevealOptions);
  return (
    <motion.div
      initial="hidden"
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      variants={fadeInUpAnimation}
      className="relative border border-neutral-600/30 pb-10"
    >
      <motion.div variants={fadeInUpAnimation} className="pt-10">
        <p className="text-center text-4xl mb-10 mt-16 bg-gradient-to-t from-zinc-500 to-zinc-300 bg-clip-text text-transparent">
          Streamline Transforming Words <br />
          with AI Brilliance
        </p>
      </motion.div>

      <div className="absolute z-0 top-0">
        <img src="/line_glow.webp" alt="glow" className="h-[600px]" />
      </div>

      <motion.div variants={fadeInUpAnimation} className="flex">
        {[1, 2, 3].map((item) => (
          <div key={item} className="w-[33%] h-full p-4">
            <div className="w-full border-[0.75px] border-neutral-600/30 h-[450px] rounded-3xl p-2 flex flex-col justify-between bg-neutral-800/20 mr-16">
              <div className="h-[40%] rounded-xl">
                <div>
                  <div className="h-[2px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-14 ml-4">
                    <div className="h-[12px] bg-neutral-900/20 w-14"></div>
                    <div className="h-[12px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-14 blur-lg"></div>
                  </div>
                  <div className="w-14 h-14 ml-4 mt-3 rounded-md border-[0.75px] border-neutral-600/70"></div>
                </div>
                <p className="my-4 ml-4 text-2xl">Integrate API driven AI</p>
                <p className="ml-4 text-neutral-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  <br />
                  Morbi vitae nulla lacinia, vulputate mauris eget.
                </p>
              </div>
              <div className="border-[0.75px] border-neutral-600/30 h-[40%] rounded-3xl"></div>
            </div>
          </div>
        ))}
      </motion.div>

      <div>
        <div className="flex flex-col">
          <motion.div
            variants={fadeInUpAnimation}
            className="mt-20 pt-10 flex border-t border-neutral-600/30"
          >
            {[1, 2, 3].map((item) => (
              <div key={item} className="w-[33%] h-full p-4">
                <div className="w-full bg-neutral-800/20 mr-16">
                  <div className="h-[40%] border-[0.75px] border-neutral-600/30 rounded-xl">
                    <div className="mb-4 flex">
                      <div className="h-[2px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-10 ml-4">
                        <div className="h-[12px] bg-neutral-900/20 w-10"></div>
                        <div className="h-[12px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-10 blur-lg"></div>
                      </div>
                      <div className="w-10 h-10 ml-[-40px] mt-3 rounded-md border-[0.75px] border-neutral-600/70"></div>
                      <p className="my-4 ml-4 text-xl">
                        Integrate API driven AI
                      </p>
                    </div>
                    <p className="ml-4 text-neutral-500 mb-4 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi vitae nulla lacinia, vulputate mauris eget.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUpAnimation}>
            <div className="w-full h-full px-4">
              <div className="w-full bg-neutral-800/20 mr-16">
                <div className="border-[0.75px] border-neutral-600/30 h-[300px] bg-gradient-to-b from-neutral-800/30 to-transparent rounded-xl">
                  <div className="flex justify-center w-full h-full">
                    <div className="flex flex-col justify-center h-full">
                      <p className="ml-4 text-4xl mb-8 bg-gradient-to-t from-zinc-500 to-zinc-300 bg-clip-text text-transparent text-center">
                        7-day free trial! <br />
                        Get ready to kick off your
                      </p>
                      <div className="flex justify-center">
                        <div className="rounded-full py-2 ml-4 w-28 text-center bg-stone-600/20 border-[0.75px] border-zinc-500/30 shadow-inner shadow-zinc-400">
                          <button>Get Started</button>
                        </div>
                        <div className="ml-4">
                          <p className="text-[15px]">4.80/5</p>
                          <p className="text-[13px] text-neutral-500">
                            From 300+ Customer Reviews
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
