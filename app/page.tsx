import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Description from "@/components/description/page";

import { Navbar } from "@/components/navbar/page";
import { Testimonials } from "@/components/testimonials/page";
export default function Home() {
  
  return (
   <>
  <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col  justify-center items-center">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
       <div className="absolute pointer-events-none inset-0 flex   dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

       
      <Navbar className="top-2 bg-none" />
   
      <p className="text-4xl  w-[900px] px-4 text-center sm:text-7xl font-bold  z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">
        Tranform your carrier with TrainingMug
      </p>

<div>
  <Description/>
</div>
<div className="">
  <Testimonials/>
</div>
    </div>
   </>
  );
}
