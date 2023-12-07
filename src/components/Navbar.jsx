export default function Navbar () {
  return (
    // nav bar tailwind
    <nav className="bg-slate-400">
      <div className="flex flex-wrap items-center justify-between p-3 mx-auto md:p-5">
        <a href="#home" className="text-xl font-bold text-white">
          Tu Estilo Calzado
        </a>
        <div className="flex md:hidden">
          <button
            type="button"
            className="block text-white hover:text-gray-500 focus:text-gray-500 focus:outline-none"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path
                className="hidden"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
              />
              <path
                className="block"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 4h24v2H0zm0 7h24v2H0zm0 7h24v2H0z"
              />
            </svg>
          </button>
        </div>
        <div className="items-center w-full md:w-auto md:flex">
          <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
            <a
              href="#home"
              className="px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
            >
              Inicio
            </a>
            <a
              href="#about"
              className="px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
            >
              Nosotros
            </a>
            <a
              href="#products"
              className="px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
            >
              Como comprar
            </a>
            <a
              href="#contact"
              className="px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
            >
              La feria
            </a>
          </div>
        </div>
      </div>

    </nav>
  )
}
