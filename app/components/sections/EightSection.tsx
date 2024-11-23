import React from 'react';

interface ProcessCard {
  number: string;
  icon: string;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

interface TechStackItem {
  icon: string;
  name: string;
}

interface Props {
  processCards: ProcessCard[];
  techStacks: TechStackItem[][];
}

const CustomApproachAI: React.FC<Props> = ({ processCards, techStacks }) => {
  return (
    <div className="bg_wrapper">
      <div className="container">
        <div className="process_card_panel">
          <h2 className="heading2">
            Our Custom Approach
            <br />
            to AI Development Services
          </h2>
          <div className="app__subhead">
            As an artificial intelligence software development company, we offer
            comprehensive services, including data
            <br />
            preparation for AI algorithms and system rollout for a large number of users. As an illustrious AI services
            company,
            <br />
            we follow an agile development approach, capable of offering a definitive value to your business.
          </div>
          <div className="service_panel">
            <div className="process_slider has-buttons owl-carousel">
              {processCards.map((card, index) => (
                <div className="item" key={index}>
                  <div className="process_card">
                    <div className="prcess__num">{card.number}</div>
                    <div className="process_card_info">
                      <figure>
                        <img
                          alt={`${card.title.toLowerCase()} in ai development services`}
                          className="card_icon"
                          loading="lazy"
                          src={card.icon}
                        />
                      </figure>
                      <h4 className="heading4">{card.title}</h4>
                      <p className="para">
                        {card.description}{' '}
                        {card.linkText && card.linkHref && (
                          <a href={card.linkHref} target="_blank" rel="noopener noreferrer">
                            {card.linkText}
                          </a>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="slider-counter">
              <i>0</i>
              <var></var>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="heading2 text-center">
          Tech Stack We Use to Deliver
          <br />
          Top-Notch AI Services
        </h2>
        <div className="grid_tech_panel owl-carousel">
          {techStacks.map((techGroup, groupIndex) => (
            <ul className="item" key={groupIndex}>
              {techGroup.map((tech, techIndex) => (
                <li className="tech_icon" key={techIndex}>
                  <figure>
                    <img alt={tech.name} loading="lazy" src={tech.icon} />
                  </figure>
                  <div className="grid_col_heading">{tech.name}</div>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomApproachAI;

export const processCards = [
    {
      number: '01 - 04',
      icon: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/discovery-icon.svg',
      title: 'Discovery',
      description:
        'The discovery stage of our AI software development services involves analyzing your business data, challenges, and potentiality to map out new business opportunities, secure use cases, and outline the course of development.',
    },
    {
      number: '02 - 04',
      icon: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/Process design.svg',
      title: 'Design',
      description:
        'During this phase, our AI app developers and designers finalize the feature set and technologies to be used while creating a working prototype to be tested.',
    },
    {
      number: '03 - 04',
      icon: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/poc-icon.svg',
      title: 'POC',
      description:
        'During the Proof of Concept phase, we, as a leading AI services company, engage in the training and tuning of artificial intelligence algorithms while continuously',
      linkText: 'testing',
      linkHref: 'https://appinventiv.com/quality-assurance/',
    },
    {
      number: '04 - 04',
      icon: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/recommendation-engines.svg',
      title: 'Implementation',
      description:
        'In this phase, the AI application is engineered based on best AI development practices. The ML model is then integrated into the app, which is then launched in the desired environment.',
    },
  ];
  
export  const techStacks = [
    [
      { icon: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/Python-tech.svg', name: 'Python' },
      { icon: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/scikit-learn-tech.svg', name: 'Scikit-learn' },
      { icon: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/aws-tech.svg', name: 'AWS' },
    ],
    [
      { icon: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/big-data-tech-new.svg', name: 'Big Data' },
      { icon: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/pandas-tech.svg', name: 'Pandas' },
      { icon: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/api-tech.svg', name: 'API' },
    ],
    // Add other groups similarly
  ];