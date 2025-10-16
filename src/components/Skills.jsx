import React from "react";
import SKILLS_ITEMS from "../data/skillsData";
import '../App.css';

const Skills = ({title, image}) => {
    
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <img src={image} className="shadow-sm rounded-t-lg" alt="img" />
            <h3 className="m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{title}</h3>
        </div>      
    );
};
export default Skills;