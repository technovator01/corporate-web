'use client'
import { useState, useEffect } from "react";
import Image from "next/image";

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface AIServiceSectionProps {
  services: Service[];
}

const AIServiceSection = ({ services }: AIServiceSectionProps) => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile view
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Initialize on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [activeTab, setActiveTab] = useState(services[0]?.id || ''); // Default to first service

  return (
    <section className="bg_wrapper" id="services">
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
          <h3 className="heading_inline"> AI services </h3>
          that
          <br />
          can convert your vision into reality.
        </div>

        <div className="services_container">
          {isMobile ? (
            // Mobile view: Display all tabs row-wise
            <div className="services_rt row-layout">
              {services.map(service => (
                <div key={service.id} id={service.id} className="tab-content current">
                  <figure>
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={100}
                      height={100}
                      loading="lazy"
                    />
                  </figure>
                  <div>
                    <div className="serv_card_head">{service.title}</div>
                    <p className="card_para">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Desktop view: Original layout
            <>
              <div className="services_lt">
                <ul className="scroll_list" id="scroll_list">
                  {services.map((service, index) => (
                    <li
                      key={service.id}
                      className={`tab-link ${activeTab === service.id ? 'current' : ''}`}
                      onClick={() => setActiveTab(service.id)}
                    >
                      <span data-tab={service.id}>
                        <span className="scroll_list_num">{index + 1}.</span>
                        {service.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="services_rt">
                {services.map(service => (
                  <div
                    key={service.id}
                    id={service.id}
                    className={`tab-content ${activeTab === service.id ? 'current' : ''}`}
                    style={{ display: activeTab === service.id ? 'block' : 'none' }}
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
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        .services_container {
          display: flex;
          flex-direction: ${isMobile ? 'column' : 'row'};
          gap: 20px;
        }

        .services_rt.row-layout {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .services_rt.row-layout .tab-content {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          width: 120%;
        }

        .services_rt.row-layout figure {
            width: 270px; /* Increase the width of the icon */
        }

        .services_rt.row-layout .serv_card_head {
          font-size: 1.2rem;
          font-weight: bold;
        }

        .services_rt.row-layout .card_para {
          font-size: 0.9rem;
          color: #666;
        }

        @media (min-width: 768px) {
          .services_rt.row-layout {
            display: none; /* Hide the mobile layout on desktop */
          }

          .services_container {
            flex-direction: row; /* For desktop, side-by-side layout */
          }
        }
      `}</style>
    </section>
  );
};

export default AIServiceSection;
