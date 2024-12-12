'use client'
import React from 'react';

// Default content ctaData
export interface CTAData {
  heading: string;
  subheading: string;
  buttonText: string;
  image: string;
}

const CTASection = ({ctaData}:{ctaData: CTAData}) => {
  return (
    <div className="center_cta">
      <div className="container">
        <div className="cta_hd text-center wht">
          <strong>
            {ctaData.heading}
          </strong>
        </div>
        <div className="app__subhead text-center">
          {ctaData.subheading}
          <br/>
        </div>
        <div className="common__btn center hv_blue">
          <a 
            className="btn_line btn-effect btn--show-modal" 
            href="/contact" 
            // onClick={(e) => {
            //   e.preventDefault();
            //   // ctaData.buttonAction();
            // }}
          >
            <span>
              {ctaData.buttonText}
            </span>
            <svg height="10px" viewBox="0 0 13 10" width="13px">
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </div>
        <figure className="cta_centerimg">
          <img 
            className="center" 
            src={ctaData.image}
          />
        </figure>
      </div>
    </div>
  );
};

export default CTASection;