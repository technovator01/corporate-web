const stats = [
    { id: 1, value: "8+", label: "Years of Experience" },
    { id: 2, value: "3000+", label: "Successful Projects" },
    { id: 3, value: "1200+", label: "Experts" },
    { id: 4, value: "25+", label: "Countries Served" },
  ];
  
  export default function StatsSection() {
    return (
      <section className="stats-section py-12 bg-gray-50">
        <div className="container grid grid-cols-4 gap-4 text-center">
          {stats.map((stat) => (
            <div key={stat.id}>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  