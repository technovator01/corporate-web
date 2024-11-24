import React, { Suspense } from 'react';
import LandingPage from './components/sections/LandingPage';
import SectionLoader from './components/sections/SectionLoader';
import AIServiceSection from './components/sections/AIServiceSection';
import { getData } from './components/api/getLandingPageData';
import CompanyStats from './components/sections/CompanyStats';
import ThirdSection from './components/sections/ThirdSection';
import FourthSection from './components/sections/FourthSection';
import CTASection from './components/sections/FifthSection';
import SuccessStories, { successStoriesData } from './components/sections/SixthSection';
import TestimonialPanel, { sampleData } from './components/sections/SeventhSection';
import CustomApproachAI, { processCards, techStacks } from './components/sections/EightSection';
import Recognition, { recognitionsData } from './components/sections/NinthSection';
import Blogs from './components/sections/TwelthSection';
import FAQs from './components/sections/Eleventh';

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
                {/* <SuccessStories
        heading={successStoriesData.heading}
        stories={successStoriesData.stories}
      /> */}
          <TestimonialPanel 
        heading={sampleData.heading}
        testimonials={sampleData.testimonials}
      />
        <CustomApproachAI processCards={processCards} techStacks={techStacks} />
        <Recognition {...recognitionsData} />
        {/* <ConsultationForm/> */}
        <FAQs />
        <Blogs/>
            </main>
        </div>
    );
}