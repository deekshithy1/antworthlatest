// import React from 'react';
// import { motion } from 'framer-motion';

// const ServiceCard = ({ title, description, image }) => {
//   return (
//     <motion.div 
//       whileHover={{ y: -10 }}
//       className="group relative h-[400px] w-full overflow-hidden rounded-3xl bg-slate-900 shadow-xl"
//     >
//       {/* Background Image */}
//       <img 
//         src={image} 
//         alt={title}  
//         className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" 
//       />

//       {/* Premium Gradient Overlay (Ensures text legibility) */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent transition-opacity duration-300" />

//       {/* Content Container */}
//       <div className="absolute inset-0 flex flex-col justify-end p-8">
//         {/* Subtle Accent Line */}
//         <div className="mb-4 h-1 w-12 bg-blue-500 transition-all duration-500 group-hover:w-24" />

//         <h3 className="mb-3 text-2xl font-bold text-white tracking-tight">
//           {title}
//         </h3>
        
//         <p className="max-h-0 overflow-hidden text-sm leading-relaxed text-gray-300 transition-all duration-500 group-hover:max-h-32 group-hover:mb-4">
//           {description}
//         </p>

//         {/* Action Link */}
//         <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
//           Discover More 
//           <span className="text-lg">→</span>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ServiceCard;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceCard = ({ title, description, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* The Card */}
      <motion.div 
        whileHover={{ y: -10 }}
        className="group relative h-[400px] w-full overflow-hidden rounded-3xl bg-slate-900 shadow-xl cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={image} 
          alt={title}  
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <div className="mb-4 h-1 w-12 bg-[#F8D166] transition-all duration-500 group-hover:w-24" />
          <h3 className="mb-3 text-2xl font-bold text-white tracking-tight">{title}</h3>
          <p className="max-h-0 overflow-hidden text-sm leading-relaxed text-gray-300 transition-all duration-500 group-hover:max-h-32 group-hover:mb-4">
            {description}
          </p>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F8D166]">
            Discover More <span className="text-lg">→</span>
          </div>
        </div>
      </motion.div>

      {/* The Popup (Modal) */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white p-8 shadow-2xl md:p-12"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute right-6 top-6 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3">
                  <img src={image} alt={title} className="w-full rounded-2xl object-cover shadow-lg" />
                </div>
                <div className="w-full md:w-2/3">
                  <span className="text-[#F8D166] font-bold text-xs uppercase tracking-widest">Service Detail</span>
                  <h2 className="mt-2 text-3xl font-black text-slate-900">{title}</h2>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    {description}
                    <br /><br />
                    This solution is designed to integrate seamlessly with existing infrastructure, providing real-time data analytics, enhanced security protocols, and streamlined operational efficiency for modern transport authorities.
                  </p>
                  {/* <button className="mt-8 rounded-full bg-blue-600 px-8 py-3 font-bold text-white shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
                    Inquire Now
                  </button> */}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServiceCard;