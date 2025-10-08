import React from 'react'

function Nav(){
    return (
        <section id='home' className='home'>
        <nav className="nav">
            <a href="#home">Home</a>
            
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Download CV</button>
        </nav>
        </section>

      
        
    )
}
export default Nav