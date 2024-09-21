import Description from '@/components/description/page'
import { Navbar } from '@/components/navbar/page'
import { Testimonials } from '@/components/testimonials/page'
import { Spotlight } from '@/components/ui/Spotlight'
import { ArrowRight } from 'lucide-react'
import React from 'react'

interface HomeScreenProps {
  scrollToCourses: () => void; 
  // Add prop for the scroll function
  scrollToWebinars:()=> void;
}


const HeroScreen = ({  scrollToCourses, scrollToWebinars }: HomeScreenProps) => {
  
  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col  justify-center items-center overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
       <div className="absolute pointer-events-none inset-0 flex   dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

       
      <Navbar className=" top-0 bg-none" scrollToCourses={scrollToCourses} scrollToWebinars={scrollToWebinars}/>
   
      <p className="text-4xl  w-[900px] px-4 text-center sm:text-7xl font-bold  z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">
        Transform your Career with <span className='text-[#438cff]'>Training<span className='text-[#a7c341]'>Mug</span></span>
      </p>

<div>
  <Description/>
</div>
<div >
  <Testimonials/>
</div>
<div className='absolute bottom-5 left-0 flex justify-center items-center w-full '>
<button className="  flex flex-row justify-between items-center px-4 py-2 rounded-md border border-neutral-300 bg-[#39c3ef] text-black font-medium text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
        Explore Courses
        <ArrowRight className='ml-2' size={15} />
      </button>
</div>

    </div>
  )
}

export default HeroScreen