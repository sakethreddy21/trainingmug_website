import React from 'react'
import { Button } from '../ui/moving-border'
import { ArrowRight } from 'lucide-react'

const SecondScreen = () => {
  return (
    <div className='flex flex-col justify-center items-center  py-32'>
         <button className="flex flex-row justify-between items-center px-4 py-2 rounded-md border border-neutral-300 bg-[#39c3ef] text-black font-medium text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
        See Courses
        <ArrowRight className='ml-2' size={15} />
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