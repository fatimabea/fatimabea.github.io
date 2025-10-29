import React, { useEffect } from 'react'
import { ArrowRight } from 'lucide-react';
import githubLink from '../assets/mdi.svg';
import linkedinLink from '../assets/linked.svg';
import githubLinkDark from '../assets/mdi-dark.svg';
import linkedinLinkDark from '../assets/linkedin-dark.svg';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { useState } from 'react';

function Home(){
  const [ theme, setTheme ] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };
  const isDarkMode = theme === 'dark';

  const githubTheme = isDarkMode ? githubLink : githubLinkDark;
  const linkedinTheme = isDarkMode ? linkedinLink : linkedinLinkDark;

    return (
      <div className='h-screen flex flex-col justify-center items-center p-2 text-center'> 
        <h3 className='text-2xl font-bold text-slate-700 dark:text-gray-200'>Hi! I'm Bea Fatima.</h3>
         <p className='leading-18 text-5xl font-bold bg-linear-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent'>UI/UX Designer</p>
          <p className='text-lg text-slate-700 dark:text-gray-200 flex space-x-4 max-w-2xl p-2'>I blend a keen eye for consistent UI with a focus on robust functionality. I craft digital products that are beautiful and simply work.</p>
        <div className='flex flex-row gap-2 pt-2'>
        <div className='mt-2'>
                <a 
                href="#projects"
                className="flex flex-row gap-1 no-hover rounded-lg border-gray-200 p-3 text-md  bg-linear-to-r from-teal-500 to-cyan-500 cursor-pointer transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
                  View My Work
                <ArrowRight size={22} className='text-slate-800 dark:text-gray-200'/>
                </a>
              </div>
        <div className='mt-2'>
                <a 
                href="#contact"
                className="flex flex-row no-hover rounded-lg  p-3 text-md text-slate-800 dark:text-white border border-cyan-500  cursor-pointer transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
                  Contact Me
                </a>
              </div>   
        </div> 
        <div className='flex flex-row gap-3 pt-6'>
          <div>
              <a href='https://github.com/beafatima' target="_blank" rel="noopener noreferrer">
                <img src={githubTheme} alt='github' className='w-8 h-8 border border-gray-300 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-600 bg-gray-200 dark:bg-slate-700 rounded-2xl p-1 hover:scale-110 transition duration-200 ease-in-out'/>
              </a>
          </div>
          <div>
              <a href='https://www.linkedin.com/in/bea-fatima-dingson-7a644b331' target="_blank" rel="noopener noreferrer">
                <img src={linkedinTheme} alt='linkedin' className='w-8 h-8 border border-gray-300 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-600 bg-gray-200 dark:bg-slate-700 rounded-2xl p-1 hover:scale-110 transition duration-200 ease-in-out'/>
              </a>
          </div>
        </div>
        <div 
          onClick={toggleTheme}
          className='absolute left-0 bottom-6 ms-6 pt-10 rounded-lg'
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
            {theme === 'light' ? <Moon size={22} className='text-slate-800 w-7 h-9 border border-gray-300 dark:border-slate-600 hover:bg-gray-300 bg-gray-200 rounded-2xl p-1 hover:scale-110 transition duration-200 ease-in-out'/> : <Sun size={22} className='w-7 h-9 hover:bg-slate-600 border border-gray-300 dark:border-slate-600 bg-slate-700 rounded-2xl p-1 hover:scale-110 transition duration-200 ease-in-out'/>}
            
        </div>
      </div>
    )
}
export default Home