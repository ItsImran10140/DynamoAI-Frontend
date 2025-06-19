import { motion } from "framer-motion";
import { fadeInUpAnimation } from "./animations";

export const HeaderSection = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeInUpAnimation}
        className="flex flex-col lg:flex-row lg:items-center mt-8"
      >
        <div className="ml-4 sm:ml-8 md:ml-12 lg:ml-20 text-2xl sm:text-3xl mb-4 lg:mb-0">
          <p className="pb-[20px]">DynamooAI</p>
          <div className="h-[2px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-full mb-[-30px]">
            <div className="h-[12px] bg-neutral-900/20 w-full"></div>
            <div className="h-[12px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-full blur-xl"></div>
          </div>
        </div>
        <div className="w-full lg:w-[350px] flex justify-center lg:justify-around lg:ml-[250px] xl:ml-[250px] ">
          <button className="py-2 px-3 sm:px-5 bg-neutral-800/80 rounded-full text-xs sm:text-sm font-thin mx-1 sm:mx-0 ">
            Home
          </button>
          <button className="py-2 px-3 sm:px-5 bg-neutral-800/80 rounded-full text-xs sm:text-sm font-thin mx-1 sm:mx-0">
            About
          </button>
          <button className="py-2 px-3 sm:px-5 bg-neutral-800/80 rounded-full text-xs sm:text-sm font-thin mx-1 sm:mx-0">
            Contact
          </button>
        </div>
      </motion.div>
      <div className="h-[0.75px] flex justify-between w-screen ml-[-16px] sm:ml-[-32px] md:ml-[-64px] lg:ml-[-80px] xl:ml-[-112px] bg-neutral-600/40 absolute mt-6 text-white ">
        <div className="mt-[-5px] ml-[10px] sm:ml-[26px] md:ml-[58px] lg:ml-[74px] xl:ml-[106px] bg-neutral-900 rounded-sm w-3 h-3"></div>
      </div>
    </>
  );
};
