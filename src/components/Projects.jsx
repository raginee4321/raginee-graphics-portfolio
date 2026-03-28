import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Import all the newly added design images
import design1 from '../assets/design1.jpeg';
import design2 from '../assets/design2.jpeg';
import design3 from '../assets/design3.jpeg';
import design4 from '../assets/design4.jpeg';
import design5 from '../assets/design5.jpeg';
import design6 from '../assets/design6.jpeg';

export const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const items = [
    { 
      id: 1, 
      title: 'Fashion Show 2026 Poster', 
      description: 'Elegant event poster design for "Just Beauty" Fashion Show 2026. Minimalist aesthetic with focus on subject highlighting.', 
      tech: ['Adobe Photoshop', 'Typography'], 
      image: design1,
    },
    { 
      id: 2, 
      title: 'Top Model Magazine Cover', 
      description: 'Editorial magazine cover design featuring striking typography integration with the subject and layout annotations.', 
      tech: ['CorelDRAW', 'Typography'], 
      image: design2,
    },
    { 
      id: 3, 
      title: 'Fashion Week Promotional Flyer', 
      description: 'Dynamic layout for Fashion Week (March 11) using stark geometric frames to create depth and movement.', 
      tech: ['CorelDRAW', 'Layout Design'], 
      image: design3,
    },
    { 
      id: 4, 
      title: 'Black Friday Sale Banner', 
      description: 'High-contrast promotional banner for a Black Friday apparel sale. Features vibrant colors and clear call-to-action.', 
      tech: ['CorelDRAW', 'Marketing Design'], 
      image: design4,
    },
    { 
      id: 5, 
      title: 'Restaurant Food Menu', 
      description: 'Appetizing food menu design for "Social Restaurant" with structured layout, price listings, and mouth-watering imagery.', 
      tech: ['CorelDRAW', 'Print Design'], 
      image: design5,
    },
    { 
      id: 6, 
      title: 'Travel Agency Tour Poster', 
      description: 'Engaging travel poster promoting "Travel The World" tours. Features multi-destination layout with pricing and package details.', 
      tech: ['CorelDRAW', 'Layout Design'], 
      image: design6,
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-transparent to-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-pink-400">Design Portfolio</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map(p => (
            <motion.div key={p.id} whileHover={{ y: -6 }} className="card pb-4 bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
              <div 
                className="h-64 bg-gray-900 mb-4 flex items-center justify-center overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(p.image)}
              >
                <img src={p.image} alt={p.title} className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="px-5">
                <h3 className="font-bold text-xl text-white mb-2">{p.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2 py-1 rounded bg-gray-700 text-pink-300 border border-gray-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Screen Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-full max-h-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute -top-12 right-0 md:-right-8 text-white hover:text-pink-400 text-4xl font-bold transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  &times;
                </button>
                <img 
                  src={selectedImage} 
                  alt="Full Details" 
                  className="max-w-full max-h-[85vh] object-contain rounded shadow-2xl" 
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
