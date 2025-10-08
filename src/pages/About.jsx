import React from 'react'

function About(){
    return (

        <section id='about' class="bg-white dark:bg-gray-900">
          <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-lg">I am a passionate UI/UX designer and frontend developer with a knack for creating beautiful and functional web experiences. With a strong foundation in design principles and coding skills, I bring ideas to life through innovative solutions.</p>
          </div>
        </section>
     

      
        
    )
}
export default About