import faqBg from "../../../assets/faqBg.jpg";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

const FaqSection = () => {
  return (
    <div>
      <h1 className="py-20 bg-black2 text-white text-6xl font-bold text-center uppercase">
        "Where throttle meets trust, BBM rides begin."
      </h1>
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: `url(${faqBg})` }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <h1 className="text-[4rem] font-bold text-center mb-16 tracking-widest">
            FREQUENTLY ASKED QUESTIONS
          </h1>

          <div className="flex flex-col lg:flex-row gap-12 justify-between">
            {/* FAQ Accordion Section - 70% */}
            <div className="lg:w-[70%] space-y-4">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem
                  value="item-1"
                  className="border border-white/20 rounded-lg overflow-hidden px-8 py-2 data-[state=open]:bg-white/5"
                >
                  <AccordionTrigger className="text-xl hover:no-underline">
                    What is BBM?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    BBM (Bike Buddies & More) is India's premier motorcycle
                    community and marketplace, connecting bikers through rides,
                    events, and exclusive member benefits.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="border border-white/20 rounded-lg overflow-hidden px-8 py-2 data-[state=open]:bg-white/5"
                >
                  <AccordionTrigger className="text-xl hover:no-underline">
                    Who can join BBM?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Any motorcycle enthusiast who shares our passion for riding
                    and community can join BBM. Whether you're a seasoned rider
                    or just starting out, our community welcomes all.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="border border-white/20 rounded-lg overflow-hidden px-8 py-2 data-[state=open]:bg-white/5"
                >
                  <AccordionTrigger className="text-xl hover:no-underline">
                    What benefits do members get?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Members enjoy exclusive access to organized rides, special
                    events, gear discounts, workshop privileges, and a vibrant
                    community of fellow riders.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="border border-white/20 rounded-lg overflow-hidden px-8 py-2 data-[state=open]:bg-white/5"
                >
                  <AccordionTrigger className="text-xl hover:no-underline">
                    How do I join a ride or event?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Simply log in to your BBM account, browse our upcoming rides
                    and events, and click to join. You'll receive all necessary
                    details and can connect with other participants.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="border border-white/20 rounded-lg overflow-hidden px-8 py-2 data-[state=open]:bg-white/5"
                >
                  <AccordionTrigger className="text-xl hover:no-underline">
                    Do I need to log in to explore BBM?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    No, you can browse our website and explore basic features
                    without logging in. However, to access member benefits and
                    participate in rides, you'll need to create an account.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Contact Section - 30% */}
            <div className="lg:w-[30%]">
              <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-6">
                  STILL HAVE QUESTIONS?
                </h2>
                <p className="text-gray-300 mb-8">
                  Email us anytime for quick support
                  <br />
                  we reply within 24 hours.
                </p>

                <div className="space-y-4">
                  <Input
                    type="email"
                    placeholder="youremail@example.com"
                    className="bg-transparent border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
