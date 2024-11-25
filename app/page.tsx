import React, { Suspense } from 'react';
import LandingPage from './components/sections/LandingPage';
import SectionLoader from './components/sections/SectionLoader';
import AIServiceSection from './components/sections/AIServiceSection';
import { getData } from './components/api/getLandingPageData';
import CompanyStats from './components/sections/CompanyStats';
import ThirdSection from './components/sections/ThirdSection';
import FourthSection from './components/sections/FourthSection';
import CTASection from './components/sections/FifthSection';
import CustomApproachAI, { processCards, techStacks } from './components/sections/EightSection';
import Recognition, { recognitionsData } from './components/sections/NinthSection';
import Blogs from './components/sections/TwelthSection';
import FAQs from './components/sections/Eleventh';
import dynamic from 'next/dynamic';
import { SuccessStoriesProps, SuccessStoriesWrapper } from './components/sections/SuccessStoriesClientWraper';
import TestimonialPanel from './components/sections/SeventhSection';


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
const sampleData = {
    heading: {
      main: "What Our Clients Have<br/>to Say for Us",
      subHeadBefore: "As a bespoke ",
      highlighted: "artificial intelligence software development company",
      subHeadAfter: "we have helped multiple startups, enterprises, and Fortune 500s in realizing their business visions. Our AI software development services make AI accessible to everyone, everywhere."
    },
    testimonials: [
      {
        name: "Daniel Yasoshima",
        position: "Chief Executive Officer",
        company: "YouComm",
        image: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/Daniel-Yasoshima-client-name.svg",
        companyLogo: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/YouCOMM-logo.svg",
        testimonial: "We came to Appinventiv looking for a change in the conventional system where patients had to depend on call bells for getting assistance. The team, however, advised us feature additions that would make the solution truly all-patients inclusive. They made our product more innovative and useful than we had envisioned."
      },
      {
        name: "Billy Lan",
        position: "CTO and Co-founder",
        company: "JobGet",
        image: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/Billy-Lan-client-image.svg",
        companyLogo: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/jobget-cl.svg",
        testimonial: "We were looking for an agency that would understand the direness of the hourly worker job search cycle situation when we came across Appinventiv. What we liked about the team is how they did not just understand what we were looking for but also gave us ideas on how we could make the process more efficient and simplified for the jobseekers through their empathy mapping skillset."
      }
    ]
  };

export default async function AIServicesPage() {
    const { services  } = await getData();
    return (
        <div className="portfolio_page scroll-container">
            <main>
                <div className="bg_lines"></div>
                <div className="pin_spacers"></div>

                <Suspense fallback={<SectionLoader />}>
                    <LandingPage />
                </Suspense>
                <AIServiceSection
                    services={services}
                />
                <CompanyStats />
                <ThirdSection/>
                <FourthSection/>
                <CTASection />
                <Suspense fallback={<SectionLoader />}>
                    <SuccessStoriesWrapper
                        heading={successStoriesData.heading}
                        stories={successStoriesData.stories}
                    />
                </Suspense>
          <TestimonialPanel
        heading={sampleData.heading}
        testimonials={sampleData.testimonials}
      />
        {/* <CustomApproachAI processCards={processCards} techStacks={techStacks} /> */}
        <Recognition {...recognitionsData} />
        {/* <ConsultationForm/> */}
        <FAQs />
        <Blogs/>
            </main>
        </div>
    );
}