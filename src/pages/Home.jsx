import React from 'react'
import { ArrowRight } from 'lucide-react';
import { githubLink } from '../assets/mdi.svg';
import { linkedinLink } from '../assets/linked.svg';

function Home(){
    return (
      <div className='h-screen flex flex-col justify-center items-center mt-6 ml-2 mr-2 p-4 space-y-2 text-center'> 
        <h3 className='text-2xl font-bold'>Hi! I'm Bea Fatima.</h3>
         <p className='leading-18 text-5xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent'>UI/UX Designer</p>
          <p className='text-lg text-gray-200 flex space-x-4 max-w-2xl'>I blend a keen eye for consistent UI with a focus on robust functionality. I craft digital products that are beautiful and simply work.</p>
        <div className='flex flex-row gap-2 pt-2'>
        <div className='mt-2'>
                <a 
                href="#projects"
                className="flex flex-row gap-1 no-hover rounded-lg border-gray-200 p-3 text-md bg-gradient-to-r from-teal-500 to-cyan-500 cursor-pointer transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
                  View My Work
                <ArrowRight size={22}/>
                </a>
              </div>
        <div className='mt-2'>
                <a 
                href="#contact"
                className="flex flex-row no-hover rounded-lg  p-3 text-md border border-cyan-500  cursor-pointer transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
                  Contact Me
                </a>
              </div>   
        </div> 
        <div className='flex flex-row gap-3 p-2'>
          <div>
              <a href='https://github.com/beafatima' target="_blank" rel="noopener noreferrer">
                <img src={githubLink} alt='github' className='w-8 h-8 hover:bg-slate-600 bg-slate-700 rounded-2xl p-1 hover:scale-110 transition duration-200 ease-in-out'/>
              </a>
          </div>
          <div>
              <a href='https://www.linkedin.com/in/bea-fatima-dingson-7a644b331' target="_blank" rel="noopener noreferrer">
                <img src={linkedinLink} alt='linkedin' className='w-8 h-8 hover:bg-slate-600 bg-slate-700 rounded-2xl p-1 hover:scale-110 transition duration-200 ease-in-out'/>
              </a>
          </div>
        </div>  
      </div>
    )
}
export default Home