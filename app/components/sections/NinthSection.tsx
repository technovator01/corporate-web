import React from "react";

interface RecognitionProps {
  title: string;
  description: string;
  recognitions: {
    alt: string;
    src: string;
  }[];
  links: {
    text: string;
    href: string;
  }[];
}

const Recognition: React.FC<RecognitionProps> = ({
  title,
  description,
  recognitions,
  links,
}) => {
  return (
    <div className="container">
      <div className="our_recognitions text-center">
        <h2 className="heading2 blk">{title}</h2>
        <div className="para blk">
          {description.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line.trim()}
              <br />
            </React.Fragment>
          ))}
          {links.map((link, index) => (
            <a href={link.href} target="_blank" rel="noopener noreferrer" key={index}>
              {link.text}
            </a>
          ))}
        </div>
        <div className="owl-carousel owl-theme recog_grid_panel">
          {recognitions.map((recognition, index) => (
            <div className="item" key={index}>
              <div className="recog_col">
                <figure>
                  <img alt={recognition.alt} src={recognition.src} />
                </figure>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recognition;

export const recognitionsData = {
    title: "Our Awards and Recognitions",
    description: `As a dedicated AI development services provider, we have partnered with clients
  across the globe in building and scaling their digital products by leveraging the power
  of disruptive technologies including artificial intelligence,`,
    recognitions: [
      {
        alt: "Top mobile app developers award- clutch",
        src: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/clutchbadge.svg",
      },
      {
        alt: "Business of apps",
        src: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/Business-of-Apps.webp",
      },
      {
        alt: "Mobile app daily",
        src: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/mad-certification.webp",
      },
      {
        alt: "Top software development company award- goodfirms",
        src: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/good-firm-certification.webp",
      },
      {
        alt: "Top software developers award- The menifest",
        src: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/menifest-certification.webp",
      },
      {
        alt: "India growth champion",
        src: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/india-growth-logo.svg",
      },
      {
        alt: "Times business Awards",
        src: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/times-business-awards.webp",
      },
    ],
    links: [
      { text: "cloud", href: "https://appinventiv.com/cloud-services/" },
      {
        text: "data science & analytics",
        href: "https://appinventiv.com/data-science-analytics-services/",
      },
      { text: "AR/VR", href: "https://appinventiv.com/ar-vr-app-development/" },
      { text: "IoT", href: "https://appinventiv.com/iot-app-development/" },
      {
        text: "blockchain",
        href: "https://appinventiv.com/blockchain-application-development/",
      },
      {
        text: "metaverse",
        href: "https://appinventiv.com/metaverse-development-service/",
      },
    ],
  };
  