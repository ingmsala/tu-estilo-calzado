import { Slide } from 'react-awesome-reveal'
import { PHONE_NUMBER, URL_WHATSAPP } from '../constants/const'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'

export default function Contacto () {
  return (
    <section id='contactanos' className='pt-8 pb-28 bg-white flex justify-center items-center max-w-3xl mx-auto'>

      <div className='flex flex-row flex-wrap items-center justify-center pt-20 gap-7 md:gap-10 w-full'>

        <Slide className='px-4 mr-auto ml-auto' duration='300'>
          <h3 className='text-4xl mb-2 font-black
              w-full  text-title font-comfortaaB text-center md:text-left'>
              Contactanos
          </h3>

        </Slide>

        <Slide className='px-4 mr-auto ml-auto' direction='right' duration='300'>
          <>
            <div className='flex flex-col items-center md:flex-none md:items-start'>

              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700'>
                <strong className='font-bold'>Escribenos por whatsapp al:</strong>
              </p>
              <p className='text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700'>

                <a className='flex items-center justify-center gap-3 hover:text-gray-400'
                  href={URL_WHATSAPP}
                  target='_blank' rel='noreferrer'
                >
                  <FaWhatsapp className='w-6 h-6' />
                  <span className='font'>{PHONE_NUMBER}</span>
                </a>
              </p>
              <p className='text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700'>
                < strong className='font-bold'>O a nuestro mail:</strong>
              </p>

              <a className='flex items-center justify-center gap-3 hover:text-gray-400'
                href="mailto:tuestilocalzados@gmail.com"
                target='_blank' rel='noreferrer'
              >
                <FaEnvelope className='w-6 h-6' />
                <div className='font'>tuestilocalzados@gmail.com</div>
              </a>

            </div>
          </>
        </Slide>

      </div>

    </section>

  )
}
