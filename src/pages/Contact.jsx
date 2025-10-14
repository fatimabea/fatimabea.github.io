import React from 'react'

function Contact(){
    return (
        <section id='contact' class="bg-slate-900 p-10">
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="text-3xl font-bold">Contact</h2>
              <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got ideas in mind? Let's work together!</p>
              <form action="#" class="space-y-4 w-full md:w-xl mx-auto">
                  <div>
                      <label for="name" class="block mb-2 text-sm text-justify font-medium text-gray-900 dark:text-gray-300">Name</label>
                      <input type="text" id="name" class="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your name" required/>
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm text-justify font-medium text-gray-900 dark:text-gray-300">Email</label>
                      <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-4 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="youremail@gmail.com" required/>
                  </div>
                  <div>
                      <label for="subject" class="block mb-2 text-sm text-justify font-medium text-gray-900 dark:text-gray-300">Subject</label>
                      <input type="text" id="subject" class="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how we can help you" required/>
                  </div>
                  <div class="sm:col-span-2">
                      <label for="message" class="block mb-2 text-sm text-justify font-medium text-gray-900 dark:text-gray-300">Message</label>
                      <textarea id="message" rows="6" class="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                  </div>
                  <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 w-full hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-slate-800 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    <img src="src/assets/send-btn.png" className="w-4 h-4 inline ml-2 mr-2" alt="Figma Logo" /> 
                    Send Message
                  </button>
              </form>
          </div>
        </section>

      
        
    )
}
export default Contact