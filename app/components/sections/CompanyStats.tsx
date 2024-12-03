'use client'
import { useState, useEffect } from 'react';
import { getStats, Stat } from '../api/getLandingPageData';

// Define an interface for the stat obje
const CompanyStats = () => {
  const [stats, setStats] = useState<Stat[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      const fetchedStats = await getStats();
      setStats(fetchedStats);
    };

    fetchStats();
  }, []);

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