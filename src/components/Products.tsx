'use client'

import { useEffect, useRef, useState } from 'react'
import { Star, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const Products = () => {
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

  const products = [
    {
      id: 1,
      title: 'Table Eggs',
      description: 'Fresh, daily-collected eggs available in 6, 12, and 30-egg cartons. Perfect for home cooks and commercial kitchens.',
      image: 'https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: [
        'Daily collection at dawn',
        'Candled and graded for quality',
        'Available in multiple pack sizes',
        'Bulk pricing for businesses'
      ],
      featured: true,
      badge: 'Most Popular'
    },
    {
      id: 2,
      title: 'Ex-Layer Hens',
      description: 'Healthy hens at the end of their laying cycle, perfect for meat or rehoming. Veterinary inspected and well-fed.',
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: [
        'Veterinary inspected',
        'Well-fed and healthy',
        'Bulk lots available'
      ],
      featured: false
    },
    {
      id: 3,
      title: 'Poultry Manure',
      description: 'Organic fertilizer rich in nitrogen and phosphorus. Perfect for gardens and commercial agriculture.',
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: [
        'Rich in nutrients',
        'Organic and natural',
        '25kg & 50kg bags available'
      ],
      featured: false
    }
  ]

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  return (
    <section id="products" ref={sectionRef} className="section-padding bg-zinc-900">
      <div className="container">
        {/* Section Header */}
        <div className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 mb-6">
            <span className="text-[var(--gold)] font-semibold text-sm uppercase tracking-wider">
              Our Products
            </span>
          </div>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-gradient mb-6">
            Premium Poultry Products
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            From farm-fresh eggs to organic fertilizer, we provide quality products 
            that meet the diverse needs of our customers.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`card overflow-hidden group transition-all duration-700 ${
                product.featured ? 'lg:col-span-2 lg:row-span-1' : ''
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[var(--gold)] text-black font-semibold rounded-full text-sm">
                    {product.badge}
                  </div>
                )}

                {/* Rating */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-[var(--gold)] fill-current" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-[var(--gold)] mb-4">
                  {product.title}
                </h3>
                
                <p className="text-white/80 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex gap-4">
                  {product.featured ? (
                    <button
                      onClick={scrollToContact}
                      className="btn btn-primary flex-1 group"
                    >
                      Order Now
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <button
                      onClick={scrollToContact}
                      className="btn btn-outline flex-1 group"
                    >
                      Inquire
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 glass-effect rounded-3xl max-w-4xl mx-auto">
            <div className="text-center sm:text-left flex-1">
              <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                Need Custom Quantities or Bulk Orders?
              </h3>
              <p className="text-white/70">
                We offer competitive wholesale pricing and flexible delivery schedules for businesses
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="btn btn-primary"
              >
                Get Quote
              </button>
              <button
                onClick={() => {
                  const phoneNumber = '254700000000'
                  const message = encodeURIComponent('Hi N&N Poultry Palace! I would like to inquire about bulk orders and wholesale pricing.')
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
                  window.open(whatsappUrl, '_blank')
                }}
                className="btn btn-whatsapp"
              >
                💬 WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products