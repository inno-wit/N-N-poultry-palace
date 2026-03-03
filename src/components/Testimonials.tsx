'use client'

import { useEffect, useRef, useState } from 'react'
import { Star, Quote, CircleCheck as CheckCircle } from 'lucide-react'

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      id: 1,
      name: 'Wanjiru M.',
      role: 'Home Cook',
      location: 'Westlands',
      rating: 5,
      text: "I've been buying from N&N for over eight months and the eggs are consistently fresh. The yolks are bright and rich — you can really taste the difference from supermarket eggs.",
      verified: true
    },
    {
      id: 2,
      name: 'Chef Kamau J.',
      role: 'Restaurant Owner',
      location: 'Karen',
      rating: 5,
      text: "We switched our restaurant supply to N&N six months ago. Their wholesale pricing is fair, invoicing is professional, and I have never had a rejected batch.",
      verified: true
    },
    {
      id: 3,
      name: 'Amina S.',
      role: 'Business Owner',
      location: 'Ngong Road',
      rating: 5,
      text: "N&N's 30-egg trays have been a game-changer for my breakfast kiosk. WhatsApp ordering is convenient, and they remind me before I run low.",
      verified: true
    }
  ]

  return (
    <section id="testimonials" ref={sectionRef} className="section-padding bg-black">
      <div className="container">
        {/* Section Header */}
        <div className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 mb-6">
            <span className="text-[var(--gold)] font-semibold text-sm uppercase tracking-wider">
              Customer Stories
            </span>
          </div>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-gradient mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Trusted by families and businesses across Kenya for our commitment 
            to quality and exceptional service.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`card p-8 group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                <Quote size={32} className="text-[var(--gold)]/30" />
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-[var(--gold)] fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-white/90 leading-relaxed mb-8 text-lg italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-6 border-t border-[var(--gold)]/20">
                <div>
                  <div className="font-semibold text-[var(--gold)] mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-white/60">
                    {testimonial.role}, {testimonial.location}
                  </div>
                </div>
                
                {testimonial.verified && (
                  <div className="flex items-center gap-2 px-3 py-1 bg-[var(--gold)]/10 border border-[var(--gold)]/20 rounded-full">
                    <CheckCircle size={14} className="text-[var(--gold)]" />
                    <span className="text-xs text-[var(--gold)] font-medium">Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className={`mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--gold)] font-playfair mb-2">4.9/5</div>
              <div className="text-white/70 mb-2">Average Rating</div>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-[var(--gold)] fill-current" />
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--gold)] font-playfair mb-2">1000+</div>
              <div className="text-white/70 mb-2">Happy Customers</div>
              <div className="text-sm text-white/50">Across Kenya</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--gold)] font-playfair mb-2">98%</div>
              <div className="text-white/70 mb-2">Repeat Customers</div>
              <div className="text-sm text-white/50">Customer Retention</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 glass-effect rounded-3xl">
            <div className="text-center sm:text-left">
              <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                Join Our Satisfied Customers
              </h3>
              <p className="text-white/70">
                Experience the N&N difference and taste the quality for yourself
              </p>
            </div>
            <button
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
                  window.scrollTo({ top: offsetTop, behavior: 'smooth' })
                }
              }}
              className="btn btn-primary btn-large"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials