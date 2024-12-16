'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useState } from 'react';

export interface menuItems {
    items: string[];
  }

export interface HeaderItems{
  logo:string;
  items: menuItems
}

export default function Header({ items, logo }: HeaderItems) {
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
          <Link href="/">
            <Image
              src={logo}
              alt="Novotek logo"
              width={160}
              layout="intrinsic" 
              height={45}
              className="novo-blue-blk-logo"
            />
            {/* <Image
              src={logo}
              alt="Novotek white logo"
              layout="intrinsic" 
              width={160}
              height={45}
              className="novo-blue-wht-logo"
            /> */}
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="menu-wrapper">
          <ul className="flex space-x-2">
            {items.items.map((item, index) => (
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
            <Link href='/contact' legacyBehavior>
            <li className="nav__list common__btn">
              <a className="contact-btn btn_line btn-effect">
                <span>CONTACT US</span>
              </a>
            </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>

      <div className="mobile-menu">
    <div id="mob-header">
    <div className="mobile-logo">
  <a href="/">
    <img 
      alt="Novotek - logo" 
      className="appinventiv-mob-wht-logo" 
      // src="https://images.ctfassets.net/w6j98252myfo/jwtFyLQ4P5gGhbl2YPswu/53893b8b568001d1bd159511ec8c025f/Novotek_White.png" 
        src={logo}
      width="100" 
      height="20" 
    />
  </a>
</div>

     <div className="nav__list common__btn mobile__btn">
      <a className="btn-effect btn--show-modal" href="/contact">
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
      alt="Novotek - logo" 
      className="appinventiv-mob-wht-logo" 
      src={logo}
      width="50" 
      height="20" 
    />
  </a>
</div>

     <div className="main-nav">
      <ul className="accord-wrap">
              {items.items.map((item, index) => (
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
         <a className="ad-page jmp-to-form" href="/contact">
          Schedule a call
         </a>
         <a href="/contact">
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

