import React from 'react'
import { PHONE_NUMBER, URL_INSTAGRAM, URL_WHATSAPP } from '../constants/const'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import Polygon from './Polygon'
import logo from '../assets/img/logo-white.png'

export default function Footer () {
  return (
    <footer className='relative bg-black pt-8 pb-6'>
      <Polygon color='text-black' />
      <div className='container mx-auto px-4 max-w-6xl '>
        <div className='flex flex-wrap'>
          <div className='w-full px-4 flex flex-col md:flex-row gap-9 md:gap-0 text-center md:text-left justify-center'>
            <div className='flex items-center md:items-start flex-col'>
              <img src={logo} alt='TEC' className='w-22' />
              <ul className='leading-relaxed m-4 text-white flex flex-col items-center md:items-start'>
                <li><strong>Feria de San Vicente</strong></li>
                <li>San Jerónimo 2750</li>
                <li>Córdoba - Argentina</li>
              </ul>

            </div>
            <div className='flex flex-col md:self-start flex-1 gap-6'>

              <div className=' justify-end items-center  text-white flex flex-col gap-2'>
                <h4 className='text-base font-semibold'>
                Contacto
                </h4>
                <ul>
                  <li>
                    <a
                      className='flex items-center justify-center gap-3 hover:text-gray-700'
                      href={URL_WHATSAPP}
                      target='_blank' rel='noreferrer'
                    >
                      <FaWhatsapp className='w-6 h-6' />
                      <div className='font-bold'>{PHONE_NUMBER}</div>
                    </a>
                  </li>
                </ul>

              </div>
              <div className='grow justify-end items-center  text-white flex flex-col gap-2'>
                <h4 className='text-base font-semibold'>
                Seguinos en las redes
                </h4>
                <ul>
                  <li>
                    <a
                      className='flex items-center justify-center gap-3 hover:text-gray-700'
                      href={URL_INSTAGRAM}
                      target='_blank' rel='noreferrer'
                    >
                      <FaInstagram className='w-6 h-6' />
                      <div className='font-bold'>Instagram</div>
                    </a>
                  </li>
                </ul>

              </div>
            </div>
            <div className='flex items-center justify-center flex-wrap items-top mb-6'>
              <div className='px-4'>
                
                <ul className='list-unstyled'>
                  <li>
                    <a className=' text-white hover:text-gray-600 font-semibold block pb-2 text-sm'
                      href='#acercade'>Quienes somos
                    </a>
                  </li>
                  <li>
                    <a className=' text-white hover:text-gray-600 font-semibold block pb-2 text-sm'
                      href='#productos'>Productos
                    </a>
                  </li>
                  <li>
                    <a className=' text-white hover:text-gray-600 font-semibold block pb-2 text-sm'
                      href='#feria'>La feria
                    </a>
                  </li>
                  <li>
                    <a className=' text-white hover:text-gray-600 font-semibold block pb-2 text-sm'
                      href='#ubicacion'>Ubicación
                    </a>
                  </li>
                  <li>
                    <a className=' text-white hover:text-gray-600 font-semibold block pb-2 text-sm'
                      href='#testimonios'>Nuestros clientes
                    </a>
                  </li>

                </ul>
              </div>

            </div>
          </div>

        </div>
        <hr className='my-6 border-gray-400 ' />
        <div className='flex flex-wrap items-center md:justify-between justify-center'>
          <div className='w-full px-4 mx-auto text-center '>
            <div className='text-xs text-white font-semibold py-1 '>
              © {new Date().getFullYear()} Tu estilo calzado. Todos los derechos reservados
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
