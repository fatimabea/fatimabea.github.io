import React from "react";
import '../App.css';

const Card = ({title, description, image, href}) => {
    
    return (
        <div className="pb-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-slate-800 dark:border-gray-700">
            <img src={image} className="shadow-sm rounded-t-lg w-90 h-48 object-cover" alt="img" />
            <h3 className="m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{title}</h3>
            <p className="m-2 font-normal text-gray-700 dark:text-gray-400 text-center p-2">{description}</p>
            
            <a 
                href={href}
                target="_blank" 
                rel="noopener noreferrer"
                >View Project</a>
        </div>      
    );
};
export default Card;