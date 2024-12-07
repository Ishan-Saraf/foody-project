import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";
import Logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-lightYellow py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <img src={Logo} alt="Logo" className="w-36 mb-4" />
            <p className="text-gray-700 text-center md:text-left">
              Delicious food crafted with love. Bringing happiness to your
              table.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-darkGreen text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="/home" className="hover:text-darkGreen transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-darkGreen transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/menu" className="hover:text-darkGreen transition">
                  Menu
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-darkGreen transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-darkGreen transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-darkGreen text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <p className="text-gray-700">123 Foodie Street</p>
            <p className="text-gray-700">City, State, ZIP</p>
            <p className="text-gray-700">Phone: +91-9876543210</p>
            <p className="text-gray-700">Email: hello@foodie.com</p>

            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-darkGreen text-2xl transition"
              >
                <IoLogoFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-darkGreen text-2xl transition"
              >
                <IoLogoInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-darkGreen text-2xl transition"
              >
                <IoLogoTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-300 pt-6 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Foodie | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
