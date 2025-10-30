import React, { use, useEffect } from 'react'
import { ArrowRight } from 'lucide-react';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { useState } from 'react';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

function Home(){
    const [ theme, setTheme ] = useState('light');

    useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia ('(prefers-color-scheme: dark)').matches;

      let initialTheme = 'light';
      if (savedTheme) {
        initialTheme = savedTheme;
      } else if (systemPrefersDark) {
        initialTheme = 'dark';
      }
      setTheme (initialTheme);
      document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    }, []);

    useEffect(() => {
      document.documentElement.classList.toggle('dark', theme === 'dark');
      localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };
    
    return (
      <div className='h-screen flex flex-col justify-center items-center p-2 text-center'>
        {/* Intro Text */} 
        <h3 className='pb-2 text-2xl md:text-2xl lg:text-4xl xl:text-4xl font-bold text-slate-700 dark:text-gray-200'>Hi! I'm Bea Fatima.</h3>
        <p className='text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-bold bg-linear-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent'>UI/UX Designer</p>
        <p className='text-lg md:text-lg lg:text-xl xl:text-xl text-slate-700 dark:text-gray-300 flex space-x-4 max-w-3xl p-2'>I am committed to crafting clean, consistently intuitive interfaces where every element serves a purpose. My passion is translating complex needs into accessible, high-functioning designs that deliver an effortless user experience. </p>
          
          <div className='flex flex-row gap-2 pt-2'>
          <div className='mt-2'>
                  <a 
                  href="#projects"
                  className="flex flex-row gap-1 no-hover rounded-lg border-gray-200 p-3 text-md  bg-linear-to-r from-teal-500 to-cyan-500 cursor-pointer transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
                    View My Work
                  <ArrowRight size={22} className='text-gray-100 dark:text-gray-100'/>
                  </a>
                </div>
          <div className='mt-2'>
                  <a 
                  href="#contact"
                  className="flex flex-row no-hover rounded-lg p-3 text-md text-slate-800 dark:text-white border border-cyan-500  cursor-pointer transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
                    Contact Me
                  </a>
                </div>   
          </div> 
        
        <div className='flex flex-row gap-3 pt-6'>
          <div>
              <a href='https://github.com/beafatima' target="_blank" rel="noopener noreferrer">
                <IconBrandGithub size={32} className='text-slate-800 dark:text-gray-100 border border-gray-300 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-600 bg-gray-100 dark:bg-slate-700 shadow-sm rounded-2xl p-1 hover:scale-110 transition duration-200 ease-in-out'/>
              </a>
          </div>
          <div>
              <a href='https://www.linkedin.com/in/bea-fatima-dingson-7a644b331' target="_blank" rel="noopener noreferrer">
                <IconBrandLinkedin size={32} className='text-slate-800 dark:text-gray-100 border border-gray-300 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-600 bg-gray-100 dark:bg-slate-700 shadow-sm rounded-2xl p-1 hover:scale-110 transition duration-200 ease-in-out'/>
              </a>
          </div>
        </div>
        <div 
          onClick={toggleTheme}
          className='absolute left-0 bottom-4 ms-4 pt-10 rounded-lg'
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
            {theme === 'light' ? 
            <Moon size={22} className='text-slate-800 w-7 h-9 border border-gray-300 dark:border-slate-600 hover:bg-gray-300 bg-gray-100 shadow-sm rounded-2xl p-1 hover:scale-110 transition duration-200 ease-in-out'/> 
            : 
            <Sun size={22} className='w-7 h-9 hover:bg-slate-600 border border-gray-300 dark:border-slate-600 bg-slate-700 rounded-2xl p-1 hover:scale-110 transition duration-200 ease-in-out'/>}         
        </div>
      </div>
    )
}
export default Home