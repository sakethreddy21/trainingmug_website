"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { courseData } from '@/lib/coursedata';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { CoursesDetails } from '@/components/course-details/page';
export const InfiniteMovingCards = ({
  items,
  imgpath,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  is_webinar= false,
}: {
  items: {
    quote?: string;
    name?: string;
    title?: string;
    icon?: any; 
    
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow" | "extraslow";
  pauseOnHover?: boolean;
  is_webinar?:boolean
  imgpath:string;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "10s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      }
      else if (speed === "slow") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      }
      else if (speed === "extraslow") {
        containerRef.current.style.setProperty("--animation-duration", "100s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className={` relative rounded-2xl  border-b-0 flex-shrink-0  px-4  ${is_webinar ? 'py-0':'py-3 border-slate-700 border'}` }
            style={{
              background:
                `${is_webinar?"":"linear-gradient(180deg, var(--slate-800), var(--slate-900)"}`,
            }}
            key={idx}
          >
            {is_webinar?(
              <>
              <div className="flex flex-wrap justify-center gap-4">
      
      {courseData.map((course, index) => (
        <CardContainer key={index} className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[480px] rounded-xl p-6 border">
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
              
              </>
            ):(<>
            <blockquote>
             {item.icon}
            </blockquote>
            <blockquote>
              {item.name}
            </blockquote>
            </>)}
            
          </li>
        ))}
      </ul>
    </div>
  );
};
