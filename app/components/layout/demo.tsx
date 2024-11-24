'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface menuItems {
  items: string[];
}

export default function Header({ items }: menuItems) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="header-container header-new nav-down" style={{ backgroundColor: 'black' }}>
      <div className="container">
        <div className="ds_flex flex_spc_btw flex_al_center">
          {/* Brand Logo Section */}
          <div className="brand_logo">
            <Link href="https://appinventiv.com">
              <Image
                src="https://images.ctfassets.net/w6j98252myfo/jwtFyLQ4P5gGhbl2YPswu/53893b8b568001d1bd159511ec8c025f/Novotek_White.png"
                alt="Appinventiv logo"
                width={150}
                height={50}
                className="appi-blue-blk-logo"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple-500 hover:bg-black focus:outline-none"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${isMenuOpen ? 'block' : 'hidden'} z-10`}
        style={{ backgroundColor: 'black', position: 'absolute', top: 0, left: 0, right: 0 }}
      >
        <div id="mob-header" className="flex justify-between items-center p-4">
          <div className="mobile-logo">
            <Link href="https://appinventiv.com">
              <Image
                src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/appinventiv-mob-wht-logo.svg"
                alt="Appinventiv logo"
                width={120}
                height={40}
                className="appinventiv-mob-wht-logo"
              />
            </Link>
          </div>
          <div className="nav__list common__btn mobile__btn">
            <Link
              href="/contact"
              className="btn-effect btn--show-modal text-white px-4 py-2 rounded-md"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div id="mobile-menu" className="main-nav p-4">
          <ul>
            {items.map((item, index) => (
              <li key={index} className="accord-wrap mb-2">
                <Link href="/" className="block text-white text-base font-medium py-2 hover:text-purple-500">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="menu-btn-wrapper menu-wrapper mt-4">
            <ul>
              <li className="nav_contact">
                <Link
                  href="/schedule-call"
                  className="block text-purple-500 hover:underline mb-2"
                >
                  Schedule a Call
                </Link>
                <Link
                  href="/contact"
                  className="block text-white hover:text-purple-500"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
