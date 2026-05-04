import React from 'react'
import { Link } from 'react-router-dom'
import { MapPinCheck, PhoneCall, MailCheck, Bird,ArrowUpRight } from 'lucide-react'

const Footer = () => {
  return (
    <footer id='contactus' className='w-full bg-[#1A1A1A] text-gray-400 py-16 px-8 md:px-24'>
      
      <div className='max-w-7xl mx-auto'>
        {/* Top Section: Branding & CTA */}
        <div className='flex flex-col md:flex-row justify-between items-start gap-12 border-b border-gray-800 pb-12'>
          
          <div className='max-w-md'>
            <h2 className='text-3xl font-semibold text-white mb-4'>
              <span className='text-[#F8D166]'>Ant</span>Worth
            </h2>
            <p className='text-lg leading-relaxed'>
              Building the next generation of intelligent mobility and transport infrastructure for a safer, digital nation.
            </p>
          </div>

          <div className='flex flex-col gap-4'>
            <p className='text-white font-medium'>Ready to transform your department?</p>
            <Link 
              to="/contact" 
              className='flex items-center gap-2 bg-[#F8D166] text-black px-6 py-3 rounded-xl font-bold hover:bg-[#ffdf85] transition-all w-fit'
            >
              Get in touch <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 py-12'>
          
          {/* Column 1: Navigation */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-white font-bold uppercase tracking-wider text-sm'>Platform</h4>
            <Link to="/" className='hover:text-[#F8D166] transition-colors'>Home</Link>
            <Link to="/services" className='hover:text-[#F8D166] transition-colors'>Services</Link>
            <Link to="/products" className='hover:text-[#F8D166] transition-colors'>Products</Link>
          </div>

          {/* Column 2: Contact Info */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-white font-bold uppercase tracking-wider text-sm'>Contact</h4>
            <a href="mailto:contact@antworth.in" className='flex items-center gap-2 hover:text-white transition-colors'>
              <MailCheck size={18} className='text-[#F8D166]' /> contact@antworth.in
            </a>
            <a href="tel:+919999999999" className='flex items-center gap-2 hover:text-white transition-colors'>
              <PhoneCall size={18} className='text-[#F8D166]' /> +91 99999 99999
            </a>
            <div className='flex items-start gap-2'>
              <MapPinCheck size={18} className='text-[#F8D166] shrink-0' />
              <span>Headquarters: New Delhi, India</span>
            </div>
          </div>

          {/* Column 3: Social/Legal */}
          {/* <div className='flex flex-col gap-4'>
            <h4 className='text-white font-bold uppercase tracking-wider text-sm'>Follow Us</h4>
            <div className='flex gap-4'>
             
              <a href="#" className='p-3 bg-gray-800 rounded-full hover:bg-[#F8D166] hover:text-black transition-all'>
                <Bird size={20} />
              </a>
            </div>
          </div> */}

        </div>

        {/* Bottom Section */}
        <div className='pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium'>
          <p>© {new Date().getFullYear()} AntWorth Technologies Private Limited. All rights reserved.</p>
          <div className='flex gap-6'>
            <Link to="/privacy" className='hover:text-white'>Privacy Policy</Link>
            <Link to="/terms" className='hover:text-white'>Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer