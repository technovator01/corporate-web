'use server'
import { Asset } from "contentful";
import { client } from "../lib/contentful";
import { SectionHeading, SuccessStoriesProps, SuccessStory } from "../sections/SuccessStoriesClientWraper";
import { Recognition } from "../sections/NinthSection";
import { FAQ, FAQSection } from "../sections/Eleventh";
import { Entry } from 'contentful';
import { IndustryItem, TabItem } from "../sections/FourthSection";
import { CTAData } from "../sections/FifthSection";
import { Blog } from "../sections/TwelthSection";

export async function getData() {
    try {
        const headingResponse = await client.getEntries({ content_type: 'heading' });
        const videoResponse = await client.getEntries<any>({ content_type: 'landingVideo' });
        const servicesResponse = await client.getEntries({ content_type: 'aiServices' }); // Add this
        const servicesHeadResponse = await client.getEntries({ content_type: 'aiServicesSection' }); // Add this

        let title = '';
        const headingFields = headingResponse.items[0]?.fields;

        if (typeof headingFields?.title === 'object' && headingFields.title !== null) {
            const titleObj = headingFields.title as any;
            title = titleObj.content?.[0]?.content?.[0]?.value || '';
        }

        const subtitle = headingFields?.subtitle as string || '';

        // Fetch video content
        const videoAsset = (videoResponse.items[0].fields.video as Asset[])[0];
        const videoUrl = videoAsset?.fields?.file?.url
            ? `https:${videoAsset.fields.file.url}`
            : '';
        // Fetching Logo Urls
        const logoHeading = videoResponse.items[0].fields.logoHeading as string;

        const logoArray = videoResponse.items[0].fields.logoCarousel; // Assuming this is an array

        const logoUrls: string[] = [];

        // Type guard to check if an item is an object with a "fields" property
        function hasFields(item: any): item is { fields: { file: { url: string } } } {
            return item && typeof item === 'object' && 'fields' in item && 'file' in item.fields && 'url' in item.fields.file;
        }

        // Iterate through the array using a for...of loop
        if (Array.isArray(logoArray)) {
            for (const logoItem of logoArray) {
                // Check if the logoItem has the required structure
                if (hasFields(logoItem)) {
                    const logoUrl = logoItem.fields.file.url ? `https:${logoItem.fields.file.url}` : '';
                    if (logoUrl) {
                        logoUrls.push(logoUrl);
                    }
                }
            }
        }

        // Format services data
        const serviceheading = servicesHeadResponse.items[0]?.fields?.heading as string || '';
        const servicesubheading = servicesHeadResponse.items[0]?.fields?.subheading as string || '';
        const services = servicesResponse.items.map((item: any) => ({
            id: item.sys.id,
            title: item.fields.title,
            description: item.fields.description,
            icon: `https:${item.fields.icon.fields.file.url}`
        }));
        return {
            title,
            subtitle,
            videoUrl,
            logoHeading,
            logoUrls,
            services, // Add this
            serviceheading,
            servicesubheading
        };
    } catch (error) {
        console.error('Failed to fetch content:', error);
        return {
            title: '',
            subtitle: '',
            videoUrl: '',
            services: [] // Add this
        };
    }
}

export async function getAIData() {
    try {
        const aiCardResponse = await client.getEntries({ content_type: 'aiCardsSection' });

        // Ensure the response structure is correct
        const fields = aiCardResponse.items[0]?.fields;

        // Extract title and subtitle
        const title = fields?.title || '';
        const subtitle = fields?.subtitle || '';

        // Ensure cards is an array before mapping
        const cards = Array.isArray(fields?.cards)
            ? fields.cards.map((card: any) => ({
                imageUrl: `https:${card.fields.icon.fields.file.url}`,
                title: card.fields.title,
                description: card.fields.description,
            }))
            : [];

        return {
            title,
            subtitle,
            cards,
        };
    } catch (error) {
        console.error('Failed to fetch content:', error);
        return {
            title: '',
            subtitle: '',
            cards: [],
        };
    }
}

export async function getSuccessStories() {
    const successStoriesResponse = await client.getEntries({ content_type: 'successStoriesPage' });

    return parseSuccessStories(successStoriesResponse);
}

function parseSuccessStories(successStoriesResponse: any): SuccessStoriesProps {
    // Extract the 0th item from the items array
    const item = successStoriesResponse.items[0];

    // Parse the heading
    const heading: SectionHeading = {
        title: item.fields.successStoryHeading.fields.title,
        subtitle: item.fields.successStoryHeading.fields.subtitle
    };

    // Parse the success stories
    const stories: SuccessStory[] = item.fields.successStory.map((story: any) => ({
        logo: {
            type: story.fields.logo.type,
            content: story.fields.logo.type === 'image'
                ? story.fields.logo.content
                : '/images/default-logo.svg' // Provide a default logo path if needed
        },
        description: story.fields.description,
        result: {
            value: story.fields.result.value,
            description: story.fields.result.description
        },
        link: story.fields.link || '/portfolio', // Provide a default link if none exists
        image: `https:${story.fields.image?.fields?.file?.url}` || '' // Use optional chaining and provide empty string if no image
    }));

    return {
        heading,
        stories
    };
}

export async function getRecognitions(): Promise<Recognition> {
    try {
        const recognitionResponse = await client.getEntries({
            content_type: 'awardSection',
            limit: 1,
        });

        // Extract the first item
        const item = recognitionResponse.items[0];

        // Validate and transform certifications to URL array
        const certifications =
            Array.isArray(item.fields.certifications)
                ? item.fields.certifications.map((cert: any) =>
                    cert?.fields?.file?.url ? `https:${cert.fields.file.url}` : ''
                )
                : [];

        // Ensure heading and subheading are strings
        const title = typeof item.fields.heading === 'string' ? item.fields.heading : '';
        const description =
            typeof item.fields.subheading === 'string'
                ? item.fields.subheading.replace(/\n/g, ' ')
                : '';

        // Create the recognition object
        const recognitionsData: Recognition = {
            title,
            description,
            certifications,
        };

        return recognitionsData;
    } catch (error) {
        console.error('Error fetching recognitions:', error);
        throw error;
    }
}

export async function getFAQ(): Promise<{ heading: string; faqs: FAQ[] }> {
    try {
        const FAQResponse = await client.getEntries({
            content_type: 'faqPage',
            limit: 1,
        });

        // Extract fields from the first item
        const fields = FAQResponse.items[0]?.fields;

        if (!fields) {
            throw new Error('No FAQ data found');
        }

        // Validate heading
        const heading: string = typeof fields.heading === 'string' ? fields.heading : 'Frequently Asked Questions';

        // Validate and extract FAQs
        const faqs: FAQ[] = Array.isArray(fields.faqs)
            ? fields.faqs.map((faq: any) => ({
                question: typeof faq.fields?.question === 'string' ? faq.fields.question : '',
                answer: typeof faq.fields?.answer === 'string' ? faq.fields.answer : '',
            }))
            : [];

        return { heading, faqs };
    } catch (error) {
        console.error('Error fetching FAQs:', error);
        return { heading: '', faqs: [] };
    }
}

interface LogoAsset {
    fields: {
        file: {
            url: string;
        }
    }
}

export async function fetchNavbarItems() {
    try {
        const response = await client.getEntries({ content_type: 'websiteNavbar' });

        const menuItems = response.items[0]?.fields?.menuItems as string[] || [];

        // Type guard to check if logo is an Asset
        const logoAsset = response.items[0]?.fields?.logo;
        let logoUrl: string | null = null;

        if (logoAsset && typeof logoAsset === 'object' && 'fields' in logoAsset) {
            const logo = logoAsset as LogoAsset;
            logoUrl = logo.fields.file.url ? `https:${logo.fields.file.url}` : null;
        }

        return {
            menuItems,
            logoUrl
        };
    } catch (error) {
        console.error('Failed to fetch navbar items:', error);
        return {
            menuItems: [],
            logoUrl: null
        };
    }
}
export interface Stat {
    value: string;
    label: string;
}

export async function getStats(): Promise<Stat[]> {
    try {
        const StatsResponse = await client.getEntries({ content_type: 'companyStats' });
        const extractedStats: Stat[] = StatsResponse.items.map((item: Entry) => ({
            value: `${item.fields.value}+`,
            label: String(item.fields.label)
        }));
        return extractedStats;
    } catch (error) {
        return [];
    }
}

export async function getIndustries() {
    try {
        const IndustryItemResponse = await client.getEntries({ content_type: 'industriesPage' });

        // Assuming the API returns an array of entries
        const items = IndustryItemResponse.items.map((item: any) => {
            const industrySection = item.fields.industrySection?.fields || {};
            const whyChooseUs = item.fields.whyChooseUs?.fields || {};

            return {
                industryHeading: industrySection.heading,
                industrySubHeading: industrySection.subheading,
                wcuHeading: whyChooseUs.heading,
                wcuSubHeading: whyChooseUs.subheading,
            };
        });

        return items; // Return the mapped array of objects
    } catch (error) {
        console.error("Error fetching industries:", error);
        throw error; // Propagate the error for handling by the caller
    }
}

export async function getIndustryPageData(): Promise<Map<string, IndustryItem[] | TabItem[]>> {
    try {
        // Fetch data from the `industryItem` content type
        const IndustryItemResponse = await client.getEntries({ content_type: 'industryItem' });
        const wcuItemResponse = await client.getEntries({ content_type: 'whyChooseUsTabs' });

        // Map through `industryItem` to extract and transform data
        const industriesData: IndustryItem[] = IndustryItemResponse.items.map((item: any) => {
            const fields = item.fields || {};
            const imageFields = fields.image?.fields || {};
            const fileUrl = imageFields.file?.url || "";

            return {
                link: fields.link || "",
                image: fileUrl.startsWith("//") ? `https:${fileUrl}` : fileUrl, // Convert to absolute URL
                title: fields.title || "",
            };
        });

        // Map through `whyChooseUsTabs` to extract and transform data
        const tabItems: TabItem[] = wcuItemResponse.items.map((item: any) => {
            const fields = item.fields || {};
            const imageFields = fields.image?.fields || {};
            const fileUrl = imageFields.file?.url || "";

            return {
                id: fields.id || "", // Use the system ID as the unique identifier
                title: fields.title || "",
                image: fileUrl.startsWith("//") ? `https:${fileUrl}` : fileUrl, // Convert to absolute URL
                content: fields.content || "",
            };
        });

        // Create a map to store both IndustryItem and TabItem data
        const dataMap = new Map<string, IndustryItem[] | TabItem[]>();
        dataMap.set("industriesData", industriesData);
        dataMap.set("tabItems", tabItems);

        return dataMap; // Return the map containing both data sets
    } catch (error) {
        console.error("Error fetching industry page data:", error);
        throw error; // Propagate the error for handling by the caller
    }
}

export async function getCTAPageData(): Promise<CTAData> {
    try {
        // Fetch data from the `cta` content type
        const CTAResponse: any = await client.getEntries({ content_type: 'cta' });

        // Ensure the response contains items
        if (CTAResponse.items.length > 0) {
            const firstItem = CTAResponse.items[0] as any; // Explicitly cast to `any` to access `fields`
            const fields = firstItem.fields || {};
            const imageFields = fields.image?.fields || {};
            const fileUrl = imageFields.file?.url || "";

            return {
                heading: fields.heading || "",
                subheading: fields.subheading || "",
                buttonText: fields.buttonText || "",
                image: fileUrl.startsWith("//") ? `https:${fileUrl}` : fileUrl, // Convert to absolute URL
            };
        }
        return { heading: '', subheading: '', buttonText: '', image: '' };
    } catch (error) {
        console.error("Error fetching CTA page data:", error);
        throw error; // Propagate the error for handling by the caller
    }
}

export async function getBlogs() {
    try {
        const blogResponse = await client.getEntries({ content_type: 'blogs' });
        const blogsRes = await client.getEntries({ content_type: 'blog' });

        const blogheading = blogResponse.items[0].fields.blogHeading;

        const blogItems: Blog[] = blogsRes.items.map((item: any) => {
            const fields = item.fields || {};
            const imageFields = fields.image?.fields || {};
            const fileUrl = imageFields.file?.url || "";

            return {
                title: fields.title || "",
                image: fileUrl.startsWith("//") ? `https:${fileUrl}` : fileUrl, // Convert to absolute URL
                link: fields.link || "",
            };
        });

        return {
            blogItems,
            blogheading
        }
    } catch {
        
    }

}

interface FooterData {
    about: string[];
    agency: string;
    copyright: string;
    legalinfo: string;
  }
  
  export async function getFooter(): Promise<FooterData> {
    try {
      const footerResponse = await client.getEntries({ content_type: "footer" });
  
      // Extract fields with type safety and default values
      const about = (footerResponse.items[0]?.fields?.about as string[]) || [];
      const agency = (footerResponse.items[0]?.fields?.agency_name as string) || "";
      const copyright = (footerResponse.items[0]?.fields?.copyright as string) || "";
      const legalinfo = (footerResponse.items[0]?.fields?.legalinfo as string) || "";
  
      return { about, agency, copyright, legalinfo };
    } catch (error) {
      console.error("Error fetching footer data:", error);
  
      // Return default values to prevent `undefined`
      return {
        about: [],
        agency: "",
        copyright: "",
        legalinfo: "",
      };
    }
  }
  