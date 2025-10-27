import React from 'react'
import { useState } from 'react'
import Card from '../components/Card'
import CARD_ITEMS from '../data/cardData'

function Projects(){
    return (
        <section id='projects' className='p-10'>
        <h2 className="text-3xl font-bold mt-20 pb-5">Projects</h2>

        <div className="flex flex-wrap justify-center gap-5 p-4">
            {CARD_ITEMS.map((item) => (
                <Card
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    href={item.href}
                    />
            ))}
        </div>
        </section>
    )
}
export default Projects