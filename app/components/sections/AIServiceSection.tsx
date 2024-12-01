'use client'
import { useState } from "react";
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
                    {/* Left Section: Service List */}
                    <div className="services_lt">
                        <ul className="scroll_list" id="scroll_list">
                            {services.map((service, index) => (
                                <li
                                    key={service.id}
                                    className={`tab-link ${activeTab === service.id ? 'current' : ''}`}
                                    onClick={() => setActiveTab(service.id)}
                                >
                                    <span data-tab={service.id}>
                                        <span className="scroll_list_num">
                                            {index + 1}.
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
                </div>
            </div>
        </section>
    );
};

export default AIServiceSection;