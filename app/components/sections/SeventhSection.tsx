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

// Example usage with sample data:
export const sampleData = {
  heading: {
    main: "What Our Clients Have<br/>to Say for Us",
    subHeadBefore: "As a bespoke ",
    highlighted: "artificial intelligence software development company",
    subHeadAfter: ", we have helped multiple startups, enterprises, and Fortune 500s in realizing their business visions. Our AI software development services make AI accessible to everyone, everywhere."
  },
  testimonials: [
    {
      name: "Daniel Yasoshima",
      position: "Chief Executive Officer",
      company: "YouComm",
      image: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/Daniel-Yasoshima-client-name.svg",
      companyLogo: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/YouCOMM-logo.svg",
      testimonial: "We came to Appinventiv looking for a change in the conventional system where patients had to depend on call bells for getting assistance. The team, however, advised us feature additions that would make the solution truly all-patients inclusive. They made our product more innovative and useful than we had envisioned."
    },
    {
      name: "Billy Lan",
      position: "CTO and Co-founder",
      company: "JobGet",
      image: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/Billy-Lan-client-image.svg",
      companyLogo: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/jobget-cl.svg",
      testimonial: "We were looking for an agency that would understand the direness of the hourly worker job search cycle situation when we came across Appinventiv. What we liked about the team is how they did not just understand what we were looking for but also gave us ideas on how we could make the process more efficient and simplified for the jobseekers through their empathy mapping skillset."
    }
  ]
};