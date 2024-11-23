'use client'
import React from 'react';

// Types for the component props
interface CTASectionProps {
  data?: typeof defaultCTAData;
}

// Default content data
const defaultCTAData = {
  heading: "Don't miss out on the transformative power of AI",
  subheading: "We can help you unlock the power of artificial intelligence and reinvent a new era of operational efficiency for your business",
  buttonText: "Speak with Our Consultants",
  buttonAction: () => {
    // Default action - can be overridden via props
    console.log('CTA button clicked');
  },
  image: {
    src: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/female-employee-talking-banner.webp",
    alt: "transformative power of AI"
  }
};

const CTASection: React.FC<CTASectionProps> = ({ data = defaultCTAData }) => {
  return (
    <div className="center_cta">
      <div className="container">
        <div className="cta_hd text-center wht">
          <strong>
            {data.heading}
          </strong>
        </div>
        <div className="app__subhead text-center">
          {data.subheading}
          <br/>
        </div>
        <div className="common__btn center hv_blue">
          <a 
            className="btn_line btn-effect btn--show-modal" 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              data.buttonAction();
            }}
          >
            <span>
              {data.buttonText}
            </span>
            <svg height="10px" viewBox="0 0 13 10" width="13px">
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </div>
        <figure className="cta_centerimg">
          <img 
            alt={data.image.alt} 
            className="center" 
            src={data.image.src}
          />
        </figure>
      </div>
    </div>
  );
};

export default CTASection;