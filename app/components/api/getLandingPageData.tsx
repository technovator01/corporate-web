'use server'
import { Asset } from "contentful";
import { client } from "../lib/contentful";

export async function getData() {
    try {
        const headingResponse = await client.getEntries({ content_type: 'heading' });
        const videoResponse = await client.getEntries<any>({ content_type: 'landingVideo' });
        const servicesResponse = await client.getEntries({ content_type: 'aiServices' }); // Add this
        const IndustryItemResponse = await client.getEntries({content_type: 'industriesPage'});
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