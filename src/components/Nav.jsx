import React, { useEffect, useState } from 'react'
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

function Nav(){
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        if(isOpen){
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [isOpen])

    return (
        <section id='home'>
        <nav className="fixed top-0 w-screen rounded-lg text-xl font-bold
         text-white border border-gray-200 shadow-sm dark:bg-slate-800 dark:border-gray-700 z-100">
            <div className='max-w-[1200px] p-4 flex items-center justify-between '>
                <a href='#home' className='text-2xl font-bold z-20'>Bea</a>

                {!isOpen && (
                    <div onClick={toggleMenu} className='cursor-pointer md:hidden'>
                        <Menu size={30}/>
                    </div>
                )}
                {isOpen && (
                    <div onClick={toggleMenu} className='cursor-pointer md:hidden z-20'>
                        <X size={30}/>
                    </div>
                )}
                {isOpen ? (
                    <div className='bg-slate-800 rounded-lg overflow-y-hidden fixed z-10 top-18 start-0 
                    w-screen h-80 flex justify-center items-center flex-col gap-6 duration-300 ease-in border border-gray-200 shadow-sm dark:bg-slate-800 dark:border-gray-700'>
                        <a onClick={() => setIsOpen(false)} href="#home">Home</a>
                        <a onClick={() => setIsOpen(false)} href="#about">About</a>
                        <a onClick={() => setIsOpen(false)} href="#skills">Skills</a>
                        <a onClick={() => setIsOpen(false)} href="#projects">Projects</a>
                        <a onClick={() => setIsOpen(false)} href="#contact">Contact</a>
                    </div> 
                    ) : (
                    <div className='bg-slate-800 overflow-y-hidden fixed z-10 top-18 end-[-150%]
                    w-screen min-h-screen flex justify-center items-center flex-col gap-6 duration-300 ease-in border border-gray-200 shadow-sm dark:bg-slate-800 dark:border-gray-700'>
                    </div>)}
                
                <div className='items-center gap-4 hidden md:flex'>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
            
        </nav>
        </section>
    )
}
export default Nav