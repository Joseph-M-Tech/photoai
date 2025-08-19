'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function FinalCTO() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >
        <Sparkles className="h-12 w-12 mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Photos?
        </h2>
        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
          Join thousands of users who have already created stunning AI portraits. No technical skills required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Create Your AI Model Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl text-lg hover:bg-white/10 transition-all duration-300"
          >
            View Pricing
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}