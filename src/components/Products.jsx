import React from 'react'

import { motion } from 'framer-motion';
import tracks from "../assets/tracks.png";
import ats from "../assets/ats.png";
import cab from "../assets/cab.png";
import fleet from "../assets/fleetm.png";
import puc from "../assets/puc.png";
import ev from "../assets/ev.png";
import checkpost from "../assets/Checkpost.png";
import reflector from "../assets/reflector.png";
import adtt from "../assets/adtt.png";
import bus from "../assets/bus.png";
import ServiceCard from '../components/ServiceCard';
import { useNavigate } from 'react-router-dom';

const cardsData = [
      { title: "ATS Networking Solution", description: "Centralized vehicle fitness testing.", image: ats },
          { title: "Automated Driving Testing Track", description: "AI-powered testing tracks.", image: adtt },
      { title: "Retro Reflective Tape Authentication", description: "Prevent counterfeit reflective tapes.", image: reflector },

  { title: "PUC Networking Solutions", description: "Streamlining emissions testing processes.", image: puc },
  { title: "Vehicle Tracking (AIS-140)", description: "Real-time compliant tracking system.", image: tracks },

  { title: "Charging Management System", description: "Smart EV charging platform.", image: ev },
  { title: "Depot Management", description: "Digital depot operations.", image: bus },
  { title: "Fleet Management", description: "Optimize fleet usage.", image: fleet },
  { title: "Integrated Checkposts", description: "Efficient border infrastructure.", image: checkpost },
  { title: "Cab Aggregator", description: "Commission-free ride system.", image: cab },
];
const Products = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="bg-slate-50/50 py-24 px-6 border-b-2 border-dashed">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-bold tracking-[0.3em] text-[#F8D166] uppercase"
          >
            Our Expertise
          </motion.span>
          <h2 className="mt-4 text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            Innovative Solutions for <br /> Modern Infrastructure
          </h2>
          <div className="mt-6 mx-auto h-1 w-20 text-[#F8D166] rounded-full" />
        </div>

        {/* Grid: 3 columns with staggered animation */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cardsData.map((c, i) => (
            <motion.div key={i} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
              <ServiceCard
                title={c.title}
                image={c.image}
                description={c.description}
              />
            </motion.div>
          ))}
        </motion.div>

    
      </div>
     <span className='w-full h-1 bg-black'></span>
    </section>
  );
};

export default Products;