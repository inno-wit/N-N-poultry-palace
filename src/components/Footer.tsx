import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#products', label: 'Products' },
    { href: '#contact', label: 'Contact' }
  ]

  const products = [
    { href: '#products', label: 'Table Eggs' },
    { href: '#products', label: 'Ex-Layer Hens' },
    { href: '#products', label: 'Poultry Manure' },
    { href: '#contact', label: 'Wholesale' }
  ]

  const contactInfo = [
    '+254 700 000 000',
    'orders@nnpoultrypalace.co.ke',
    'Machakos, Kenya',
    'Mon-Sat: 6AM-6PM'
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
  }

  return (
    <footer className="bg-black border-t border-[var(--gold)]/10">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
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
                  <span className="text-sm font-medium text-[var(--gold)]/80 uppercase tracking-wider">
                    Premium Quality
                  </span>
                </div>
              </div>
              
              <p className="text-white/70 leading-relaxed max-w-md mb-8">
                A family-run poultry supplier in Machakos, delivering premium fresh eggs 
                and poultry products to homes and businesses across Kenya.
              </p>

              {/* Social Proof */}
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--gold)] font-playfair">10+</div>
                  <div className="text-xs text-white/60 uppercase">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--gold)] font-playfair">1000+</div>
                  <div className="text-xs text-white/60 uppercase">Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--gold)] font-playfair">100%</div>
                  <div className="text-xs text-white/60 uppercase">Fresh</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-[var(--gold)] mb-6 uppercase tracking-wider text-sm">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/70 hover:text-[var(--gold)] transition-colors duration-300 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-[var(--gold)] mb-6 uppercase tracking-wider text-sm">
                Contact
              </h4>
              <ul className="space-y-3">
                {contactInfo.map((info, index) => (
                  <li key={index} className="text-white/70 text-sm">
                    {info}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-[var(--gold)]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              &copy; {currentYear} N&N Poultry Palace Limited. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <button className="text-white/50 hover:text-[var(--gold)] transition-colors text-sm">
                Privacy Policy
              </button>
              <button className="text-white/50 hover:text-[var(--gold)] transition-colors text-sm">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer