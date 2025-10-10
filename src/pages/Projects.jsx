import React from 'react'
import { useState } from 'react'
import viteLogo from '/vite.svg'
import Card from '../components/Card'
import CARD_ITEMS from '../data/cardData'


function Projects(){
    const projectsList = CARD_ITEMS.filter(item => item.id >= 1 && item.id <= 3);

    return (
        <section id='projects' className="bg-slate-900 p-30">
        <h2 className="text-3xl font-bold">Projects</h2>

        <div className="flex flex-wrap justify-center gap-6 p-4">
            {projectsList.map((item) => (
                <Card
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    />
            ))}
        </div>
        </section>
        
    )
}
export default Projects