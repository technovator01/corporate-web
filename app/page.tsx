import React, { Suspense } from 'react';
import LandingPage from './components/sections/LandingPage';
import SectionLoader from './components/sections/SectionLoader';
import AIServiceSection from './components/sections/AIServiceSection';
import { getAIData, getBlogs, getCTAPageData, getData, getFAQ, getIndustries, getIndustryPageData, getRecognitions, getSuccessStories } from './components/api/getLandingPageData';
import CompanyStats from './components/sections/CompanyStats';
import ThirdSection from './components/sections/ThirdSection';
import FourthSection, { IndustryItem, TabItem } from './components/sections/FourthSection';
import CTASection from './components/sections/FifthSection';
// import Recognition from './components/sections/NinthSection';
import Blogs from './components/sections/TwelthSection';
import FAQs from './components/sections/Eleventh';
import {SuccessStoriesWrapper } from './components/sections/SuccessStoriesClientWraper';
// import TestimonialPanel from './components/sections/SeventhSection';

export default async function AIServicesPage() {
    const { services,serviceheading,servicesubheading  } = await getData();
    const successStoriesData  = await getSuccessStories();
    const {title, subtitle, cards} = await getAIData();
    // const recognitionsData = await getRecognitions();
    const { heading, faqs } = await getFAQ();
    const items = await getIndustries();
    const data= await getIndustryPageData();
    const ctaData = await getCTAPageData();
    const blogData = await getBlogs();
    return (
        <div className="portfolio_page scroll-container" id="lets-talk-ai">
            <main>
                <div className="bg_lines"></div>
                <div className="pin_spacers"></div>

                <Suspense fallback={<SectionLoader />}>
                    <LandingPage />
                </Suspense>
                <AIServiceSection
                    services={services} heading={serviceheading} subheading={servicesubheading}                />
                <CompanyStats />
                <ThirdSection title={title} subtitle={subtitle} cards={cards} />;
                <FourthSection items={items} data={data}/>
                <CTASection ctaData={ctaData}/>
                <Suspense fallback={<SectionLoader />}>
                    {/* <SuccessStoriesWrapper
                        heading={successStoriesData.heading}
                        stories={successStoriesData.stories}
                    /> */}
                </Suspense>
           {/* <TestimonialPanel
        // heading={sampleData.heading}
        // testimonials={sampleData.testimonials}
      />  */}
        {/* <CustomApproachAI processCards={processCards} techStacks={techStacks} /> */}
        {/* <Recognition {...recognitionsData} /> */}
        {/* <ConsultationForm/> */}
        <FAQs faqs={faqs} heading={heading}/>
            {/* <Blogs blogData={blogData?.blogItems} blogheading={blogData?.blogheading}/> */}
            </main>
        </div>
    );
}