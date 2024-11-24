// MobileMenuButton.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface MobileMenuButtonProps {
  menuItems: string[];
}

export default function MobileMenuButton({ menuItems }: MobileMenuButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
        aria-label="Toggle mobile menu"
      >
        <span
          className={`w-6 h-0.5 bg-black transition-all transform ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-black transition-all ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-black transition-all transform ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="p-2 focus:outline-none"
              aria-label="Close mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex-1 px-4 pt-8 pb-4 overflow-y-auto">
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={index} className="border-b border-gray-100 py-3">
                  <Link
                    href="/"
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                    onClick={() => {
                      toggleMenu();
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Additional Mobile Menu Footer */}
          <div className="px-4 py-6 bg-gray-50">
            <Link
              href="/contact"
              className="block w-full py-3 px-4 text-center font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}