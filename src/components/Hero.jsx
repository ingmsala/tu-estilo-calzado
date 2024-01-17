import Carousel from './CarouselHero'
import hero1 from '../assets/img/hero1.png'
import hero1Mobile from '../assets/img/hero1_m.webp'
import hero2Mobile from '../assets/img/hero2_m.webp'
import hero3Mobile from '../assets/img/hero3_m.webp'
import hero2 from '../assets/img/hero2.png'
import hero3 from '../assets/img/hero3.png'

const slides = [
  hero1, hero2, hero3
]
const slidesMobile = [
  hero1Mobile, hero2Mobile, hero3Mobile
]

export default function Hero () {
  return (
    <section className='flex content-center items-center justify-center mt-16'>
      <div className="w-full h-full hidden sm:block">
        <Carousel autoSlide={true} >
          {[...slides.map((s) => {
            return (

              <img src={s} className='min-w-full' aria-hidden='true' alt='Banner de la marca' key={s} />

            )
          }
          )]}
        </Carousel>
      </div>
      <div className="w-full h-full sm:hidden">
        <Carousel autoSlide={true} >
          {[...slidesMobile.map((s) => {
            return (

              <img src={s} className='min-w-full' aria-hidden='true' alt='Banner de la marca' key={s} />

            )
          }
          )]}
        </Carousel>
      </div>

    </section>

  )
}
