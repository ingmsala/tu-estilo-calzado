import { FaQuoteRight } from 'react-icons/fa'

export default function Testimonio ({ testimonio }) {
  return (
    <article className='bg-main p-10 w-full md:h-48 flex justify-center items-center '>

      <div className='flex flex-col justify-center items-center max-w-lg '>
        <FaQuoteRight className='w-8 h-8 text-white mb-4' />
        <blockquote className='text-slate-100 text-center line-clamp-4 italic mb-2 font-thin'>
          {testimonio.detalle}
        </blockquote>
        <div className='text-slate-100 text-center font-bold'>{testimonio.nombre}</div>
      </div>

    </article>
  )
}
