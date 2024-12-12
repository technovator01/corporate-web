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
  const [error, setError] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

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
    // Check if it's mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

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

        // Determine screen width
        const isDesktop = window.innerWidth > 768;

        // Create scroll trigger configuration
        const scrollTriggerConfig = {
          trigger: scrollContainerRef.current,
          start: "top top",
          end: () => `+=${sections.length * 100}%`,
          scrub: 1,
          invalidateOnRefresh: true,
          snap: 1 / (sections.length - 1),
          pin: true,
          anticipatePin: 1 as any, // Type assertion
        } as const;

        // Add pin for desktop
        if (isDesktop) {
          // scrollTriggerConfig.pin = true;
          // scrollTriggerConfig.anticipatePin = 1;
        }

        // Create scroll tween
        const scrollTween = gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: scrollTriggerConfig
        });

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

  return (
    <section 
      className="success_stories_wrapper" 
      id='portfolio' 
      style={{ 
        minHeight: '100vh', 
        width: '100%', 
        overflow: 'hidden' 
      }}
    >
      <div className="bg_wrapper">
        <div className="cl_success_stories">
          <h2 className="heading2 text-center">
            {renderTitleLines(heading.title)}
          </h2>
          <div className="app__subhead text-center">
            {heading.subtitle}
          </div>
        </div>
        <div 
          className="case_study_panel"
          ref={scrollContainerRef} 
          style={{ 
            position: 'relative', 
            width: '100%', 
            overflow: 'hidden' 
          }}
        >
          <div 
            className="case_scoll_sec"
            ref={panelsRef} 
            style={{ 
              position: 'relative', 
              display: 'flex',
              flexDirection: 'row',
              width: 'fit-content'
            }}
          >
            <span
              className="block_bubble ds_flex flex_al_center flex_center" 
              data-scroll 
              data-scroll-repeat="true"
            >
              Scroll
            </span>
            {stories.map((story: SuccessStory, index: number) => (
              <section 
                className="panel" 
                key={index}
                style={{
                  width: 'calc(100vw - 40px)',
                  maxWidth: '100%',
                  margin: '0 20px',
                  flexShrink: 0,
                  boxSizing: 'border-box'
                }}
              >
                <div className="portfolio_info">
                  <div className="ds_flex flex_spc_btw flex_al_center" style={{ width: '100%' }}>
                    <div className="port__left" style={{ width: '50%', padding: '0 15px' }}>
                      <div className="port_logo">
                        {story.logo?.type === 'image' ? (
                          <Image 
                            src={story.logo.content}
                            alt="client logo"
                            width={100}
                            height={100}
                            loading="lazy"
                            objectFit="contain"
                            className="logo-image"
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
                      {/* <div className="common__btn hv_blue">
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
                      </div> */}
                    </div>
                    <div 
                      className={`port__rght`}
                      style={{
                        width: '50%',
                        height: '500px',
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

      <style jsx>{`
        @media (max-width: 768px) {
          .case_study_panel {
            overflow-x: hidden;
            width: 100%;
          }
          
          .case_scoll_sec {
            display: flex;
            flex-direction: row;
            width: fit-content;
          }
          
          .panel {
            flex-shrink: 0;
            width: calc(100vw - 40px) !important;
            max-width: 100% !important;
            margin: 0 20px !important;
            box-sizing: border-box;
          }
          
          .port__left, .port__rght {
            width: 100% !important;
          }
          
          .port__rght {
            height: 300px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SuccessStories;