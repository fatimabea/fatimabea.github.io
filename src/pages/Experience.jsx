import React from 'react'

function Experience(){
    return (
        <div className='p-4'>
        <h2 className="pb-5 text-3xl font-bold mt-20">Experience</h2>
        
        <ol className="pt-5 max-w-md mx-auto relative border-s-3 border-gray-700 dark:border-gray-600">                  
            <li className="mb-10 ms-6 text-left ">
                <div className="absolute w-4.5 h-4.5 rounded-full mt-1.5 -start-2.5 border border-slate-700 dark:border-gray-600 bg-slate-700 dark:bg-gray-600"></div>
                <time className="mb-1 text-sm font-normal leading-none text-slate-700 dark:text-gray-400">February 2025 - April 2025</time>
                <h3 className="text-xl font-bold bg-linear-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">UI/UX Designer Intern</h3>
                <h3 className="text-md font-light text-slate-800 dark:text-white pb-2">New Era Signs and Graphics</h3>
                    <p className="mb-4 text-base font-normal text-slate-700 dark:text-gray-400">Created wireframes, prototypes, and user flows to clearly communicate design concepts and map out the overall product architecture.</p>
                    <p className="mb-4 text-base font-normal text-slate-700 dark:text-gray-400">Designed and implemented user-friendly interfaces and improved overall user experience by applying principles of intuitive navigation using Figma </p>
                    <p className="mb-4 text-base font-normal text-slate-700 dark:text-gray-400">Wrote and styled web pages using HTML and CSS techniques to structure content, create dynamic and adaptive layouts </p>
                    <p className="mb-4 text-base font-normal text-slate-700 dark:text-gray-400">Implemented interactive features and dynamic content using JavaScript to enhance user engagement and functionality.</p>           
            </li>
        </ol>
        </div>
    )
}
export default Experience