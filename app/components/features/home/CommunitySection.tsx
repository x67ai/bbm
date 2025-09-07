import { Button } from "~/components/ui/button";
import communityBg from "../../../assets/communityBg.jpg";

const CommunitySection = () => {
  return (
    <div
      className="relative h-[90vh] bg-cover bg-center bg-no-repeat uppercase text-white"
      style={{ backgroundImage: `url(${communityBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 mx-auto">
        <div className="container mx-auto h-full flex items-center gap-10 justify-end">
          <div className="w-1/2"></div>
          <div className="text-right">
            <h1 className="text-6xl font-medium">
              We’re not just riders,
              <br /> We’re a Family.
            </h1>
            <h2 className="text-4xl font-medium my-10">
              United by passion, powered by purpose 
              ride, connect, and belong.
            </h2>
            <Button>View Community</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
