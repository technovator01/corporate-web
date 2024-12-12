"use client";
import React, { useState } from "react";
import Image from "next/image";

export interface IndustryItem {
  link: string;
  image: string;
  title: string;
}

export interface TabItem {
  id: string;
  title: string;
  image: string;
  content: string;
}

const IndustriesGrid = ({
  industriesData,
}: {
  industriesData: IndustryItem[];
}) => {
  // Function to chunk array into groups of 4
  const chunkArray = (arr: IndustryItem[], size: number): IndustryItem[][] => {
    const chunks: IndustryItem[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  // Create chunks of 4 items
  const industryChunks: IndustryItem[][] = chunkArray(industriesData, 4);

  return (
    <div className="grid_colm_panel owl-carousel">
      {industryChunks.map((chunk, chunkIndex) => (
        <ul key={chunkIndex} className={`item grid-item${chunkIndex + 1}`}>
          {chunk.map((item, itemIndex) => (
            <li key={itemIndex} className="grid_colm_item">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <figure>
                  <img src={item.image} loading="lazy" />
                </figure>
                <div className="grid_colm_head">{item.title}</div>
              </a>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

// Modified FourthSection component
const FourthSection = ({ items, data }: { items: any; data: any }) => {
  const [activeTab, setActiveTab] = useState("tab3");
  const industriesData = data.get("industriesData") as IndustryItem[];
  const TabItems = data.get("tabItems") as TabItem[];

  return (
    <div className="bg_wrapper" id="industries">
      <div className="container">
        <div className="sec_gap">
          <h2 className="heading2 text-center">{items[0].industryHeading}</h2>
          <div className="app__subhead text-center">
            {items[0].industrySubHeading}
          </div>

          <IndustriesGrid industriesData={industriesData} />

          <div className="common__btn center hv_blue">
            <a className="btn_line btn-effect btn--show-modal" href="/contact">
              <span>Discuss Your Business Requirements</span>
              <svg height="10px" viewBox="0 0 13 10" width="13px">
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div className="container">
        <div className="cl_serv_part">
          <div className="ellipse1">
            <img
              alt="ellipse"
              className="desktop"
              // src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/ellipse1.webp"
              src="/"
            />
          </div>
          {/* <div className="ellipse2">
            <img 
              alt="ellipse" 
              className="desktop" 
              src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/ellipse2.webp"
            />
          </div> */}

          <h2 className="heading2">{items[0].wcuHeading}</h2>

          <div className="app__subhead sub_para">{items[0].wcuSubHeading}</div>

          <div className="parter_tab_panel">
            <div className="ds_flex flex_spc_btw">
              <div className="tab__head_panel">
                <ul>
                  {TabItems.map((tab) => {
                    return (
                      <li
                        key={tab.id}
                        className={`tab-link-wrapper ${
                          activeTab === tab.id ? "active" : ""
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        <span rel={tab.id}>{tab.title}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="part_rght_panel ds_flex flex_spc_btw">
                {TabItems.map((tab) => (
                  <div
                    key={tab.id}
                    className={`tab-detail${
                      activeTab === tab.id ? "block" : ""
                    }`}
                    id={tab.id}
                  >
                    <div className="tab_detl_inner ds_flex flex_spc_btw flex_al_start">
                      <div className="tab_img_wrap">
                        <figure>
                          <Image
                            src={tab.image}
                            alt="machine learning development company"
                            width={500} // Adjust the width based on your image
                            height={300} // Adjust the height based on your image
                            loading="lazy"
                          />
                        </figure>
                      </div>
                      <p className="para">{tab.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
