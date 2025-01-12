import React from 'react'

function ProjectsSidebar() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className='mb-8 uppercase font-bold md:text-xl text-stone-200'>Youe Prohject</h2>
        <div>
            <butto className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
              + add Project
              </butto>
        </div>
        <ul>...some project</ul>
    </aside>
  )
}

export default ProjectsSidebar