"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Cloud, Shield, Code, Database, Smartphone } from "lucide-react";
import { FaJava , } from "react-icons/fa6";
import { SiMongodb, SiSpringboot } from "react-icons/si";

export function TechStackSlideBar() {
  return (
    <div className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden pt-0">
      <div className="flex justify-center  items-center">
        Tech Stack
      </div>
      <InfiniteMovingCards
        imgpath="https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b"
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    
    icon: <FaJava size={30} />,
  },
  {
    icon: <SiMongodb size={30} />,
  },
  {
    icon: <Cloud size={30}/>,
  },
  {
    icon: <SiMongodb size={30} />,
  },
  {
    icon: <Smartphone />,
  },
];

