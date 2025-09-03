import { Link } from "react-router";
import bbmLogo from "../assets/bbm-logo.png";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-orange shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={bbmLogo} alt="Logo" className="h-20 w-36" />
          </Link>

          {/* Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/store"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Visit Store
            </Link>
            <Link
              to="/members"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Members Lounge
            </Link>
          </div>

          {/* Hamburger Menu - Mobile */}
          <button className="md:hidden p-2" aria-label="Menu">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
