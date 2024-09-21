"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";


export function CourseSlideBar() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden pt-0" >
      <InfiniteMovingCards
      imgpath="https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b"
        items={testimonials}
        direction="right"
        speed="slow"
        
      />
    </div>
  );
}

const testimonials = [
  {
    
    name: "Devops",
  },
  {
    name: "Cyber security",
   
  },
  {
    name: "Cloud",
  },
  {
    name: "Web Development",
  },
  {
    name: "App Development",
  },
];
