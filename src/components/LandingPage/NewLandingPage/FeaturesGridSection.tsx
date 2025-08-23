import { motion, useInView } from "framer-motion";
import { fadeInUpAnimation, scrollRevealOptions } from "./animations";
import { useRef } from "react";

const Icons = [
  {
    icon: "/Icon2.webp",
    image: "/item1.png",
    title: "For Education",
    description:
      "Create engaging lecture materials, visual proofs, and concept explanations that help students grasp difficult mathematics ideas. Perfect for teachers, professors, and tutors.",
  },
  {
    icon: "/Icon3.webp",
    image: "/item2.png",
    title: "For Students",
    description:
      "Visualize complex problems, create presentation animations, and better understand mathematical concepts through interactive visual learning.",
  },
  {
    icon: "/Icon4.webp",
    image: "/item3.png",
    title: "For Content Creators",
    description:
      "Generate professional mathematical animations for YouTube videos, online courses, educational content, and social media without expensive software or coding skills.",
  },
];

const Icons2 = [
  {
    icon: "/Icon5.webp",
    title: "For Researchers",
    description:
      "Communicate complex mathematical research findings through clear visual presentations. Perfect for conferences, papers, and grant proposals that require visual clarity.",
  },
  {
    icon: "/Icon6.webp",
    title: "For Tutors & Coaches",
    description:
      "Help students overcome math anxiety with engaging visual explanations. Create custom animations that break down problems step-by-step for individual learning needs.",
  },
  {
    icon: "/Icon5.webp",
    title: "For Textbook Authors",
    description:
      "Enhance educational materials with interactive visual content. Create supplementary animations that bring static diagrams and equations to life for modern learners.",
  },
];

export const FeaturesGridSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, scrollRevealOptions);

  return (
    <motion.div
      initial="hidden"
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      variants={fadeInUpAnimation}
      className="relative border border-neutral-600/30 pb-6 md:pb-10"
    >
      <motion.div
        variants={fadeInUpAnimation}
        className="pt-6 md:pt-10 px-4 md:px-8"
      >
        <p className="text-center text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-10 mt-8 md:mt-16 bg-gradient-to-t from-zinc-500 to-zinc-300 bg-clip-text text-transparent leading-tight">
          Transform Mathematical Ideas into <br className="hidden sm:block" />
          Stunning Visual Stories
        </p>
      </motion.div>

      {/* Background glow - hidden on mobile */}
      <div className="absolute z-0 top-0 hidden lg:block">
        <img
          src="/line_glow.webp"
          alt="glow"
          className="h-[400px] xl:h-[600px]"
        />
      </div>

      {/* First row - main feature cards */}
      <motion.div variants={fadeInUpAnimation} className="relative z-10">
        {/* Desktop layout */}
        <div className="hidden md:flex px-4 lg:px-0">
          {Icons.map((item, i) => (
            <div key={i} className="w-1/3 h-full p-2 lg:p-4">
              <div className="w-full border-[0.75px] border-neutral-600/30 h-[350px] lg:h-[450px] rounded-3xl p-2 flex flex-col justify-between bg-neutral-800/20">
                {/* Content section */}
                <div className="h-[55%] rounded-xl">
                  <div className="mb-4">
                    <div className="h-[2px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-10 lg:w-14 ml-4">
                      <div className="h-[12px] bg-neutral-900/20 w-10 lg:w-14"></div>
                      <div className="h-[12px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-10 lg:w-14 blur-lg"></div>
                    </div>
                    <div className="w-10 h-10 lg:w-14 lg:h-14 ml-4 mt-3 rounded-md border-[0.75px] border-neutral-600/70 p-2">
                      <img
                        src={item.icon}
                        alt={`${item.title} Icon`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <p className="my-3 lg:my-4 ml-4 text-lg lg:text-xl bg-gradient-to-t from-zinc-500 to-zinc-300 bg-clip-text text-transparent">
                    {item.title}
                  </p>
                  <p className="ml-4 mr-2 text-xs lg:text-sm text-neutral-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {/* Image section */}
                <div className="border-[0.75px] border-neutral-600/30 h-[40%] rounded-3xl flex justify-center bg-black overflow-hidden">
                  <img
                    className="h-full w-full object-cover rounded-3xl"
                    src={item.image}
                    alt={`${item.title} Preview`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile layout */}
        <div className="md:hidden px-4 space-y-6">
          {Icons.map((item, i) => (
            <div
              key={i}
              className="border-[0.75px] border-neutral-600/30 rounded-3xl p-4 bg-neutral-800/20"
            >
              {/* Image section - top on mobile */}
              <div className="border-[0.75px] border-neutral-600/30 h-48 rounded-3xl flex justify-center bg-black overflow-hidden mb-4">
                <img
                  className="h-full w-full object-cover rounded-3xl"
                  src={item.image}
                  alt={`${item.title} Preview`}
                />
              </div>
              {/* Content section */}
              <div>
                <div className="mb-4">
                  <div className="h-[2px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-12">
                    <div className="h-[12px] bg-neutral-900/20 w-12"></div>
                    <div className="h-[12px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-12 blur-lg"></div>
                  </div>
                  <div className="w-12 h-12 mt-3 rounded-md border-[0.75px] border-neutral-600/70 p-2">
                    <img
                      src={item.icon}
                      alt={`${item.title} Icon`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <p className="text-xl mb-3 bg-gradient-to-t from-zinc-500 to-zinc-300 bg-clip-text text-transparent">
                  {item.title}
                </p>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Second section */}
      <div className="relative z-10">
        <motion.div
          variants={fadeInUpAnimation}
          className="mt-10 md:mt-20 pt-6 md:pt-10 border-t border-neutral-600/30 px-4 md:px-0"
        >
          {/* Desktop layout */}
          <div className="hidden md:flex">
            {Icons2.map((item, i) => (
              <div key={i} className="w-1/3 h-full p-2 lg:p-4">
                <div className="w-full bg-neutral-800/20">
                  <div className="border-[0.75px] border-neutral-600/30 rounded-xl p-4">
                    <div className="mb-4 flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="h-[2px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-10">
                          <div className="h-[12px] bg-neutral-900/20 w-10"></div>
                          <div className="h-[12px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-10 blur-lg"></div>
                        </div>
                        <div className="w-10 h-10 mt-3 rounded-md border-[0.75px] border-neutral-600/70 flex justify-center items-center p-1">
                          <img
                            src={item.icon}
                            alt={`${item.title} Icon`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-lg lg:text-xl mb-3">{item.title}</p>
                        <p className="text-neutral-500 text-xs lg:text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile layout */}
          <div className="md:hidden space-y-4">
            {Icons2.map((item, i) => (
              <div
                key={i}
                className="border-[0.75px] border-neutral-600/30 rounded-xl p-4 bg-neutral-800/20"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-[2px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-10">
                      <div className="h-[12px] bg-neutral-900/20 w-10"></div>
                      <div className="h-[12px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-10 blur-lg"></div>
                    </div>
                    <div className="w-10 h-10 mt-3 rounded-md border-[0.75px] border-neutral-600/70 flex justify-center items-center p-1">
                      <img
                        src={item.icon}
                        alt={`${item.title} Icon`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xl mb-3">{item.title}</p>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeInUpAnimation}
          className="mt-8 md:mt-12 px-4 md:px-0"
        >
          <div className="w-full p-4">
            <div className="border-[0.75px] border-neutral-600/30 h-64 md:h-80 lg:h-[300px] bg-gradient-to-b from-neutral-800/30 to-transparent rounded-xl">
              <div className="flex justify-center w-full h-full">
                <div className="flex flex-col justify-center h-full text-center px-4">
                  <div className="mb-6 md:mb-8">
                    <p className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 bg-gradient-to-t from-zinc-500 to-zinc-300 bg-clip-text text-transparent leading-tight">
                      Start Creating Mathematical Animations Today
                    </p>
                    <p className="text-base md:text-lg text-neutral-400">
                      Join thousands of educators transforming how they teach
                      mathematics
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    <div className="rounded-full py-2 px-6 md:px-8 bg-stone-600/20 border-[0.75px] border-zinc-500/30 shadow-inner shadow-zinc-400">
                      <button className="text-sm md:text-base">
                        Get Started Free
                      </button>
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="text-sm md:text-base font-medium">4.80/5</p>
                      <p className="text-xs md:text-sm text-neutral-500">
                        From 300+ Customer Reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
