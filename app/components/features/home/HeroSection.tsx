import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Carousel } from "~/components/ui/carousel";
import { CarouselSpacing } from "./carousel";

interface HeroSectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

export function HeroSection({
  title,
  title2,
  ctaText,
  ctaLink,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <div
      className="relative h-[100vh] grid grid-cols-2 items-center overflow-hidden px-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImage})`,
        backgroundSize: "cover",
        // backgroundPosition: 'center'
      }}
    >
      <div className="font-heading mt-[450px]">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase">
            {title} <br />
            {title2}
          </h1>
          <Button className="bg-transparent text-white text-xl py-6 px-6 font-normal border border-white rounded-none text-center">
            {" "}
            {ctaText}
          </Button>
        </div>
      </div>
      <div className="">
        <CarouselSpacing classes={"w-52 h-64 object-cover rounded-lg"} />
      </div>
    </div>
  );
}
