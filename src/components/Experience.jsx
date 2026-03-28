import React from 'react'
import { motion } from 'framer-motion'

export const Experience = () => {
  const jobs = [
    { 
      id: 1, 
      role: 'Freelance Graphics Designer', 
      company: 'Self-Employed', 
      period: 'Present', 
      desc: 'Creating custom branding, social media posts, promotional materials, and event posters for various clients using CorelDRAW, Photoshop, and Illustrator.' 
    },
    { 
      id: 2, 
      role: 'Front-End Component Developer Intern', 
      company: 'Uzence Design Studio', 
      period: '2023 - Present', 
      desc: 'Designing UI components and implementing them with high-quality, maintainable front-end code (React/Tailwind).' 
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-pink-400">Experience</h2>

        <div className="space-y-6">
          {jobs.map((j) => (
            <motion.div 
              key={j.id} 
              className="card p-6 bg-gray-800 rounded-xl shadow-md border-l-4 border-l-pink-500" 
              whileHover={{ x: 6, transition: { duration: 0.2 } }}
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <div>
                  <h3 className="font-bold text-xl text-white">{j.role}</h3>
                  <p className="text-pink-300 font-medium text-sm mt-1">{j.company}</p>
                </div>
                <div className="text-sm text-gray-400 mt-2 md:mt-0 px-3 py-1 bg-gray-700/50 rounded inline-block self-start">
                  {j.period}
                </div>
              </div>
              <p className="text-gray-300 mt-3 text-sm leading-relaxed">{j.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
