import React from "react";
import CARD_ITEMS from "../data/cardData";

const Card = ({title, description, image}) => {
    
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-slate-900 dark:border-gray-700 md:flex-row space-x-6">
            <img src={image} className="w-full h-50 rounded-t-lg" alt="img" />
            <h3 className="m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{title}</h3>
            <p className="m-2 font-normal text-gray-700 dark:text-gray-400 text-center p-2">{description}</p>
        </div>      
    );
};
export default Card;