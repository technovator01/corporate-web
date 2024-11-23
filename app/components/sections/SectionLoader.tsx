// components/Loaders/SectionLoader.tsx
const SectionLoader = () => {
    return (
      <div className="top_head_wrap bg_wrapper min-h-screen flex items-center justify-center">
        <div className="container">
          <div className="animate-pulse">
            {/* Heading placeholder */}
            <div className="h-16 bg-gray-200 rounded-lg mb-6 max-w-2xl mx-auto"></div>
            
            {/* Subtitle placeholder */}
            <div className="h-8 bg-gray-200 rounded-lg mb-8 max-w-xl mx-auto"></div>
            
            {/* Button placeholder */}
            <div className="h-12 bg-gray-200 rounded-lg w-48 mx-auto mb-12"></div>
            
            {/* Video banner placeholder */}
            <div className="case_full_banner">
              <div className="video-wrapper bg-gray-300 w-full h-[60vh] rounded-lg"></div>
            </div>
            
            {/* Client logos section placeholder */}
            <div className="client_logos mt-8">
              <div className="h-6 bg-gray-200 rounded-lg max-w-md mx-auto mb-6"></div>
              <div className="flex justify-center space-x-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-12 w-24 bg-gray-200 rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SectionLoader;