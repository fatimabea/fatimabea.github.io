import React from "react";
import '../App.css';

const Skills = ({title, image}) => {
    return (
        <div className="p-4 place-items-center w-25 h-28 text-xs bg-white border rounded-lg border-gray-200 shadow-sm dark:bg-slate-800 dark:border-gray-700 transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
            <img src={image} className="max-w-xs pb-2" alt="img" />
            <p className="font-light text-center text-gray-500 dark:text-gray-400 text-md">{title}</p>
        </div>      
    );
};
export default Skills;