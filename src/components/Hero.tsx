'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Fresh eggs in basket"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)]/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
              <span className="text-[var(--gold)] font-medium text-sm uppercase tracking-wider">
                Farm Fresh Daily
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6">
              <span className="block text-white">Premium</span>
              <span className="block text-gradient">Fresh Eggs</span>
              <span className="block text-white">Farm to Table</span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8 leading-relaxed">
              Experience the finest quality eggs, collected daily from our Machakos farm. 
              Delivering premium nutrition and unmatched freshness to homes and businesses across Kenya.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn btn-primary btn-large"
              >
                Order Fresh Eggs
              </button>
              <button
                onClick={() => scrollToSection('#about')}
                className="btn btn-outline btn-large"
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--gold)] font-playfair">10+</div>
                <div className="text-sm text-white/70 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--gold)] font-playfair">1000+</div>
                <div className="text-sm text-white/70 uppercase tracking-wider">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--gold)] font-playfair">100%</div>
                <div className="text-sm text-white/70 uppercase tracking-wider">Farm Fresh</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 text-white/60">
        <div className="w-px h-16 bg-gradient-to-b from-[var(--gold)] to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white animate-pulse" style={{
            animation: 'scroll-line 2s ease-in-out infinite'
          }} />
        </div>
        <button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-2 hover:text-[var(--gold)] transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider font-medium">Scroll to explore</span>
          <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  )
}

export default Hero