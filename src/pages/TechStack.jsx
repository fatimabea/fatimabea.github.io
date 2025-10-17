import React from 'react'
import SKILLS_ITEMS from '../data/skillsData'
import Skills from '../components/Skills';

function TechStack(){
     
    return (
        <div>
            <h2 className="text-3xl font-bold ">Technical Skills</h2>
    
            <div className='flex flex-wrap justify-center gap-2 p-4'>
                {SKILLS_ITEMS.map(item => (<Skills
                    key={item.id}
                    title={item.title}
                    image={item.image}
                />
                ))}
            </div>
        </div>
    )
}
export default TechStack