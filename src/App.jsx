import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './components/Modal'
import Nav from './components/Nav'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

function App() {
  const [count, setCount] = useState(0)

  const [showModal, setShowModal] = useState(false)
  

  return (

    <>
    <div>
        <Nav />
        
    </div>

    
        
        
      {/* Navigation Bar 
      <section id='home' className='home'>
      <nav className="nav">
        <a href="#home">Home</a>
        
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Download CV</button>
      </nav>
      </section>
      */}

       {/*Introduction */}
      <div className='intro'> 
      <h3 className='text-xl font-bold'>Hello World!</h3>
      <h1 className='text-2xl font-bold'>I'm Bea Fatima</h1>
      <h3 className='text-xl font-bold'>UI/UX Designer and Frontend Developer</h3>
      </div>

    
    
    
    {/* This is a comment in JSX 
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> 
      */}

      
      
      

      {/* About Me 
      <section id='about' className='about'>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-lg">I am a passionate UI/UX designer and frontend developer with a knack for creating beautiful and functional web experiences. With a strong foundation in design principles and coding skills, I bring ideas to life through innovative solutions.</p>
      </div>
      </section>
      */}

      <br></br>
      {/* Experience*/}
      
      <div>
        <h2 className="text-3xl font-bold">Experience</h2>
        
        <ol class="relative border-s border-gray-200 dark:border-gray-700">                  
            <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2025 - April 2025</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">UI/UX Designer Intern</h3>
                <h3 class="text-lg font-semibold text-gray-700">New Era Signs and Graphics</h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                
            </li>
          
            
        </ol>

      </div>
      <br></br>

      
      
      
    {/* 
      {/* Projects
      <section id='projects' className='projects'>
      <h2 className="text-3xl font-bold">Projects</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>

        <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 md:flex-row space-x-6'>
            <h3>
                Sample
            </h3>
            <button onClick={() => setShowModal(true)}>
                Click this!
            </button>
            {showModal && <Modal onClose={() => setShowModal(false)} />}
        </div> 
        */}

          {/* Figura et Estilo
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 md:flex-row space-x-6" >
              <a href="#">
                  <img 
                    class="rounded-t-lg" 
                    src="./assets/react.svg" 
                    alt="" />
              </a>
              <div class="p-5">
                  <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Figura et Estilo</h5>
                      <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Virtual Fashion Assistant</h3>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      View project
                      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </a>
              </div>
          </div>
            */}

          {/* Escape Room 
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img 
                    class="rounded-t-lg" 
                    src="./assets/react.svg" 
                    alt="" />
              </a>
              <div class="p-5">
                  <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Get Out Alive Escape Room</h5>
                      <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Game Development</h3>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      View project
                      <svg 
                        class="rtl:rotate-180 w-3.5 h-3.5 ms-2" 
                        aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 14 10">
                          <path 
                            stroke="currentColor" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </a>
              </div>
          </div>
          */}

          {/* Promee 
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="rounded-t-lg" src="src/assets/reactjs.png" alt="promee-image" />
              </a>
              <div class="p-5">
                  <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Promee Productivity Tool</h5>
                      <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mobile Development</h3>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      View project
                      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </a>
              </div>
            </div>
            </div>
            </section>
            */}
        {/* END SECTION OF PROJECTS*/}
      


      <br></br>
      {/* Tech Stack*/}
      
      <div>
        <h2 className="text-3xl font-bold">Tech Stack</h2>
        {/* Tabs */}
          <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li class="me-2">
              <a href="#" class="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active" aria-current="page">All</a>
          </li>
          <li class="me-2">
              <a href="#"  class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Tab 2</a>
          </li>
          <li class="me-2">
              <a href="#" class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Tab 3</a>
          </li>
          <li class="me-2">
              <a href="#" class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Tab 4</a>
          </li>
          <li>
              <a class="inline-block px-4 py-3 text-gray-400 cursor-not-allowed dark:text-gray-500">Tab 5</a>
          </li>
          </ul>

        {/* Lists*/}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  gap-6 p-5'>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/java.png" alt="java"/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/sql.png" alt="sql"/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/javascript.png" alt="javascript"/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/html-5.png" alt="html5"/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/godot-logo.png" alt="godot"/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/github.png" alt="github"/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/figma.png" alt="figma"/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/css3-logo.png" alt="css3"/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/csharp-logo.png" alt="csharp"/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/aseprite.png" alt="aseprite"/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/android-studio-logo.png" alt="androidstudio"/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/reactjs.png" alt="reactjs"/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/visual-studio-code.png" alt="visualstudiocode"/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/tailwindcss.png" alt="tailwindcss"/>
            </div>

        </div>
        <br></br>
        </div>

        <br></br>
        <Contact />
      {/* Contact Me
      
      <section id='contact' class="bg-white dark:bg-gray-900">
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Me</h2>
              <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got ideas in mind? Let's work together!</p>
              <form action="#" class="space-y-8">
                  <div>
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                      <input type="text" id="name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your name" required/>
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                      <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="youremail@gmail.com" required/>
                  </div>
                  <div>
                      <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                      <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
                  </div>
                  <div class="sm:col-span-2">
                      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                      <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                  </div>
                  <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
              </form>
          </div>
        </section>

        */}

        <footer class="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 BCD. All Rights Reserved.</span>
            </div>
        </footer>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.1.1/flowbite.min.js"></script>


    
    </>
  )
}

export default App
