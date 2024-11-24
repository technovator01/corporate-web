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
    setIsMenuOpen((prevState) => !prevState); // Toggle state
  };
  

  return (
    <header className="header-container header-new nav-down" style={{ backgroundColor: 'black' }} id="header">
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
              <Image
                src="https://images.ctfassets.net/w6j98252myfo/jwtFyLQ4P5gGhbl2YPswu/53893b8b568001d1bd159511ec8c025f/Novotek_White.png"
                alt="Appinventiv white logo"
                width={150}
                height={50}
                className="appi-blue-wht-logo"
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="menu-wrapper">
            <ul className="flex space-x-6">
              {items.map((item, index) => (
                <li key={index}>
                  <Link href="/" className="nav-link">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

      </div>

      <div className="mobile-menu">
    <div id="mob-header">
    <div className="mobile-logo">
  <a href="/">
    <img 
      alt="Appinventiv - logo" 
      className="appinventiv-mob-wht-logo" 
      src="https://images.ctfassets.net/w6j98252myfo/jwtFyLQ4P5gGhbl2YPswu/53893b8b568001d1bd159511ec8c025f/Novotek_White.png" 
      width="100" 
      height="20" 
    />
  </a>
</div>

     <div className="nav__list common__btn mobile__btn">
      <a className="btn-effect btn--show-modal" href="" onClick={toggleMenu}>
       Contact Us
      </a>
     </div>
     <div className="mobile-nav">
     <button
  className={`toggle-menu ${isMenuOpen ? 'active' : ''}`}
  onClick={toggleMenu}
>
  <span></span>
</button>
     </div>
    </div>
    <div id="mobile-menu" className={`${isMenuOpen ? 'open' : ''}`}>
    <div className="mobile-logo">
  <a href="/">
    <img 
      alt="Appinventiv - logo" 
      className="appinventiv-mob-wht-logo" 
      src="https://images.ctfassets.net/w6j98252myfo/jwtFyLQ4P5gGhbl2YPswu/53893b8b568001d1bd159511ec8c025f/Novotek_White.png" 
      width="50" 
      height="20" 
    />
  </a>
</div>

     <div className="main-nav">
      <ul>
       <li>
        <div className="accord-wrap">
         <a href="https://appinventiv.com/about/">
          About
         </a>
         <span>
         </span>
        </div>
      
       </li>
       <li>
        <div className="accord-wrap">
         <a href="https://appinventiv.com/industries/">
          Industries
         </a>
         <span>
         </span>
        </div>

       </li>
       <li>
        <div className="accord-wrap">
         <a href="https://appinventiv.com/service/">
          Services
         </a>
         <span>
         </span>
        </div>

       </li>
       <li>
        <div className="accord-wrap">
         <a href="https://appinventiv.com/portfolio/">
          Portfolio
         </a>
         <span>
         </span>
        </div>

       </li>
       <li>
        <div className="accord-wrap">
         <a href="https://appinventiv.com/blog/">
          Resources
         </a>
        </div>
       </li>
      </ul>
      <div className="menu-btn-wrapper menu-wrapper">
       <ul>
        <li className="nav_contact btn_effect">
         <a className="ad-page jmp-to-form" href="https://appinventiv.com/contact/">
          Schedule a call
         </a>
         <a href="https://appinventiv.com/contact/">
          contact us
         </a>
        </li>
       </ul>
      </div>
     </div>
    </div>
   </div>
    </header>
  );
}

