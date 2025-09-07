import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import bbmLogo from "../assets/bbm-logo.png"

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Top Section - Logo and Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <img src={bbmLogo} alt="BBM Logo" className="h-12" />
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <h2 className="text-2xl uppercase font-bold whitespace-nowrap">
              Subscribe to our Newsletter
            </h2>
            <div className="flex w-full max-w-md">
              <Input
                type="email"
                placeholder="youremail@example.com"
                className="bg-transparent border-white/20 rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="bg-[#F26522] hover:bg-[#F26522]/90 rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:grid grid-cols-4 gap-x-8 gap-y-6 py-8 border-t border-[#F26522]">
          {/* About BBM */}
          <div>
            <h3 className="text-xl font-bold mb-4">ABOUT BBM</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white">Our Story</a></li>
              <li><a href="#" className="hover:text-white">Upcoming Rides</a></li>
              <li><a href="#" className="hover:text-white">Rider Stories</a></li>
              <li><a href="#" className="hover:text-white">Join the Movement</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Gear & Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">GEAR & SERVICES</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white">Shop Gear</a></li>
              <li><a href="#" className="hover:text-white">Bike Accessories</a></li>
              <li><a href="#" className="hover:text-white">Insurance Plans</a></li>
              <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
            </ul>
          </div>

          {/* Explore More */}
          <div>
            <h3 className="text-xl font-bold mb-4">EXPLORE MORE</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white">Member Testimonials</a></li>
              <li><a href="#" className="hover:text-white">Events & Meetups</a></li>
              <li><a href="#" className="hover:text-white">Workshop Locator</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-xl font-bold mb-4">STAY CONNECTED</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="hover:text-[#F26522]">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a href="#" className="hover:text-[#F26522]">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="hover:text-[#F26522]">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            <p className="text-gray-300">Join Us</p>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden border-t border-[#F26522]">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="about" className="border-b-[#F26522]">
              <AccordionTrigger className="text-lg font-bold py-4">
                ABOUT BBM
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 pb-4 text-gray-300">
                  <li><a href="#">Our Story</a></li>
                  <li><a href="#">Upcoming Rides</a></li>
                  <li><a href="#">Rider Stories</a></li>
                  <li><a href="#">Join the Movement</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="gear" className="border-b-[#F26522]">
              <AccordionTrigger className="text-lg font-bold py-4">
                GEAR & SERVICES
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 pb-4 text-gray-300">
                  <li><a href="#">Shop Gear</a></li>
                  <li><a href="#">Bike Accessories</a></li>
                  <li><a href="#">Insurance Plans</a></li>
                  <li><a href="#">Shipping & Returns</a></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="explore" className="border-b-[#F26522]">
              <AccordionTrigger className="text-lg font-bold py-4">
                EXPLORE MORE
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 pb-4 text-gray-300">
                  <li><a href="#">Member Testimonials</a></li>
                  <li><a href="#">Events & Meetups</a></li>
                  <li><a href="#">Workshop Locator</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Mobile Social Icons */}
          <div className="flex justify-center gap-6 py-6">
            <a href="#" className="hover:text-[#F26522]">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a href="#" className="hover:text-[#F26522]">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="#" className="hover:text-[#F26522]">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 pb-4">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            Bikesbuddiesandmore @ 2025. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-x-6 text-sm">
            <a href="#" className="hover:text-[#F26522]">Events</a>
            <a href="#" className="hover:text-[#F26522]">Shop</a>
            <a href="#" className="hover:text-[#F26522]">About</a>
            <a href="#" className="hover:text-[#F26522]">Community</a>
            <a href="#" className="hover:text-[#F26522]">Locate Us</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
