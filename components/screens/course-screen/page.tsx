"use client"
import React from 'react'
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { courseData } from '@/lib/coursedata';
import { CoursesDetails } from '@/components/course-details/page';
import { Sparkles } from 'lucide-react';
const CoursesScreen = () => {
 return (
    <div className="flex flex-col justify-center items-center ">
        <div>
            

        <button className=" bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
        <span className=" absolute inset-0 overflow-hidden rounded-full">
          <span className=" absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="w-[150px] h-[45px] relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">

        <Sparkles size={20} className='text-emerald-400 ' />
          <span className='text-center w-full h-full flex justify-center items-center text-[15px]'>{`Courses`}</span>
         
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
        </div>
    <div className="flex flex-wrap justify-center gap-4">
      
      {courseData.map((course, index) => (
        <CardContainer key={index} className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {course.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {course.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={course.imagePath}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={course.title}
              />
            </CardItem>

<CoursesDetails course={course} />
       
          </CardBody>
        </CardContainer>
      ))}
    </div>
    </div>
  );
}
export default CoursesScreen