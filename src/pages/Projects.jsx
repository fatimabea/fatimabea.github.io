import React from 'react'
import { useState } from 'react'
import viteLogo from '/vite.svg'
import Card from '../components/Card'
import CARD_ITEMS from '../data/cardData'


function Projects(){
    
    return (
        <section id='projects' className="bg-slate-900 p-30">
        <h2 className="text-3xl font-bold">Projects</h2>

        <div className="justify-center gap-4 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {CARD_ITEMS.map((item) => (
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