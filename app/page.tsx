
import VideoScreen from "@/components/screens/video-screen/page";
import FeatureScreen from "@/components/screens/feature-screen/page";
import HeroScreen from "@/components/screens/hero-screen/page";
import CoursesScreen from "@/components/screens/course-screen/page";
import CertificateScreen from "@/components/screens/certificate-screen/page";
import QuestionareScreen from "@/components/screens/questionare-screen/page";
import { IconSlideBar } from "@/components/icon-slide-bar/page";
import JobReadyCourse from "@/components/screens/job-ready-course/page";
import Footer from "@/components/screens/footer/page";
export default function Home() {
  
  return (
   <div>
 
    <HeroScreen/>
<div >
<VideoScreen/>
</div>
<div>
  <JobReadyCourse/>
</div>
<div>
<FeatureScreen/>
</div>
<div className="mt-10">
<CoursesScreen/>
</div>
<div >
<CertificateScreen/>
</div>
<div>
  <IconSlideBar/>
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
