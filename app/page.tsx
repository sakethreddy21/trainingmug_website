
import VideoScreen from "@/components/screens/video-screen/page";
import FeatureScreen from "@/components/screens/feature-screen/page";
import HeroScreen from "@/components/screens/hero-screen/page";
import CoursesScreen from "@/components/screens/course-screen/page";
import CertificateScreen from "@/components/screens/certificate-screen/page";
import QuestionareScreen from "@/components/screens/questionare-screen/page";
import { InfiniteMovingCardsDemo } from "@/components/icon-slide-bar/page";
export default function Home() {
  
  return (
   <div>
 
    <HeroScreen/>
<div >
<VideoScreen/>
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
  <InfiniteMovingCardsDemo/>
</div>
<div>
  <QuestionareScreen/>
</div>

   </div>
  );
}
