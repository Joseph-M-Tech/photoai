'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const styles = [
  { id: 1, name: 'Professional', image: '/api/placeholder/400/400', prompt: 'Business headshot in a modern office' },
  { id: 2, name: 'Fantasy', image: '/api/placeholder/400/400', prompt: 'Elven warrior in a mystical forest' },
  { id: 3, name: '90s Retro', image: '/api/placeholder/400/400', prompt: '1990s school portrait style' },
  { id: 4, name: 'Cyberpunk', image: '/api/placeholder/400/400', prompt: 'Neon-lit cyberpunk city background' },
  { id: 5, name: 'Painting', image: '/api/placeholder/400/400', prompt: 'Oil painting masterpiece style' },
  { id: 6, name: 'Abstract', image: '/api/placeholder/400/400', prompt: 'Colorful abstract geometric patterns' },
];

export default function StyleShowcase() {
  const [selectedStyle, setSelectedStyle] = useState(styles[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Style Selector */}
      <div className="grid grid-cols-2 gap-4">
        {styles.map((style) => (
          <motion.button
            key={style.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedStyle(style)}
            className={`p-4 rounded-xl text-left transition-all duration-300 ${
              selectedStyle.id === style.id
                ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 shadow-md'
                : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            <h4 className="font-semibold text-gray-900 mb-2">{style.name}</h4>
            <p className="text-sm text-gray-600">{style.prompt}</p>
          </motion.button>
        ))}
      </div>

      {/* Preview Area */}
      <motion.div
        key={selectedStyle.id}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden shadow-2xl">
          {/* This would be the generated image preview */}
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-500">AI Style Preview</span>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm text-white p-4 rounded-lg"
        >
          <p className="text-sm font-medium">{selectedStyle.name} Style</p>
          <p className="text-xs opacity-80">{selectedStyle.prompt}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}