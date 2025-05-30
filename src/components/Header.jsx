"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-gray-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-wide hover:text-[#FFF7ED]"
            >
              Book Easy
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none focus:ring-2 focus:ring-white rounded"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 items-center text-lg font-semibold">
            <Link href="/" className="hover:text-[#FFF7ED] transition">
              Home
            </Link>
            <Link
              href="/auth/login"
              className="hover:text-[#FFF7ED] transition"
            >
              Login
            </Link>

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center hover:text-[#FFF7ED] transition focus:outline-none"
              >
                Dropdown
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg text-gray-800 z-20 ring-1 ring-black ring-opacity-5">
                  <Link
                    href="/dashboard/book/booking-form"
                    className="block px-4 py-2 hover:bg-[#F97316] hover:text-white transition"
                  >
                    Book Appointment
                  </Link>
                  <Link
                    href="/dashboard/book/booking-list"
                    className="block px-4 py-2 hover:bg-[#F97316] hover:text-white transition"
                  >
                    View Appointments
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="lg:hidden mt-2 space-y-2 text-white font-semibold">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded hover:bg-[#EA580C] transition"
            >
              Home
            </Link>
            <Link
              href="/auth/login"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded hover:bg-[#EA580C] transition"
            >
              Login
            </Link>

            {/* Mobile Dropdown */}
            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-left px-3 py-2 rounded hover:bg-[#EA580C] transition flex justify-between items-center"
              >
                Dropdown
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  <Link
                    href="/dashboard/book/booking-form"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-1 rounded hover:bg-[#EA580C] transition"
                  >
                    Book Appointment
                  </Link>
                  <Link
                    href="/dashboard/book/booking-list"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-1 rounded hover:bg-[#EA580C] transition"
                  >
                    View Appointments
                  </Link>
                  <Link
                    href="#action/3.3"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-1 rounded hover:bg-[#EA580C] transition"
                  >
                    Something
                  </Link>
                  <hr className="border-gray-600" />
                  <Link
                    href="#action/3.4"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-1 rounded hover:bg-[#EA580C] transition"
                  >
                    Separated Link
                  </Link>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
