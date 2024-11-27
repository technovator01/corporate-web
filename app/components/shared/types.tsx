// types.ts
export interface ServiceData {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface AIServicesData {
    heading: string;
    subheading: string;
    services: ServiceData[];
}

export interface PageData {
    title: string;
    subtitle: string;
    videoUrl: string;
    aiServicesData: AIServicesData;
}
export interface SuccessStory {
    logo?: {
      type: 'image' | 'text';
      content: string;
    };
    description: string;
    result: {
      value: string;
      description: string;
    };
    link: string;
    imageClass: string;
  }
  
  export interface Testimonial {
    image: string;
    name: string;
    position: string;
    company: string;
    testimonial: string;
    companyLogo: string;
  }
  
  export interface SectionHeading {
    title: string;
    subtitle:string
  }