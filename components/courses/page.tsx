"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function Courses() {
  const courseData = [
    {
      title: "Mastering Java Programming",
      description: "Master Java Programming from scratch.",
      imagePath: "/course1.jpg",
      buttonText: "Learn More",
      onClick: () => handleCourseClick("AI for Beginners"),
    },
    {
      title: "Programming Fundamentals",
      description: "Helps you master Programming Fundamentals in Java.",
      imagePath:"/course2.jpg",
      buttonText: "Learn More",
      onClick: () => handleCourseClick("Web Development Bootcamp"),
    },
    {
      title: "Mastering Object Oriented Programming",
      description: "Mastering Object Oriented Programming in Java.",
      imagePath: "/course3.jpg",
      buttonText: "Learn More",
      onClick: () => handleCourseClick("Data Science Masterclass"),
    },
  ];

  function handleCourseClick(courseName: string) {
    console.log(`You clicked on ${courseName}`);
    // Add your custom logic here, e.g., navigate to a different page, open a modal, etc.
  }

  return (

    <div className="flex flex-col justify-center items-center ">
        <div>
        <button className="bg-slate-800 no-underline group cursor-pointer  shadow-2xl shadow-zinc-900 rounded-full p-px text-[20px] font-semibold leading-6  text-white flex  justify-center items-center">
        <span className="overflow-hidden rounded-full">
          <span className="rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className=" flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 w-[200px] h-[50px] justify-center ">
          <span>{`Courses`}</span>
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.75 8.75L14.25 12L10.75 15.25"
            ></path>
          </svg>
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
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                onClick={course.onClick}
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                {course.buttonText} →
              </CardItem>
              
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
    </div>
  );
}
