'use client'
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const ClientLogosCarousel = ({ logoheading, logoUrl }: { logoheading?: string, logoUrl?: string[] }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const items = carousel.querySelectorAll('.item');

      gsap.set(items, { display: 'inline-block', width: '200px' });

      const tl = gsap.timeline({ repeat: -1 });
      tl.to(carousel, {
        x: '-=100%',
        duration: 5,
        ease: 'linear',
        onComplete: () => {
          gsap.set(carousel, { x: 0 });
        }
      });
    }
  }, []);

  return (
    <div className="client_logos">
      <div className="trusted_brands horizontal_line text-center">
        {logoheading}
      </div>
      {/* <div ref={carouselRef} className="client-logo-slider flex">
      {logoUrl?.map((logo, index) => (
        <div key={index} className="item">
          <img src={logo}/>
        </div>
      ))}
    </div> */}
    </div>
  );
};

export default ClientLogosCarousel;