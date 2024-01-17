import { Fade, Zoom } from 'react-awesome-reveal'

export default function Ubicacion () {
  return (

    <section id='ubicacion' className='relative pt-28'>
      <div className='container mx-auto px-4 '>
        <div className='flex flex-wrap lg:flex-nowrap justify-center items-center text-start mb-24 lg:gap-24'>
          <Fade duration={700}>
            <div className='px-4 flex flex-col items-center md:flex-none md:items-start'>

              <h2 className='text-4xl font-semibold text-center md:text-left text-title'>
                  Dónde estamos?
              </h2>
              <ul className='leading-relaxed m-4 text-gray-600 flex flex-col items-center md:items-start'>
                <li><strong className='font-black'>Feria de San Vicente</strong></li>
                <li>San Jerónimo 2750</li>
                <li>Córdoba</li>
                <li>Argentina</li>
              </ul>
            </div>

          </Fade>

          <Zoom duration={500} className='w-full overflow-hidden rounded-lg'>

            <div className="relative text-right h-96 w-full">
              <div className="overflow-hidden bg-none h-96 w-full">
                <iframe className='max-w-96 sm:max-w-4xl' width="896" height="400"
                  title='mapa de ubicación de Tu Estilo Calzados'
                  src="https://maps.google.com/maps?q=San+Jer%C3%B3nimo+2750%2C+C%C3%B3rdoba%2C+Argentina&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                </iframe>
              </div>
            </div>

          </Zoom>
        </div>

      </div>
    </section>

  )
}
