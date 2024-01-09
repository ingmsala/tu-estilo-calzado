import testimoniosData from '../mocks/testimonios.json'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Testimonio from './Testimonio'
import { Fade } from 'react-awesome-reveal'
import Polygon from './Polygon'
import { MdOutlineEmojiPeople } from 'react-icons/md'

export default function Testimonios () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true

  }

  return (
    <section className='relative py-32 bg-main w-full'>

      <Polygon color='text-main' id='testimonios' />

      <Fade className='container mx-auto px-4  lg:pb-5'>
        <div className='flex flex-wrap text-center justify-center'>
          <div className='w-full lg:w-6/12 px-4'>
            <div className='text-gray-600 p-3 text-center inline-flex items-center justify-center
               w-16 h-16 mb-6 shadow-lg rounded-full bg-main'>
              <MdOutlineEmojiPeople className='w-8 h-8 text-white' />
            </div>
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
