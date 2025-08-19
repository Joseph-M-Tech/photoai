'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import StyleShowcase from '@/components/StyleShowcase';
import Pricing from '@/components/Pricing';
import FinalCTO from '@/components/FinalCTO';

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
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

export default function Home() {
  // Refs for scroll animations
  const howItWorksRef = useRef(null);
  const howItWorksInView = useInView(howItWorksRef, { once: true, margin: "-100px" });

  const pricingRef = useRef(null);
  const pricingInView = useInView(pricingRef, { once: true, margin: "-100px" });

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* How It Works Section */}
      <section id="how-it-works" ref={howItWorksRef} className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={howItWorksInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
              Create Your <span className="text-gradient">AI Portrait</span> in 3 Steps
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              It&apos;s incredibly simple. No technical skills needed. Just your photos and your imagination.
            </motion.p>
          </motion.div>
          <HowItWorks inView={howItWorksInView} />
        </div>
      </section>

      {/* Style Showcase Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Look Instantly</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore hundreds of styles, from professional headshots to fantasy art.
            </p>
          </motion.div>
          <StyleShowcase />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" ref={pricingRef} className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={pricingInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent <span className="text-gradient">Pricing</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your creative needs. No hidden fees.
            </motion.p>
          </motion.div>
          <Pricing inView={pricingInView} />
        </div>
      </section>

      {/* Final CTA Section */}
      <FinalCTO />
    </div>
  );
}