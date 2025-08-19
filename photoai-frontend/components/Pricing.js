'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "19",
    credits: 100,
    popular: false,
    features: [
      "100 AI generation credits",
      "5 styles included",
      "HD downloads (1024x1024)",
      "1 AI model training",
      "7-day support"
    ]
  },
  {
    name: "Pro",
    price: "49",
    credits: 400,
    popular: true,
    features: [
      "400 AI generation credits",
      "All styles unlocked",
      "4K Ultra HD downloads",
      "3 AI model trainings",
      "Priority generation",
      "30-day priority support"
    ]
  },
  {
    name: "Enterprise",
    price: "99",
    credits: 1000,
    popular: false,
    features: [
      "1000 AI generation credits",
      "All styles unlocked + early access",
      "4K Ultra HD downloads",
      "Unlimited AI model trainings",
      "Highest priority generation",
      "Dedicated account manager",
      "Commercial usage rights"
    ]
  }
];

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
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

export default function Pricing({ inView }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15
          }
        }
      }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {plans.map((plan, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ y: -5 }}
          className={`relative rounded-2xl p-8 transition-all duration-300 ${
            plan.popular
              ? 'border-2 border-blue-500 shadow-2xl transform scale-105 bg-white'
              : 'border border-gray-200 shadow-lg bg-white'
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
          )}
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
            <div className="flex items-baseline justify-center mb-2">
              <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
              <span className="text-gray-600 ml-2">/ one-time</span>
            </div>
            <p className="text-gray-600">{plan.credits} generation credits</p>
          </div>

          <ul className="space-y-4 mb-8">
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 rounded-xl font-semibold transition-colors duration-300 ${
              plan.popular
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}
          >
            Get Started
          </motion.button>
        </motion.div>
      ))}
    </motion.div>
  );
}