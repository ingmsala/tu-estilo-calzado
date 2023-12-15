import React from 'react'
import { PHONE_NUMBER, URL_INSTAGRAM, URL_WHATSAPP } from '../constants/const'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import Polygon from './Polygon'

export default function Footer () {
  return (
    <footer className='relative bg-gray-300 pt-8 pb-6'>
      <Polygon color='text-gray-300' />
      <div className='container mx-auto px-4 max-w-6xl'>
        <div className='flex flex-wrap'>
          <div className='w-full px-4 flex flex-col md:flex-row gap-9 md:gap-0 text-center md:text-left justify-center'>
            <div>
              <h4 className='text-3xl font-semibold'>
              TEC
              </h4>
              <ul className='leading-relaxed m-4 text-gray-600 flex flex-col items-center md:items-start'>
                <li>Feria de San Vicente</li>
                <li>San Jerónimo 2750</li>
                <li>Córdoba</li>
                <li>Argentina</li>
              </ul>

            </div>
            <div className='flex flex-col self-start flex-1 gap-6'>

              <div className=' justify-end items-center text-gray-600 flex flex-col gap-2'>
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
              <div className='grow justify-end items-center text-gray-600 flex flex-col gap-2'>
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
                <span className='block uppercase text-gray-600 text-sm font-semibold mb-2'>
                  SITIO
                </span>
                <ul className='list-unstyled'>
                  <li>
                    <a className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm'
                      href='#acercade'>Quienes somos
                    </a>
                  </li>
                  <li>
                    <a className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm'
                      href='#productos'>Productos
                    </a>
                  </li>
                  <li>
                    <a className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm'
                      href='#feria'>La feria
                    </a>
                  </li>
                  <li>
                    <a className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm'
                      href='#ubicacion'>Ubicación
                    </a>
                  </li>
                  <li>
                    <a className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm'
                      href='#testimonios'>Nuestros clientes
                    </a>
                  </li>

                </ul>
              </div>

            </div>
          </div>

        </div>
        <hr className='my-6 border-gray-400' />
        <div className='flex flex-wrap items-center md:justify-between justify-center'>
          <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
            <div className='text-sm text-gray-600 font-semibold py-1'>
              Copyright © {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
