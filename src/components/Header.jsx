"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-800">
              My App
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              ☰
            </button>
          </div>
          <nav className="hidden lg:flex space-x-4">
            <Link href="/" className="text-gray-700 hover:text-black">
              Home
            </Link>
            <Link href="/auth/login" className="text-gray-700 hover:text-black">
              Login
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-700 hover:text-black"
              >
                Dropdown ▼
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 bg-white border shadow rounded z-10 w-48">
                  <Link
                    href="/dashboard/book/booking-form"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Book Appointment
                  </Link>
                  <Link
                    href="/dashboard/book/booking-list"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    View Appointments
                  </Link>
                  <Link
                    href="#action/3.3"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Something
                  </Link>
                  <hr />
                  <Link
                    href="#action/3.4"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Separated Link
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
        {isOpen && (
          <div className="lg:hidden mt-2 space-y-2">
            <Link href="/" className="block text-gray-700 hover:text-black">
              Home
            </Link>
            <Link
              href="/auth/login"
              className="block text-gray-700 hover:text-black"
            >
              Login
            </Link>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="block w-full text-left text-gray-700 hover:text-black"
            >
              Dropdown ▼
            </button>
            {isDropdownOpen && (
              <div className="pl-4">
                <Link
                  href="/dashboard/book/booking-form"
                  className="block py-1 text-gray-600 hover:text-black"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/dashboard/book/booking-list"
                  className="block py-1 text-gray-600 hover:text-black"
                >
                  View Appointments
                </Link>
                <Link
                  href="#action/3.3"
                  className="block py-1 text-gray-600 hover:text-black"
                >
                  Something
                </Link>
                <hr />
                <Link
                  href="#action/3.4"
                  className="block py-1 text-gray-600 hover:text-black"
                >
                  Separated Link
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
