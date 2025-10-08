import React from 'react'

function TechStack(){
    

    return (
        
        <div>
        <h2 className="text-3xl font-bold">Tech Stack</h2>
        {/* Tabs */}
          <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li class="me-2">
              <a href="#" class="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active" aria-current="page">All</a>
          </li>
          <li class="me-2">
              <a href="#"  class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Tab 2</a>
          </li>
          <li class="me-2">
              <a href="#" class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Tab 3</a>
          </li>
          <li class="me-2">
              <a href="#" class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Tab 4</a>
          </li>
          <li>
              <a class="inline-block px-4 py-3 text-gray-400 cursor-not-allowed dark:text-gray-500">Tab 5</a>
          </li>
          </ul>

        {/* Lists*/}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  gap-6 p-5'>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/java.png" alt="java"/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/sql.png" alt="sql"/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/javascript.png" alt="javascript"/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/html-5.png" alt="html5"/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/godot-logo.png" alt="godot"/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/github.png" alt="github"/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/figma.png" alt="figma"/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/css3-logo.png" alt="css3"/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/csharp-logo.png" alt="csharp"/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/aseprite.png" alt="aseprite"/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/android-studio-logo.png" alt="androidstudio"/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/reactjs.png" alt="reactjs"/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/visual-studio-code.png" alt="visualstudiocode"/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="src/assets/tailwindcss.png" alt="tailwindcss"/>
            </div>

        </div>
        <br></br>
        </div>
    )
}
export default TechStack