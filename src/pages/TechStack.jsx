import React from 'react'
import SKILLS_ITEMS from '../data/skillsData'
import Skills from '../components/Skills';

function TechStack(){
    return (
        <section id='skills'>
        <div className='pt-10 p-4'>
            <h2 className="text-3xl font-bold mt-20">Technical Skills</h2>
    
            <div className='flex flex-wrap justify-center gap-2 pt-10 max-w-5xl mx-auto'>
                {SKILLS_ITEMS.map(item => (<Skills
                    key={item.id}
                    title={item.title}
                    image={item.image}
                />
                ))}
            </div>
        </div>
        </section>
    )
}
export default TechStack