import React from "react";
import Madeby from "./Madeby";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="bg-slate-900 py-8 text-white">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="flex flex-col">
            <img
              src="/images/logo/logo.png"
              alt="Logo"
              className="w-full max-w-xs mb-4"
            />
            <p>123 Street, Sahiwal, Punjab, Pakistan</p>
            <p>(+92) 304 9978 288</p>
            <p>info@swiftlink.com</p>
            <div className="flex space-x-4 mt-4">
              <Link
                href="https://www.facebook.com/"
                className="text-white hover:text-gray-300"
              >
                <i className="bi bi-facebook"></i>
              </Link>
              <Link
                href="https://www.twitter.com/"
                className="text-white hover:text-gray-300"
              >
                <i className="bi bi-twitter"></i>
              </Link>
              <Link
                href="https://www.instagram.com/"
                className="text-white hover:text-gray-300"
              >
                <i className="bi bi-instagram"></i>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-white hover:text-gray-300">
                  Furniture Moving Services
                </a>
              </li>
              <li>
                <a href="/services" className="text-white hover:text-gray-300">
                  Office Moving Services
                </a>
              </li>
              <li>
                <a href="/services" className="text-white hover:text-gray-300">
                  House Moving Services
                </a>
              </li>
              <li>
                <a href="/services" className="text-white hover:text-gray-300">
                  Transportation Services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-white hover:text-gray-300">
                  Company Profile
                </a>
              </li>
              <li>
                <a href="/about" className="text-white hover:text-gray-300">
                  Why Choose Us?
                </a>
              </li>
              <li>
                <a href="/about" className="text-white hover:text-gray-300">
                  Mission
                </a>
              </li>
              <li>
                <a href="/about" className="text-white hover:text-gray-300">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/termsandconditions"
                  className="text-white hover:text-gray-300"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/faq" className="text-white hover:text-gray-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className="text-white hover:text-gray-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <Madeby />
    </>
  );
};

export default Footer;
