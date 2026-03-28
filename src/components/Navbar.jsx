import React, { useState } from 'react'
import { MobileMenu } from './MobileMenu'
import { FiMenu } from 'react-icons/fi'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.75)] backdrop-blur-md border-b border-white/6">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-2xl font-bold text-white tracking-wide">
            ragi<span className="text-accent">.graphics</span>
          </a>

          {/* Mobile icon */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)} className="text-white text-2xl p-2 rounded hover:bg-white/5">
              <FiMenu />
            </button>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-10">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>

      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </nav>
  )
}
