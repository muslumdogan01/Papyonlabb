import AppCase from "@/components/content/appCase";
import LoveUsers from "@/components/content/loveUsers";
import OurTeam from "@/components/content/ourTeam";
import Header from "@/components/header/page";
import Cards from "@/components/hero/cards";
import HeroBg from "@/components/hero/heroBg";
import IntroText from "@/components/hero/introText";

export default function Home() {
  return (
    <>
      <div className="w-full md:h-screen aspect-[16/9] relative ">
        <HeroBg />
        <Header />
        <Cards />
        <IntroText />
        <AppCase />
        <OurTeam />
        <div className="2xl:container 2xl:mx-auto">
          <LoveUsers />
        </div>
      </div>
    </>
  );
}
