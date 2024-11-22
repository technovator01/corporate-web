const services = [
    { id: 1, title: "Generative AI", description: "Developing advanced AI solutions." },
    { id: 2, title: "Smart AI Assistants", description: "Creating intelligent chatbots." },
    { id: 3, title: "AI Product Development", description: "Building custom AI products." },
  ];
  
  export default function ServicesSection() {
    return (
      <section className="services-section py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">AI Services We Offer</h2>
          <ul className="grid grid-cols-3 gap-4">
            {services.map((service) => (
              <li key={service.id} className="p-4 border rounded-lg">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p>{service.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  