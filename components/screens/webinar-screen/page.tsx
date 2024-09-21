"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";
import { Cloud, Shield, Code, Database, Smartphone, Sparkles } from "lucide-react";
import { FaJava , } from "react-icons/fa6";
import { SiMongodb, SiSpringboot } from "react-icons/si";

export default function WebinarScreen() {
  return (
    <div className="flex flex-col justify-center items-center ">
         <div>
            

            <button className=" bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className=" absolute inset-0 overflow-hidden rounded-full">
              <span className=" absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="w-[150px] h-[45px] relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
    
            <Sparkles size={20} className='text-emerald-400 ' />
              <span className='text-center w-full h-full flex justify-center items-center text-[15px]'>{`Webinars`}</span>
             
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </button>
            </div>
        <div className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden pt-0">
      
      <InfiniteMovingCards
        is_webinar
        imgpath="https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b"
        items={testimonials}
        direction="right"
        speed="extraslow"
      />
    </div></div>
    
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom...",
    name: "Devops",
    title: "A Tale of Two Cities",
    icon: <FaJava size={30} />,
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind...",
    name: "Cyber Security",
    title: "Hamlet",
    icon: <SiMongodb size={30} />,
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Cloud",
    title: "A Dream Within a Dream",
    icon: <Cloud size={30}/>,
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession...",
    name: "Web Development",
    title: "Pride and Prejudice",
    icon: <SiMongodb size={30} />,
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little...",
    name: "App Development",
    title: "Moby-Dick",
    icon: <Smartphone />,
  },
];

