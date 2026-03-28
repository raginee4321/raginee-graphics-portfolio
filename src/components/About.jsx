import React from "react";
import { motion } from "framer-motion";
import {
  SiCoreldraw,
  SiAdobephotoshop,
  SiCanva,
  SiAdobeillustrator,
  SiAdobexd,
  SiFigma,
} from "react-icons/si";
import { FaPalette, FaLayerGroup, FaPen, FaImage, FaBrush, FaVectorSquare } from "react-icons/fa";

const skillItems = [
  { icon: <SiCoreldraw className="text-green-400" />, label: "CorelDRAW" },
  { icon: <SiAdobephotoshop className="text-blue-400" />, label: "Adobe Photoshop" },
  { icon: <SiCanva className="text-cyan-400" />, label: "Canva" },
  { icon: <SiAdobeillustrator className="text-orange-400" />, label: "Adobe Illustrator" },
  { icon: <FaPalette className="text-pink-400" />, label: "Color Theory & Branding" },
  { icon: <FaLayerGroup className="text-purple-400" />, label: "Layout & Composition" },
  { icon: <FaPen className="text-yellow-300" />, label: "Typography" },
  { icon: <FaImage className="text-red-400" />, label: "Photo Editing & Manipulation" },
  { icon: <FaBrush className="text-lime-400" />, label: "Poster & Banner Design" },
  { icon: <FaVectorSquare className="text-indigo-400" />, label: "Vector Illustration" },
];

const toolItems = [
  { icon: <SiCoreldraw className="text-green-400" />, label: "CorelDRAW" },
  { icon: <SiAdobephotoshop className="text-blue-400" />, label: "Photoshop" },
  { icon: <SiCanva className="text-cyan-400" />, label: "Canva" },
  { icon: <SiAdobeillustrator className="text-orange-400" />, label: "Illustrator" },
  { icon: <SiFigma className="text-pink-500" />, label: "Figma" },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4 text-center"
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-300 mb-10 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          I'm a passionate <span className="text-pink-400 font-semibold">Graphics Designer</span> with
          expertise in creating eye-catching visual content — including event posters, promotional banners,
          logos, food menus, and social media creatives. I blend artistic creativity with design principles
          to deliver work that communicates, engages, and leaves a lasting impression.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Skills */}
          <div className="card p-6 bg-gray-800 rounded-2xl shadow-md col-span-1 md:col-span-2">
            <h3 className="font-bold text-xl mb-4 text-pink-400">Design Skills</h3>
            <ul className="text-gray-300 mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {skillItems.map((s) => (
                <li key={s.label} className="flex items-center gap-2 text-sm">
                  {s.icon} {s.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools + Education */}
          <div className="flex flex-col gap-6">
            <div className="card p-6 bg-gray-800 rounded-2xl shadow-md">
              <h3 className="font-bold text-xl mb-4 text-pink-400">Tools</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                {toolItems.map((t) => (
                  <li key={t.label} className="flex items-center gap-2">
                    {t.icon} {t.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6 bg-gray-800 rounded-2xl shadow-md">
              <h3 className="font-bold text-xl mb-2 text-pink-400">Education</h3>
              <p className="text-gray-300 mt-2 text-sm">
                🎓 <strong>BCS – Bachelor of Computer Science</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Design specializations */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-pink-400">
            What I Design
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { emoji: "🎨", label: "Posters & Flyers" },
              { emoji: "🏷️", label: "Logo & Branding" },
              { emoji: "📱", label: "Social Media Creatives" },
              { emoji: "🍽️", label: "Menus & Brochures" },
              { emoji: "🛍️", label: "Marketing Banners" },
              { emoji: "✈️", label: "Travel & Event Ads" },
              { emoji: "👗", label: "Fashion Graphics" },
              { emoji: "📦", label: "Product Promotions" },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -4 }}
                className="card p-4 bg-gray-800 rounded-xl text-center shadow"
              >
                <span className="text-2xl">{item.emoji}</span>
                <p className="text-gray-300 text-xs mt-2 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
