"use client"
import VideoScreen from "@/components/screens/video-screen/page";
import FeatureScreen from "@/components/screens/feature-screen/page";
import HeroScreen from "@/components/screens/hero-screen/page";
import CoursesScreen from "@/components/screens/course-screen/page";
import WebinarScreen  from "@/components/screens/webinar-screen/page";
import CertificateScreen from "@/components/screens/certificate-screen/page";
import QuestionareScreen from "@/components/screens/questionare-screen/page";
import { CourseSlideBar } from "@/components/course-slide-bar/page";
import JobReadyCourse from "@/components/screens/job-ready-course/page";
import Footer from "@/components/screens/footer/page";
import { useRef } from "react";
export default function Home() {
  const coursesRef = useRef<HTMLDivElement>(null);

  const scrollToCourses = () => {
    // Scroll to the courses section when called
    if (coursesRef.current) {
      coursesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  return (
   <div>
 
    <HeroScreen scrollToCourses={scrollToCourses}/>
<div >
<VideoScreen/>
</div>
<div>
  <JobReadyCourse/>
</div>
<div>
<FeatureScreen/>
</div>
<div className="mt-10 " ref={coursesRef}>
<CoursesScreen/>
</div>
<div className="mt-20 ">
  <WebinarScreen/>
</div>
<div >
<CertificateScreen/>
</div>
<div>
  <CourseSlideBar/>
</div>
<div>
  <QuestionareScreen/>
</div>
<div>
  <Footer/>
</div>

   </div>
  );
}
