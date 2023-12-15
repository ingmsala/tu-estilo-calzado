export default function Polygon ({ id, color, className }) {
  const classNameDefault = `bottom-auto top-0 left-0 right-0 w-full 
  absolute pointer-events-none overflow-hidden -mt-20 `

  const classComp = className ? `${classNameDefault} ${className}` : classNameDefault
  const idComp = id || null

  return (
    <div
      id={idComp}
      className={classComp}
      style={{ height: '81px' }}
    >
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
          className={'fill-current ' + color}
          points='2560 0 2560 100 0 100'
        ></polygon>
      </svg>
    </div>
  )
}
