import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Home from './pages/Home'
import TechStack from './pages/TechStack'

function App() {
  const [count, setCount] = useState(0)

  return (
        <>
        <div className='bg-gray-100 dark:bg-slate-900 text-slate-800 dark:text-gray-200 transition-colors duration-300'>
            <Nav />
            <Home />
            <About />
            <TechStack />
            <Experience />
            <Projects />
            <Contact />

            <footer className="w-auto rounded-lg shadow-sm">
                <div className="mx-auto p-4 md:py-8">
                    <hr className="my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-700">© 2025 Bea D. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
        </>
  )
}

export default App
