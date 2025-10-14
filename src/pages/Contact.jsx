import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact(){
    const form = useRef()
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState(null);



    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true)
        setIsSent(false)
        setError(null)

        emailjs.sendForm(
            keys.service_id,
            keys.template.id,
            form.current,
            keys.public_key
        ).then((result) => {
            console.log(result)
            setIsSent(true)
            form.current.reset()

        }).catch((error) => {
            console.log(error)
            setError('something went wrong!')
            
        })
        setIsSending(false);


    }
    return (
        <section id='contact' className="bg-slate-900 p-10">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="text-3xl font-bold">Contact</h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got ideas in mind? Let's work together!</p>
              <form 
                ref={form} 
                className="space-y-4 w-full md:w-xl mx-auto"
                onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="name" className="block mb-2 text-sm text-justify font-medium text-gray-900 dark:text-gray-300">Name</label>
                      <input 
                      type="text" 
                      id="name" 
                      name='name'
                      className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      required/>
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm text-justify font-medium text-gray-900 dark:text-gray-300">Email</label>
                      <input 
                      type="email" 
                      name='email'
                      id="email" 
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-4 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"  
                      required/>
                  </div>
                  <div>
                      <label htmlFor="subject" className="block mb-2 text-sm text-justify font-medium text-gray-900 dark:text-gray-300">Subject</label>
                      <input 
                      type="text" 
                      name='subject'
                      id="subject" 
                      className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                      required/>
                  </div>
                  <div className="sm:col-span-2">
                      <label htmlFor="message" className="block mb-2 text-sm text-justify font-medium text-gray-900 dark:text-gray-300">Message</label>
                      <textarea 
                      id="message" 
                      name='content'
                      rows="6" 
                      className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      </textarea>
                  </div>

                  {isSent && <p className='text-green-500'>Message sent!</p>}
                  {error && <p className='text-red-500'>{error}</p>}

                  <button 
                    type="submit" 
                    disabled={isSending}
                    className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 w-full hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-slate-800 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Send Message
                  </button>
              </form>
          </div>
        </section>
    )
}
export default Contact