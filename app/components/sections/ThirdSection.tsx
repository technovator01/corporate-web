import React from 'react';

// Data structure for the services
const aiServices = [
  {
    id: 1,
    title: "Machine Learning",
    image: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/machine-learning-new.svg",
    altText: "machine learning development",
    description: "Being one of the leading AI development companies, our team applies its extensive knowledge in supervised, unsupervised, and reinforcement machine learning to develop intelligent systems that require minimal human intervention yet make optimal decisions."
  },
  {
    id: 2,
    title: "Deep Learning",
    image: "/images/deep-learning.svg",
    altText: "deep learning by appinventiv",
    description: "As a dedicated AI software development company, we are capable of leveraging the capabilities of multi-layered neural networks to design custom AI solutions that can replicate and surpass the operations of a human brain."
  },
  {
    id: 3,
    title: "Natural Language Processing",
    image: "/images/natural-language-processing.svg",
    altText: "NLP-related custom ai development services",
    description: "We are an artificial intelligence development company that can help transform your user experience by driving NLP-related custom AI solutions with capabilities like real-time speech recognition and conversation AI."
  },
  {
    id: 4,
    title: "Robotic Process Automation",
    image: "/images/robotic-process-automation.svg",
    altText: "Robotic Process Automation solutions by appinventiv",
    description: "Our AI software development services are capable of offering Robotic Process Automation solutions that can help you increase your overall business efficiency, reduce errors, increase agility, and improve employee productivity."
  },
  {
    id: 5,
    title: "Computer Vision and OCR",
    image: "/images/computer-vision-and-ocr.svg",
    altText: "Computer Vision and OCR by Appinventiv",
    description: "We are an AI development company that specializes in developing AI solutions that accurately recognize and interpret visual information. As a top-tiered AI solution provider, our expertise revolves around biometric authentication, video monitoring, and analysis that guarantees reliable and efficient security solutions."
  }
];

const ThirdSection = () => {
  return (
    <div className="container">
      <div className="advanced_tech">
        <h2 className="heading2 blk text-center">
          Accelerate Business Growth with
          <br/>
          Our Expansive AI Know-How
        </h2>
        
        <div className="app__subhead blk text-center">
          Our AI services have been optimizing business operations for the past 8+ years. As a dedicated
          <br/>
          <h3 className="heading_inline">
            AI development company
          </h3>
          , we have been helping businesses utilize the latest artificial intelligence
          <br/>
          tools and technologies to achieve exponential growth.
        </div>

        <div className="grid_col3">
          {aiServices.map((service) => (
            <div key={service.id} className="tech_card">
              <figure>
                <img 
                  src={service.image}
                  alt={service.altText}
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