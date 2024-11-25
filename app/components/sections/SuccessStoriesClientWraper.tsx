// ClientWrapper.tsx
'use client'
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import SectionLoader from './SectionLoader';

const SuccessStories = dynamic(() => import('./SixthSection'), {
  loading: () => <SectionLoader />,
  ssr: false,
});

export interface SectionHeading {
  title: string;
  beforeHighlight: string;
  highlight: string;
  afterHighlight: string;
}

export interface SuccessStory {
  logo: {
    type: "image" | "text";
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

export interface SuccessStoriesProps {
  heading: SectionHeading;
  stories: SuccessStory[];
}

export function SuccessStoriesWrapper({ heading, stories }: SuccessStoriesProps) { 
  useEffect(() => {
    if (heading && stories) {
      console.log('Props received:', { heading, stories });
    } else {
      console.error('Missing props:', { heading, stories });
    }
  }, [heading, stories]);

  if (!heading || !stories || stories.length === 0) {
    console.error('Missing required props:', { heading, stories });
    return null;
  }

  return <SuccessStories heading={heading} stories={stories} />;
}

export const successStoriesData: SuccessStoriesProps = {
  heading: {
    title: "How Our Clients Leverage AI to Innovate Instantly and Flourish Globally",
    beforeHighlight: "Our commitment to delivering quality work that meets custom requirements has consistently exceeded expectations. Here are a few noteworthy projects we have undertaken as an ",
    highlight: "AI software development company",
    afterHighlight: "that speak volumes and guarantee maximum ROI."
  },
  stories: [
    {
      logo: {
        type: "image",
        content: '/images/jobget-port-logo.svg'
      },
      description: 'As a trusted provider of mobile app development service, we made the employment landscape easy and accessible for blue-collar workers with the help of a dedicated employment portal.',
      result: {
        value: '$52 Million',
        description: 'in Series B Funding'
      },
      link: '/portfolio/jobget-job-search-app',
      imageClass: 'img1'
    },
    {
      logo: {
        type: "image",
        content: '/images/ikea-logo.svg'
      },
      description: 'Developed an innovative AI-powered solution for automated furniture recognition and placement visualization.',
      result: {
        value: '40% Increase',
        description: 'in Customer Engagement'
      },
      link: '/portfolio/ikea-ar-solution',
      imageClass: 'img2'
    },
    {
      logo: {
        type: "text",
        content: 'TechStart'
      },
      description: 'Built a scalable machine learning platform for predictive analytics and real-time decision making.',
      result: {
        value: '3x Growth',
        description: 'in Processing Efficiency'
      },
      link: '/portfolio/techstart-ml-platform',
      imageClass: 'img3'
    }
  ]
};