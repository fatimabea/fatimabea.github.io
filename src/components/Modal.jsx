import React from 'react'
import { X } from 'lucide-react';

function Modal({onClose}){
    return (
        <div className='fixed inset-0 bg-blue-950 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'> 
            <div className='mt-10 flex flex-col gap-5 text-white'>
                <button onClick={onClose} className='place-self-end'>
                    <X size={30}/>
                </button>
                <div>
                    <h1>
                        Project Name
                    </h1>
                    <p>Description of the project</p>
                </div>
            </div>
        </div>
    )
}
export default Modal