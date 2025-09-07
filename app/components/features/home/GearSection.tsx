import { Button } from "~/components/ui/button";
import helmetBg from "../../../assets/helmets.jpg";

const GearSection = () => {
  return (
    <div className="relative h-[85vh] uppercase text-white">
      {/* Background div with reversed image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${helmetBg})`,
          transform: 'scaleX(-1)'
        }}
      />
      {/* Gradient and content */}
      <div className="absolute inset-0">
        <div className="container mx-auto h-full flex items-center gap-20 justify-start">
          <div className="text-left w-1/2">
            <h1 className="text-6xl font-medium">
             Ride-Ready Gear for Every Journey
            </h1>
            <h2 className="text-4xl font-medium my-10">
            Handpicked helmets, gloves, and jackets trusted by BBM riders.
            </h2>
            <Button>Explore Store</Button>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default GearSection;
