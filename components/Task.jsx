 import React from 'react'
 
 export default function () {
   return (
     <div className='flex scale-125 justify-center flex-col bg-black-500 text-white h-auto w-64 p-6 m-14 rounded-xl shadow-xl shadow-blue-800/60'>
        <h1 className='flex justify-center p-2 text-2xl'>Tareas Pendientes</h1>
        
        <div className='p-2'>
            <input className='rounded-xl text-sm border border-gray-300 p-2 bg-purple-300' type="text" />
            <img src="" alt="" />
        </div>

        <div className='p-2'>
            <input className='rounded-xl text-sm border border-gray-300 p-2 bg-purple-300' type="text" />
        </div>

        <div className='p-2'>
            <input className='rounded-xl text-sm border border-gray-300 p-2 bg-purple-300' type="text" />
        </div>

     </div>
   )
 }
 