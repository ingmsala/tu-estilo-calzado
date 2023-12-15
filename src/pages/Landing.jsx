import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import QuienesSomos from '../components/QuienesSomos'
import ComoComprar from '../components/ComoComprar'
import Ubicacion from '../components/Ubicacion'
import Feria from '../components/Feria'
import { useEffect, useState } from 'react'
import Testimonios from '../components/Testimonios'

export default function Landing () {
  const [isTransparent, setIsTransparent] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsTransparent(scrollY < 120)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Navbar transparent={isTransparent} />
      <main>
        <Hero />
        <QuienesSomos />
        <ComoComprar />
        <Feria />
        <Ubicacion />
        <Testimonios />
      </main>
      <Footer />
    </>
  )
}
