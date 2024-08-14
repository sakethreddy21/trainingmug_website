"use client"
import Image from 'next/image'
import { LampContainer } from '@/components/ui/lamp'
import { motion } from 'framer-motion'
import React from 'react'
import { Sparkles } from 'lucide-react'

const CertificateScreen = () => {
  return (
    <div className='w-full h-screen flex flex-col  pt-[100px]  bg-slate-950'>
       <div className='w-full flex justify-center items-center'>
       <button className=" bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
        <span className=" absolute inset-0 overflow-hidden rounded-full">
          <span className=" absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="w-[150px] h-[45px] relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">

        <Sparkles size={20} className='text-emerald-400 ' />
          <span className='text-center w-full h-full flex justify-center items-center text-[15px]'>{`Certificate`}</span>
          
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
   </div>
    <div className='w-full h-screen flex flex-row pt-[50px] bg-slate-950'>
      <div className='w-full flex flex-col justify-center items-center   bg-slate-950'>
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
    <div className='w-full h-full flex justify-center items-center text-center'>
      <h1 className='text-4xl font-bold  text-cyan-500 '>Empowering the next generation of developers</h1>
     
    </div>
  </div>
  </div>
  )
}

export default CertificateScreen