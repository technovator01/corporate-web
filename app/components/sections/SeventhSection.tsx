'use client'
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const TestimonialPanel: React.FC = () => {
  const testimonialRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (testimonialRef.current && logoRef.current) {
      const testimonials = testimonialRef.current.querySelectorAll('.owl-item');
      const logos = logoRef.current.querySelectorAll('.owl-item');

      gsap.set(testimonials, { position: 'absolute', width: '100%', opacity: 0 });
      gsap.set(logos, { position: 'absolute', width: '100%', opacity: 0 });
      
      gsap.set(testimonials[0], { opacity: 1 });
      gsap.set(logos[0], { opacity: 1 });

      const testimonialTl = gsap.timeline({ repeat: -1 });
      testimonials.forEach((testimonial, index) => {
        if (index < testimonials.length - 1) {
          testimonialTl
            .to(testimonial, { opacity: 0, duration: 0.5 }, '+=3')
            .to(testimonials[index + 1], { opacity: 1, duration: 0.5 });
        }
      });

      testimonialTl
        .to(testimonials[testimonials.length - 1], { opacity: 0, duration: 0.5 }, '+=3')
        .to(testimonials[0], { opacity: 1, duration: 0.5 });

      const logoTl = gsap.timeline({ repeat: -1 });
      logos.forEach((logo, index) => {
        if (index < logos.length - 1) {
          logoTl
            .to(logo, { opacity: 0, duration: 0.5 }, '+=3')
            .to(logos[index + 1], { opacity: 1, duration: 0.5 });
        }
      });

      logoTl
        .to(logos[logos.length - 1], { opacity: 0, duration: 0.5 }, '+=3')
        .to(logos[0], { opacity: 1, duration: 0.5 });
    }
  }, []);

  return (
    <div className="cl_testimonial_panel">
      <div className="container">
        <h2 className="heading2 text-center">
          What Our Clients Have
          <br />
          to Say for Us
        </h2>
        <div className="app__subhead text-center">
          As a bespoke
          <h3 className="heading_inline">
            artificial intelligence software development company
          </h3>
          , we have helped multiple startups,
          <br />
          enterprises, and Fortune 500s in realizing their business visions. Our AI software development services
          <br />
          make AI accessible to everyone, everywhere.
        </div>
        <div ref={testimonialRef} className="owl-carousel owl-theme owl-loaded owl-drag" id="sync1">
          <div className="owl-item" style={{ width: '100%', minHeight: '400px' }}>
            <div className="item" style={{ 
              border: '1px solid #e0e0e0', 
              borderRadius: '10px', 
              padding: '20px', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              height: '100%'
            }}>
              <div className="ds_flex flex_spc_btw" style={{ height: '100%' }}>
                <div className="client__left" style={{ width: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="client__left__inner" style={{ textAlign: 'center' }}>
                    <figure className="client-image" style={{ marginBottom: '15px' }}>
                      <img 
                        alt="img" 
                        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/Daniel-Yasoshima-client-name.svg" 
                        style={{ maxWidth: '150px', maxHeight: '150px' }}
                      />
                    </figure>
                    <div className="client__name wht" style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>
                      Daniel Yasoshima
                    </div>
                    <div className="client__des wht" style={{ color: '#666', fontSize: '16px' }}>
                      Chief Executive Officer,
                      <br />
                      YouComm
                    </div>
                  </div>
                </div>
                <div 
                  className="client__right" 
                  style={{ 
                    width: '70%', 
                    padding: '0 20px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    borderLeft: '1px solid #e0e0e0' 
                  }}
                >
                  <p 
                    className="para" 
                    style={{ 
                      fontSize: '16px', 
                      lineHeight: '1.6', 
                      color: '#fff', 
                      fontStyle: 'italic',
                      position: 'relative',
                      paddingLeft: '20px'
                    }}
                  >
                    <span 
                      style={{ 
                        position: 'absolute', 
                        left: '0', 
                        top: '0', 
                        fontSize: '40px', 
                        color: '#007bff', 
                        lineHeight: '1' 
                      }}
                    >
                      "
                    </span>
                    We came to Appinventiv looking for a change in the conventional system where
                    patients had to depend on call bells for getting assistance. The team, however,
                    advised us feature additions that would make the solution truly all-patients
                    inclusive. They made our product more innovative and useful than we had
                    envisioned.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Second testimonial with similar structure */}
          <div className="owl-item" style={{ width: '100%', minHeight: '400px' }}>
            <div className="item" style={{ 
              border: '1px solid #e0e0e0', 
              borderRadius: '10px', 
              padding: '20px', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              height: '100%'
            }}>
              <div className="ds_flex flex_spc_btw" style={{ height: '100%' }}>
                <div className="client__left" style={{ width: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="client__left__inner" style={{ textAlign: 'center' }}>
                    <figure className="client-image" style={{ marginBottom: '15px' }}>
                      <img 
                        alt="appinventiv client" 
                        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/Billy-Lan-client-image.svg" 
                        style={{ maxWidth: '150px', maxHeight: '150px' }}
                      />
                    </figure>
                    <div className="client__name wht" style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>
                      Billy Lan
                    </div>
                    <div className="client__des wht" style={{ color: '#666', fontSize: '16px' }}>
                      CTO and Co-founder,
                      <br />
                      JobGet
                    </div>
                  </div>
                </div>
                <div 
                  className="client__right" 
                  style={{ 
                    width: '70%', 
                    padding: '0 20px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    borderLeft: '1px solid #e0e0e0' 
                  }}
                >
                  <p 
                    className="para" 
                    style={{ 
                      fontSize: '16px', 
                      lineHeight: '1.6', 
                      color: '#fff', 
                      fontStyle: 'italic',
                      position: 'relative',
                      paddingLeft: '20px'
                    }}
                  >
                    <span 
                      style={{ 
                        position: 'absolute', 
                        left: '0', 
                        top: '0', 
                        fontSize: '40px', 
                        color: '#007bff', 
                        lineHeight: '1' 
                      }}
                    >
                      "
                    </span>
                    We were looking for an agency that would understand the direness of the hourly
                    worker job search cycle situation when we came across Appinventiv. What we liked
                    about the team is how they did not just understand what we were looking for but also
                    gave us ideas on how we could make the process more efficient and simplified for the
                    jobseekers through their empathy mapping skillset.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Logo Carousel Remains the Same */}
        <div ref={logoRef} className="owl-carousel owl-theme owl-loaded owl-drag" id="sync2">
          <div className="owl-item">
            <div className="item">
              <div className="cl_logo">
                <figure>
                  <img alt="youcomm appinventiv client logo" loading="lazy" src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/YouCOMM-logo.svg" />
                </figure>
              </div>
            </div>
          </div>
          <div className="owl-item">
            <div className="item">
              <div className="cl_logo">
                <figure>
                  <img alt="jobget appinventiv client logo" loading="lazy" src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/jobget-cl.svg" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPanel;