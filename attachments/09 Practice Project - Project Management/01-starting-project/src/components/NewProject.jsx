import React from 'react'
import Input from "./Input";

function NewProject() {
  return (
    <div className='w-[35rem] mt-16 '>
         <menu className='flex items-center justify-end gap-4 my-4 bg-stone-400'>
            <li><button className=' text-stone-800 hover:text-stone-950'>Cancel</button></li>
            <li><button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>Save</button></li>
         </menu>
         <div className=''>
            <Input label="Title"></Input>
            <Input label="Description" textarea></Input>
            <Input label="Due Date"></Input>
         </div>
    </div>
  )
}

export default NewProject