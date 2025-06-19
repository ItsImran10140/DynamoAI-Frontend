import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Check } from "lucide-react";
import { fadeInUpAnimation, scrollRevealOptions } from "./animations";
import { useRef } from "react";

export const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, scrollRevealOptions);
  return (
    <motion.div
      initial="hidden"
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      variants={fadeInUpAnimation}
    >
      <motion.div
        variants={fadeInUpAnimation}
        className="h-[2px] mb-[-3px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-10 ml-20"
      >
        <div className="h-[12px] bg-neutral-900/20 w-10"></div>
        <div className="h-[12px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-10 blur-lg"></div>
      </motion.div>

      <div className="w-full flex pt-10 border-t-0 border-x border-b border-neutral-600/30">
        {/* Header Section */}
        <div className="mb-16 w-[600px] ml-20">
          <motion.h1
            variants={fadeInUpAnimation}
            className="text-neutral-200 text-md font-semibold mb-8"
          >
            Dynamoo Free Cloneable
          </motion.h1>

          <motion.div
            variants={fadeInUpAnimation}
            className="flex flex-wrap gap-8 text-gray-400"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>India - Madhya Pradesh</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(415) 000-000</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="text-sm">imranshah10140@gmail.com</span>
            </div>
          </motion.div>

          <motion.div variants={fadeInUpAnimation} className="">
            <div className="flex gap-14 mt-24 w-[600px]">
              {/* Features Column */}
              <div>
                <h3 className="text-white text-lg font-medium mb-6">
                  Features
                </h3>
                <nav className="space-y-4">
                  <a
                    href="#"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Product
                  </a>
                  <a
                    href="#"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Solutions
                  </a>
                  <a
                    href="#"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Foundation
                  </a>
                  <div className="flex items-center gap-2">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Changelog
                    </a>
                    <span className="bg-white text-black text-xs px-2 py-1 rounded-full font-medium">
                      New
                    </span>
                  </div>
                </nav>
              </div>

              {/* Solutions Column */}
              <div>
                <h3 className="text-white text-lg font-medium mb-6">
                  Solutions
                </h3>
                <nav className="space-y-4">
                  <a
                    href="#"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    AI Copywrite
                  </a>
                  <div className="flex items-center gap-2">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Automated Blogs
                    </a>
                    <span className="bg-white text-black text-xs px-2 py-1 rounded-full font-medium">
                      New
                    </span>
                  </div>
                  <a
                    href="#"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Generative UI
                  </a>
                  <a
                    href="#"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Integrations
                  </a>
                </nav>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Form Section */}
        <div className="flex w-full justify-end mr-20 gap-16 mb-16">
          <div className="lg:col-span-2 lg:pl-16 mr-20">
            <div className="max-w-md">
              <motion.div variants={fadeInUpAnimation} className="mb-6">
                <span className="text-gray-400 text-sm font-medium bg-stone-600/20 border-[0.75px] border-zinc-500/30 shadow-inner shadow-stone-800 rounded-full py-1 px-3">
                  Dynamoo Template
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUpAnimation}
                className="text-4xl font-semibold mb-4 leading-tight bg-gradient-to-t from-zinc-500 to-zinc-300 bg-clip-text text-transparent"
              >
                Start your 7-day
                <br />
                free trial
              </motion.h2>

              <motion.p
                variants={fadeInUpAnimation}
                className="text-gray-400 mb-8 leading-relaxed"
              >
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                Etiam vehicula.
              </motion.p>

              <div className="space-y-4">
                <motion.div variants={fadeInUpAnimation} className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="john@flowbase.co"
                    className="rounded-full py-2 w-72 pl-12 bg-stone-600/20 border-[0.75px] border-zinc-500/30 shadow-inner shadow-stone-800 outline-none"
                  />
                </motion.div>

                <motion.button
                  variants={fadeInUpAnimation}
                  className="rounded-full py-2 w-72 text-center bg-stone-600/20 border-[0.75px] border-zinc-500/30 shadow-inner shadow-zinc-400"
                >
                  Get Started
                </motion.button>

                <motion.div
                  variants={fadeInUpAnimation}
                  className="flex items-center justify-between text-sm text-gray-400 pt-2"
                >
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-neutral-500" />
                    <span>Free 7-day trial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-neutral-500" />
                    <span>Cancel anytime</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
