import { SandalIcon } from '../assets/icons/icons'
import { IoCheckmarkOutline } from 'react-icons/io5'
import CardValores from './CardValores'
import { FaHeart } from 'react-icons/fa'
import { Slide, Zoom } from 'react-awesome-reveal'

export default function QuienesSomos () {
  return (

    <section className='pb-20 bg-gray-300 md:-mt-24' >
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap'>
          <div className='lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center'>
            <Zoom duration={200}>
              <CardValores
                icon={<SandalIcon classNameIcon='w-8 h-8' />}
                classColor='bg-violet-800/70'
                title='Variedad Excepcional'
                text='Explora nuestra colección única, seleccionada con amor y consciencia
                      para brindarte un calzado cómodo que refleje tu personalidad'
              />

            </Zoom>
          </div>
          <div className='w-full md:w-4/12 px-4 text-center'>
            <Zoom duration={250}>
              <CardValores
                icon={<IoCheckmarkOutline className='w-8 h-8' />}
                classColor='bg-green-700'
                title='Calidad Inigualable'
                text='Experimenta la gran durabilidad y comodidad de nuestros productos,
                      ofreciendo un toque mágico a cada paso que das.'
              />
            </Zoom>
          </div>
          <div className='pt-6 w-full md:w-4/12 px-4 text-center'>
            <Zoom duration={300}>
              <CardValores
                icon={<FaHeart className='w-8 h-8' />}
                classColor='bg-red-400'
                title='Calzado con amor'
                text='Compra con confianza, donde la atención personalizada
                      y la cordialidad se entrelazan, brindándote una experiencia de compra cálida y especial.'
              />
            </Zoom>
          </div>
        </div>

        <div className='flex flex-wrap flex-col-reverse md:flex-row items-center pt-28 gap-7 md:gap-0' id='acercade'>

          <Slide className='w-full md:w-5/12 px-4 mr-auto ml-auto' duration='300'>
            <div className='flex flex-col items-center md:flex-none md:items-start'>

              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700'>
                <strong className='font-bold'>Tu Estilo calzado</strong> es
                  una forma de andar por el mundo. Nuestro objetivo es tu comodidad,
                  queremos que puedas caminar tranquilo con tu calzado ideal para el lugar que elijas.
              </p>
              <p className='text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700'>
                  Nos importa conocerte para elegir juntos la mejor opción para tus pies.
              </p>
              <p className='text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700'>
                  Estamos acá <span className='text-main'>para acompañarte adonde quieras ir.</span>
              </p>

            </div>
          </Slide>

          <Slide className='w-full md:w-4/12 px-4 mr-auto ml-auto' direction='right' duration='300'>
            <>
              <div className='flex flex-col items-center md:flex-none md:items-start'>

                <h3 className='text-3xl mb-2 font-bold leading-normal text-main'>
                    Quienes somos
                </h3>

              </div>
            </>
          </Slide>

        </div>
      </div>
    </section>
  )
}
