import React from 'react'

function Contact(){
        const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "14469ed3-05a8-4899-b9f2-d151ed0400aa");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json
        }).then((res) => res.json());

        if (res.success) {
        console.log("Success", res);
        }
    };
    return (
        <section id='contact' className="bg-slate-900 p-10">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="text-3xl font-bold">Contact</h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got ideas in mind? Let's work together!</p>
              
              <div className='grid md:grid-cols-2 gap-2'>
                <div className='bg-slate-800 rounded-lg w-fit'>
                    <h3>hh</h3>
                    <p>vv</p>
                    </div>
                <div className='bg-slate-800 rounded-lg w-fit inline-block p-6'>
                    <form 
                        className="space-y-4 w-full md:w-xl mx-auto"
                        onSubmit={onSubmit}>
                        {/*name*/}
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm text-justify font-medium text-gray-900 dark:text-gray-300">Name</label>
                            <input 
                            type="text" 
                            id="name" 
                            name='name'
                            className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            required/>
                        </div>
                        {/*email*/}
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm text-justify font-medium text-gray-900 dark:text-gray-300">Email</label>
                            <input 
                            type="email" 
                            name='email'
                            id="email" 
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-4 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"  
                            required/>
                        </div>
                        {/*message*/}
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm text-justify font-medium text-gray-900 dark:text-gray-300">Message</label>
                            <textarea 
                            id="message" 
                            name='message'
                            rows="6" 
                            className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            </textarea>
                        </div>
                        {/*button*/}
                        <button 
                            type="submit" 
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 w-full hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-slate-800 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
                            Send Message
                        </button>
                    </form>
              </div>
              </div>
          </div>
        </section>
    )
}
export default Contact