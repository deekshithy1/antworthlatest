import React, { useEffect, useRef } from 'react'
import heroVideo from '../assets/heroVideo.mp4'
import { CheckCircle2, SettingsIcon, User } from 'lucide-react'
import ProductCard from './ProductCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const data = [
  { title: "Hours support", heading: "24", image: <SettingsIcon size={"50px"} strokeWidth={1} /> },
  { title: "Clients", heading: "5+", image: <User size={"50px"} strokeWidth={1} /> },
  { title: "Projects Done", heading: "6+", image: <CheckCircle2 size={"50px"} strokeWidth={1} /> },
]

const Products = () => {
  const cardsRef = useRef([])

  useEffect(() => {
    const cards = cardsRef.current

    const cardWidth = window.innerWidth < 640 ? 220 : 280
    const gap = window.innerWidth < 640 ? 20 : 40
    const moveDistance = cardWidth + gap

    // initial stack (enhanced depth)
    gsap.set(cards, {
      x: 0,
      y: (i) => i * 10,
      scale: (i) => 0.92 + i * 0.02,
      opacity: 1,
      zIndex: (i) => 10 - i,
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: cards[1],
        start: "top 75%",
        end: "top 35%",
        scrub: 1.2,
      }
    })
      .to(cards[0], {
        x: -moveDistance,
        scale: 1,
        rotate: -2, // subtle realism
        ease: "power1.out"
      }, 0)
      .to(cards[2], {
        x: moveDistance,
        scale: 1,
        rotate: 2,
        ease: "power1.out"
      }, 0)
      .to(cards[1], {
        x: 0,
        scale: 1.05, // center emphasis
        ease: "power1.out"
      }, 0)

  }, [])

  return (
    <section className="min-h-screen h-[150vh] w-full py-10 flex flex-col items-center gap-6 relative overflow-hidden">

      {/* Top Text */}
      <div className='absolute top-[10%] left-[8%] z-10 max-w-xs sm:max-w-md'>
        <p className='text-base sm:text-xl text-white font-semibold leading-snug'>
          We assure our services <br /> are tested and certified by all authorities
        </p>
      </div>

      {/* Heading */}
      <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-center z-10">
        <span className='text-[#F8D166]'>Our</span> Services
      </h3>

      {/* Video */}
      <div className="inset-0 rounded-2xl overflow-hidden shadow-lg absolute mx-3 sm:mx-5">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover scale-105">
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Enhanced overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent'></div>
      </div>

      {/* STACKED CARDS */}
      <div className='h-2/3 absolute top-1/2 left-1/2 -translate-x-1/2 w-[90%] sm:w-3/4 z-20'>
        {data.map((card, i) => (
          <div
            key={i}
            ref={el => (cardsRef.current[i] = el)}
            className='absolute w-full flex justify-center will-change-transform'
          >
            <ProductCard
              title={card.title}
              heading={card.heading}
              img={card.image}
            />
          </div>
        ))}
      </div>

    </section>
  )
}

export default Products