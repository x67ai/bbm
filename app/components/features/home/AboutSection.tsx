import { Button } from "~/components/ui/button/Button";
import AboutSectionImg from "../../../assets/aboutsectioncarousel.png";

const AboutSection = () => {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      {/* Main Heading */}
      <div className="container mx-auto px-4 pt-16 md:pt-20">
        <h1 className="text-3xl md:text-5xl font-bold text-center uppercase leading-tight max-w-4xl mx-auto">
          Premier communion petrolheads & a marketplace for all your adventures
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="container mx-auto px-4 py-8 overflow-x-auto">
        <div className="flex justify-start md:justify-center space-x-8 whitespace-nowrap">
          <a href="#" className="text-orange-500 border-b-2 border-orange-500 pb-1">
            RIDE BEYOND LIMITS
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            GEAR VAULT
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            PODCAST
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            SHIELD PRO
          </a>
        </div>
      </div>

      {/* Main Image    and Content Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="relative">
          <div className="aspect-video md:aspect-[21/9] overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover"
              src={AboutSectionImg}
              alt="Motorcycle Adventure"
            />
          </div>
          
          {/* Content Overlay */}
          <div className="mt-8 md:mt-12 max-w-3xl">
            <h2 className="text-2xl md:text-4xl font-bold uppercase mb-4">
              Scintillating Spain & Portugal
              <span className="text-orange-500 ml-4">12-20TH SEP'25</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Embark on the ultimate biking pilgrimage through one of Spain's most
              iconic routes. From the moment you throttle up, every mile is a
              journey through nature's raw magnificence winding roads.
            </p>
            <Button className="bg-transparent hover:bg-white/10 border-[1px] border-white text-white rounded-none px-8 py-6">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
