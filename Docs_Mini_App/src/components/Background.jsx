import React from 'react'

function Background() {
  return (
   <>
   <div className='fixed z-[2] w-full h-screen '> 
   <div className='w-full flex justify-center font-semibold text-xl absolute py-10 text-zinc-600 top-[5%]'> Documents</div>
   <h1 className='absolute top-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold left-1/2 text-[13vw] leading-none tracking-tight text-zinc-900'> Docs. </h1>
   </div>
   </>
  )
}

export default Background