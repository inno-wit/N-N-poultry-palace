'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-zinc-900">
      <div className="container">
        {/* Section Header */}
        <div className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 mb-6">
            <span className="text-[var(--gold)] font-semibold text-sm uppercase tracking-wider">
              Our Story
            </span>
          </div>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-gradient mb-6">
            About N&N Poultry Palace
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            A family-run heritage in Machakos, committed to delivering the highest quality 
            poultry products with care, integrity, and excellence at every step.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 glass-effect rounded-2xl">
                <div className="text-4xl font-bold text-[var(--gold)] font-playfair mb-2">10+</div>
                <div className="text-sm text-white/70 uppercase tracking-wider font-medium">
                  Years Experience
                </div>
              </div>
              <div className="text-center p-6 glass-effect rounded-2xl">
                <div className="text-4xl font-bold text-[var(--gold)] font-playfair mb-2">1000+</div>
                <div className="text-sm text-white/70 uppercase tracking-wider font-medium">
                  Happy Customers
                </div>
              </div>
              <div className="text-center p-6 glass-effect rounded-2xl">
                <div className="text-4xl font-bold text-[var(--gold)] font-playfair mb-2">100%</div>
                <div className="text-sm text-white/70 uppercase tracking-wider font-medium">
                  Farm Fresh
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-white/80 leading-relaxed">
                N&N Poultry Palace represents three generations of poultry expertise. Our hens are raised 
                with care in clean, well-ventilated environments, fed nutritious feed, and housed in 
                facilities that prioritize their health and wellbeing.
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed">
                Every egg is collected at dawn, candled for quality, and packed in hygienic cartons 
                before leaving our farm. This commitment to excellence has made us the trusted choice 
                for families and businesses across Machakos and beyond.
              </p>

              {/* Key Points */}
              <div className="space-y-4 pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[var(--gold)] mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Premium Care Standards</h4>
                    <p className="text-white/70">Clean environments, nutritious feed, and optimal housing conditions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[var(--gold)] mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Quality Assurance</h4>
                    <p className="text-white/70">Every egg is candled, graded, and packed with care</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[var(--gold)] mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Trusted Partnership</h4>
                    <p className="text-white/70">Building long-term relationships through consistent excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Farm worker caring for hens"
                width={800}
                height={600}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 px-4 py-2 bg-[var(--gold)] text-black font-semibold rounded-full text-sm">
                Premium Quality
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About