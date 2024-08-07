import React from 'react'
import { Button } from '../ui/moving-border'

const SecondScreen = () => {
  return (
    <div className='flex flex-col justify-center items-center  py-32'>
         <button className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
        Simple
      </button>
      <div className='py-32'>
      <Button
        borderRadius="1.75rem"
        duration={10000}
        className="bg-white  text-black dark:text-white  w-[1200px] h-[600px] border-[40px] border-black shadow-lg"
      >
     <iframe className='w-full h-full' src='https://www.youtube.com/embed/5-MLMzbUlPY' title='How to become full stack developer roadmap' allowFullScreen></iframe>
      </Button>
      </div>
      
      
      </div>
  )
}

export default SecondScreen