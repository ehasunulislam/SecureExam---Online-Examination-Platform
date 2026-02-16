import HomeHero from "@/Components/Hero-Section/Home-Hero/HomeHero";
import Trusted from "@/Components/Hero-Section/Trusted/Trusted";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <HomeHero />
    <Trusted />
   </div>
  );
}
