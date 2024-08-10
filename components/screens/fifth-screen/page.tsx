"use client"
import Image from 'next/image'
import { LampContainer } from '@/components/ui/lamp'
import { motion } from 'framer-motion'
import React from 'react'

const FifthScreen = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center pt-[100px] space-y-10'>
   <div className=''>
    Certifcate
   </div>
   <LampContainer className='pt-[400px] w-[800px] h-[800px] rounded-lg'>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8  bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        
       <Image
                src='/certificate.jpg'
                height="800"
                width="800"
                className="h-[500px] w-[500px] pt-[200px]   object-fill"
                alt='certificate'
              />
      </motion.div>
    </LampContainer>
  </div>
  )
}

export default FifthScreen