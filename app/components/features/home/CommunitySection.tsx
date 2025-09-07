import { Button } from "~/components/ui/button";
import communityBg from "../../../assets/communityBg.jpg";

const CommunitySection = () => {
  return (
    <section className="relative h-screen w-full">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${communityBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/70" />
      </div>

      {/* Content Container */}
      <div className="relative h-full container mx-auto px-4">
        {/* Main Content - Right aligned on desktop, centered on mobile */}
        <div className="h-full flex items-center">
          <div className="ml-auto w-full md:w-1/2 text-center md:text-right text-white">
            <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
              WE'RE NOT JUST RIDERS,
              <br />
              WE'RE A FAMILY.
            </h1>

            <div className="space-y-2 mb-10">
              <p className="text-xl md:text-3xl">
                UNITED BY PASSION, POWERED BY PURPOSE
              </p>
              <p className="text-xl md:text-3xl">RIDE, CONNECT, AND BELONG.</p>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 text-lg px-8 py-6"
            >
              Join the Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
