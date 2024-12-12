import { getData } from '../api/getLandingPageData';
import ClientLogosCarousel from './clientlogocarousel';

// Main Component
export default async function LandingPage() {
    const { title, subtitle, videoUrl, logoHeading, logoUrls } = await getData();
  return (
    <div className="top_head_wrap bg_wrapper">
      <div className="container">
        <div className="top_content_wrap">
          <h1 id="ai-development-services" className="heading1">
            {title}
          </h1>

          <div className="app__subhead">
            {subtitle}
          </div>

          <div className="common__btn hv_blue">
            <a href="/contact" className="btn_line btn-effect btn--show-modal">
              Consult Our AI Experts
            </a>
          </div>
        </div>
        
        {/* Video Banner */}
        <VideoBanner videoUrl={videoUrl} />
        
        {/* Client Logos */}
       <ClientLogosCarousel logoheading={logoHeading} logoUrl={logoUrls}/>
      </div>
    </div>
  );
}

// VideoBanner Component
function VideoBanner({ videoUrl }: { videoUrl: string }) {
  return (
    <div className="case_full_banner">
      <video
        autoPlay
        className="video-wrapper"
        loop
        muted
        // poster="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/chicago-banner.webp"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
}