export default function HeroSection() {
    return (
      <section className="hero-section bg-gray-100">
        <div className="container text-center py-12">
          <h1 className="text-4xl font-bold">AI Development Services</h1>
          <p className="text-lg mt-4">
            Leverage our state-of-the-art custom AI services that automate mundane
            processes and strengthen business intelligence.
          </p>
          <button className="btn-primary mt-6">Consult Our AI Experts</button>
          <div className="video-wrapper mt-8">
            <video autoPlay loop muted>
              <source src="/videos/ai-intro.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    );
  }
  