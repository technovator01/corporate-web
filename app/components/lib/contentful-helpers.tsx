import { Asset } from "contentful";
import { client } from "./contentful";

interface HeadingEntry {
    title: string;
    subtitle: string;
  }

interface VideoEntry {
    videoUrl: string;
  }

export async function fetchHeadingContent(): Promise<HeadingEntry> {
    try {
    const response = await client.getEntries({ content_type: 'heading' });
      // Extract first entry
      const firstEntry = response.items[0];

      // Extract fields
      const fields = firstEntry?.fields;

      // Handle title extraction
      let title = '';
      if (typeof fields?.title === 'object' && fields.title !== null) {
        const titleObj = fields.title as any;
        title = titleObj.content?.[0]?.content?.[0]?.value || '';
      }
      
      // Extract subtitle
      const subtitle = fields?.subtitle as string || '';
  
      return {
        title,
        subtitle
      };
    } catch (error) {
      console.error('Failed to fetch heading content:', error);
      return {
        title: '',
        subtitle: ''
      };
    }
  }
 export  async function fetchLandingVideoContent(): Promise<VideoEntry> {
    try {
      const response = await client.getEntries<any>({ content_type: 'landingVideo' });
      
      // Type assertion to handle Contentful's complex typing
      const videoAsset = (response.items[0].fields.video as Asset[])[0];
      
      const videoUrl = videoAsset?.fields?.file?.url
        ? `https:${videoAsset.fields.file.url}`
        : '';
  
      return {
        videoUrl
      };
    } catch (error) {
      console.error('Failed to fetch landing video content:', error);
      return {
        videoUrl: ''
      };
    }
  }

  export function VideoBanner({ videoEntry }: { videoEntry: VideoEntry }) {
    return (
      <div className="case_full_banner">
        <video
          autoPlay
          className="video-wrapper"
          loop
          muted
          poster="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/chicago-banner.webp"
        >
          {/* Use videoEntry.videoUrl to access the URL */}
          <source src={videoEntry.videoUrl} type="video/mp4" />
        </video>
      </div>
    );
  }