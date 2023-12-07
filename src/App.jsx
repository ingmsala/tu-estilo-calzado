import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ComoComprar from './components/ComoComprar'
import QuienesSomos from './components/QuienesSomos'
import Ubicacion from './components/Ubicacion'
import Feria from './components/Feria'
import Testimonios from './components/Testimonios'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App () {
  return (
    <>
      <Navbar />
      <Hero />
      <QuienesSomos />
      <ComoComprar />
      <Ubicacion />
      <Feria />
      <Testimonios />
      <Contacto />
      <Footer />
    </>
  )
}

export default App
