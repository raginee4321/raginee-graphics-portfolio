import React from 'react'
import { motion } from 'framer-motion'

export const Home = () => {
  const tools = ['CorelDRAW', 'Photoshop', 'Canva', 'Adobe Illustrator']

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* decorative blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center z-10 px-4">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-pink-400 text-sm font-semibold tracking-widest uppercase mb-3"
        >
          ✦ Creative Graphics Designer ✦
        </motion.p>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent leading-tight"
        >
          Hi, I'm Raginee Sharma.
        </motion.h1>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
        >
          I craft visually compelling designs — from event posters and brand identities
          to social media banners and marketing materials — that tell stories and captivate audiences.
        </motion.p>

        {/* Tool badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {tools.map((tool) => (
            <span
              key={tool}
              className="text-xs font-medium px-3 py-1 rounded-full border border-pink-500/30 text-pink-300 bg-pink-500/10"
            >
              {tool}
            </span>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center items-center space-x-4 mt-2"
        >
          <a
            href="#projects"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-7 py-3 rounded-full font-semibold transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(219,39,119,0.4)]"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-white/15 text-white px-7 py-3 rounded-full font-medium transition-all duration-200 hover:-translate-y-1 hover:bg-white/5"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}
