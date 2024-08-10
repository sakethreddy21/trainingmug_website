"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Our Features",
      value: "features",
      content: (
        <div className="w-full flex justify-center items-center overflow-hidden relative h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
         
          <DummyContent imgpath="/tabs/AI-support-System.png" />
        </div>
      ),
    },
    {
      title: "Career Paths",
      value: "career_paths",
      content: (
        <div className="w-full flex justify-center items-center overflow-hidden relative h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          
          <DummyContent imgpath="/tabs/career-path.png" />
        </div>
      ),
    },
    {
      title: "Interactive Quizzes",
      value: "quizzes",
      content: (
        <div className="w-full flex justify-center items-center overflow-hidden relative h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
         
          <DummyContent  imgpath="/tabs/quiz.png" />
        </div>
      ),
    },
    {
      title: "Coding Exercises",
      value: "coding_exercises",
      content: (
        <div className="w-full flex justify-center items-center overflow-hidden relative h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
         
          <DummyContent  imgpath="/tabs/coding-excercise.png"/>
        </div>
      ),
    },
    {
      title: "Cloud IDE",
      value: "cloud_ide",
      content: (
        <div className="w-full flex justify-center items-center overflow-hidden relative h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          
          <DummyContent imgpath="/tabs/cloudIDE.png" />
        </div>
      ),
    },
    {
      title: "Dashboard",
      value: "dashboard",
      content: (
        <div className="w-full flex justify-center items-center overflow-hidden relative h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          
          <DummyContent  imgpath="/tabs/dashboard.png" />
        </div>
      ),
    },
    {
      title: "AI Support",
      value: "ai_support",
      content: (
        <div className="w-full flex justify-center items-center overflow-hidden relative h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
       
          <DummyContent  imgpath="/tabs/AI-support-System.png" />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-10">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({ imgpath }: { imgpath?: string }) => {
  return (
    <div className="flex justify-center items-center  w-full h-full ">
      
    <Image
      src={imgpath || "/default-image.png"}  // Fallback to a default image if imgpath is undefined
      alt="dummy image"
      width={900}
      height={1000} 
      className=" w-full h-full"
    />
    </div>
  );
};
