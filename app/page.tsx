'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Header } from './components/layout/header';
import { Footer } from './components/layout/footer';


export default function AIServicesPage() {
  return (
    <div className="portfolio_page scroll-container">
      <Header />
      
      <main>
        <div className="bg_lines"></div>
        <div className="pin_spacers"></div>

        <div className="top_head_wrap bg_wrapper">
          <div className="container">
            <div className="top_content_wrap">
              <h1 id="ai-development-services" className="heading1">
                AI Development Services
              </h1>
              
              <div className="app__subhead">
                Leverage our state-of-the-art custom AI services that 
                automate mundane processes and strengthen business intelligence
              </div>

              <div className="common__btn hv_blue">
                <a href="#" className="btn_line btn-effect btn--show-modal">
                  Consult Our AI Experts
                </a>
              </div>
            </div>

            {/* Video Banner */}
            <div className="case_full_banner">
  <video
    autoPlay
    className="video-wrapper"
    loop
    muted
    poster="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/chicago-banner.webp"
  >
    <source 
      src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/video/ai-ml-new.mp4" 
      type="video/mp4"
    />
    <source 
      src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/video/ai-ml-new.ogg" 
      type="video/ogg"
    />
  </video>
</div>

            {/* Client Logos */}
            <div className="client_logos">
              <div className="trusted_brands horizontal_line text-center">
                Trusted by conglomerates, enterprises, and startups alike
              </div>

              <div className="client-logo-slider owl-carousel">
                {['kfc', 'kpmg', 'dominos'].map((client) => (
                  <div key={client} className="item">
                    <Image 
                      src={`https://appinventiv.com/wp-content/uploads/2024/01/${client}-logo.svg`} 
                      alt={`${client} logo`} 
                      width={100} 
                      height={50} 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <AIServiceSection />
        <CompanyStats />
      </main>

      <Footer />
    </div>
  );
}

const AIServiceSection = () => {
  const [activeTab, setActiveTab] = useState('1'); // Default active tab

  const services = [
    {
      id: '1',
      icon: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/generative-ai.svg',
      title: 'Generative AI',
      description: 'As one of the top-rated AI software development companies, we have extensive experience in developing Generative AI solutions with advanced capabilities such as GPT4, GPT3, GPT 3.5, Midjourney, and DALL-E.'
    },
    {
      id: '2',
      icon: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/generative-ai.svg',
      title: 'ML Science',
      description: 'As one of the top-rated AI software development companies, we have extensive experience in developing Machine Learning (ML) solutions including natural language processing (NLP), computer vision, and more.'
    },
    // Add other services if necessary
  ];

  return (
    <section className="bg_wrapper">
      <div className="container">
        <h2 className="heading2">
          Artificial Intelligence Development
          <br />
          Services We Offer
        </h2>

        <div className="app__subhead sub_para">
          Our AI development services are known to unlock the potential of vast amounts of data for driving tangible business results.
          <br />
          Being a renowned AI solutions company, we specialize in leveraging the power of AI to transform raw data into actionable insights,
          <br />
          paving the way for operational efficiency and enhanced decision-making. Here are our reliably intelligent
          <h3 className="heading_inline">AI services</h3>
          that
          <br />
          can convert your vision into reality.
        </div>

        <div className="services_container">
          {/* Left Section: Service List */}
          <div className="services_lt">
            <ul className="scroll_list" id="scroll_list">
              {services.map(service => (
                <li
                  key={service.id}
                  className={`tab-link ${activeTab === service.id ? 'current' : ''}`}
                  onClick={() => setActiveTab(service.id)} // Update active tab on click
                >
                  <span data-tab={service.id}>
                    <span className="scroll_list_num">
                      {service.id}.
                    </span>
                    {service.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section: Service Details */}
          <div className="services_rt">
            {services.map(service => (
              <div
                key={service.id}
                id={service.id}
                className={`tab-content ${activeTab === service.id ? 'current' : ''}`}
                style={{ display: activeTab === service.id ? 'block' : 'none' }} // Only show the active tab content
              >
                <figure>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={100}
                    height={100}
                    loading="lazy"
                  />
                </figure>
                <div className="serv_card_head">{service.title}</div>
                <p className="card_para">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


const CompanyStats = () => {
  const stats = [
    { value: '8+', label: 'Years of Experience' },
    { value: '3000+', label: 'Successful Projects Delivered' },
    { value: '1200+', label: 'Software Development Experts' },
    { value: '25+', label: 'Countries Served' }
  ];

  return (
    <section className="container">
      <div className="stats_wrap pad_gap">
        <div className="states_panel">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="digits">{stat.value}</div>
              <div className="stats-head">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="common__btn blk hv_blue">
          <a href="#" className="btn_line btn-effect btn--show-modal">
            Transform Your Business
          </a>
        </div>
      </div>
    </section>
  );
};
