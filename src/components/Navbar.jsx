import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { URL_WHATSAPP } from '../constants/const'
import logo from '../assets/img/logo-1x-h.webp'

export default function Navbar ({ transparent }) {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const closeMenu = () => setNavbarOpen(false)

  return (
    <nav
      className={
        (transparent
          ? 'bg-transparent'
          : 'bg-white shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-60') +
          ` w-full flex flex-wrap items-center justify-between px-2 py-3 
          fixed top-0 right-0 left-0 z-50 transition-colors duration-500 ease-in-out`
      }
    >
      <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <a
            className={
              (transparent ? 'text-white' : 'text-gray-800') +
              ' text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase font-autography'
            }
            onClick={closeMenu}
            href='/'
          >
            <img src={logo} alt='TEC' className={
              (transparent
                ? 'hidden md:block'
                : 'block') +
            ' w-20'}
            />
          </a>
          <button
            className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent
            rounded bg-transparent block lg:hidden outline-none focus:outline-none'
            type='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <RxHamburgerMenu className={(transparent ? 'text-white' : 'text-gray-800') + ' w-6 h-6 '} />
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow lg:flex-grow-0 items-center bg-white lg:bg-transparent lg:shadow-none ' +
            (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
          }
          id='navbar-warning'
        >
          <ul className='flex flex-col lg:flex-row list-none'>
            <li className='flex items-center'>
              <a
                className={
                  (transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                onClick={closeMenu}
                href='#acercade'
              >
                Quiénes somos
              </a>
            </li>
            <li className='flex items-center'>
              <a
                className={
                  (transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                onClick={closeMenu}
                href='#productos'
              >
                Cómo Comprar
              </a>
            </li>
            <li className='flex items-center'>
              <a
                className={
                  (transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                onClick={closeMenu}
                href='#feria'
              >
                La feria
              </a>
            </li>
            <li className='flex items-center'>
              <a
                className={
                  (transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                onClick={closeMenu}
                href='#ubicacion'
              >Dónde estamos
              </a>
            </li>
            <li className='flex items-center'>
              <a
                className={
                  (transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                onClick={closeMenu}
                href='#testimonios'
              >
                Clientes
              </a>
            </li>
            <li className='flex items-center'>
              <a
                className={
                  (transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                onClick={closeMenu}
                href='#contactanos'
              >
                Contacto
              </a>
            </li>
          </ul>
          <ul className='flex flex-col lg:flex-row list-none ml-auto'>
            <li className='flex items-center'>
              <a
                className={
                  (transparent
                    ? 'lg:bg-white text-gray-800 active:bg-gray-100'
                    : 'bg-red-500 text-white active:bg-red-600') +
                    ` text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none 
                      focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 transition-all duration-150 ease-in-out`
                }
                href={URL_WHATSAPP}
                target='_blank' rel='noreferrer'
                onClick={closeMenu}
                type='button'
              >
                Comprar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
