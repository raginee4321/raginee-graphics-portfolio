import React from 'react'
import { IoMdClose } from 'react-icons/io'

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.95)] z-50 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
      menuOpen ? 'h-screen opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'
    }`}>
      <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white text-2xl p-2 rounded hover:bg-white/5">
        <IoMdClose />
      </button>

      <div className="flex flex-col items-center space-y-6 text-white text-2xl font-mono">
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </div>
  )
}
