'use client'

import { useEffect, useRef, useState } from 'react'
import { Sunrise, Shield, Truck, Award, Leaf, Handshake } from 'lucide-react'

const WhyChoose = () => {
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

  const features = [
    {
      icon: Sunrise,
      title: 'Daily Fresh Collection',
      description: 'Eggs collected every morning at dawn and delivered the same day. Experience freshness you can taste in every bite.',
    },
    {
      icon: Shield,
      title: 'Strict Quality Control',
      description: 'Every egg is candled, graded, and packed in our clean facility. Full traceability from coop to your table.',
    },
    {
      icon: Truck,
      title: 'Reliable Delivery',
      description: 'Same-day delivery for retail orders and scheduled bulk runs for wholesale partners. Always on time, every time.',
    },
    {
      icon: Award,
      title: 'Premium Standards',
      description: 'Our hens are fed premium feed and housed in optimal conditions. The result is eggs of exceptional quality and nutrition.',
    },
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      description: 'Environmentally conscious farming methods and organic waste management for a sustainable future.',
    },
    {
      icon: Handshake,
      title: 'Trusted Partnership',
      description: 'Building long-term relationships with our customers through consistent quality and exceptional service.',
    },
  ]

  return (
    <section id="why-choose" ref={sectionRef} className="section-padding bg-black">
      <div className="container">
        {/* Section Header */}
        <div className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 mb-6">
            <span className="text-[var(--gold)] font-semibold text-sm uppercase tracking-wider">
              Excellence
            </span>
          </div>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-gradient mb-6">
            Why Choose N&N Poultry Palace
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Our commitment to quality, freshness, and customer satisfaction sets us apart 
            in the poultry industry.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`card p-8 text-center group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 mb-6 group-hover:bg-[var(--gold)]/20 transition-colors">
                  <Icon size={32} className="text-[var(--gold)]" />
                </div>

                {/* Content */}
                <h3 className="font-playfair text-xl font-bold text-[var(--gold)] mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 glass-effect rounded-3xl">
            <div className="text-center sm:text-left">
              <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                Ready to Experience the Difference?
              </h3>
              <p className="text-white/70">
                Join thousands of satisfied customers who trust N&N Poultry Palace
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
              className="btn btn-primary btn-large whitespace-nowrap"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose