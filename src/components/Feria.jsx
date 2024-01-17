import { Slide } from 'react-awesome-reveal'
import feriaImg from '../assets/img/feria.webp'

export default function Feria () {
  return (
    <section id='feria' className='relative flex content-end items-end justify-start min-h-[75vh] overflow-hidden '>

      <div className='absolute top-20 w-full h-full bg-center bg-cover  '
        style={{
          backgroundImage: `url(${feriaImg})`
        }}>
      </div>

      <Slide direction='up' duration={300}>
        <div className='bg-gray-900/90 text-white opacity-80 mx-auto sm:mx-0 md:rounded-tr-xl max-w-lg p-4'>
          <div className='flex flex-wrap '>
            <h2 className='font-semibold text-4xl'>
                      La feria de San Vicente
            </h2>
            <p className='mt-4 text-sm font-thin '>
                En el popular barrio San Vicente, el Paseo se ubica en calle San Jerónimo,
                entre Ambrosio Funes y Sargento Cabral, funciona los domingos de 9 a 14 horas.
            </p>
            <p className='mt-4 text-sm font-thin pb-4'>
                  Este espacio
                está integrado por 86 feriantes (23 hombres y 63 mujeres), quienes ofrecen productos
                tales como artesanías, de elaboración propia, como así también artículos reventa.
            </p>

          </div>
        </div>

      </Slide>

    </section>
  )
}
