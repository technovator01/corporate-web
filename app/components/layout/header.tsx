'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useState } from 'react';

interface menuItems {
  items: string[];
}

export default function Header({ items }: menuItems) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Smooth scroll handler
  const handleSmoothScroll = useCallback((event: React.MouseEvent, item: string) => {
    event.preventDefault();
    
    // Convert item to valid ID (lowercase, replace spaces with hyphens)
    const targetId = item.toLowerCase().replace(/\s+/g, '-');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });

      // Close mobile menu if open
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  }, [isMenuOpen]);
  return (
    <header className="header-container header-new nav-down" style={{ backgroundColor: 'black' }} id="header">
    <div className="container">
      <div className="ds_flex flex_spc_btw flex_al_center">
        {/* Brand Logo Section */}
        <div className="brand_logo">
          <Link href="https://appinventiv.com">
            <Image
              src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/appinventiv-mob-wht-logo.svg"
              alt="Appinventiv logo"
              width={150}
              height={50}
              className="appi-blue-blk-logo"
            />
            <Image
              src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/appinventiv-mob-wht-logo.svg"
              alt="Appinventiv white logo"
              width={150}
              height={50}
              className="appi-blue-wht-logo"
            />
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="menu-wrapper">
          <ul className="flex space-x-2">
            {items.map((item, index) => (
              <li key={index}>
                <a 
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="nav-link"
                  onClick={(e) => handleSmoothScroll(e, item)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="nav__list common__btn">
              <a className="contact-btn btn_line btn-effect" href="https://appinventiv.com/contact/">
                <span>CONTACT US</span>
              </a>
            </li>
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
      // src="https://images.ctfassets.net/w6j98252myfo/jwtFyLQ4P5gGhbl2YPswu/53893b8b568001d1bd159511ec8c025f/Novotek_White.png" 
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/appinventiv-mob-wht-logo.svg"
      width="100" 
      height="20" 
    />
  </a>
</div>

     <div className="nav__list common__btn mobile__btn">
      <a className="btn-effect btn--show-modal" href="">
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
      <ul className="accord-wrap">
              {items.map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="nav-link"
                    onClick={(e) => handleSmoothScroll(e, item)}
                  >
                    {item}
                  </a>
                </li>
              ))}
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

