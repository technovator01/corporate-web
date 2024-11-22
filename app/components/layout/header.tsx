import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '../lib/contentful';


export async function getStaticProps() {
  const res = client.getEntries({content_type:'websiteNavbar'})
  return {
    props:{
      navBar:(await res).items
    }
  }
}

export const Header = () => {
  const menuItems = [
    {
      label: "Let's Talk AI",
      href: "https://appinventiv.com/artificial-intelligence/",
    },
    {
      label: "About",
      href: "https://appinventiv.com/about/"
    },
    {
      label: "Services",
      href: "https://appinventiv.com/service/"
    }
  ];

  return (
    <header className="header-container header-new nav-down">
      <div className="container">
        <div className="ds_flex flex_spc_btw flex_al_center">
          {/* Brand Logo Section */}
          <div className="brand_logo">
            <Link href="https://appinventiv.com">
              <Image
                src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/appi-blue-blk-logo.svg"
                alt="Appinventiv logo"
                width={150}
                height={50}
                className="appi-blue-blk-logo"
              />
              <Image
                src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/appi-blue-wht-logo.svg"
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
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="contact-btn btn_line btn-effect">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
