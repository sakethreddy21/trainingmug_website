import React from 'react'
import { Button } from '@/components/ui/moving-border'
import { Sparkles } from 'lucide-react'
import { LockOpen, CalendarDays, GraduationCap, BriefcaseBusiness, ChevronRight, Check } from 'lucide-react'
import { FaJava } from "react-icons/fa6";
import { TechStackSlideBar } from '@/components/textstack-slide-bar/page';


const JobReadyCourse = () => {
    return (
        <div className='flex flex-col justify-center items-center  pt-10'>
            <button className=" bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                <span className=" absolute inset-0 overflow-hidden rounded-full">
                    <span className=" absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                </span>
                <div className="w-[290px] h-[50px] relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">

                    <Sparkles size={20} className='text-emerald-400 ' />
                    <span className='text-center w-full h-full flex justify-center items-center text-[15px]'>{`Join The Job Ready Program`}</span>

                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>

            <div className='py-5'>
                <div

                    className="bg-black flex flex-col  dark:text-white  w-[1100px]  border-[30px] border-cyan-900 shadow-lg rounded-xl"
                >
                    <div className='flex flex-row  text-white w-full'>
                        <CourseDetailsLeftside />


                        <CourseDetailsRightside />
                    </div>
                    <div>
                        <TechStackSlideBar />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default JobReadyCourse



const CourseDetailsRightside = () => {
    return (
        <div className='w-2/5 flex flex-col gap-y-2 p-4 '>
            <div className='h-20 flex flex-row p-4 rounded-xl items-center gap-x-3' style={{
                background:
                    "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}>
                <LockOpen />
                <div className='flex flex-col'>
                    <div className='text-[8px] font-normal'>
                        Trail session
                    </div>
                    <div className='text-[14px] font-semibold'>
                        Free
                    </div>

                </div>
            </div>
            <div className='h-20 flex flex-row p-4 rounded-xl items-center gap-x-3' style={{
                background:
                    "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}>
                <CalendarDays />
                <div className='flex flex-col'>
                    <div className='text-[8px] font-normal'>
                        Duration
                    </div>
                    <div className='text-[14px] font-semibold'>
                        9 months    </div>

                </div>
            </div>
            <div className='h-20 flex flex-row p-4 rounded-xl items-center gap-x-3' style={{
                background:
                    "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}>
                <GraduationCap />
                <div className='flex flex-col'>
                    <div className='text-[8px] font-normal'>
                        Job Assurance
                    </div>
                    <div className='text-[14px] font-semibold'>
                        100%
                    </div>

                </div>
            </div>
            <div className='h-20 flex flex-row p-4 rounded-xl items-center gap-x-3' style={{
                background:
                    "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}>
                <BriefcaseBusiness />
                <div className='flex flex-col'>
                    <div className='text-[8px] font-normal'>
                        Carrer Services
                    </div>
                    <div className='text-[14px] font-semibold'>
                        Assured Refferals
                    </div>

                </div>
            </div>
            <div className='flex flex-row justify-between px-4'>
                <div className='h-14 flex flex-row p-4 rounded-xl items-center gap-x-3 bg-neutral-900' >

                    Know More
                    <ChevronRight />
                </div>
                <div className='h-14 flex flex-row p-4 rounded-xl items-center gap-x-3 bg-neutral-900' >
                    Buy Now<ChevronRight />
                </div>

            </div>

        </div>
    )
}


const CourseDetailsLeftside = () => {
    return (
        <div className='w-3/5 flex flex-col gap-y-2 p-4 '>
            <div className='flex flex-col justify-center items-center'>
                <FaJava size={50} />
                <div className='text-cyan-500 text-[26px] font-bold'>
                    Full stack java development program
                </div>
                <div className='text-center'>Learn with real work experience and get assured referrals to transition into a Full-Stack or Backend Developer at product-based companies</div>
            </div>
            <div className='h-32 flex flex-row justify-between p-4 rounded-xl  gap-x-3' style={{
                background:
                    "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}>
                <div className='flex flex-col justify-start w-1/2 gap-y-4 text-[12px] font-semibold'>
                    <div className='h-1/2 flex flex-row gap-x-4'>
                        <div>
                            <Check className='h-8 w-8 p-1 rounded-full bg-white' color='#000000' />
                        </div>

                        <div >
                            Project-led MERN or Backend Specialisation
                        </div>
                    </div>
                    <div className='h-1/2 flex flex-row gap-x-4'>
                        <div>
                            <Check className='h-8 w-8 p-1 rounded-full bg-white' color='#000000' />
                        </div>

                        <div >
                            Project-led MERN or Backend Specialisation
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-start w-1/2 gap-y-4 text-[12px] font-semibold'>
                    <div className='h-1/2 flex flex-row gap-x-4 ]'>
                        <div>
                            <Check className='h-8 w-8 p-1 rounded-full bg-white' color='#000000' />
                        </div>

                        <div >
                            Project-led MERN or Backend Specialisation
                        </div>
                    </div>
                    <div className='h-1/2 flex flex-row gap-x-4'>
                        <div>
                            <Check className='h-8 w-8 p-1 rounded-full bg-white' color='#000000' />
                        </div>

                        <div >
                            Project-led MERN or Backend Specialisation
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row w-full gap-x-4' >
                <div className='h-28 w-1/2 flex flex-row justify-between p-2 rounded-xl  gap-x-3' style={{
                    background:
                        "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
                }}>
                    <div className='flex flex-col gap-y-2 items-center '>
                        <div className='text-cyan-500 text-[16px] font-semibold'>
                            Full stack Specalization
                        </div>

                        <div className='text-center text-[12px] font-normal'>7 Professional Projects to learn with real work-experience </div>
                        <div className='text-center text-[12px] font-normal'>
                            (MongoDB, Express, React, NodeJS)
                        </div>
                    </div>
                </div>
                <div className='h-28 w-1/2 flex flex-row justify-between p-2 rounded-xl  gap-x-3' style={{
                    background:
                        "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
                }}>
                    <div className='flex flex-col gap-y-2 items-center '>
                        <div className='text-cyan-500 text-[16px] font-semibold'>
                            Backend Specialisation
                        </div>

                        <div className='text-center text-[12px] font-normal'>5 Professional projects to learn with real work-experience</div>
                        <div className='text-center text-[12px] font-normal'>
                            (Core Java and Spring Boot )
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}