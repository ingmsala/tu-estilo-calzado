import Carousel from "./CarouselHero"
import hero1 from '../assets/img/hero1.png'
import hero2 from '../assets/img/hero2.png'
import hero3 from '../assets/img/hero3.png'


const slides = [
  hero1, hero2, hero3
]


export default function Hero () {
  return (
  <section className='relative pt-16 pb-32 flex content-center items-center justify-center min-h-[75vh]'>  
    <div className="absolute top-0 w-full h-full ">
      <div className="w-full h-full ">
          <Carousel autoSlide={true} >
            {[...slides.map((s) => 
              <img src={s}/>
            )]}
          </Carousel>
      </div>
    </div>
    <span id='blackOverlay' className='w-full h-full absolute opacity-25 bg-black'></span> 

  </section>
  
  )
}

  
      
      



      
      
   

