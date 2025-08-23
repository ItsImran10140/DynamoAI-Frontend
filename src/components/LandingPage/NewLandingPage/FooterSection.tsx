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
        className="h-[2px] mb-[-3px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-8 md:w-10 ml-4 md:ml-8 lg:ml-20"
      >
        <div className="h-[12px] bg-neutral-900/20 w-8 md:w-10"></div>
        <div className="h-[12px] bg-gradient-to-tr from-orange-300 to bg-purple-400 w-8 md:w-10 blur-lg"></div>
      </motion.div>

      <div className="w-full flex flex-col lg:flex-row pt-6 md:pt-10 border-t-0 border-x border-b border-neutral-600/30 px-4 md:px-8">
        {/* Header Section */}
        <div className="mb-8 lg:mb-16 w-full lg:w-[600px] lg:ml-12 xl:ml-20">
          <motion.h1
            variants={fadeInUpAnimation}
            className="text-neutral-200 text-sm md:text-md font-semibold mb-6 md:mb-8"
          >
            Dynamoo Free Cloneable
          </motion.h1>

          <motion.div
            variants={fadeInUpAnimation}
            className="flex flex-col sm:flex-row sm:flex-wrap gap-4 md:gap-8 text-gray-400 text-sm"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>India - Madhya Pradesh</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>(415) 000-000</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm break-all sm:break-normal">
                imranshah10140@gmail.com
              </span>
            </div>
          </motion.div>

          <motion.div variants={fadeInUpAnimation} className="mt-12 lg:mt-24">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-14 w-full lg:w-[600px]">
              {/* Features Column */}
              <div className="flex-1">
                <h3 className="text-white text-base md:text-lg font-medium mb-4 md:mb-6">
                  Features
                </h3>
                <nav className="space-y-3 md:space-y-4">
                  <a
                    href="#"
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Product
                  </a>
                  <a
                    href="#"
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Solutions
                  </a>
                  <a
                    href="#"
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Foundation
                  </a>
                  <div className="flex items-center gap-2">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
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
              <div className="flex-1">
                <h3 className="text-white text-base md:text-lg font-medium mb-4 md:mb-6">
                  Solutions
                </h3>
                <nav className="space-y-3 md:space-y-4">
                  <a
                    href="#"
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    AI Copywrite
                  </a>
                  <div className="flex items-center gap-2">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      Automated Blogs
                    </a>
                    <span className="bg-white text-black text-xs px-2 py-1 rounded-full font-medium">
                      New
                    </span>
                  </div>
                  <a
                    href="#"
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Generative UI
                  </a>
                  <a
                    href="#"
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Integrations
                  </a>
                </nav>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Form Section */}
        <div className="flex w-full justify-center lg:justify-end lg:mr-8 xl:mr-20 mb-8 lg:mb-16">
          <div className="w-full max-w-md lg:max-w-none lg:w-auto">
            <div className="max-w-md mx-auto lg:mx-0">
              <motion.div variants={fadeInUpAnimation} className="mb-4 md:mb-6">
                <span className="text-gray-400 text-xs md:text-sm font-medium bg-stone-600/20 border-[0.75px] border-zinc-500/30 shadow-inner shadow-stone-800 rounded-full py-1 px-3">
                  Dynamoo Template
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUpAnimation}
                className="text-3xl md:text-4xl font-semibold mb-3 md:mb-4 leading-tight bg-gradient-to-t from-zinc-500 to-zinc-300 bg-clip-text text-transparent"
              >
                Start your 7-day
                <br />
                free trial
              </motion.h2>

              <motion.p
                variants={fadeInUpAnimation}
                className="text-gray-400 mb-6 md:mb-8 leading-relaxed text-sm"
              >
                Create unlimited professional math animations with full AI
                features - no commitment required.
              </motion.p>

              <div className="space-y-4">
                <motion.div variants={fadeInUpAnimation} className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="imran@gmail.com"
                    className="rounded-full py-2 w-full pl-12 bg-stone-600/20 border-[0.75px] border-zinc-500/30 shadow-inner shadow-stone-800 outline-none text-sm md:text-base"
                  />
                </motion.div>

                <motion.button
                  variants={fadeInUpAnimation}
                  className="rounded-full py-2 w-full text-center bg-stone-600/20 border-[0.75px] border-zinc-500/30 shadow-inner shadow-zinc-400 text-sm md:text-base"
                >
                  Get Started
                </motion.button>

                <motion.div
                  variants={fadeInUpAnimation}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs md:text-sm text-gray-400 pt-2 gap-2 sm:gap-0"
                >
                  <div className="flex items-center gap-2">
                    <Check className="w-3 md:w-4 h-3 md:h-4 text-neutral-500" />
                    <span>Free 7-day trial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3 md:w-4 h-3 md:h-4 text-neutral-500" />
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
