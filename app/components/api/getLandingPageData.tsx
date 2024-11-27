'use server'
import { Asset } from "contentful";
import { client } from "../lib/contentful";
import { SectionHeading, SuccessStoriesProps, SuccessStory } from "../sections/SuccessStoriesClientWraper";
import { error, log } from "console";
import { Recognition } from "../sections/NinthSection";
import { FAQ, FAQSection } from "../sections/Eleventh";

export async function getData() {
    try {
        const headingResponse = await client.getEntries({ content_type: 'heading' });
        const videoResponse = await client.getEntries<any>({ content_type: 'landingVideo' });
        const servicesResponse = await client.getEntries({ content_type: 'aiServices' }); // Add this
        const IndustryItemResponse = await client.getEntries({ content_type: 'industriesPage' });

        // console.log(IndustryItemResponse);
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

        // Format services data
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
            services // Add this
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

export async function fetchNavbarItems() {
    try {
        const response = await client.getEntries({ content_type: 'websiteNavbar' });

        const menuItems = response.items[0]?.fields?.menuItems as string[];

        return menuItems || [];
    } catch (error) {
        console.error('Failed to fetch navbar items:', error);
        return [];
    }
}