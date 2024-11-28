const CompanyStats = () => {
  const stats = [
    { value: "8+", label: "Years of Experience" },
    { value: "3000+", label: "Successful Projects Delivered" },
    { value: "1200+", label: "Software Development Experts" },
    { value: "25+", label: "Countries Served" },
  ];

  return (
    <section className="bg_wrapper">
    <div className="container">
      <div className="stats_wrap">
        <div className="states_panel">
          {stats.map((stat, index) => (
            <div key={index} className="digits">
              <span>{stat.value}</span>
              <div className="stats-head">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="common__btn blk hv_blue">
          <a href="#" className="btn_line btn-effect btn--show-modal">
            Transform Your Business
          </a>
        </div>
      </div>
    </div>
  </section>
  );
};
export default CompanyStats;
