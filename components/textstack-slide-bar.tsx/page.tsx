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

