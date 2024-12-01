'use client'
import React, { useEffect, useRef, useState } from 'react';
import { SectionHeading, SuccessStory } from './SuccessStoriesClientWraper';
import Image from 'next/image';
interface SuccessStoriesProps {
  heading: SectionHeading;
  stories: SuccessStory[];
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({ heading, stories }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);
  const [isGsapInitialized, setIsGsapInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const renderTitleLines = (title: string) => {
    if (!title) return null;
    return title.split('<br/>').map((line: string, index: number) => (
      <React.Fragment key={index}>
        {line}
        {index < title.split('<br/>').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const initGSAP = async () => {
      try {
        if (typeof window === 'undefined') {
          return;
        }

        const gsap = (await import('gsap')).default;
        const ScrollTrigger = (await import('gsap/dist/ScrollTrigger')).default;
        
        gsap.registerPlugin(ScrollTrigger);

        if (!scrollContainerRef.current || !panelsRef.current) {
          return;
        }

        const sections = gsap.utils.toArray<HTMLElement>(panelsRef.current?.querySelectorAll('.panel') || []);

        if (sections.length === 0) {
          return;
        }

        const scrollTween = gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: scrollContainerRef.current,
            pin: true,
            start: "top top",
            end: () => `+=${sections.length * 100}%`,
            scrub: 1,
            invalidateOnRefresh: true,
            snap: 1 / (sections.length - 1),
            anticipatePin: 1,
            onUpdate: (self) => {
            }
          }
        });

        setIsGsapInitialized(true);

        return () => {
          scrollTween.kill();
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        setError(errorMessage);
      }
    };

    // Initialize GSAP after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      initGSAP().then(cleanupFn => {
        cleanup = cleanupFn;
      });
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      if (cleanup) cleanup();
    };
  }, [stories]);

  if (error) {
    console.error('Rendering error state:', error);
    return <div className="error-message">Error loading component: {error}</div>;
  }

  if (!stories?.length || !heading) {
    console.error('Missing required props at render');
    return null;
  }
  console.log(stories);
  return (
    <section className="success_stories_wrapper" id='portfolio' style={{ minHeight: '100vh' }}>
      <div className="bg_wrapper">
        <div className="cl_success_stories">
          <h2 className="heading2 text-center">
            {renderTitleLines(heading.title)}
          </h2>
          <div className="app__subhead text-center">
            {heading.subtitle}
          </div>
        </div>
        {/* Change here for scroll View Adjustments */}
        <div className="case_study_panel"  ref={scrollContainerRef} style={{ position: 'relative' }}>
          <div className="case_scoll_sec" ref={panelsRef} style={{ position: 'relative' }}>
          <span
              className="block_bubble ds_flex flex_al_center flex_center" 
              data-scroll 
              data-scroll-repeat="true"
            >
              Scroll
            </span>
            {stories.map((story: SuccessStory, index: number) => (
              <section className="panel" key={index}>
                <div className="portfolio_info">
                  <div className="ds_flex flex_spc_btw flex_al_center">
                    <div className="port__left">
                      <div className="port_logo">
                        {story.logo?.type === 'image' ? (
                         <Image 
                         src={story.logo.content}
                         alt="client logo"
                         width={100}  // Specify an appropriate width
                         height={100} // Specify an appropriate height
                         loading="lazy"
                         objectFit="contain" // Or "cover" depending on your design
                         className="logo-image" // Optional: add a class for styling
                       />
                        ) : (
                          <h4 className="heading2">{story.logo?.content}</h4>
                        )}
                      </div>
                      <p 
                        className="para" 
                        dangerouslySetInnerHTML={{ __html: story.description }} 
                      />
                      <div className="stats_text wht result">
                        <br />
                        Result
                      </div>
                      <div className="port_stats">
                        <div className="states_head">
                          <span>{story.result.value}</span>
                          <div className="stats_text">
                            {story.result.description}
                          </div>
                        </div>
                      </div>
                      <div className="common__btn hv_blue">
                        <a 
                          className="btn_line btn-effect" 
                          href={story.link} 
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>Read Success Story</span>
                          <svg height="10px" viewBox="0 0 13 10" width="13px">
                            <polyline points="8 1 12 5 8 9"></polyline>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div 
  className={`port__rght`}
  style={{
    background: `url(${story.image}) no-repeat`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }}
></div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
