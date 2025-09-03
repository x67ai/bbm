import { Link } from "react-router";
import logoLight from "../assets/bbm-logo.png";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter and Logo Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <img src={logoLight} alt="Logo" className="h-8" />
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-auto">
            <h3 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className=" hover:text-primary">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/team" className=" hover:text-primary">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-primary">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className=" hover:text-primary">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-primary">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore More */}
          <div>
            <h4 className="font-semibold mb-4">Explore More</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className=" hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/events" className=" hover:text-primary">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/resources" className=" hover:text-primary">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="font-semibold mb-4">Stay Connected</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-primary"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-primary"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-primary"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer - Watermark */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
