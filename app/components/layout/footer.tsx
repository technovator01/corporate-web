import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="footer-mid">
      <div id="scroll-top-btn" className="top_arrw ds_flex flex_al_center flex_center">
        <svg height="10px" viewBox="0 0 13 10" width="13px">
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </div>

      <div className="container">
        <div className="flex_wrapper space_between">
          <div className="foot-top-col">
            <div className="foot-col-head">About</div>
            <ul>
              <li><Link href="/about">Our company</Link></li>
              <li><Link href="/core-team">Core Team</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};