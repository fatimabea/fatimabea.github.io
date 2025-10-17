import React from 'react'
import viteLogo from '/vite.svg'

function About(){
    return (
        <section id='about' >
          <div className='p-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
           <h2 className="text-3xl font-bold">About Me</h2>
           <div className='grid md:grid-cols-2 gap-2'>
            <div>
              <img src='src/assets/figma.svg'/>
            </div>
            <div>
              <p className="text-lg text-left pb-2">I'm Bea Fatima Dingson, a UI/UX Designer and aspiring Full Stack Developer who thrives on collaboration and continuous learning. I love diving into new technologies and sharing knowledge to build incredible user experiences across all devices. </p>
              <p className="text-lg text-left">Outside of design, my curiosity leads me to explore data analytics, game development, mobile development, and advanced web technologies. My ultimate goal is to turn ideas into something creative, functional, and beneficial for society.</p>
              <div className='flex flex-nowrap p-4'>
                <a 
                href="src/assets/dingson-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="no-hover rounded-lg border-gray-200 p-3 text-sm bg-gradient-to-r from-teal-500 to-cyan-500 cursor-pointer transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
                  View CV (PDF)
                </a>
              </div>
            </div>
            
           </div>
          </div>
        
        </section>

      
        
    )
}
export default About