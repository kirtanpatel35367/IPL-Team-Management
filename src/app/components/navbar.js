'use client'
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-2xl">
              IPL Team Management 
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              
              <Link href="/edit-player" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                Edit Player
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-blue-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
              Home
            </Link>
            <Link href="/about" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
              About
            </Link>
            <Link href="/services" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
              Services
            </Link>
            <Link href="/contact" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
