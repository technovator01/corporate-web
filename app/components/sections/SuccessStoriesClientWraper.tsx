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
  subtitle: string;
}

export interface SuccessStory {
  logo: {
    type: string;
    content: string;
  };
  description: string;
  result: {
    value: string;
    description: string;
  };
  link: string;
  image:string;
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