// TestimonialPanel.tsx
import React from 'react';
import Image from 'next/image';

// Define TypeScript interfaces for our data structure
interface TestimonialClient {
  name: string;
  position: string;
  company: string;
  image: string;
  testimonial: string;
  companyLogo: string;
}

interface TestimonialPanelProps {
  testimonials: TestimonialClient[];
  heading: {
    main: string;
    subHeadBefore: string;
    highlighted: string;
    subHeadAfter: string;
  };
}

const TestimonialPanel: React.FC<TestimonialPanelProps> = ({ testimonials, heading }) => {
  return (
    <div className="cl_testimonial_panel">
      <div className="container">
        <h2 className="heading2 text-center">
          {heading.main.split('<br/>').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < heading.main.split('<br/>').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>
        
        <div className="app__subhead text-center">
          {heading.subHeadBefore}
          <h3 className="heading_inline">
            {heading.highlighted}
          </h3>
          {heading.subHeadAfter}
        </div>

        <div className="owl-carousel owl-theme" id="sync1">
          {testimonials.map((client, index) => (
            <div className="item" key={index}>
              <div className="ds_flex flex_spc_btw">
                <div className="client__left">
                  <div className="client__left__inner">
                    <figure className="client-image">
                      <Image
                        src={client.image}
                        alt={`${client.name} image`}
                        width={100}
                        height={100}
                      />
                    </figure>
                    <div>
                      <div className="client__name wht">
                        {client.name}
                      </div>
                      <div className="client__des wht">
                        {client.position},
                        <br/>
                        {client.company}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="client__right">
                  <p className="para">
                    {client.testimonial}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialPanel;