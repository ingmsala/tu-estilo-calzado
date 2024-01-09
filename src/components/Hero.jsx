import bannerImg from '../assets/img/banner.webp'

export default function Hero () {
  return (
    <section className='relative pt-16 pb-32 flex content-center items-center justify-center min-h-[75vh]'>
      <div className='absolute top-0 w-full h-full bg-center bg-cover'
        style={{
          backgroundImage: `url(${bannerImg})`
        }}>
        <span id='blackOverlay' className='w-full h-full absolute opacity-75 bg-black'></span>
      </div>
      
        <div className='container relative mx-auto'>
        <div className='items-center flex flex-wrap'>
          <div className='w-full px-4 ml-auto mr-auto text-center'>
            <div className=''>
              <h1 className='text-main font-bold text-4xl md:text-7xl'>
                      Tu estilo calzado
              </h1>
              <p className='mt-4 text-4xl text-gray-300 font-thin opacity-80 font-autography'>
                      El descanso a tus pies
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div
        className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]'>
        <svg
          className='absolute bottom-0 overflow-hidden'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          version='1.1'
          viewBox='0 0 2560 100'
          x='0'
          y='0'
        >
          <polygon
            className='text-gray-300 fill-current'
            points='2560 0 2560 100 0 100'
          ></polygon>
        </svg>
      </div>
    </section>

  )
}
