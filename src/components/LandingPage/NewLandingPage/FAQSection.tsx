import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUpAnimation, scrollRevealOptions } from "./animations";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  isExpanded?: boolean;
}

export const FAQSection = () => {
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    {
      id: 1,
      question: "What is an AI Writing Tool used for?",
      answer:
        "AI Writing Tools are designed to assist with various writing tasks including content creation, editing, grammar checking, and generating ideas. They help streamline the writing process and improve productivity.",
      isExpanded: false,
    },
    {
      id: 2,
      question: "Is the generated content customizable?",
      answer:
        "Yes, the generated content is fully customizable. You can edit, modify, and adjust the output to match your specific requirements and brand voice.",
      isExpanded: false,
    },
    {
      id: 3,
      question: "How does it work?",
      answer:
        "The AI writing tool uses advanced natural language processing to understand your input and generate relevant content based on your requirements and context.",
      isExpanded: false,
    },
    {
      id: 4,
      question: "Can I integrate the tool?",
      answer:
        "Yes, our tool offers various integration options including API access, plugins, and direct integrations with popular platforms and workflows.",
      isExpanded: false,
    },
    {
      id: 5,
      question: "Can I use it for multiple languages?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae nulla lacinia, vulputate mauris eget, accumsan justo.",
      isExpanded: true,
    },
    {
      id: 6,
      question: "How secure is my content?",
      answer:
        "We take security seriously with end-to-end encryption, secure data storage, and strict privacy policies to protect your content and personal information.",
      isExpanded: false,
    },
  ]);

  const toggleFAQ = (id: number): void => {
    setFaqItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        isExpanded: item.id === id ? !item.isExpanded : false,
      }))
    );
  };

  const ref = useRef(null);
  const isInView = useInView(ref, scrollRevealOptions);

  return (
    <motion.div
      initial="hidden"
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      variants={fadeInUpAnimation}
      className=" pb-20 border-x border-b border-neutral-600/30 pt-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.div variants={fadeInUpAnimation} className="mb-16">
          <h1 className="text-5xl bg-gradient-to-t from-zinc-500 to-zinc-300 bg-clip-text text-transparent mb-5 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae
            nulla lacinia, vulputate mauris eget, accumsan justo.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <motion.div
          variants={fadeInUpAnimation}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {faqItems.map((item) => (
            <div
              key={item.id}
              className={`border-[0.75px] border-neutral-600/30 bg-gradient-to-b from-neutral-800/30 to-transparent rounded-xl overflow-hidden transition-all duration-300 hover:border-zinc-800 ${
                item.isExpanded ? "border-zinc-700" : ""
              }`}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full flex justify-between items-center p-6 text-left transition-colors duration-300"
              >
                <span className="text-white font-medium text-base pr-4">
                  {item.question}
                </span>
                <span
                  className={`text-gray-400 text-xl font-light transition-all duration-700 ease-in-out flex-shrink-0 ${
                    item.isExpanded ? "rotate-45 text-white" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out bg-zinc-950 ${
                  item.isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className={`px-6 transition-all duration-700 ${
                    item.isExpanded ? "py-6" : "py-0"
                  }`}
                >
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
