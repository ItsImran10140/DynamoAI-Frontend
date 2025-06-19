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
// const Icons2 = ["/Icon5.webp", "/Icon6.webp", "/Icon5.webp"];
// const Images = ["/icon1.png", "/icon2.png", "/icon3.png"];
// Create engaging lecture materials, visual proofs, and concept
//                   explanations that help students grasp difficult mathematical
//                   ideas. Perfect for teachers, professors, and tutors.
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
          Transform Mathematical Ideas into <br />
          Stunning Visual Stories
        </p>
      </motion.div>

      <div className="absolute z-0 top-0">
        <img src="/line_glow.webp" alt="glow" className="h-[600px]" />
      </div>

      <motion.div variants={fadeInUpAnimation} className="flex">
        {Icons.map((item, i) => (
          <div key={i} className="w-[33%] h-full p-4">
            <div className="w-full border-[0.75px] border-neutral-600/30 h-[450px] rounded-3xl p-2 flex flex-col justify-between bg-neutral-800/20 mr-16">
              <div className="h-[40%] rounded-xl">
                <div>
                  <div className="h-[2px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-14 ml-4">
                    <div className="h-[12px] bg-neutral-900/20 w-14"></div>
                    <div className="h-[12px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-14 blur-lg"></div>
                  </div>
                  <div className="w-14 h-14 ml-4 mt-3 rounded-md border-[0.75px] border-neutral-600/70 p-2">
                    <img src={item.icon} alt="Icons" />
                  </div>
                </div>
                <p className="my-4 ml-4 text-xl bg-gradient-to-t from-zinc-500 to-zinc-300 bg-clip-text text-transparent">
                  {item.title}
                </p>
                <p className="ml-4 text-sm text-neutral-500">
                  {item.description}
                </p>
              </div>
              <div className="border-[0.75px] border-neutral-600/30 h-[40%] rounded-3xl flex justify-center bg-black">
                <img
                  className="h-full rounded-3xl "
                  src={item.image}
                  alt="Images"
                />
              </div>
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
            {Icons2.map((item, i) => (
              <div key={i} className="w-[33%] h-full p-4">
                <div className="w-full bg-neutral-800/20 mr-16">
                  <div className="h-[40%] border-[0.75px] border-neutral-600/30 rounded-xl">
                    <div className="mb-4 flex">
                      <div className="h-[2px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-10 ml-4">
                        <div className="h-[12px] bg-neutral-900/20 w-10"></div>
                        <div className="h-[12px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-10 blur-lg"></div>
                      </div>
                      <div className="w-10 h-10 ml-[-40px] mt-3 rounded-md border-[0.75px] border-neutral-600/70 flex justify-center items-center p-1">
                        <img src={item.icon} alt="Icons" />
                      </div>
                      <p className="my-4 ml-4 text-xl">{item.title}</p>
                    </div>
                    <p className="ml-4 text-neutral-500 mb-4 text-sm">
                      {item.description}
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
                        <p className="text-3xl">
                          Start Creating Mathematical Animations Today{" "}
                        </p>
                        <p className="text-lg">
                          Join thousands of educators transforming how they
                          teach mathematics
                        </p>
                      </p>
                      <div className="flex justify-center">
                        <div className="rounded-full py-2 ml-4 w-36 text-center bg-stone-600/20 border-[0.75px] border-zinc-500/30 shadow-inner shadow-zinc-400">
                          <button>Get Started Free</button>
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
