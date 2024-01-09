import React, { useState } from 'react'

export default function Formulario () {
  const [formData, setFormData] = useState({
    nombreApellido: '',
    telefono: '',
    correo: '',
    mensaje: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData)
  }

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="nombreApellido" className="block mb-1">Nombre y Apellido</label>
        <input
          type="text"
          id="nombreApellido"
          name="nombreApellido"
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          value={formData.nombreApellido}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="telefono" className="block mb-1">Teléfono</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          value={formData.telefono}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="correo" className="block mb-1">Correo Electrónico</label>
        <input
          type="email"
          id="correo"
          name="correo"
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          value={formData.correo}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="mensaje" className="block mb-1">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          value={formData.mensaje}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Enviar</button>
    </form>
  )
}
