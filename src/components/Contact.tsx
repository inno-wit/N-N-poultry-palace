'use client'

import { useEffect, useRef, useState } from 'react'
import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from 'lucide-react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
    quantity: '',
    message: ''
  })
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create WhatsApp message
    let whatsappMessage = `Hi N&N Poultry Palace!\n\n`
    whatsappMessage += `Name: ${formData.name}\n`
    whatsappMessage += `Phone: ${formData.phone}\n`
    if (formData.email) whatsappMessage += `Email: ${formData.email}\n`
    if (formData.product) whatsappMessage += `Product: ${formData.product}\n`
    if (formData.quantity) whatsappMessage += `Quantity: ${formData.quantity}\n`
    if (formData.message) whatsappMessage += `Message: ${formData.message}\n`
    whatsappMessage += `\nPlease get back to me. Thank you!`
    
    const phoneNumber = '254700000000'
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      product: '',
      quantity: '',
      message: ''
    })
  }

  const openWhatsApp = () => {
    const phoneNumber = '254700000000'
    const message = encodeURIComponent('Hi N&N Poultry Palace! I would like to inquire about your products.')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '+254 700 000 000',
      description: 'Mon-Sat, 6:00 AM - 6:00 PM',
      action: () => window.open('tel:+254700000000')
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: 'Quick Response',
      description: 'Fastest way to reach us',
      action: openWhatsApp
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'orders@nnpoultrypalace.co.ke',
      description: 'For detailed inquiries',
      action: () => window.open('mailto:orders@nnpoultrypalace.co.ke')
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Machakos, Kenya',
      description: 'Farm visits by appointment',
      action: () => {}
    }
  ]

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-zinc-900">
      <div className="container">
        {/* Section Header */}
        <div className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 mb-6">
            <span className="text-[var(--gold)] font-semibold text-sm uppercase tracking-wider">
              Get In Touch
            </span>
          </div>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-gradient mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Contact us today for fresh eggs, wholesale inquiries, or any questions 
            about our premium poultry products.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            {/* Contact Methods */}
            <div className="space-y-6 mb-12">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <div
                    key={method.title}
                    onClick={method.action}
                    className="flex items-start gap-4 p-6 glass-effect rounded-2xl cursor-pointer group hover:border-[var(--gold)]/30 transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center group-hover:bg-[var(--gold)]/20 transition-colors">
                      <Icon size={24} className="text-[var(--gold)]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[var(--gold)] mb-1">{method.title}</h4>
                      <p className="text-white/90 mb-1">{method.value}</p>
                      <p className="text-sm text-white/60">{method.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Business Hours */}
            <div className="p-6 glass-effect rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={24} className="text-[var(--gold)]" />
                <h4 className="font-semibold text-[var(--gold)]">Business Hours</h4>
              </div>
              <div className="space-y-2 text-white/80">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span>6:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="p-8 glass-effect rounded-3xl">
              <h3 className="font-playfair text-2xl font-bold text-white mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[var(--gold)] mb-2 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Phone & Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[var(--gold)] mb-2 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[var(--gold)] mb-2 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Product & Quantity */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="product" className="block text-sm font-semibold text-[var(--gold)] mb-2 uppercase tracking-wider">
                      Product Interest *
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    >
                      <option value="">Select a product</option>
                      <option value="Table Eggs">Table Eggs</option>
                      <option value="Ex-Layer Hens">Ex-Layer Hens</option>
                      <option value="Poultry Manure">Poultry Manure</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-semibold text-[var(--gold)] mb-2 uppercase tracking-wider">
                      Quantity
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      min="1"
                      className="form-input"
                      placeholder="Enter quantity"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[var(--gold)] mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="form-input resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="btn btn-primary flex-1 group"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                  <button
                    type="button"
                    onClick={openWhatsApp}
                    className="btn btn-whatsapp flex-1"
                  >
                    💬 WhatsApp Us
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact