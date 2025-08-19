'use client';

import { motion } from 'framer-motion';
import { Upload, Wand2, Download } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: "1. Upload Your Photos",
    description: "Add 10-20 photos of yourself from different angles and lighting. The more variety, the better your AI model."
  },
  {
    icon: Wand2,
    title: "2. Train Your AI Model",
    description: "Our technology analyzes your features. This takes about 30-60 minutes. We'll notify you when it's ready."
  },
  {
    icon: Download,
    title: "3. Generate & Download",
    description: "Choose a style, enter a prompt, and generate hundreds of unique photos. Download your favorites in high resolution."
  }
];

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Animation variants for each item
const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100
    }
  }
};

export default function HowItWorks({ inView }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {steps.map((step, index) => {
        const IconComponent = step.icon;
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-blue-100 rounded-2xl mb-6">
                <IconComponent className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}