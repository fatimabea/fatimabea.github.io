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
        <div>
            <Nav />
            <Home />
            <About />
            <Projects />
            <Experience />
            <TechStack />
            <Contact />
        </div>

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
