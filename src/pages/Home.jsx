import React from 'react'

function Home(){
    
    return (
      
      <div className='min-h-screen flex flex-col justify-center items-center space-y-8 text-center'> 
        <h3 className='text-xl font-bold '>Hello World!</h3>
        <div className='flex flex-row gap-3'>
          <h1 className='text-2xl font-bold'>I'm</h1>
          <h1 className='text-2xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent'>Bea Fatima</h1>
       

        </div>
         <h3 className='text-xl font-bold'>UI/UX Designer and Frontend Developer</h3>
      </div>
    )
}
export default Home