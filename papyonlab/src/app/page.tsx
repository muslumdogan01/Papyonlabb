import AppCase from "@/components/content/appCase";
import LoveUsers from "@/components/content/loveUsers";
import OurTeam from "@/components/content/ourTeam";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import Cards from "@/components/hero/cards";
import HeroBg from "@/components/hero/heroBg";
import IntroText from "@/components/hero/introText";

export default function Home() {
  return (
    <div className="absolute top-0 left-0 w-full bg-[#0000FF] ">
      <div className=" w-full relative z-50 rounded-b-[60px] bg-[#151518] ">
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
      <Footer />
    </div>
  );
}
