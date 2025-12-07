'use client';

import { useState, useEffect } from 'react';

export default function StatsCounter() {
  const [counts, setCounts] = useState({ projects: 0, clients: 0, satisfaction: 0 });

  useEffect(() => {
    const targets = { projects: 50, clients: 100, satisfaction: 100 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounts({
        projects: Math.min(Math.floor((targets.projects / steps) * step), targets.projects),
        clients: Math.min(Math.floor((targets.clients / steps) * step), targets.clients),
        satisfaction: Math.min(Math.floor((targets.satisfaction / steps) * step), targets.satisfaction)
      });
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{counts.projects}+</div>
        <div className="text-gray-600 font-inter">Projects Delivered</div>
      </div>
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{counts.clients}+</div>
        <div className="text-gray-600 font-inter">Happy Clients</div>
      </div>
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">{counts.satisfaction}%</div>
        <div className="text-gray-600 font-inter">Satisfaction Rate</div>
      </div>
    </div>
  );
}
