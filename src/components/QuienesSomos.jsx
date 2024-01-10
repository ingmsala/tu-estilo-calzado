import { Slide } from 'react-awesome-reveal'

export default function QuienesSomos () {
  return (

    <section className='py-28 bg-white' id='acercade'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap flex-col md:flex-row items-start  gap-7 md:gap-0' >

          <Slide className='w-full md:w-1/12 px-4 mr-auto ml-auto' direction='right' duration='300'>
            <>
              <div className='flex flex-col items-center md:flex-none md:items-start'>

                <h3 className='text-4xl mb-2 font-black we text-title font-comfortaaB'>
                    Quiénes somos
                </h3>

              </div>
            </>
          </Slide>
          <Slide className='w-full md:w-3/6 px-4 mr-auto ml-auto' duration='300'>
            <div className='flex flex-col items-center md:flex-none md:items-start'>

              <p className='text-2xl leading-relaxed font-medium'>
                <strong className='font-black'>Tu Estilo Calzados</strong> es
                  una forma de andar por el mundo. Nuestro objetivo es tu comodidad,
                  queremos que puedas caminar tranquilo con tu calzado ideal para el lugar que elijas.
                  Nos importa conocerte para elegir juntos la mejor opción para tus pies.
              </p>
              <p className='mt-4 text-2xl leading-relaxed font-medium'>
                  Estamos acá <span className='text-main'>para acompañarte adonde quieras ir.</span>
              </p>

            </div>
          </Slide>

        </div>
      </div>
    </section>
  )
}
