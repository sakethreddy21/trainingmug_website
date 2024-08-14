"use client";

import React from "react";
import {Puzzle, BookCheck, ChevronsLeftRight, MonitorStop} from 'lucide-react'
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function CoursesDetails({ course }: { course: any }) {
  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full flex flex-col justify-center mt-5">
      <div>
        <CardItem
          translateZ={20}
          as="button"
          onClick={course.onClick}
          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
        >
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={course.instructor_profilePictureUrl} />
              <AvatarFallback>I</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="text-sm font-semibold">
                {course.instructors_name}
              </h4>
              <p className="text-xs text-muted-foreground">Instructor</p>
            </div>
          </div>
        </CardItem>
      </div>
      <div className="flex flex-row">
      <div className="w-full flex flex-col justify-start items-start">
        <CardItem
          translateZ={20}
          as="button"
          onClick={course.onClick}
          className="flex flex-row gap-x-2 px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
        >
          <Puzzle size={15}/> {course.quizzes} Quizzes
        </CardItem>
        <CardItem
          translateZ={20}
          as="button"
          onClick={course.onClick}
          className="flex flex-row gap-x-2 justify-start px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
        >
           <MonitorStop size={15}/>{course.capstone_projects} Capstone Projects
        </CardItem>
      </div>
      <div className="w-full flex flex-col justify-start items-start">
        <CardItem
          translateZ={20}
          as="button"
          onClick={course.onClick}
          className="flex flex-row gap-x-2 px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
        >
           <ChevronsLeftRight size={15}/> {course.excercises} Excercises
        </CardItem>
        <CardItem
          translateZ={20}
          as="button"
          onClick={course.onClick}
          className="flex flex-row gap-x-2 px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
        >
         <BookCheck size={15}/>  {course.Chapters} Chapters
        </CardItem>
      </div>
   </div>
    </div>
  );
}
