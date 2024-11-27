import React from "react";

export interface Recognition {
  title: string;
  description: string;
  certifications: string[];
}

const Recognition: React.FC<Recognition> = ({
  title,
  description,
  certifications,
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

        </div>
        <div className="owl-carousel owl-theme recog_grid_panel">
          {certifications.map((recognition, index) => (
            <div className="item" key={index}>
              <div className="recog_col">
                <figure>
                  <img src={recognition} />
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

// export const recognitionsData = {
//     title: "Our Awards and Recognitions",
//     description: `As a dedicated AI development services provider, we have partnered with clients
//   across the globe in building and scaling their digital products by leveraging the power
//   of disruptive technologies including artificial intelligence,`,
//     certifications: [ "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/clutchbadge.svg",
//       "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/Business-of-Apps.webp",
//       "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/mad-certification.webp",
//       "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/good-firm-certification.webp",
//       "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/india-growth-logo.svg",
//       // {
//       //   alt: "Top mobile app developers award- clutch",
//       //   src: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/clutchbadge.svg",
//       // },
//       // {
//       //   alt: "Business of apps",
//       //   src: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/Business-of-Apps.webp",
//       // },
//       // {
//       //   alt: "Mobile app daily",
//       //   src: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/mad-certification.webp",
//       // },
//       // {
//       //   alt: "Top software development company award- goodfirms",
//       //   src: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/good-firm-certification.webp",
//       // },
//       // {
//       //   alt: "Top software developers award- The menifest",
//       //   src: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/menifest-certification.webp",
//       // },
//       // {
//       //   alt: "India growth champion",
//       //   src: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/india-growth-logo.svg",
//       // },
//       // {
//       //   alt: "Times business Awards",
//       //   src: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/times-business-awards.webp",
//       // },
//     ],
//   };