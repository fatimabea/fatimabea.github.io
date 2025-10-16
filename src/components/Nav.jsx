import React from 'react'

function Nav(){
    return (
        <section id='home' className='home'>
        <nav className="w-auto flex space-x-4 p-4 rounded-lg text-xl font-bold bg-slate-900 text-white">
            <a 
                href="#home"
                className='transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110'
                >Home</a>
            <a 
                href="#about"
                className='transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110'
                >About</a>
            <a 
                href="#projects"
                className='transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110'
                >Projects</a>
            <a 
                href="#contact"
                className='transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110'
                >Contact</a>
            {/*<button className="mt-2 px-2 py-2 items-center bg-blue-500 text-white rounded hover:bg-blue-600">Download CV</button>*/}
        </nav>
        </section>
    )
}
export default Nav