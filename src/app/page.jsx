import Feature from "@/Components/Home/Feature/Feature";
import GetStarted from "@/Components/Home/Get-Started/GetStarted";
import HomeHero from "@/Components/Home/Home-Hero/HomeHero";
import Trusted from "@/Components/Home/Trusted/Trusted";


export default function Home() {
  return (
   <div>
    <HomeHero />
    <Trusted />
    <Feature />
    <GetStarted />
   </div>
  );
}
