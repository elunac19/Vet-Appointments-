import Paciente from "./Paciente"

const ListadoPacientes = () => {
  return (
    <div className='mt-12 md:w-1/2 lg:w-3/5 h-screen'>
      <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
      <p className='text-lg mt-3 text-center mb-10'>Administra tus {''}
        <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
      </p>
      <div className='max-h-[80.2vh] md:overflow-y-auto'>
        <Paciente/>
        <Paciente/>
        <Paciente/>
      </div>
    </div>
  )
}

export default ListadoPacientes