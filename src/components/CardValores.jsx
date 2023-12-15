export default function CardValores ({ icon, classColor, title, text }) {
  return (
    <div className='relative flex flex-col min-w-0 break-words
      from-gray-100 to-gray-50 bg-gradient-to-tr w-full mb-8 shadow-lg rounded-lg'>
      <div className='px-4 py-5 flex-auto'>

        <div className={`text-white p-3 text-center inline-flex 
        items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ` + classColor}>
          {icon}
        </div>
        <h6 className='text-xl font-semibold'>{title}</h6>
        <p className='mt-2 mb-4 text-gray-600'>
          {text}
        </p>
      </div>
    </div>
  )
}
