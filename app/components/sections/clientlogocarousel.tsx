'use client'
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const ClientLogosCarousel = () => {
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
        Trusted by conglomerates, enterprises, and startups alike
      </div>
      <div ref={carouselRef} className="client-logo-slider flex">
        <div className="item">
          <img alt="Appinventiv's Clients - KFC" src="https://appinventiv.com/wp-content/uploads/2024/01/kfc-logo.svg" />
        </div>
        <div className="item">
          <img alt="Appinventiv's Clients - KPMG" src="https://appinventiv.com/wp-content/uploads/2024/01/kpmg-logo.svg" />
        </div>
        <div className="item">
          <img alt="Appinventiv's Clients - Domino's" src="https://appinventiv.com/wp-content/uploads/2024/01/dominos-logo.svg" />
        </div>
        <div className="item">
          <img alt="Appinventiv's Clients - Google" src="https://appinventiv.com/wp-content/uploads/2024/01/google-logo.svg" />
        </div>
        <div className="item">
          <img alt="Appinventiv's Clients - BCG" src="https://appinventiv.com/wp-content/uploads/2024/01/bcg-logo.svg" />
        </div>
        <div className="item">
          <img alt="Appinventiv's Clients - Americana" src="https://appinventiv.com/wp-content/uploads/2024/01/americana-logo.svg" />
        </div>
      </div>
    </div>
  );
};

export default ClientLogosCarousel;