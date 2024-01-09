import { Fade, Zoom } from 'react-awesome-reveal'
import Polygon from './Polygon'
import { IoLocationSharp } from 'react-icons/io5'

export default function Ubicacion () {
  return (

    <section id='ubicacion' className='relative pt-28'>
      <Polygon color='text-white' />
      <div className='container mx-auto px-4 '>
        <div className='flex flex-wrap lg:flex-nowrap justify-center items-center text-start mb-24 lg:gap-24'>
          <Fade duration={700}>
            <div className='px-4 flex flex-col items-center md:flex-none md:items-start'>
              <div className='text-gray-600 p-3 text-center inline-flex items-center justify-center
               w-16 h-16 mb-6 shadow-lg rounded-full bg-amber-200/30'>
                <IoLocationSharp className='w-8 h-8 text-main/80' />
              </div>
              <h2 className='text-4xl font-semibold text-center md:text-left text-main'>
                  Dónde estamos?
              </h2>
              <ul className='leading-relaxed m-4 text-gray-600 flex flex-col items-center md:items-start'>
                <li>Feria de San Vicente</li>
                <li>San Jerónimo 2750</li>
                <li>Córdoba</li>
                <li>Argentina</li>
              </ul>
            </div>

          </Fade>

          <Zoom duration={500} className='w-full overflow-hidden h-72 rounded-lg'>
            <iframe
              src='https://www.google.com/maps/d/u/0/embed?mid=1tvDpHZb4jrEYjhCSYCfvzEOXf5l6lBE&ehbc=2E312F&noprof=1'
              width='1280' height='960'
              className='-mt-20'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            >
            </iframe>
          </Zoom>
        </div>

      </div>
    </section>

  )
}
