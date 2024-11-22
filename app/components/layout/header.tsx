import Link from 'next/link';
import Image from 'next/image';
import { client } from '../lib/contentful';


async function fetchNavbarItems() {
  try {
    const response = await client.getEntries({ content_type: 'websiteNavbar' });
    
    const menuItems = response.items[0]?.fields?.menuItems as string[];
    
    return menuItems || [];
  } catch (error) {
    console.error('Failed to fetch navbar items:', error);
    return [];
  }
}

export default async function Header() {
  const menuItems = await fetchNavbarItems();

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
                  <Link href="/" className="nav-link">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
