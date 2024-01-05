import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { FaWhatsapp } from 'react-icons/fa'
import { BsDownload } from 'react-icons/bs'
import { URL_WHATSAPP } from '../constants/const'
import { Slide } from 'react-awesome-reveal'
import Polygon from './Polygon'

export default function ComoComprar () {
  return (
    <section id='productos' className='relative py-20'>
      <Polygon color='text-white' />

      <div className='container mx-auto px-4'>
        <div className='items-center flex flex-wrap'>
          <Slide duration={300} className='w-full md:w-4/12 ml-auto mr-auto px-4'>
            <img
              alt='...'
              className='max-w-full rounded-lg shadow-lg'
              src='https://placehold.co/400x500.png'
            />
          </Slide>
          <div className='w-full md:w-6/12 mx-auto mt-4 lg:mt-0 px-4'>
            <Slide duration={300} direction='right' className='md:pr-12 text-center md:text-left'>
              <div className='text-pink-600 p-3 text-center inline-flex
              items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300'>
                <HiOutlineShoppingBag className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-3xl font-semibold text-main'>
                    Cómo comprar
              </h3>
              <p className='mt-4 text-lg leading-relaxed text-gray-600'>
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
