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

  return (

    <>
    <div>
        <Nav />
    </div>
    <br></br>

       {/*Introduction */}
      <div className='intro'> 
        <h3 className='text-xl font-bold'>Hello World!</h3>
        <h1 className='text-2xl font-bold'>I'm Bea Fatima</h1>
        <h3 className='text-xl font-bold'>UI/UX Designer and Frontend Developer</h3>
      </div>

      
      <About />
      <Projects />

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
        
        {/* Footer */}
      

        <footer class="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 BCD. All Rights Reserved.</span>
            </div>
        </footer>

    </>
  )
}

export default App
