import React from 'react'

function Nav(){
    return (
        <section id='home' className='home'>
        <nav className="w-auto flex space-x-4 p-4 rounded-lg text-xl font-bold bg-slate-900 text-white">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            {/*<button className="mt-2 px-2 py-2 items-center bg-blue-500 text-white rounded hover:bg-blue-600">Download CV</button>*/}
        </nav>
        </section>
    )
}
export default Nav