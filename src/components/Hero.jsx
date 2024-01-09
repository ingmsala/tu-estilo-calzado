import Carousel from './CarouselHero'
import hero1 from '../assets/img/hero1.png'
import hero2 from '../assets/img/hero2.png'
import hero3 from '../assets/img/hero3.png'

const slides = [
  hero1, hero2, hero3
]

export default function Hero () {
  return (
    <section className='relative flex content-center items-center justify-center mt-16'>
      <div className="w-full h-full ">
        <Carousel autoSlide={true} >
          {[...slides.map((s) =>
            <img src={s} className='min-w-full' key={s} />
          )]}
        </Carousel>
      </div>

    </section>

  )
}
