import { Button } from "~/components/ui/button/Button";
import AboutSectionImg from "../../../assets/aboutsectioncarousel.png";
const AboutSection = () => {
  return (
    <div className="bg-black2 text-white">
      <h1 className="text-4xl font-bold  text-center pt-20 uppercase">
        Premier communion petrolheads & a marketplace for all your Adventures
      </h1>
      <div className="gap-6 pt-10 flex justify-center uppercase text-lg font-semibold">
        <span className="hover:text-orange hover:underline">
          Ride Beyond Limits
        </span>
        <span>Ride Beyond Limits</span>
        <span>Ride Beyond Limits</span>
        <span>Ride Beyond Limits</span>
        <span>Ride Beyond Limits</span>
      </div>
      <img
        className="w-2/3 sm:[h-50vh] lg:h-[70vh] mx-auto object-cover"
        src={AboutSectionImg}
      />
      <div className="grid grid-cols-12 container mx-auto py-10">
        <div className="col-span-10">
          {" "}
          <h2 className="text-3xl font-bold text-center pt-10 uppercase">
            Scintillating spain & Portugal
          </h2>
          <p>
            Embark on the ultimate biking pilgrimage through one of Spain's most
            iconic routes. From the moment you throttle up, every mile is a
            journey through nature's raw magnificence winding roads.
          </p>
        </div>
        <div className="col-span-2">
          <Button>View Details</Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
