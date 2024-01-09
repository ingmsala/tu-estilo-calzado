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

          <Zoom duration={500} className='w-full overflow-hidden h-96 rounded-lg'>
            <iframe
              src='https://www.google.com/maps/d/u/0/embed?mid=1tvDpHZb4jrEYjhCSYCfvzEOXf5l6lBE&ehbc=2E312F&noprof=1'
              width='896' height='667'
              className='-mt-20'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            >
            </iframe>
          </Zoom>
        </div>

      </div>
    </section>

  )
}
