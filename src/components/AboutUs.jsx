import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative min-h-screen bg-[#fafafa] py-24 px-6 lg:px-40 overflow-hidden flex items-center justify-center">
      {/* Decorative Background "Wave" - Matching your previous images */}
      <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path 
            d="M0,500 C200,400 400,600 600,500 C800,400 1000,600 1000,500" 
            fill="none" 
            stroke="#F8D166" 
            strokeWidth="0.5" 
          />
        </svg>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        <motion.h3 
          variants={itemVariants}
          className="text-5xl font-semibold text-[#1a1a1a] text-center mb-12 tracking-tight"
        >
          About <span className="text-[#F8D166]">Us</span>
        </motion.h3>

        {/* Interactive Glassmorphism Card */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          className="bg-white/60 backdrop-blur-md border border-white shadow-xl rounded-3xl p-10 md:p-16"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="text-[#F8D166] font-bold uppercase tracking-widest text-sm">Our Vision</h4>
              <p className="text-gray-700 leading-relaxed">
                Antworth Technologies was established to create an integrated and transparent platform for software requirements related to **Road Transport and Safety in India**.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-[#F8D166] font-bold uppercase tracking-widest text-sm">Our Mission</h4>
              <p className="text-gray-700 leading-relaxed">
                To enable end-users to view, access, and validate vehicle information, creating a consolidated medium for all vehicle-related needs across the nation.
              </p>
            </div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="mt-12 pt-12 border-t border-gray-100 text-center"
          >
            <p className="text-xl text-gray-600 leading-relaxed italic">
              "Serving the Transport Departments of various states with cutting-edge IT and software solutions."
            </p>
            
            {/* Interactive CTA button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-[#F8D166] text-white font-semibold rounded-full shadow-lg shadow-yellow-200/50 transition-all hover:bg-[#eec24d]"
            >
              Learn More About Our Impact
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;