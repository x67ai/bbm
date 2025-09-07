
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { Button } from "~/components/ui/button";
import carouselBikeImg1 from "../../../assets/carouselbikeimg1.jpg";
import heroImg from "../../../assets/heroimg.jpg";
import helmetsImg from "../../../assets/helmets.jpg";
import communityBg from "../../../assets/communityBg.jpg";

interface BlogPost {
  image: string;
  date: string;
  title: string;
  description: string;
}

const blogPosts: BlogPost[] = [
  {
    image: carouselBikeImg1,
    date: "August 29, 2025",
    title: "Essential Maintenance Tips Every New Rider Needs to Know",
    description: "Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.",
  },
  {
    image: heroImg,
    date: "August 28, 2025",
    title: "The Ultimate Guide to Planning Your First Cross-Country Motorcycle Trip",
    description: "Get ready for the adventure of a lifetime! This guide covers everything you need to pack, plan your route, and stay safe on the open road.",
  },
  {
    image: helmetsImg,
    date: "August 25, 2025",
    title: "Taking Your Riding Skills to the Next Level: Mastering the Road",
    description: "Master advanced riding techniques and build confidence on any terrain with our comprehensive guide.",
  },
  {
    image: communityBg,
    date: "August 22, 2025",
    title: "The Unwritten Rules of the Road for Every Biker",
    description: "Learn the essential etiquette and unspoken guidelines that every motorcyclist should know for safer, more enjoyable rides.",
  },
];

const CommunityForumSection = () => {
  return (
    <div className="bg-[#0A0A0A] text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold uppercase">
            Community Forum
          </h2>
          <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10">
            View All
          </Button>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {blogPosts.map((post, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="space-y-4">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-400">{post.date}</p>
                    <h3 className="text-xl font-semibold leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom navigation buttons */}
          <div className="hidden md:block">
            <CarouselPrevious className="absolute -left-12 top-1/2 transform -translate-y-1/2" />
            <CarouselNext className="absolute -right-12 top-1/2 transform -translate-y-1/2" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CommunityForumSection