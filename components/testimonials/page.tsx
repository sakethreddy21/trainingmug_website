"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Ratnesh Mishara",
    designation: "Student at NIT",
  image: "/ratneshmishra.jpg"
  },
  {
    id: 2,
    name: "Raja Gopal Reddy",
    designation: "Student at IIIT Nuzividu",
   image: "/rajgopal.jpg"
  },
  {
    id: 3,
    name: "Sri Harsha",
    designation: "Student at MCE Mysore",
  image: "/sriharsha.jpg"},
  {
    id: 4,
    name: "Rajdip Bhattacharya",
    designation: "Student at NIT - Kolkatta",
  image: "/rajdip.jpg"},
  {
    id: 5,
    name: "Vijaya Thurpati",
    designation: "Student at Pragathi College - Hyderabad",
   image: "/vijaya.jpg" },
  
];

export function Testimonials() {
  return (
    <div className="absolute bottom-20 left-0 flex justify-center items-center w-full flex-col gap-y-2">
    <div className="flex  mr-4">
      <AnimatedTooltip items={people} />
     
    </div>
    Loved by 10,500+ Students
    </div>

  );
}
