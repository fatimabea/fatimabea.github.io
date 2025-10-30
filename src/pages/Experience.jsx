import React from 'react'

function Experience(){
    return (
        <div className='p-4 pt-10'>
        <h2 className="pb-10 text-3xl font-bold mt-20">Experience</h2>
        
        <ol className="pt-5 max-w-md mx-auto relative border-s-2 border-slate-500 dark:border-gray-500">                  
            <li className="mb-10 ms-6 text-left ">
                <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-slate-500 dark:border-gray-500 bg-slate-500 dark:bg-gray-500"></div>
                <time className="mb-1 text-sm font-normal leading-none text-slate-700 dark:text-gray-400">February 2025 - April 2025</time>
                <h3 className="text-xl font-bold bg-linear-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">UI/UX Designer Intern</h3>
                <h3 className="text-md font-light text-slate-800 dark:text-gray-400 pb-2">New Era Signs and Graphics</h3>
                    <p className="mb-4 text-base font-normal text-slate-700 dark:text-gray-200">Created wireframes, prototypes, and user flows to clearly communicate design concepts and map out the overall product architecture.</p>
                    <p className="mb-4 text-base font-normal text-slate-700 dark:text-gray-200">Designed and implemented user-friendly interfaces and improved overall user experience by applying principles of intuitive navigation using Figma </p>
                    <p className="mb-4 text-base font-normal text-slate-700 dark:text-gray-200">Wrote and styled web pages using HTML and CSS techniques to structure content, create dynamic and adaptive layouts </p>
                    <p className="mb-4 text-base font-normal text-slate-700 dark:text-gray-200">Implemented interactive features and dynamic content using JavaScript to enhance user engagement and functionality.</p>           
            </li>
        </ol>
        </div>
    )
}
export default Experience