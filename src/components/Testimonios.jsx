import testimoniosData from '../mocks/testimonios.json'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Testimonio from './Testimonio'
import { Fade } from 'react-awesome-reveal'

export default function Testimonios () {
  // if md query slidesToShow = 3 else slidesToShow = 1

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }

  return (
    <section className='relative py-32 bg-title w-full' id='testimonios'>

      <Fade className='container mx-auto px-4  lg:pb-5'>
        <div className='flex flex-wrap text-center justify-center'>
          <div className='w-full lg:w-6/12 px-4'>

            <h2 className='text-4xl font-semibold text-white'>
              Clientes Felices
            </h2>
          </div>
        </div>

        <Slider {...settings} className='mx-4'>
          {
            testimoniosData.map(testimonio => (
              <Testimonio testimonio={testimonio} key={testimonio.id} />
            ))
          }
        </Slider>
      </Fade>

    </section>

  )
}
