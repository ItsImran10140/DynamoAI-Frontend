import { motion, useInView } from "framer-motion";
import { fadeInUpAnimation, scrollRevealOptions } from "./animations";
import { useRef } from "react";

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
          Trusted by Million
        </motion.p>
        <motion.div
          variants={fadeInUpAnimation}
          className="w-full flex justify-evenly"
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <span
              key={num}
              className="h-10 w-10 border-[0.75px] border-neutral-600/40 rounded-full flex items-center justify-center bg-neutral-900"
            >
              {num}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="w-full border-t border-neutral-600/30 pt-20 pb-20">
        <motion.div variants={fadeInUpAnimation} className="my-8">
          <p className="text-center text-6xl bg-gradient-to-t from-zinc-500 to-zinc-300 bg-clip-text text-transparent">
            Integrate API driven AI <br /> copywriting into any application
          </p>
          <p className="text-center my-8 text-neutral-500 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi{" "}
            <br />
            vitae nulla lacinia, vulputate mauris eget, accumsan justo.
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
                <div className="w-14 h-14 ml-4 mt-3 rounded-md border-[0.75px] border-neutral-600/70"></div>
              </div>
              <p className="my-4 ml-4 text-2xl">Integrate API driven AI</p>
              <p className="ml-4 text-neutral-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Morbi vitae nulla lacinia, vulputate mauris eget.
              </p>
            </div>
          </div>

          <div className="w-[50%] border-[0.75px] border-neutral-600/30 h-[600px] rounded-3xl mx-4 p-2 flex flex-col justify-evenly bg-neutral-800/20 mr-16">
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
