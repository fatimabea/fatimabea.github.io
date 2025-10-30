import React from "react";
import '../App.css';
import CARD_ITEMS from "../data/cardData";


const Card = ({title, description, image, href}) => {
    return (
        <div className="max-w-xs bg-gray-100 border border-gray-200 rounded-lg shadow-sm dark:bg-slate-800 dark:border-gray-700 transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
            <img src={image} className="shadow-sm rounded-t-lg w-90 h-48 object-cover " alt="img" />
            
            <div className="text-left p-2">
                <h3 className="m-2 text-2xl font-bold tracking-tight text-slate-800 dark:text-gray-100">{title}</h3>
                <p className="m-2 font-normal text-gray-700 dark:text-gray-300">{description}</p>
            </div>
            
            <div className="flex flex-nowrap p-4"> 
                <a 
                    href={href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="no-hover rounded-lg border-gray-200 p-3 text-sm bg-linear-to-r from-teal-500 to-cyan-500 cursor-pointer transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-105"
                    >View Design</a>                
            </div>
        </div>      
    );
};
export default Card;