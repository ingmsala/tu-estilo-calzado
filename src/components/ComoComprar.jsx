import { FaWhatsapp } from 'react-icons/fa'
import { BsDownload } from 'react-icons/bs'
import { URL_WHATSAPP } from '../constants/const'
import { Slide } from 'react-awesome-reveal'
import producto1 from '../assets/img/producto1.png'

export default function ComoComprar () {
  return (
    <section id='productos' className='relative py-10 md:py-28 bg-[#E3E3E3]'>

      <div className='container mx-auto px-4'>
        <div className='items-center flex flex-wrap justify-center'>
          <h3 className='md:hidden text-4xl mb-5 font-black text-title font-comfortaaB text-center'>
                    Cómo comprar
          </h3>
          <Slide duration={300} className='w-full md:w-4/12 ml-auto mr-auto px-4'>
            <img
              alt='...'
              className='max-w-full rounded-lg shadow-lg'
              src= {producto1}
            />
          </Slide>
          <div className='w-full md:w-6/12 mx-auto mt-4 lg:mt-0 px-4'>
            <Slide duration={300} direction='right' className='md:pr-12 text-center md:text-left flex items-center'>

              <h3 className='hidden md:block text-4xl mb-2 font-black
              w-full md:max-w-2 text-title font-comfortaaB text-center md:text-left'>
                    Cómo comprar
              </h3>
              <p className='mt-4 text-2xl leading-relaxed max-w-md font-medium'>
                    Para comprar podés acercarte a la <strong className='font-bold'>Feria de San Vicente</strong>,
                    donde encontrás nuestro puesto.
                    Si no podés venir, contactanos por whatsapp y coordinamos el pago y la entrega de tu compra.
              </p>
              <ul className='mt-6 block md:flex gap-3 flex-wrap w-full '>
                <li className='mb-3 md:mb-0'>
                  <a
                    className='flex gap-3 justify-center items-center text-white
                          hover:bg-red-500 group p-4 bg-red-400 rounded-lg shadow-lg'
                    href={URL_WHATSAPP}
                    target='_blank' rel='noreferrer'>
                    <FaWhatsapp className='w-6 h-6 group-hover:scale-105' />
                                Escribinos por Whatsapp
                  </a>
                </li>
                <li>
                  <a
                    className='flex gap-3 justify-center items-center border text-pink-700
                      border-solid border-pink-700 hover:text-pink-800 hover:border-pink-800 group p-4 rounded-lg'
                    href='#drive'>
                    <BsDownload className='w-6 h-6 group-hover:scale-105' />
                                Ver nuestro catálogo
                  </a>
                </li>

              </ul>
            </Slide>
          </div>
        </div>
      </div>
    </section>
  )
}
