import React from 'react';
import Image from 'next/image';
import { SectionHeading, SuccessStory } from '../shared/types';

interface SuccessStoriesProps {
  heading: SectionHeading;
  stories: SuccessStory[];
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({ heading, stories }) => {
  // Helper function to split and render title lines
  const renderTitleLines = (title: string) => {
    return title.split('<br/>').map((line: string, index: number) => (
      <React.Fragment key={index}>
        {line}
        {index < title.split('<br/>').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="bg_wrapper">
      <div className="cl_success_stories">
        <h2 className="heading2 text-center">
          {renderTitleLines(heading.title)}
        </h2>
        <div className="app__subhead text-center">
          {heading.beforeHighlight}
          <h3 className="heading_inline">
            {heading.highlight}
          </h3>
          {heading.afterHighlight}
        </div>
      </div>
      <div className="case_study_panel">
        <div className="case_scoll_sec">
          <span 
            className="block_bubble ds_flex flex_al_center flex_center" 
            data-scroll 
            data-scroll-repeat="true"
          >
            Scroll
          </span>
          {stories.map((story: SuccessStory, index: number) => (
            <section className="panel" key={index}>
              <div className="portfolio_info">
                <div className="ds_flex flex_spc_btw flex_al_center">
                  <div className="port__left">
                    <div className="port_logo">
                      {story.logo?.type === 'image' ? (
                        <figure>
                          <img 
                            src={story.logo.content} 
                            alt="client logo"
                            loading="lazy"
                          />
                        </figure>
                      ) : (
                        <h4 className="heading2">{story.logo?.content}</h4>
                      )}
                    </div>
                    <p 
                      className="para" 
                      dangerouslySetInnerHTML={{ __html: story.description }} 
                    />
                    <div className="stats_text wht result">
                      <br />
                      Result
                    </div>
                    <div className="port_stats">
                      <div className="states_head">
                        <span>{story.result.value}</span>
                        <div className="stats_text">
                          {story.result.description}
                        </div>
                      </div>
                    </div>
                    <div className="common__btn hv_blue">
                      <a 
                        className="btn_line btn-effect" 
                        href={story.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Read Success Story</span>
                        <svg height="10px" viewBox="0 0 13 10" width="13px">
                          <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className={`port__rght ${story.imageClass}`}></div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;

export const successStoriesData: {
    heading: SectionHeading;
    stories: SuccessStory[];
  } = {
    heading: {
      title: "How Our Clients Leverage AI to<br/>Innovate Instantly and Flourish Globally",
      beforeHighlight: "Our commitment to delivering quality work that meets custom requirements has consistently exceeded expectations. Here are a few noteworthy projects we have undertaken as an ",
      highlight: "AI software<br/>development company",
      afterHighlight: "that speak volumes and guarantee maximum ROI."
    },
    stories: [
      {
        logo: {
          type: 'image',
          content: '/images/jobget-port-logo.svg'
        },
        description: 'As a trusted provider of <a href="/mobile-app-development">mobile app development service</a>, we made the employment landscape easy and accessible<br/>for blue-collar workers with the help of a dedicated<br/>employment portal.',
        result: {
          value: '$52 Million',
          description: 'in Series B Funding'
        },
        link: '/portfolio/jobget-job-search-app',
        imageClass: 'img1'
      },
      {
        logo: {
          type: 'image',
          content: '/images/ikea-logo.svg'
        },
        description: 'Developed an innovative AI-powered solution for automated<br/>furniture recognition and placement visualization.',
        result: {
          value: '40% Increase',
          description: 'in Customer Engagement'
        },
        link: '/portfolio/ikea-ar-solution',
        imageClass: 'img2'
      },
      {
        logo: {
          type: 'text',
          content: 'TechStart'
        },
        description: 'Built a scalable machine learning platform for predictive<br/>analytics and real-time decision making.',
        result: {
          value: '3x Growth',
          description: 'in Processing Efficiency'
        },
        link: '/portfolio/techstart-ml-platform',
        imageClass: 'img3'
      }
    ]
  };