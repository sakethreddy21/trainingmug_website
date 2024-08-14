
import VideoScreen from "@/components/screens/video-screen/page";
import FeatureScreen from "@/components/screens/feature-screen/page";
import HeroScreen from "@/components/screens/hero-screen/page";
import CoursesScreen from "@/components/screens/course-screen/page";
import FifthScreen from "@/components/screens/fifth-screen/page";
import { Spotlight } from "@/components/ui/Spotlight";
import { Navbar } from "@/components/navbar/page";
import Description from "@/components/description/page";
import { Testimonials } from "@/components/testimonials/page";
import SixthScreen from "@/components/screens/sixth-screen/page";
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
<FifthScreen/>
</div>
<div>
  <SixthScreen/>
</div>

   </div>
  );
}
