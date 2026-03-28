import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center text-indigo-400">
          Get in Touch
        </h2>
        <p className="text-gray-300 mb-8 text-center">
          Feel free to reach out for collaborations, freelance work, or just a friendly chat!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Card */}
          <motion.div
            whileHover={{ y: -4 }}
            className="card p-6 rounded-xl bg-white/5 flex flex-col items-center text-center shadow-md"
          >
            <FaEnvelope className="text-indigo-400 text-3xl mb-2" />
            <h3 className="font-bold mb-1 text-lg">Email</h3>
            <a
              href="mailto:sraginee412@gmail.com"
              className="text-indigo-300 underline text-sm hover:text-indigo-400 transition-colors"
            >
              sraginee412@gmail.com
            </a>
          </motion.div>

          {/* Social Links Card */}
          <motion.div
            whileHover={{ y: -4 }}
            className="card p-6 rounded-xl bg-white/5 text-center shadow-md"
          >
            <h3 className="font-bold mb-3 text-lg">Social</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center justify-center gap-2">
                <FaLinkedin className="text-blue-500 text-xl" />
                <a
                  href="https://www.linkedin.com/in/raginee-sharma-08a256282/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-300 underline hover:text-indigo-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center justify-center gap-2">
                <FaGithub className="text-gray-300 text-xl" />
                <a
                  href="https://github.com/raginee4321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-300 underline hover:text-indigo-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
