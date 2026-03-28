import React from 'react'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { motion } from 'framer-motion'

export default function App(){
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}
