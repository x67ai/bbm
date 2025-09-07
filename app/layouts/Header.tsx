import { Link } from "react-router";
import bbmLogo from "../assets/bbm-logo.png";
import { Button } from "~/components/ui/button";
import {
  ChevronDown,
  Hamburger,
  HamburgerIcon,
  Handbag,
  Menu,
  User,
} from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-orange shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex">
            <img src={bbmLogo} alt="Logo" className="h-20 w-36" />
          </Link>

          {/* Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/store"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <Button className="bg-lightOrange text-black rounded-none hover:bg-lightOrange/90">
                Visit Store <Handbag />
              </Button>
            </Link>
            <Link
              to="/members"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <Button className="bg-lightOrange text-black rounded-none hover:bg-lightOrange/90">
                Members Lounge <ChevronDown />
              </Button>
            </Link>
            <Menu className="text-white h-10" />
          </div>
           <div className="md:hidden flex items-center space-x-6">
            <User className="text-white h-10" />

            <Menu className="text-white h-10" />
          </div>
        </div>
      </div>
    </header>
  );
}
