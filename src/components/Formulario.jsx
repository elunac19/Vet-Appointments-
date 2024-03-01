const Formulario = () => {
  return (
    <div className='mt-12 md:w-1/2 lg:w-2/5 md:mr-10'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-3 text-center mb-10'>Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-8 px-4">
        <div className='mb-5'>
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold pl-2">Nombre de Propietario</label>
          <input 
            id='propietario'
            type="text" 
            placeholder="Erick"
            className='border-2 w-full p-2 mt-2 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold pl-2">Nombre de Mascota</label>
          <input 
            id='mascota'
            type="text" 
            placeholder=" Jack"
            className='border-2 w-full p-2 mt-2 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold pl-2">Nombre de Email</label>
          <input 
            id='email'
            type="email" 
            placeholder="example@example.com"
            className='border-2 w-full p-2 mt-2 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold pl-2">Fecha</label>
          <input 
            id='alta'
            type="date" 
            placeholder="example@example.com"
            className='border-2 w-full p-2 mt-2 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="sintomas " className="block text-gray-700 uppercase font-bold pl-2">Sintomas</label>
          <textarea
            id='sintomas'
            className='border-2 w-full p-2 mt-2 rounded-md'
            placeholder="Describe los Síntomas"
          />
        </div>
        <input 
          type="submit" 
          className='bg-indigo-600 w-full rounded-md text-white py-4 px-2 uppercase font-bold hover:bg-indigo-800'
          value='Agregar Paciente'
          />
      </form>
    </div>
  )
}

export default Formulario