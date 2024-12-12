import Link from "next/link";
import { getFooter } from "../api/getLandingPageData";
import { FaFacebook } from "react-icons/fa6";

export interface FooterProps {
  about: string[];
  agency: string;
  copyright: string;
  legalinfo: string;
}

export const Footer: React.FC<FooterProps> = ({ about, agency, copyright, legalinfo })=> {
  return (
    <footer className="footer_wrapper" id='about'>
      <div className="footer-mid">
        <span
          className="top_arrw ds_flex flex_al_center flex_center"
          id="scroll-top-btn"
        >
          <svg height="10px" viewBox="0 0 13 10" width="13px">
            <polyline points="8 1 12 5 8 9" />
          </svg>
        </span>
        <div className="container">
          <div className="flex_wrapper space_between">
            {/* About Section */}
            <FooterColumn title="About">
            <FooterLink href={""}>
                {/* Dynamically generate list items based on the length of the 'about' array */}
                {about.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </FooterLink>
            </FooterColumn>

            {/* Services Section */}
            {/* <FooterColumn title="Services">
              <FooterLink href="https://appinventiv.com/iphone-application-development/">
                iOS App Development
              </FooterLink>
              <FooterLink href="https://appinventiv.com/android-application-development/">
                Android App Development
              </FooterLink>
              <FooterLink href="https://appinventiv.com/software-development-service/">
                Software Development
              </FooterLink>
              <FooterLink href="https://appinventiv.com/product-design-services/">
                Ideation &amp; Design
              </FooterLink>
              <FooterLink href="https://appinventiv.com/mobile-app-development-services/">
                Mobile App Dev
              </FooterLink>
              <FooterLink href="https://appinventiv.com/blog/category/lab/">
                Research &amp; Innovation
              </FooterLink>
              <FooterLink href="https://appinventiv.com/digital-transformation-services/">
                Digital Transformation
              </FooterLink>
              <FooterLink href="https://appinventiv.com/service/">more...</FooterLink>
            </FooterColumn> */}

            {/* Add other columns like Technologies, Industries, Portfolio, and Resources similarly */}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-btm">
        <div className="container">
          <div className="foot_btm_uper flex_wrapper flex_al_center">
            {/* <figure className="dmca-wrap">
              <a
                className="dmca-badge"
                href="//www.dmca.com/Protection/Status.aspx?ID=243d6934-5044-462a-b87b-75eebc0294b7"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="DMCA.com Protection Status"
                  src="https://images.dmca.com/Badges/dmca-badge-w150-2x1-02.png?ID=243d6934-5044-462a-b87b-75eebc0294b7"
                />
              </a>
            </figure> */}
            <div className="full_stack">
              <p>
                {agency}
              </p>
            </div>
          </div>
          <div className="flex_wrapper space_between">
            <div className="statutory-mwrapper">
              <div className="statutory-nav">
                <a>{legalinfo}</a>
                <div className="statutory-para">
                  <p>
                    Novotek is the Registered Name of Novotek Technologies Pvt. Ltd., an AI solutions
                    company situated in Detroit, USA.
                  </p>
                  <p>
                    All the personal information that you submit on the website - (Name, Email, Phone and Project
                    Details) will not be sold, shared or rented to others. Our sales team or the team of mobile app
                    developers only use this information to send updates about our company and projects or contact you
                    if requested or find it necessary. You may opt out of receiving our communication by dropping us an
                    email on - novotek.ai
                  </p>
                </div>
              </div>
            </div>
            <div className="copy_rght">
              <ul>
                <li>
                  <span className="copy">{copyright}</span>
                </li>
                {/* <li>
                  <Link href="https://appinventiv.com/sitemap/">SiteMap</Link>
                </li>
                <li>
                  <Link href="https://appinventiv.com/privacy-policy/">Privacy Policy</Link>
                </li> */}
              </ul>
            </div>
            <ul className="foot_social_network">
              <li className="facebook">
                <a href="/" target="_blank" rel="nofollow">
                  {/* <i className="fa-brands fa-facebook-f"></i> */}
                  <FaFacebook className="fa-brands fa-facebook-f" />
                </a>
              </li>
              {/* Add other social links similarly */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Reusable components for FooterColumn and FooterLink
const FooterColumn: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="foot-top-col">
    <span className="foot-col-head">{title}</span>
    <ul className="footer_list">{children}</ul>
  </div>
);

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <li>
    <Link href={href}>{children}</Link>
  </li>
);

