const Paciente = () => {
  return (
    <div className='mb-3 bg-white shadow-md py-8 px-4 rounded-lg'>
        <p  className='font-bold mb-3 text-gray-700 uppercase'> Nombre: {''}
          <span className='font-medium normal-case'>Jack</span>
        </p>
        <p  className='font-bold mb-3 text-gray-700 uppercase'> Propietario: {''}
          <span className='font-medium normal-case'>Erick</span>
        </p>
        <p  className='font-bold mb-3 text-gray-700 uppercase'> Email: {''}
          <span className='font-medium normal-case'>example@example.com</span>
        </p>
        <p  className='font-bold mb-3 text-gray-700 uppercase'> Fecha Alta: {''}
          <span className='font-medium normal-case'>29 de Febrero de 2024</span>
        </p>
        <p  className='font-bold mb-3 text-gray-700 uppercase'> Síntomas: {''}
          <span className='font-medium normal-case'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci quidem error quae similique illum officia, accusamus quisquam iure in blanditiis nobis nulla modi, incidunt ex recusandae! Expedita, vel excepturi?</span>
        </p>
    </div>
  )
}
export default Paciente