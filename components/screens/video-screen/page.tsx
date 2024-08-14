import React from 'react'
import { Button } from '@/components/ui/moving-border'
import { Sparkles } from 'lucide-react'


const VideoScreen = () => {
  return (
    <div className='flex flex-col justify-center items-center  pt-10'>
        <button className=" bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
        <span className=" absolute inset-0 overflow-hidden rounded-full">
          <span className=" absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="w-[190px] h-[50px] relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">

        <Sparkles size={20} className='text-emerald-400 ' />
          <span className='text-center w-full h-full flex justify-center items-center text-[15px]'>{`Why TrainingMug`}</span>
          
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>

      <div className='py-5'>
      <Button
        borderRadius="1.75rem"
        duration={10000}
        className="bg-white  text-black dark:text-white  w-[1100px] h-[500px] border-[30px] border-white shadow-lg"
      >
     <iframe className='w-full h-full' src='https://www.youtube.com/embed/5-MLMzbUlPY' title='How to become full stack developer roadmap' allowFullScreen></iframe>
      </Button>
      </div>
     
    
      
      </div>
  )
}

export default VideoScreen