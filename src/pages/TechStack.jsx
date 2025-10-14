import React from 'react'
import CARD_ITEMS from '../data/cardData'
import Card from '../components/Card';

function TechStack(){
    const recentItems = CARD_ITEMS.filter(item => item.id >= 4 && item.id <= 6);
    
    return (
        <div className='bg-slate-900'>
        <h2 className="text-3xl font-bold ">Tech Stack</h2>

        <div className='flex flex-wrap justify-center gap-6 p-4'>
            {recentItems.map(item => (<Card
                key={item.id}
                title={item.title}
                image={item.image}
                variant="small"
                />
            ))}
        </div>
        </div>
    )
}
export default TechStack