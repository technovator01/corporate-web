import { GetStaticProps } from 'next';
import { Asset } from "contentful";
import { client } from "../lib/contentful";
import Image from 'next/image';
import { getData } from '../api/getLandingPageData';
import ClientLogosCarousel from './clientlogocarousel';

// Interfaces
interface LandingPageProps {
  title: string;
  subtitle: string;
  videoUrl: string;
}


// Main Component
export default async function LandingPage() {
    const { title, subtitle, videoUrl } = await getData();
  return (
    <div className="top_head_wrap bg_wrapper">
      <div className="container">
        <div className="top_content_wrap">
          <h1 id="ai-development-services" className="heading1">
            {title}
          </h1>
          
          <div className="app__subhead">
            {subtitle}
          </div>
          
          <div className="common__btn hv_blue">
            <a href="#" className="btn_line btn-effect btn--show-modal">
              Consult Our AI Experts
            </a>
          </div>
        </div>
        
        {/* Video Banner */}
        <VideoBanner videoUrl={videoUrl} />
        
        {/* Client Logos */}
       <ClientLogosCarousel/>
      </div>
    </div>
  );
}

// VideoBanner Component
function VideoBanner({ videoUrl }: { videoUrl: string }) {
  return (
    <div className="case_full_banner">
      <video
        autoPlay
        className="video-wrapper"
        loop
        muted
        poster="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/chicago-banner.webp"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
}

// getStaticProps
export const getStaticProps: GetStaticProps<LandingPageProps> = async () => {
  try {
    // Fetch heading content
    const headingResponse = await client.getEntries({ content_type: 'heading' });
    const headingFields = headingResponse.items[0]?.fields;
    
    let title = '';
    if (typeof headingFields?.title === 'object' && headingFields.title !== null) {
      const titleObj = headingFields.title as any;
      title = titleObj.content?.[0]?.content?.[0]?.value || '';
    }
    
    const subtitle = headingFields?.subtitle as string || '';

    // Fetch video content
    const videoResponse = await client.getEntries<any>({ content_type: 'landingVideo' });
    const videoAsset = (videoResponse.items[0].fields.video as Asset[])[0];
    const videoUrl = videoAsset?.fields?.file?.url
      ? `https:${videoAsset.fields.file.url}`
      : '';

    return {
      props: {
        title,
        subtitle,
        videoUrl,
      },
      // Optional: Enable ISR by adding revalidate
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Failed to fetch content:', error);
    return {
      props: {
        title: '',
        subtitle: '',
        videoUrl: '',
      },
      // Optional: Enable ISR by adding revalidate
      revalidate: 60,
    };
  }
};
