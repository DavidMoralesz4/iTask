import React from 'react'

export default function CreateTask() {

    const handleClick = () => {
        console.log('Hello');
    }

  return (
    <div className='flex scale-125 justify-center flex-col bg-black-500 text-white h-auto w-64 p-6 m-14 rounded-xl shadow-xl shadow-blue-800/60 '>
        <h1 className='flex justify-center p-2 text-2xl'>Nueva Tarea</h1>
        <form className='flex justify-center items-center flex-col ' action="">

            <div>
                <label className='text-sm' htmlFor="">Nombre</label>
                <input className='rounded-xl text-sm border border-gray-300 p-2 bg-purple-300' type="text" placeholder='nombre'/>
            </div>

            <div>
                <label className='text-sm' htmlFor="">Fecha</label>
                <input className='rounded-xl text-sm border border-gray-300 p-2 bg-slate-300' type="text" placeholder='fecha'/>
            </div>
            
            <div>
                <label className='text-sm' htmlFor="">Prioridad</label>
                <input className='rounded-xl text-sm border border-gray-300 p-2 bg-purple-300' type="text" placeholder='prioridad'/>
            </div>

        </form>
            <div className='flex justify-center pt-10'>
                <button className='bg-purble-200 shadow-sm shadow-blue-800/60 rounded-lg text-xs p-2 cursor-pointer'>Crear Tarea</button>
            </div>
    </div>
  )
}
