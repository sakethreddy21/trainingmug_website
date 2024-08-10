
import SecondScreen from "@/components/screens/second-screen/page";
import ThirdScreen from "@/components/screens/third-screen/page";
import FirstScreen from "@/components/screens/first-screen/page";
import FourthScreen from "@/components/screens/fourth-screen/page";
import FifthScreen from "@/components/screens/fifth-screen/page";
import { Spotlight } from "@/components/ui/Spotlight";
import { Navbar } from "@/components/navbar/page";
import Description from "@/components/description/page";
import { Testimonials } from "@/components/testimonials/page";
import SixthScreen from "@/components/screens/sixth-screen/page";
export default function Home() {
  
  return (
   <div>
 
    <FirstScreen/>
<div >
<SecondScreen/>
</div>
<div>
<ThirdScreen/>
</div>
<div className="mt-10">
<FourthScreen/>
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
