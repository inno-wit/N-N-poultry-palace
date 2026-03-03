import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WhyChoose from '@/components/WhyChoose'
import Products from '@/components/Products'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <WhyChoose />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}