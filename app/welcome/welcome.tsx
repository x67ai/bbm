import { HeroSection } from "../components/features/home/HeroSection";
import heroImg from "../assets/heroimg.jpg";
import AboutSection from "~/components/features/home/AboutSection";
import CommunitySection from "~/components/features/home/CommunitySection";
import WhyBBM from "~/components/features/home/WhyBBM";
import GearSection from "~/components/features/home/GearSection";
import FaqSection from "~/components/features/home/FaqSection";

export function Welcome() {
  return (
    <main className="min-h-screen">
      <HeroSection
        title="The Most Exclusive"
        title2="Community for petrolheads"
        ctaText="Get Invited"
        ctaLink="/signup"
        backgroundImage={heroImg}
      />

      <AboutSection />
      <CommunitySection />
      <WhyBBM />
     <GearSection />
     <FaqSection/>
    </main>
  );
}
