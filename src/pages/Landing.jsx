import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import QuienesSomos from '../components/QuienesSomos'
import ComoComprar from '../components/ComoComprar'
import Ubicacion from '../components/Ubicacion'
import Feria from '../components/Feria'
import { useState } from 'react'
import Testimonios from '../components/Testimonios'
import Contacto from '../components/Contacto'

export default function Landing () {
  const [isTransparent] = useState(false)

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
        <Contacto/>
      </main>
      <Footer />
    </>
  )
}
