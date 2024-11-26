import React from 'react';
import { client } from '../lib/contentful';

interface AiServiceCard {
  imageUrl: string;
  title: string;
  description: string;
}

interface AiServiceSection{
  title:any,
  subtitle:any,
  cards:AiServiceCard[]
}

const ThirdSection = ({ title, subtitle, cards }: AiServiceSection) => {
  return (
    <div className="container">
      <div className="advanced_tech">
        <h2 className="heading2 blk text-center">
          {title}
        </h2>
        
        <div className="app__subhead blk text-center">
          {subtitle}
        </div>

        <div className="grid_col3">
          {cards.map((service) => (
            <div className="tech_card">
              <figure>
                <img 
                  src={service.imageUrl}
                  loading="lazy"
                />
              </figure>
              
              <h4 className="heading4">
                {service.title}
              </h4>
              
              <div className="para">
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;