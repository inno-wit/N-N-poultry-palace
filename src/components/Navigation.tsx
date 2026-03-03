'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#why-choose', label: 'Why Choose Us' },
    { href: '#products', label: 'Products' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl shadow-2xl' 
        : 'bg-black/10 backdrop-blur-sm'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12">
              <Image
                src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                alt="N&N Poultry Palace"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-playfair text-xl font-bold text-[var(--gold)]">
                N&N Poultry Palace
              </span>
              <span className="text-xs font-medium text-[var(--gold)]/80 uppercase tracking-wider">
                Premium Quality
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="text-white/90 hover:text-[var(--gold)] font-medium transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection('#contact')}
              className="hidden sm:block btn btn-primary"
            >
              Order Now
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[var(--gold)] transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'max-h-screen opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-black/98 backdrop-blur-xl border-t border-[var(--gold)]/20">
          <div className="container py-6">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left text-lg text-white/90 hover:text-[var(--gold)] font-medium transition-colors duration-300 py-2"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-4">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="btn btn-primary w-full"
                >
                  Order Now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation