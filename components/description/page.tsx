import React from 'react'
import { FlipWords } from '@/components/ui/flip-words';

const Description = () => {

    const words = ["Full stack developer", "Data Scientist", "Cloud Engineer", "App Developer"];
  return (
    <div className="flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-[36px] text-neutral-600 dark:text-neutral-400">
        Become
        <FlipWords words={words} /> <br />
      
      </div>
    </div>
  )
}

export default Description